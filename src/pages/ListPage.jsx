import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useLaunches } from "../features/launches/hooks";
import LaunchCard from "../features/launches/components/LaunchCard";
import LaunchFilters from "../features/launches/components/LaunchFilters";
import SkeletonCard from "../components/SkeletonCard";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBoundary";
import Pagination from "../components/Pagination";
import { setParams } from "../lib/url";

const PAGE_SIZE = 12;

export default function ListPage() {
  const [search, setSearch] = useSearchParams();
  const qParam = search.get("q") ?? "";
  const statusParam = search.get("status") ?? "all";
  const pageParam = Number(search.get("page") ?? "1");

  const [q, setQ] = useState(qParam);
  const [status, setStatus] = useState(statusParam);

  const { data, isLoading, error } = useLaunches();

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter(l => {
      const okQ = q ? l.name.toLowerCase().includes(q.toLowerCase()) : true;
      const okS =
        status === "all" ? true :
        status === "success" ? l.success === true :
        status === "failure" ? l.success === false : true;
      return okQ && okS;
    });
  }, [data, q, status]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const page = Math.min(pageParam, pageCount);
  const start = (page - 1) * PAGE_SIZE;
  const current = filtered.slice(start, start + PAGE_SIZE);

  const applyFilters = () => {
    const qs = setParams({ q, status, page: 1 });
    setSearch(qs);
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="surface">
          <LaunchFilters q={q} onQ={setQ} status={status} onStatus={setStatus} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      </div>
    )
  }
  if (error) return <ErrorBox error={error} />;

  return (
    <div className="space-y-4">

      <div className="surface">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex-1">
            <LaunchFilters q={q} onQ={setQ} status={status} onStatus={setStatus} />
          </div>
          <div className="shrink-0">
            <button
              onClick={applyFilters}
              className="rounded-md border px-3 py-2 text-sm hover:bg-white/10"
            >
              Apply
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {current.map(l => <LaunchCard key={l.id} launch={l} />)}
      </div>

      <div className="pagination">
        <Pagination
          page={page}
          pageCount={pageCount}
          onPageChange={(p) => {
            const qs = setParams({ q, status, page: p });
            setSearch(qs);
          }}
        />
      </div>
    </div>
  );
}