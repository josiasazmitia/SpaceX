import React from "react";

type Props = {
    q: string; onQ: (v: string) => void;
    status: string; onStatus: (s: string) => void; // "all" | "success" | "failure"
};

export default function LaunchFilters({ q, onQ, status, onStatus }: Props) {
    return (
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <input className="rounded-md border px-3 py-2 w-full sm:max-w-xs"
                placeholder="Search by name…" value={q} onChange={e => onQ(e.target.value)} />
            <select className="rounded-md border px-3 py-2 w-full sm:w-auto"
                value={status} onChange={e => onStatus(e.target.value)}>
                <option value="all">All</option>
                <option value="success">Success</option>
                <option value="failure">Failure</option>
            </select>
        </div>
    );
}