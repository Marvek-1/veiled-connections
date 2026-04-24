import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface UserProfile {
  id: string
  phone: string
  gender: 'male' | 'female' | 'other'
  alias: string
  bio: string
  avatar: string
  chemistry: number // 0-5 stage
  createdAt: number
}

export interface Wallet {
  balance: number
  transactions: Transaction[]
}

export interface Transaction {
  id: string
  type: 'earn' | 'spend'
  amount: number
  description: string
  timestamp: number
}

export interface Message {
  id: string
  from: string
  to: string
  content: string
  tokensCost: number
  timestamp: number
  read: boolean
}

export interface DiscoveryProfile {
  id: string
  alias: string
  gender: 'male' | 'female' | 'other'
  age: number
  height: string // e.g., "5'9" or "175cm"
  bodyType: 'slim' | 'athletic' | 'average' | 'curvy' | 'muscular'
  zodiac: string // e.g., "Aries", "Taurus"
  sexType: 'straight' | 'gay' | 'lesbian' | 'bisexual' | 'demisexual' | 'asexual'
  lookingFor: 'relationship' | 'fwb' | 'casual' | 'exploring' | 'connection'
  bio: string
  avatar: string
  chemistry: number
  online: boolean
}

interface VeilStore {
  // Auth state
  isOnboarded: boolean
  currentUser: UserProfile | null
  
  // Wallet state
  wallet: Wallet
  
  // Messages
  messages: Message[]
  
  // Discovery profiles
  discoveryProfiles: DiscoveryProfile[]
  connected: Set<string>
  
  // Actions
  setOnboarded: (value: boolean) => void
  setCurrentUser: (user: UserProfile) => void
  addBalance: (amount: number, description: string) => void
  spendBalance: (amount: number, description: string) => boolean
  addMessage: (message: Message) => void
  markMessageRead: (messageId: string) => void
  connectProfile: (profileId: string) => void
  setDiscoveryProfiles: (profiles: DiscoveryProfile[]) => void
}

const generateMockProfiles = (): DiscoveryProfile[] => [
  {
    id: '1',
    alias: 'Luna',
    gender: 'female',
    age: 26,
    height: "5'6\"",
    bodyType: 'curvy',
    zodiac: 'Scorpio',
    sexType: 'bisexual',
    lookingFor: 'casual',
    bio: 'Sultry artist exploring desire in the dark. Wine, whispers, and raw honesty. Looking for someone who can handle the intensity.',
    avatar: '/profiles/profile-1.jpg',
    chemistry: 4,
    online: true,
  },
  {
    id: '2',
    alias: 'Sienna',
    gender: 'female',
    age: 24,
    height: "5'7\"",
    bodyType: 'athletic',
    zodiac: 'Leo',
    sexType: 'straight',
    lookingFor: 'fwb',
    bio: 'Unapologetically sensual. I love confidence and witty banter. Let\'s skip the small talk and dive deep.',
    avatar: '/profiles/profile-2.jpg',
    chemistry: 3,
    online: true,
  },
  {
    id: '3',
    alias: 'Iris',
    gender: 'female',
    age: 27,
    height: "5'5\"",
    bodyType: 'slim',
    zodiac: 'Capricorn',
    sexType: 'bisexual',
    lookingFor: 'connection',
    bio: 'Mystery wrapped in midnight. I crave real connection and aren\'t afraid of vulnerability. Impress me with authenticity.',
    avatar: '/profiles/profile-3.jpg',
    chemistry: 5,
    online: true,
  },
  {
    id: '4',
    alias: 'Nyx',
    gender: 'female',
    age: 25,
    height: "5'8\"",
    bodyType: 'curvy',
    zodiac: 'Virgo',
    sexType: 'straight',
    lookingFor: 'exploring',
    bio: 'Night creature with a love for forbidden conversations. Seeking someone equally adventurous and discreet.',
    avatar: '/profiles/profile-4.jpg',
    chemistry: 4,
    online: true,
  },
  {
    id: '5',
    alias: 'Vera',
    gender: 'female',
    age: 29,
    height: "5'9\"",
    bodyType: 'athletic',
    zodiac: 'Libra',
    sexType: 'straight',
    lookingFor: 'relationship',
    bio: 'Confident, captivating, and completely honest. I know what I want and I\'m not shy about asking for it.',
    avatar: '/profiles/profile-5.jpg',
    chemistry: 3,
    online: false,
  },
  {
    id: '6',
    alias: 'Jade',
    gender: 'female',
    age: 23,
    height: "5'4\"",
    bodyType: 'slim',
    zodiac: 'Gemini',
    sexType: 'lesbian',
    lookingFor: 'casual',
    bio: 'Smooth talker meets genuine listener. Let\'s discover what happens when two people drop their masks.',
    avatar: '/profiles/profile-6.jpg',
    chemistry: 4,
    online: true,
  },
  {
    id: '7',
    alias: 'Shadow',
    gender: 'female',
    age: 28,
    height: "5'7\"",
    bodyType: 'curvy',
    zodiac: 'Sagittarius',
    sexType: 'bisexual',
    lookingFor: 'fwb',
    bio: 'Mysterious and magnetic. I love tension, chemistry, and someone who can match my energy. Can you?',
    avatar: '/profiles/profile-7.jpg',
    chemistry: 5,
    online: true,
  },
  {
    id: '8',
    alias: 'Aurora',
    gender: 'female',
    age: 22,
    height: "5'5\"",
    bodyType: 'average',
    zodiac: 'Aries',
    sexType: 'straight',
    lookingFor: 'exploring',
    bio: 'Playful yet profound. Looking for someone to break the rules with. No judgment, all passion.',
    avatar: '/profiles/profile-8.jpg',
    chemistry: 3,
    online: true,
  },
  {
    id: '9',
    alias: 'Phoenix',
    gender: 'female',
    age: 26,
    height: "5'6\"",
    bodyType: 'athletic',
    zodiac: 'Aquarius',
    sexType: 'bisexual',
    lookingFor: 'casual',
    bio: 'Fiery, flirty, and unfiltered. I love bold conversations and bolder chemistry. Let\'s see if we ignite.',
    avatar: '/profiles/profile-9.jpg',
    chemistry: 4,
    online: true,
  },
  {
    id: '10',
    alias: 'Enigma',
    gender: 'female',
    age: 25,
    height: "5'8\"",
    bodyType: 'curvy',
    zodiac: 'Pisces',
    sexType: 'demisexual',
    lookingFor: 'connection',
    bio: 'Seductive mystery waiting to be explored. Come closer and discover what lies beneath the surface.',
    avatar: '/profiles/profile-10.jpg',
    chemistry: 4,
    online: false,
  },
  {
    id: '11',
    alias: 'Kael',
    gender: 'male',
    age: 28,
    height: "5'11\"",
    bodyType: 'muscular',
    zodiac: 'Scorpio',
    sexType: 'straight',
    lookingFor: 'casual',
    bio: 'Confident, direct, and always up for an adventure. Seeking someone who knows what she wants and isn\'t afraid to ask.',
    avatar: '/profiles/male-1.jpg',
    chemistry: 4,
    online: true,
  },
  {
    id: '12',
    alias: 'Atlas',
    gender: 'male',
    age: 26,
    height: "6'0\"",
    bodyType: 'athletic',
    zodiac: 'Leo',
    sexType: 'straight',
    lookingFor: 'fwb',
    bio: 'Charming and completely honest about what I\'m looking for. Let\'s enjoy each other without the complications.',
    avatar: '/profiles/male-2.jpg',
    chemistry: 3,
    online: true,
  },
  {
    id: '13',
    alias: 'Ezra',
    gender: 'male',
    age: 30,
    height: "5'10\"",
    bodyType: 'average',
    zodiac: 'Capricorn',
    sexType: 'straight',
    lookingFor: 'relationship',
    bio: 'Looking for something real. Passionate about genuine connection and aren\'t afraid of depth. Are you?',
    avatar: '/profiles/male-3.jpg',
    chemistry: 5,
    online: true,
  },
  {
    id: '14',
    alias: 'Dante',
    gender: 'male',
    age: 29,
    height: "6'2\"",
    bodyType: 'muscular',
    zodiac: 'Aries',
    sexType: 'straight',
    lookingFor: 'exploring',
    bio: 'Bold and unconventional. Seeking someone equally adventurous who wants to explore without boundaries.',
    avatar: '/profiles/male-4.jpg',
    chemistry: 4,
    online: true,
  },
  {
    id: '15',
    alias: 'Cain',
    gender: 'male',
    age: 24,
    height: "5'9\"",
    bodyType: 'athletic',
    zodiac: 'Gemini',
    sexType: 'bisexual',
    lookingFor: 'casual',
    bio: 'Fun-loving and spontaneous. Looking for chemistry and laughter above all else. Let\'s keep it light.',
    avatar: '/profiles/male-5.jpg',
    chemistry: 3,
    online: false,
  },
  {
    id: '16',
    alias: 'Silas',
    gender: 'male',
    age: 31,
    height: "5'8\"",
    bodyType: 'average',
    zodiac: 'Libra',
    sexType: 'straight',
    lookingFor: 'connection',
    bio: 'Thoughtful and genuinely interested in getting to know someone. Seeking substance over surface.',
    avatar: '/profiles/male-6.jpg',
    chemistry: 4,
    online: true,
  },
  {
    id: '17',
    alias: 'Raven',
    gender: 'male',
    age: 27,
    height: "6'1\"",
    bodyType: 'muscular',
    zodiac: 'Sagittarius',
    sexType: 'gay',
    lookingFor: 'fwb',
    bio: 'Charismatic and unapologetically myself. Looking for someone who appreciates authenticity and passion.',
    avatar: '/profiles/male-7.jpg',
    chemistry: 5,
    online: true,
  },
  {
    id: '18',
    alias: 'Xavier',
    gender: 'male',
    age: 25,
    height: "5'10\"",
    bodyType: 'athletic',
    zodiac: 'Aquarius',
    sexType: 'straight',
    lookingFor: 'exploring',
    bio: 'Young and curious. Ready to explore and discover what real chemistry feels like. Are you game?',
    avatar: '/profiles/male-8.jpg',
    chemistry: 3,
    online: true,
  },
  {
    id: '19',
    alias: 'Ares',
    gender: 'male',
    age: 32,
    height: "6'3\"",
    bodyType: 'muscular',
    zodiac: 'Virgo',
    sexType: 'straight',
    lookingFor: 'relationship',
    bio: 'Mature and serious about finding the right person. Looking for a partner who\'s ready for the real thing.',
    avatar: '/profiles/male-9.jpg',
    chemistry: 4,
    online: true,
  },
  {
    id: '20',
    alias: 'Orion',
    gender: 'male',
    age: 23,
    height: "5'11\"",
    bodyType: 'average',
    zodiac: 'Pisces',
    sexType: 'bisexual',
    lookingFor: 'casual',
    bio: 'Creative and intuitive. Seeking someone with depth who wants to experience genuine moments together.',
    avatar: '/profiles/male-10.jpg',
    chemistry: 4,
    online: false,
  },
]

export const useVeilStore = create<VeilStore>()(
  persist(
    (set, get) => ({
      isOnboarded: false,
      currentUser: null,
      wallet: {
        balance: 0,
        transactions: [],
      },
      messages: [],
      discoveryProfiles: generateMockProfiles(),
      connected: new Set(),

      setOnboarded: (value) => set({ isOnboarded: value }),

      setCurrentUser: (user) => {
        set({ currentUser: user })
        // Give new users 100 tokens
        const store = get()
        if (store.wallet.balance === 0) {
          set({
            wallet: {
              balance: 100,
              transactions: [
                {
                  id: '0',
                  type: 'earn',
                  amount: 100,
                  description: 'Signup bonus',
                  timestamp: Date.now(),
                },
              ],
            },
          })
        }
      },

      addBalance: (amount, description) => {
        set((state) => ({
          wallet: {
            balance: state.wallet.balance + amount,
            transactions: [
              ...state.wallet.transactions,
              {
                id: Math.random().toString(),
                type: 'earn',
                amount,
                description,
                timestamp: Date.now(),
              },
            ],
          },
        }))
      },

      spendBalance: (amount, description) => {
        const state = get()
        if (state.wallet.balance >= amount) {
          set((state) => ({
            wallet: {
              balance: state.wallet.balance - amount,
              transactions: [
                ...state.wallet.transactions,
                {
                  id: Math.random().toString(),
                  type: 'spend',
                  amount,
                  description,
                  timestamp: Date.now(),
                },
              ],
            },
          }))
          return true
        }
        return false
      },

      addMessage: (message) => {
        set((state) => ({
          messages: [...state.messages, message],
        }))
      },

      markMessageRead: (messageId) => {
        set((state) => ({
          messages: state.messages.map((msg) =>
            msg.id === messageId ? { ...msg, read: true } : msg
          ),
        }))
      },

      connectProfile: (profileId) => {
        set((state) => {
          const newConnected = new Set(state.connected)
          newConnected.add(profileId)
          return { connected: newConnected }
        })
      },

      setDiscoveryProfiles: (profiles) => {
        set({ discoveryProfiles: profiles })
      },
    }),
    {
      name: 'veil-store',
      storage: typeof window !== 'undefined' ? undefined : undefined,
    }
  )
)
