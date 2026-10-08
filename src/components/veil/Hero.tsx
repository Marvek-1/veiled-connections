import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/veil-editorial.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="grain relative isolate min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="A striking woman in a tailored blazer standing in a dim private library"
          width={1536}
          height={1920}
          className="h-full w-full object-cover object-right opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          className="glass mb-8 inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-glow" />
          Curated sanctuary · Dual-gated admission
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease }}
          className="max-w-3xl font-display text-6xl leading-[0.92] tracking-tight text-foreground md:text-8xl lg:text-[8.5rem]"
        >
          Where <span className="italic text-veil">Beauty</span>
          <br />
          meets <span className="text-gradient">Brilliance.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease }}
          className="mt-10 max-w-xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Cognitive resonance, physical attraction, real devotion. Veil is the sanctuary for those
          who refuse to choose between mind and body.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65, ease }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            to="/calibration"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-veil px-8 py-4 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            <span className="relative z-10">Begin Calibration</span>
            <span className="absolute inset-0 animate-shimmer" />
          </Link>
          <a
            href="#protocol"
            className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Explore the Protocol ↓
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-24 flex flex-wrap items-center gap-6 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground/70"
        >
          <span>Unfiltered faces</span>
          <span className="h-px w-8 bg-border" />
          <span>Vetted minds</span>
          <span className="h-px w-8 bg-border" />
          <span>18+ only</span>
        </motion.div>
      </div>
    </section>
  );
}
