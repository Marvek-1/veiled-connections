import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Dual-Gating", d: "Visual authenticity + cognitive vectoring. Only those who pass both thresholds enter." },
  { n: "02", t: "Curated Collisions", d: "A few daily matches built on physical attraction AND intellectual compatibility. No endless swiping." },
  { n: "03", t: "Dialectic First", d: "No lazy “hey.” First contact is a thesis, a problem, a dilemma to solve together." },
  { n: "04", t: "Real Devotion", d: "By the time you meet in person, you're already bonded — mentally and physically." },
];

export function Protocol() {
  return (
    <section id="protocol" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-veil">Manifesto</p>
          <h2 className="mt-4 font-display text-5xl leading-tight text-foreground md:text-7xl">
            The Veil <span className="italic text-gradient">Protocol</span>
          </h2>
          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Veil is for the builders, the thinkers, the visionaries who demand more. For those who
              take pride in their physical presence <em>and</em> their intellectual intensity.
            </p>
            <p>
              True attraction is holographic — visual pull, cognitive shock, emotional devotion.
              Other apps force a trade-off: attractive but vapid, or brilliant but disconnected.
            </p>
            <p className="font-display text-2xl italic text-foreground">
              Here, beauty is the spark. Mental intensity is the gasoline.
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass rounded-2xl p-7"
            >
              <span className="font-mono text-xs text-veil">{s.n}</span>
              <h3 className="mt-3 font-display text-3xl text-foreground">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </motion.div>
          ))}
          <p className="sm:col-span-2 pt-4 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground/70">
            Not a dating app. A sanctuary for people who match on every level.
          </p>
        </div>
      </div>
    </section>
  );
}
