import React from 'react'

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="card">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Latest Launches</h2>
            <p className="muted mt-1">Placeholder list — aquí mostraremos los lanzamientos obtenidos desde la API.</p>
          </div>
          <div className="text-sm muted">Updated just now</div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card">
            <h3 className="font-bold">Falcon 9 — Demo</h3>
            <p className="muted text-sm mt-2">Rocket • Demo mission</p>
          </div>
          <div className="card">
            <h3 className="font-bold">Falcon Heavy — Demo</h3>
            <p className="muted text-sm mt-2">Rocket • Demo mission</p>
          </div>
          <div className="card">
            <h3 className="font-bold">Starship — Coming</h3>
            <p className="muted text-sm mt-2">Rocket • Upcoming</p>
          </div>
        </div>
      </section>

      <section className="card">
        <h3 className="text-lg font-medium">About this demo</h3>
        <p className="muted mt-2">Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </section>
    </div>
  )
}
