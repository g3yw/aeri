'use client'

import useSWR from 'swr'

const DISCORD_USER_ID = '1300475946578743327'
const LANYARD_URL = `https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`

export type DiscordStatus = 'online' | 'idle' | 'dnd' | 'offline'

interface LanyardResponse {
  success: boolean
  data?: {
    discord_status: DiscordStatus
  }
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useDiscordStatus() {
  const { data, error, isLoading } = useSWR<LanyardResponse>(LANYARD_URL, fetcher, {
    refreshInterval: 15000,
  })

  const status: DiscordStatus = data?.success ? data.data?.discord_status ?? 'offline' : 'offline'

  return {
    status,
    isLoading,
    error,
  }
}
