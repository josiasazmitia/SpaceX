import React from "react";

type Props = {
    page: number;
    pageCount: number;
    onPageChange: (p: number) => void;
};

export default function Pagination({ page, pageCount, onPageChange }: Props) {
    return (
        <div className="pagination">
            <button
                className="btn-ghost disabled:opacity-50"
                onClick={() => onPageChange(page - 1)}
                disabled={page <= 1}
            >
                Prev
            </button>
            <span className="text-sm muted">Page {page} / {pageCount}</span>
            <button
                className="btn-primary disabled:opacity-50"
                onClick={() => onPageChange(page + 1)}
                disabled={page >= pageCount}
            >
                Next
            </button>
        </div>
    );
}