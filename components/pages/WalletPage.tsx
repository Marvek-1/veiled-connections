'use client'

import { useVeilStore } from '@/lib/store'

const TOKEN_PACKS = [
  { id: '1', amount: 50, price: '100 KES', bonus: 0 },
  { id: '2', amount: 100, price: '200 KES', bonus: 20 },
  { id: '3', amount: 500, price: '1,000 KES', bonus: 150 },
]

const EARN_SOURCES = [
  { activity: 'New account', amount: 100 },
  { activity: 'Ad watch', amount: 10 },
  { activity: 'Profile verified', amount: 50 },
  { activity: 'Referral', amount: 200 },
]

const SPEND_SOURCES = [
  { activity: 'Connect', amount: 5 },
  { activity: 'Message', amount: 2 },
  { activity: 'Reveal profile', amount: 20 },
  { activity: 'Premium filter', amount: 50 },
]

export default function WalletPage() {
  const { wallet, currentUser, addBalance } = useVeilStore()

  const handleBuyTokens = (amount: number) => {
    // Stub: In production, this would integrate with Daraja M-Pesa
    addBalance(amount, `Purchased ${amount} tokens`)
    alert(`Stub: Would charge M-Pesa. Added ${amount} tokens.`)
  }

  return (
    <main className="min-h-screen bg-background text-foreground py-6">
      <div className="max-w-2xl mx-auto px-4 pb-24">
        {/* Header with Balance */}
        <div className="mb-8">
          <h1 className="font-display text-4xl font-light mb-4">Wallet</h1>
          <div className="border border-border/30 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/10 p-6 backdrop-blur">
            <p className="text-sm text-muted-foreground mb-2">Total Balance</p>
            <div className="flex items-baseline gap-2">
              <p className="font-display text-5xl font-light">{wallet.balance}</p>
              <p className="text-sm text-muted-foreground">tokens</p>
            </div>
          </div>
        </div>

        {/* Token Packs */}
        <div className="mb-8">
          <h2 className="font-display text-2xl font-light mb-4">Buy Tokens</h2>
          <div className="space-y-2">
            {TOKEN_PACKS.map((pack) => (
              <button
                key={pack.id}
                onClick={() => handleBuyTokens(pack.amount)}
                className="w-full text-left p-4 border border-border/30 rounded-lg bg-card/30 hover:bg-card/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">
                      {pack.amount} tokens{' '}
                      {pack.bonus > 0 && <span className="text-xs text-accent">+{pack.bonus}</span>}
                    </p>
                    <p className="text-sm text-muted-foreground">{pack.price}</p>
                  </div>
                  <p className="text-lg font-display">→</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Token Economy */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <h3 className="font-display text-lg font-light mb-3">Earn</h3>
            <div className="space-y-2">
              {EARN_SOURCES.map((source, idx) => (
                <div key={idx} className="p-3 border border-border/20 rounded bg-card/20">
                  <p className="text-xs text-muted-foreground">{source.activity}</p>
                  <p className="text-sm font-semibold text-accent">+{source.amount}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg font-light mb-3">Spend</h3>
            <div className="space-y-2">
              {SPEND_SOURCES.map((source, idx) => (
                <div key={idx} className="p-3 border border-border/20 rounded bg-card/20">
                  <p className="text-xs text-muted-foreground">{source.activity}</p>
                  <p className="text-sm font-semibold text-destructive">-{source.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div>
          <h2 className="font-display text-2xl font-light mb-4">History</h2>
          {wallet.transactions.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">No transactions yet</p>
          ) : (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {[...wallet.transactions].reverse().map((tx) => (
                <div
                  key={tx.id}
                  className="p-3 border border-border/20 rounded bg-card/20 flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium">{tx.description}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(tx.timestamp).toLocaleDateString()} at{' '}
                      {new Date(tx.timestamp).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                  <p
                    className={`font-semibold ${
                      tx.type === 'earn' ? 'text-accent' : 'text-destructive'
                    }`}
                  >
                    {tx.type === 'earn' ? '+' : '-'}
                    {tx.amount}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
