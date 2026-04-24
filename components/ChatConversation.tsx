'use client'

import { useEffect, useRef, useState } from 'react'
import { useVeilStore } from '@/lib/store'

interface ChatConversationProps {
  userId: string
  onBack: () => void
}

export default function ChatConversation({ userId, onBack }: ChatConversationProps) {
  const { currentUser, messages, discoveryProfiles, spendBalance, addMessage, wallet } =
    useVeilStore()
  const [messageText, setMessageText] = useState('')
  const [isSending, setIsSending] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const otherUser = discoveryProfiles.find((p) => p.id === userId)
  const conversation = messages.filter(
    (m) => (m.from === userId && m.to === currentUser?.id) || (m.from === currentUser?.id && m.to === userId)
  )

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [conversation])

  const handleSendMessage = async () => {
    if (!messageText.trim() || !currentUser || !otherUser) return

    // Check balance
    if (wallet.balance < 2) {
      alert('Insufficient tokens to send message')
      return
    }

    setIsSending(true)

    // Deduct tokens
    if (spendBalance(2, `Message to ${otherUser.alias}`)) {
      // Add sent message
      addMessage({
        id: Math.random().toString(),
        from: currentUser.id,
        to: userId,
        content: messageText,
        tokensCost: 2,
        timestamp: Date.now(),
        read: false,
      })

      setMessageText('')

      // Simulate response after delay
      setTimeout(() => {
        addMessage({
          id: Math.random().toString(),
          from: userId,
          to: currentUser.id,
          content: 'Thanks for reaching out...',
          tokensCost: 0,
          timestamp: Date.now(),
          read: false,
        })
      }, 800)
    }

    setIsSending(false)
  }

  if (!otherUser || !currentUser) return null

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <div className="border-b border-border/30 bg-card/50 backdrop-blur p-4 sticky top-0">
        <button
          onClick={onBack}
          className="text-accent mb-3 text-sm hover:opacity-75"
        >
          ← Back
        </button>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{otherUser.avatar}</span>
          <div>
            <h2 className="font-display text-2xl font-light">{otherUser.alias}</h2>
            <p className="text-xs text-muted-foreground">
              {otherUser.online ? 'Online now' : 'Offline'}
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
        {conversation.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <p>No messages yet</p>
            <p className="text-xs mt-2">Each message costs 2 tokens</p>
          </div>
        ) : (
          conversation.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.from === currentUser.id ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.from === currentUser.id
                    ? 'bg-secondary text-card-foreground'
                    : 'bg-card/50 border border-border/30 text-foreground'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
                <p className="text-xs mt-1 opacity-50">
                  {new Date(msg.timestamp).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="border-t border-border/30 bg-card/50 backdrop-blur p-4 sticky bottom-0">
        <div className="flex gap-2">
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type a message..."
            disabled={isSending || wallet.balance < 2}
            className="flex-1 px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <button
            onClick={handleSendMessage}
            disabled={isSending || !messageText.trim() || wallet.balance < 2}
            className="px-4 py-2 bg-secondary text-card-foreground rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent transition-colors"
          >
            Send
          </button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Balance: {wallet.balance} tokens
        </p>
      </div>
    </main>
  )
}
