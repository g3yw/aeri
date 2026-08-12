'use client'

import { useDiscordStatus } from '@/hooks/use-discord-status'

const STATUS_COLOR: Record<string, string> = {
  online: 'bg-emerald-500',
  idle: 'bg-amber-500',
  dnd: 'bg-red-500',
  offline: 'bg-muted-foreground/50',
}

const STATUS_LABEL: Record<string, string> = {
  online: 'Online',
  idle: 'Idle',
  dnd: 'Do Not Disturb',
  offline: 'Offline',
}

export function DiscordHoverCard({ children }: { children: React.ReactNode }) {
  const { status } = useDiscordStatus()

  return (
    <span className="group relative inline-block">
      <a
        href="https://discord.com/users/1300475946578743327"
        target="_blank"
        rel="noopener noreferrer"
        className="font-normal text-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
      >
        {children}
      </a>

      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 flex -translate-x-1/2 translate-y-1 items-center gap-1.5 whitespace-nowrap rounded-md border border-border bg-card px-3 py-1.5 text-xs font-normal text-foreground opacity-0 shadow-xl shadow-black/60 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <span
          aria-hidden="true"
          title={STATUS_LABEL[status]}
          className={`h-2 w-2 shrink-0 rounded-full ${STATUS_COLOR[status]}`}
        />
        @mio3d
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-border bg-card"
        />
      </span>
    </span>
  )
}
