'use client'

import { useVeilStore } from '@/lib/store'

export default function ProfilePage() {
  const { currentUser, setOnboarded, setCurrentUser } = useVeilStore()

  const handleLogout = () => {
    setCurrentUser(null as any)
    setOnboarded(false)
    localStorage.clear()
  }

  if (!currentUser) return null

  return (
    <main className="min-h-screen bg-background text-foreground py-6">
      <div className="max-w-2xl mx-auto px-4 pb-24">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl font-light mb-6">Profile</h1>
        </div>

        {/* Avatar and Basic Info */}
        <div className="border border-border/30 rounded-lg bg-card/30 backdrop-blur p-6 mb-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="text-7xl">{currentUser.avatar}</div>
            <div>
              <h2 className="font-display text-3xl font-light">{currentUser.alias}</h2>
              <p className="text-sm text-muted-foreground capitalize">{currentUser.gender}</p>
            </div>
          </div>
          <p className="text-sm text-foreground leading-relaxed">{currentUser.bio}</p>
        </div>

        {/* Account Info */}
        <div className="mb-8">
          <h3 className="font-display text-xl font-light mb-4">Account</h3>
          <div className="space-y-3">
            <div className="p-4 border border-border/30 rounded-lg bg-card/20">
              <p className="text-xs text-muted-foreground mb-1">Phone</p>
              <p className="text-sm font-medium">{currentUser.phone}</p>
            </div>
            <div className="p-4 border border-border/30 rounded-lg bg-card/20">
              <p className="text-xs text-muted-foreground mb-1">Member Since</p>
              <p className="text-sm font-medium">
                {new Date(currentUser.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="mb-8">
          <h3 className="font-display text-xl font-light mb-4">Settings</h3>
          <div className="space-y-2">
            <button className="w-full text-left p-4 border border-border/30 rounded-lg bg-card/20 hover:bg-card/40 transition-colors text-sm">
              Privacy Settings
            </button>
            <button className="w-full text-left p-4 border border-border/30 rounded-lg bg-card/20 hover:bg-card/40 transition-colors text-sm">
              Safety & Security
            </button>
            <button className="w-full text-left p-4 border border-border/30 rounded-lg bg-card/20 hover:bg-card/40 transition-colors text-sm">
              Help & Support
            </button>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="w-full p-4 border border-destructive/30 rounded-lg text-destructive hover:bg-destructive/10 transition-colors text-sm font-semibold"
        >
          Logout
        </button>
      </div>
    </main>
  )
}
