import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLaunch } from "../hooks";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBoundary";

function StatusBadge({ success }) {
  if (success === true) return <span className="inline-block ml-2 bg-emerald-600 text-white text-xs px-2 py-0.5 rounded-full">Success</span>
  if (success === false) return <span className="inline-block ml-2 bg-rose-600 text-white text-xs px-2 py-0.5 rounded-full">Failure</span>
  return <span className="inline-block ml-2 bg-amber-500 text-black text-xs px-2 py-0.5 rounded-full">TBD</span>
}

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const { data, isLoading, error } = useLaunch(id);

  if (isLoading) return <Loading />;
  if (error) return <ErrorBox error={error} />;
  if (!data) return (
    <div className="space-y-4">
      <button onClick={() => navigate(-1)} className="text-sm text-slate-200">&larr; Back</button>
      <div className="card">
        <h2 className="text-lg font-semibold">Launch not found</h2>
        <p className="muted mt-2">We couldn't find the requested launch.</p>
      </div>
    </div>
  );

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="text-sm text-slate-200 hover:underline">&larr; Back</button>
          <div className="text-sm muted">{new Date(data.date_utc).toLocaleString()}</div>
        </div>
        <div className="flex items-center gap-2">
          <a href={data.links?.webcast || '#'} target="_blank" rel="noreferrer" className="text-sm muted hover:underline">Watch</a>
          <button onClick={share} className="text-sm muted hover:underline">{copied ? 'Copied' : 'Share'}</button>
          {data.links?.wikipedia && <a href={data.links.wikipedia} target="_blank" rel="noreferrer" className="text-sm muted hover:underline">Wikipedia</a>}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[220px_1fr]">
        <div>
          <div className="card">
            {data.links?.patch?.small ? (
              <img src={data.links.patch.small} alt="patch" className="w-full h-auto object-contain" />
            ) : (
              <div className="w-full h-48 bg-slate-700 rounded" />
            )}
          </div>
        </div>

        <div>
          <div className="card">
            <h1 className="text-2xl font-bold">
              {data.name}
              <StatusBadge success={data.success} />
            </h1>
            <p className="muted mt-1">Launch ID: <span className="text-sm">{data.id}</span></p>
            <p className="mt-4 text-slate-200">{data.details || 'No description available for this launch.'}</p>

            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm muted">
              <div>
                <dt className="font-medium">Rocket</dt>
                <dd>{data.rocket ?? '-'}</dd>
              </div>
              <div>
                <dt className="font-medium">Launchpad</dt>
                <dd>{data.launchpad ?? '-'}</dd>
              </div>
              <div>
                <dt className="font-medium">Auto Reuse</dt>
                <dd>{data.cores?.[0]?.reused ? 'Yes' : 'No'}</dd>
              </div>
              <div>
                <dt className="font-medium">Payloads</dt>
                <dd>{(data.payloads || []).length}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}