'use client'

import { useDiscordStatus, type DiscordStatus } from '@/hooks/use-discord-status'

const STATUS_COLOR: Record<DiscordStatus, string> = {
  online: '#23a559',
  idle: '#f0b232',
  dnd: '#23a559',
  offline: '#80848e',
}

const STATUS_LABEL: Record<DiscordStatus, string> = {
  online: 'Online',
  idle: 'Away',
  dnd: 'Online',
  offline: 'Offline',
}

function StatusDot({ status }: { status: DiscordStatus }) {
  const color = STATUS_COLOR[status]
  return (
    <span
      aria-hidden="true"
      title={STATUS_LABEL[status]}
      className="relative inline-flex size-2.5 shrink-0"
    >
      <span
        className="absolute inset-0 animate-ping rounded-full opacity-40"
        style={{ backgroundColor: color }}
      />
      <span
        className="relative inline-flex size-2.5 rounded-full opacity-90"
        style={{ backgroundColor: color }}
      />
    </span>
  )
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
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-1.5 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-md border border-border/60 bg-background/90 px-2.5 py-1 text-xs font-light text-muted-foreground opacity-0 backdrop-blur-sm transition-opacity duration-150 group-hover:opacity-100"
      >
        <StatusDot status={status} />
        @mio3d
      </span>
    </span>
  )
}
