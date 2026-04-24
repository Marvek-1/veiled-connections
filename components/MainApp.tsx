'use client'

import { useState } from 'react'
import { useVeilStore } from '@/lib/store'
import Navigation from './Navigation'
import DiscoveryFeed from './pages/DiscoveryFeed'
import ChatPage from './pages/ChatPage'
import WalletPage from './pages/WalletPage'
import ProfilePage from './pages/ProfilePage'

type Page = 'discover' | 'chat' | 'wallet' | 'profile'

export default function MainApp() {
  const [currentPage, setCurrentPage] = useState<Page>('discover')
  const { currentUser } = useVeilStore()

  if (!currentUser) return null

  const renderPage = () => {
    switch (currentPage) {
      case 'discover':
        return <DiscoveryFeed />
      case 'chat':
        return <ChatPage />
      case 'wallet':
        return <WalletPage />
      case 'profile':
        return <ProfilePage />
      default:
        return <DiscoveryFeed />
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {renderPage()}
      </div>
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  )
}
