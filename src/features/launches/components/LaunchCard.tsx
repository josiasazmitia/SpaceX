import React from "react";
import type { Launch } from "../types";
import { Link } from "react-router-dom";

export default function LaunchCard({ launch }: { launch: Launch }) {
  return (
    <Link to={`/detail/${launch.id}`} className="block rounded-lg card hover:shadow-lg transform-gpu hover:-translate-y-1 transition flex flex-col justify-between min-h-[140px]">
      <div className="flex items-start gap-3">
        {launch.links?.patch?.small ? (
          <img src={launch.links.patch.small} alt={`${launch.name} patch`} className="h-12 w-12 object-contain" loading="lazy" />
        ) : (
          <div className="h-12 w-12 bg-slate-700 rounded" />
        )}
        <div className="flex-1">
          <h3 className="font-medium text-sky-300 text-lg">{launch.name}</h3>
          <p className="text-sm text-slate-300">
            {new Date(launch.date_utc).toLocaleDateString()} ·{' '}
            {launch.success === true ? 'Success' : launch.success === false ? 'Failure' : 'TBD'}
          </p>
        </div>
      </div>
      <div>
        {launch.details && (
          <p className="mt-3 line-clamp-3 text-sm text-slate-300">{launch.details}</p>
        )}
      </div>
    </Link>
  );
}