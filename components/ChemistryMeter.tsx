'use client'

interface ChemistryMeterProps {
  level: number // 0-5
}

const CHEMISTRY_STAGES = [
  { name: 'Cold', emoji: '❄️', color: 'from-blue-400 to-cyan-400' },
  { name: 'Spark', emoji: '⚡', color: 'from-purple-400 to-blue-400' },
  { name: 'Flame', emoji: '🔥', color: 'from-orange-400 to-red-400' },
  { name: 'Burning', emoji: '💥', color: 'from-red-500 to-pink-500' },
  { name: 'Unmasked', emoji: '✨', color: 'from-pink-400 to-purple-400' },
]

export default function ChemistryMeter({ level }: ChemistryMeterProps) {
  const stage = CHEMISTRY_STAGES[Math.min(level, 4)]

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">Chemistry</span>
        <span className="text-sm font-semibold text-accent">{stage.name}</span>
      </div>
      <div className="flex gap-1">
        {CHEMISTRY_STAGES.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 flex-1 rounded-full transition-all ${
              idx <= level
                ? `bg-gradient-to-r ${stage.color} opacity-100`
                : 'bg-border/30 opacity-40'
            }`}
          />
        ))}
      </div>
      <p className="text-xs text-muted-foreground">{stage.emoji} {stage.name}</p>
    </div>
  )
}
