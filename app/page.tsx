import { DiscordHoverCard } from '@/components/discord-hover-card'
import { DonateButton } from '@/components/donate-button'

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div className="flex flex-col items-center gap-6">
        <h1
          className="text-balance bg-clip-text text-[96px] font-extralight tracking-tight text-transparent sm:text-[128px]"
          style={{ backgroundImage: 'linear-gradient(90deg, #5A4EFF, #6B88FF)' }}
        >
          Aeri.Rest
        </h1>

        <div className="flex max-w-md flex-col gap-3">
          <p className="text-pretty text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
            Aeri has gone down because we were unable to reach our hosting payment goal this
            month.
          </p>

          <p className="text-pretty text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
            If you have any questions or want to reach out, you can contact me via{' '}
            <a
              href="https://t.me/withstrand"
              target="_blank"
              rel="noopener noreferrer"
              className="font-normal text-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              Telegram
            </a>{' '}
            or <DiscordHoverCard>Discord</DiscordHoverCard>.
          </p>
        </div>

        <DonateButton />
      </div>
    </main>
  )
}
