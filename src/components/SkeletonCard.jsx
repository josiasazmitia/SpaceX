import React from 'react'

export default function SkeletonCard() {
  return (
    <div className="rounded-lg bg-white/5 p-4 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-slate-700 rounded" />
        <div className="flex-1">
          <div className="h-4 bg-slate-700 rounded w-1/3 mb-2" />
          <div className="h-3 bg-slate-700 rounded w-2/3" />
        </div>
      </div>
      <div className="mt-3">
        <div className="h-12 bg-slate-700 rounded" />
      </div>
    </div>
  )
}
