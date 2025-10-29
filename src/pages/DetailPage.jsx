import React from "react";
import { useParams, Link } from "react-router-dom";
import { useLaunch } from "../features/launches/hooks";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBoundary";

export default function DetailPage() {
  const { id } = useParams();
  const { data, isLoading, error } = useLaunch(id || '');

  if (isLoading) return <Loading />;
  if (error) return <ErrorBox error={error} />;
  if (!data) return null;

  return (
    <div className="space-y-4">
      <Link to=".." relative="path" className="text-sm text-blue-600 hover:underline">&larr; Back</Link>
      <div className="rounded-lg border bg-white p-4">
        <h1 className="text-xl font-semibold">{data.name}</h1>
        <p className="text-sm text-gray-600">{new Date(data.date_utc).toLocaleString()}</p>
        {data.links?.wikipedia && (
          <a className="text-blue-600 hover:underline text-sm" href={data.links.wikipedia} target="_blank">
            Wikipedia
          </a>
        )}
        {data.details && <p className="mt-3">{data.details}</p>}
      </div>
    </div>
  );
}