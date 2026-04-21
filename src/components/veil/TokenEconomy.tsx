import { motion } from "framer-motion";

const actions = [
  { label: "First connection request", cost: 5 },
  { label: "Open a chat thread", cost: 10 },
  { label: "Continue past 10 messages", cost: 10 },
  { label: "Request voice intro", cost: 20 },
  { label: "Reveal real first name", cost: 15 },
  { label: "Unlock clear image", cost: 25, highlight: true },
  { label: "Share WhatsApp contact", cost: 30, highlight: true },
  { label: "Reconnect expired chat", cost: 10 },
];

const earn = [
  { label: "Signup bonus", reward: 100 },
  { label: "Watch a rewarded ad", reward: 10 },
  { label: "Daily login streak", reward: 5 },
  { label: "Refer a friend", reward: 20 },
];

export function TokenEconomy() {
  return (
    <section id="tokens" className="relative py-32 md:py-44">
      {/* Atmospheric glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-veil opacity-15 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
            Currency of Curiosity
          </p>
          <h2 className="font-display text-5xl leading-tight text-gradient md:text-7xl">
            Tokens are the <span className="italic text-veil">heartbeat.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Every gesture costs something. Every reveal is earned. This is what
            keeps Veil quiet, intentional, and electric.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Spend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9 }}
            className="rounded-3xl glass p-8 md:p-12"
          >
            <div className="mb-8 flex items-baseline justify-between border-b border-border pb-6">
              <h3 className="font-display text-3xl text-foreground">Spend</h3>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Per action
              </span>
            </div>
            <ul className="space-y-1">
              {actions.map((a) => (
                <li
                  key={a.label}
                  className="group flex items-center justify-between border-b border-border/50 py-4 transition-colors hover:bg-secondary/30"
                >
                  <span
                    className={`text-base ${a.highlight ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {a.label}
                  </span>
                  <span
                    className={`font-display text-2xl ${a.highlight ? "text-veil" : "text-foreground"}`}
                  >
                    {a.cost}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Earn */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <div className="rounded-3xl glass p-8 md:p-10">
              <h3 className="mb-6 font-display text-3xl text-foreground">Earn</h3>
              <ul className="space-y-4">
                {earn.map((e) => (
                  <li key={e.label} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{e.label}</span>
                    <span className="font-display text-xl text-glow">+{e.reward}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-veil p-8 text-primary-foreground shadow-glow">
              <div className="absolute inset-0 grain opacity-20" />
              <p className="relative text-xs uppercase tracking-[0.3em] opacity-70">
                Token packs
              </p>
              <p className="relative mt-3 font-display text-4xl">
                From <span className="italic">100 KES</span>
              </p>
              <p className="relative mt-2 text-sm opacity-80">
                50 · 150 · 400 · 1000 token bundles via M-Pesa
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}