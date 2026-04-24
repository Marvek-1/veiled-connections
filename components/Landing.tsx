'use client'

import { useVeilStore } from '@/lib/store'

export default function Landing() {
  const { setOnboarded } = useVeilStore()

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4">
      {/* Background glow orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-drift" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-drift" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 text-center max-w-2xl">
        {/* Hero heading */}
        <div className="mb-8">
          <h1 className="font-display text-6xl md:text-8xl font-light mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Veil
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-light tracking-widest mb-8">
            Anonymous. Verified. Real.
          </p>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Connect authentically with verified strangers. No names. No filters. Just truth.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 mt-12">
          <button
            onClick={() => setOnboarded(true)}
            className="px-8 py-3 bg-secondary text-card-foreground rounded-lg font-semibold hover:bg-accent transition-colors"
          >
            Begin the Ritual
          </button>
          <p className="text-xs text-muted-foreground">
            Get 100 tokens to start
          </p>
        </div>

        {/* Info sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
          <div className="p-4 border border-border/30 rounded-lg bg-card/20 backdrop-blur">
            <p className="text-accent font-display text-2xl mb-2">100</p>
            <p className="text-sm text-muted-foreground">Tokens on signup</p>
          </div>
          <div className="p-4 border border-border/30 rounded-lg bg-card/20 backdrop-blur">
            <p className="text-accent font-display text-2xl mb-2">-5</p>
            <p className="text-sm text-muted-foreground">Per connection</p>
          </div>
          <div className="p-4 border border-border/30 rounded-lg bg-card/20 backdrop-blur">
            <p className="text-accent font-display text-2xl mb-2">-2</p>
            <p className="text-sm text-muted-foreground">Per message</p>
          </div>
        </div>
      </div>
    </main>
  )
}
