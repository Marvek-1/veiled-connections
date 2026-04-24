'use client'

import { useVeilStore } from '@/lib/store'
import ChemistryMeter from '../ChemistryMeter'
import ProfileCard from '../ProfileCard'

export default function DiscoveryFeed() {
  const { discoveryProfiles, connected, spendBalance, connectProfile } = useVeilStore()

  const handleConnect = (profileId: string) => {
    if (spendBalance(5, 'Connect with ' + profileId)) {
      connectProfile(profileId)
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground py-6">
      <div className="max-w-2xl mx-auto px-4 pb-24">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl font-light mb-2">Discover</h1>
          <p className="text-sm text-muted-foreground">
            Find your match. -5 tokens per connection.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="space-y-4">
          {discoveryProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              isConnected={connected.has(profile.id)}
              onConnect={() => handleConnect(profile.id)}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
