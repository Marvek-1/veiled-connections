'use client'

import { useVeilStore } from '@/lib/store'

interface NavigationProps {
  currentPage: string
  onNavigate: (page: any) => void
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const { wallet } = useVeilStore()

  const navItems = [
    { id: 'discover', label: 'Discover', icon: '✨', ariaLabel: 'Discover profiles' },
    { id: 'chat', label: 'Chat', icon: '💬', ariaLabel: 'Messages' },
    { id: 'wallet', label: 'Wallet', icon: '💎', ariaLabel: 'Wallet and tokens' },
    { id: 'profile', label: 'Profile', icon: '👤', ariaLabel: 'Your profile' },
  ]

  return (
    <nav className="sticky bottom-0 border-t border-border bg-card/80 backdrop-blur">
      <div className="max-w-2xl mx-auto px-4 py-3 flex justify-between">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            aria-label={item.ariaLabel}
            className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
              currentPage === item.id
                ? 'text-accent bg-accent/10'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
        <div className="absolute right-4 top-2 bg-destructive text-white text-xs font-bold px-2 py-1 rounded">
          {wallet.balance}
        </div>
      </div>
    </nav>
  )
}
