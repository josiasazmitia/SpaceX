import React from "react";
import type { Launch } from "../types";
import { Link } from "react-router-dom";

export default function LaunchCard({ launch }: { launch: Launch }) {
  return (
    <Link to={`/detail/${launch.id}`} className="block rounded-lg border bg-white p-4 hover:shadow">
      <div className="flex items-center gap-3">
        {launch.links?.patch?.small && (
          <img src={launch.links.patch.small} alt="" className="h-10 w-10 object-contain" />
        )}
        <div>
          <h3 className="font-medium">{launch.name}</h3>
          <p className="text-sm text-gray-600">
            {new Date(launch.date_utc).toLocaleDateString()} ·{" "}
            {launch.success === true ? "Success" : launch.success === false ? "Failure" : "TBD"}
          </p>
        </div>
      </div>
      {launch.details && (
        <p className="mt-2 line-clamp-2 text-sm text-gray-700">{launch.details}</p>
      )}
    </Link>
  );
}