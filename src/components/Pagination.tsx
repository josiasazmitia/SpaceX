import React from "react";

type Props = {
    page: number;
    pageCount: number;
    onPageChange: (p: number) => void;
};

export default function Pagination({ page, pageCount, onPageChange }: Props) {
    return (
        <div className="mt-4 flex items-center gap-2">
            <button
                className="rounded border px-3 py-1 disabled:opacity-50"
                onClick={() => onPageChange(page - 1)}
                disabled={page <= 1}
            >
                Prev
            </button>
            <span className="text-sm">Page {page} / {pageCount}</span>
            <button
                className="rounded border px-3 py-1 disabled:opacity-50"
                onClick={() => onPageChange(page + 1)}
                disabled={page >= pageCount}
            >
                Next
            </button>
        </div>
    );
}