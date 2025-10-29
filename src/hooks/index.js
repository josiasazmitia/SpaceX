import { useQuery } from '@tanstack/react-query'

async function fetchLaunches() {
  const res = await fetch('https://api.spacexdata.com/v4/launches')
  if (!res.ok) throw new Error('Failed to fetch launches')
  return res.json()
}

async function fetchLaunchById(id) {
  const res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`)
  if (!res.ok) {
    const text = await res.text().catch(() => res.statusText)
    throw new Error(text || 'Launch not found')
  }
  return res.json()
}

export function useLaunches() {
  return useQuery({
    queryKey: ['launches'],
    queryFn: fetchLaunches,
    staleTime: 60_000,
  })
}

export function useLaunch(id) {
  return useQuery({
    queryKey: ['launch', id],
    queryFn: () => fetchLaunchById(id),
    enabled: !!id,
    staleTime: 60_000,
  })
}
