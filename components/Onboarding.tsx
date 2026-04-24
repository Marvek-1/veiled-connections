'use client'

import { useState } from 'react'
import { useVeilStore, UserProfile } from '@/lib/store'

const AVATARS = ['🌙', '🌀', '🔐', '🌌', '⬛', '👻', '🖤', '👁️', '🔥', '❓', '🌊', '⚡']

export default function Onboarding() {
  const { setCurrentUser } = useVeilStore()
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    phone: '',
    gender: 'other' as 'male' | 'female' | 'other',
    alias: '',
    bio: '',
    avatar: AVATARS[0],
  })

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1)
    } else {
      // Create user and complete onboarding
      const user: UserProfile = {
        id: Math.random().toString(36),
        phone: formData.phone,
        gender: formData.gender,
        alias: formData.alias,
        bio: formData.bio,
        avatar: formData.avatar,
        chemistry: 0,
        createdAt: Date.now(),
      }
      setCurrentUser(user)
    }
  }

  const handleBack = () => {
    if (step > 0) setStep(step - 1)
  }

  const isStepValid = () => {
    switch (step) {
      case 0:
        return formData.phone.length >= 10
      case 1:
        return true
      case 2:
        return formData.alias.length >= 2
      case 3:
        return formData.bio.length >= 10
      case 4:
        return true
      default:
        return false
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4">
      <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-drift" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-drift" />

      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8">
          <h2 className="font-display text-4xl font-light mb-2">The Ritual</h2>
          <p className="text-sm text-muted-foreground">Step {step + 1} of 5</p>
          <div className="mt-4 h-1 bg-card rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-secondary to-accent transition-all duration-300"
              style={{ width: `${((step + 1) / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 0: Phone */}
        {step === 0 && (
          <div className="space-y-4">
            <p className="text-foreground text-sm">Your phone (for WhatsApp verification)</p>
            <input
              type="tel"
              placeholder="+254712345678"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
            />
            <p className="text-xs text-muted-foreground">We&apos;ll send a 6-digit code to verify</p>
          </div>
        )}

        {/* Step 1: Gender */}
        {step === 1 && (
          <div className="space-y-4">
            <p className="text-foreground text-sm">How do you identify?</p>
            <div className="space-y-2">
              {(['male', 'female', 'other'] as const).map((gender) => (
                <label
                  key={gender}
                  className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-card/50 transition-colors"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={(e) =>
                      setFormData({ ...formData, gender: e.target.value as any })
                    }
                    className="w-4 h-4"
                  />
                  <span className="capitalize text-sm">{gender}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Alias */}
        {step === 2 && (
          <div className="space-y-4">
            <p className="text-foreground text-sm">Your alias (how others see you)</p>
            <input
              type="text"
              placeholder="Luna, Echo, Cipher..."
              value={formData.alias}
              onChange={(e) => setFormData({ ...formData, alias: e.target.value })}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground"
            />
            <p className="text-xs text-muted-foreground">2-20 characters. No real names.</p>
          </div>
        )}

        {/* Step 3: Bio */}
        {step === 3 && (
          <div className="space-y-4">
            <p className="text-foreground text-sm">Your vibe (in 10-100 characters)</p>
            <textarea
              placeholder="Artist exploring grey areas of connection..."
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground min-h-20 resize-none"
            />
            <p className="text-xs text-muted-foreground">
              {formData.bio.length}/100 characters
            </p>
          </div>
        )}

        {/* Step 4: Avatar */}
        {step === 4 && (
          <div className="space-y-4">
            <p className="text-foreground text-sm">Choose your symbol</p>
            <div className="grid grid-cols-6 gap-2">
              {AVATARS.map((avatar) => (
                <button
                  key={avatar}
                  onClick={() => setFormData({ ...formData, avatar })}
                  className={`aspect-square text-2xl border-2 rounded-lg transition-all ${
                    formData.avatar === avatar
                      ? 'border-accent bg-accent/20'
                      : 'border-border hover:border-accent/50'
                  }`}
                >
                  {avatar}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={handleBack}
            disabled={step === 0}
            className="flex-1 px-4 py-2 border border-border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-card/50 transition-colors text-sm"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={!isStepValid()}
            className="flex-1 px-4 py-2 bg-secondary text-card-foreground rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent transition-colors text-sm font-semibold"
          >
            {step === 4 ? 'Begin' : 'Next'}
          </button>
        </div>
      </div>
    </main>
  )
}
