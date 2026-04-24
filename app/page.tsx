'use client'

import { useEffect, useState } from 'react'
import { useVeilStore } from '@/lib/store'
import Landing from '@/components/Landing'
import Onboarding from '@/components/Onboarding'
import MainApp from '@/components/MainApp'

export default function Home() {
  const { isOnboarded, currentUser } = useVeilStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (!isOnboarded || !currentUser) {
    return isOnboarded ? <Onboarding /> : <Landing />
  }

  return <MainApp />
}
