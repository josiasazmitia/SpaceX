import React from 'react'

export default function DetailPage() {
    return (
        <div className="space-y-8">
            <section className="card">
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold">Launch Detail</h2>
                        <p className="muted mt-1">This is a placeholder for the launch detail fetched from the API.</p>
                    </div>
                    <div className="text-sm muted">Updated just now</div>
                </div>
            </section>
        </div>
    )
}