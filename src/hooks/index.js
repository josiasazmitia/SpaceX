import { useQuery } from '@tanstack/react-query'

async function fetchLaunches() {
  const res = await fetch('https://api.spacexdata.com/v4/launches')
  if (!res.ok) throw new Error('Failed to fetch launches')
  return res.json()
}

export function useLaunches() {
  return useQuery(['launches'], fetchLaunches, {
    staleTime: 60_000,
  })
}
