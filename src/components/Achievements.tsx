import { Icon } from '@iconify/react'
import { type Achievement, ACHIEVEMENTS } from '../constants'

const MONTHS: Record<string, number> = {
  january: 1, february: 2, march: 3, april: 4,
  may: 5, june: 6, july: 7, august: 8,
  september: 9, october: 10, november: 11, december: 12,
}

function parseYearField(value: string): number {
  const lower = value.toLowerCase()
  const year = parseInt(lower.match(/\d{4}/)?.[0] ?? '9999')
  const month = Object.entries(MONTHS).find(([name]) => lower.includes(name))?.[1] ?? 0
  return year * 100 + month
}

const SORTED_ACHIEVEMENTS = [...ACHIEVEMENTS].sort(
  (a, b) => parseYearField(a.year) - parseYearField(b.year)
)

function AchievementCard({ achievement, delay }: { achievement: Achievement; delay: number }) {
  return (
    <div
      className="p-8 border border-white/5 bg-background floating-card group"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="w-12 h-12 bg-[#0A0A0A] border border-white/10 flex items-center justify-center mb-6 text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-colors">
        <Icon icon={achievement.icon} className="text-2xl" />
      </div>
      <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block mb-2">{achievement.year}</span>
      <h3 className="text-white font-medium text-xl mb-3">{achievement.title}</h3>
      <p className="text-neutral-400 text-sm font-light">{achievement.quote}</p>
    </div>
  )
}

export function Achievements() {
  return (
    <section id="achievements" className="py-24 border-t border-white/5 bg-[#0A0A0A] relative z-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-360">
        <div className="flex items-end gap-4 mb-16" data-aos="fade-right">
          <h2 className="text-4xl text-white font-medium">Timeline</h2>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1.5">Achievements</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SORTED_ACHIEVEMENTS.map((item, i) => (
            <AchievementCard key={item.title} achievement={item} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
