import React from "react";

type Props = { error?: unknown };

export default function ErrorBox({ error }: Props) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return (
        <div className="rounded-md border border-red-300 bg-red-50 p-4 text-red-700">
            {message}
        </div>
    );
}