'use client'

import { useState } from 'react'
import { useVeilStore } from '@/lib/store'
import ChatConversation from '../ChatConversation'

export default function ChatPage() {
  const { messages, connected, discoveryProfiles } = useVeilStore()
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)

  // Get connected users
  const connectedUsers = discoveryProfiles.filter((p) => connected.has(p.id))

  // Get messages for selected user
  const selectedMessages = selectedUserId
    ? messages.filter((m) => m.from === selectedUserId || m.to === selectedUserId)
    : []

  if (selectedUserId && connectedUsers.find((u) => u.id === selectedUserId)) {
    return (
      <ChatConversation
        userId={selectedUserId}
        onBack={() => setSelectedUserId(null)}
      />
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground py-6">
      <div className="max-w-2xl mx-auto px-4 pb-24">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-display text-4xl font-light mb-2">Chat</h1>
          <p className="text-sm text-muted-foreground">
            {connectedUsers.length} connections. -2 tokens per message.
          </p>
        </div>

        {/* Connected Users */}
        {connectedUsers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No connections yet</p>
            <p className="text-xs text-muted-foreground">
              Connect with someone in Discover to start chatting
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {connectedUsers.map((user) => {
              const lastMessage = selectedMessages
                .filter((m) => m.from === user.id || m.to === user.id)
                .sort((a, b) => b.timestamp - a.timestamp)[0]

              return (
                <button
                  key={user.id}
                  onClick={() => setSelectedUserId(user.id)}
                  className="w-full text-left p-4 border border-border/30 rounded-lg bg-card/30 hover:bg-card/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{user.avatar}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-light">{user.alias}</h3>
                      {lastMessage && (
                        <p className="text-xs text-muted-foreground truncate">
                          {lastMessage.content}
                        </p>
                      )}
                    </div>
                    {user.online && (
                      <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
