'use client'

import { useState } from 'react'

export function DonateButton() {
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function donate() {
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error ?? 'Something went wrong.')
        return
      }
      window.location.href = data.url
    } catch {
      setError('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-10 items-center overflow-hidden rounded-full border border-border/60 bg-card/50 backdrop-blur-sm transition-colors focus-within:border-muted-foreground/40">
        <span className="pointer-events-none pl-4 text-sm font-light text-muted-foreground">$</span>
        <input
          type="number"
          min="1"
          step="1"
          placeholder="5"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && donate()}
          className="h-full w-16 bg-transparent pl-1.5 text-sm font-light text-foreground outline-none [appearance:textfield] placeholder:text-muted-foreground/40 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <button
          onClick={donate}
          disabled={loading || !amount}
          className="h-full px-4 text-sm font-normal text-muted-foreground transition-colors hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? 'Redirecting...' : 'Donate'}
        </button>
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  )
}
