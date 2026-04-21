import { motion } from "framer-motion";
import heroImg from "@/assets/veil-hero.jpg";

export function Hero() {
  return (
    <section className="grain relative isolate min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="A veiled figure shrouded in lavender mist"
          width={1536}
          height={1920}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-mist" />
      </div>

      {/* Floating glow orbs */}
      <div className="absolute left-[10%] top-[30%] -z-10 h-72 w-72 rounded-full bg-veil opacity-30 blur-3xl animate-drift" />
      <div
        className="absolute right-[8%] bottom-[15%] -z-10 h-96 w-96 rounded-full bg-accent opacity-20 blur-3xl animate-drift"
        style={{ animationDelay: "-6s" }}
      />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pb-20 pt-32 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-glow" />
          Invitation only · Nairobi
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl leading-[0.95] tracking-tight text-foreground md:text-8xl lg:text-[10rem]"
        >
          <span className="text-gradient">Anonymous.</span>
          <br />
          <span className="italic text-veil">Verified.</span>
          <br />
          <span className="text-gradient">Real.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          A connection ritual where mystery is the currency. WhatsApp-verified.
          Identity revealed only when trust and curiosity earn it.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-xl text-balance text-sm leading-relaxed text-muted-foreground/80"
        >
          Meet anonymously, verify through WhatsApp, and use tokens to unlock
          deeper connection at your own pace.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#waitlist"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-veil px-8 py-4 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            <span className="relative z-10">Start anonymously</span>
            <span className="absolute inset-0 animate-shimmer" />
          </a>
          <a
            href="#how"
            className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            How the veil works ↓
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-24 flex items-center gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground/70"
        >
          <span>WhatsApp verified</span>
          <span className="h-px w-8 bg-border" />
          <span>18+ only</span>
          <span className="h-px w-8 bg-border" />
          <span>M-Pesa secured</span>
        </motion.div>
      </div>
    </section>
  );
}