'use client'

import { DiscoveryProfile } from '@/lib/store'
import ChemistryMeter from './ChemistryMeter'
import Image from 'next/image'

interface ProfileCardProps {
  profile: DiscoveryProfile
  isConnected: boolean
  onConnect: () => void
}

const getZodiacEmoji = (zodiac: string): string => {
  const zodiacMap: Record<string, string> = {
    'Aries': '♈', 'Taurus': '♉', 'Gemini': '♊', 'Cancer': '♋',
    'Leo': '♌', 'Virgo': '♍', 'Libra': '♎', 'Scorpio': '♏',
    'Sagittarius': '♐', 'Capricorn': '♑', 'Aquarius': '♒', 'Pisces': '♓'
  }
  return zodiacMap[zodiac] || '•'
}

const getLookingForColor = (type: string): string => {
  const colors: Record<string, string> = {
    'relationship': 'bg-blue-500/20 text-blue-300',
    'casual': 'bg-pink-500/20 text-pink-300',
    'fwb': 'bg-purple-500/20 text-purple-300',
    'exploring': 'bg-orange-500/20 text-orange-300',
    'connection': 'bg-cyan-500/20 text-cyan-300'
  }
  return colors[type] || 'bg-secondary/20 text-secondary'
}

export default function ProfileCard({ profile, isConnected, onConnect }: ProfileCardProps) {
  return (
    <div className="border border-border/30 rounded-lg bg-card/30 backdrop-blur overflow-hidden hover:border-accent/50 transition-all group">
      {/* Image Container */}
      <div className="relative w-full h-80 overflow-hidden bg-primary/20">
        <Image
          src={profile.avatar}
          alt={profile.alias}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Status & Looking For Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-2">
          {profile.online && (
            <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full">
              <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
              <span className="text-xs text-accent font-semibold">Online</span>
            </div>
          )}
        </div>

        {/* Looking For Tag */}
        <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold capitalize ${getLookingForColor(profile.lookingFor)}`}>
          {profile.lookingFor}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5">
        {/* Header: Name, Age, Height */}
        <div className="mb-4">
          <div className="flex items-baseline justify-between mb-2">
            <h3 className="font-display text-3xl font-light text-foreground">{profile.alias}, {profile.age}</h3>
            <span className="text-xs text-secondary font-semibold">{profile.height}</span>
          </div>

          {/* Demographics Row */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold capitalize">
              {profile.bodyType}
            </span>
            <span className="px-2 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold capitalize">
              {getZodiacEmoji(profile.zodiac)} {profile.zodiac}
            </span>
            <span className="px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs font-semibold capitalize">
              {profile.sexType}
            </span>
          </div>

          {/* Bio */}
          <p className="text-sm text-muted-foreground leading-relaxed italic">&quot;{profile.bio}&quot;</p>
        </div>

        {/* Chemistry Meter */}
        <div className="mb-4 py-3 border-y border-border/20">
          <div className="text-xs text-secondary font-semibold mb-2">Chemistry Level</div>
          <ChemistryMeter level={profile.chemistry} />
        </div>

        {/* Connect Button */}
        <button
          onClick={onConnect}
          disabled={isConnected}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${
            isConnected
              ? 'bg-muted text-muted-foreground cursor-default'
              : 'bg-gradient-to-r from-secondary to-accent text-card-foreground hover:shadow-lg hover:shadow-accent/50 hover:scale-105'
          }`}
        >
          {isConnected ? 'Connected' : 'Connect (-5 Tokens)'}
        </button>
      </div>
    </div>
  )
}
