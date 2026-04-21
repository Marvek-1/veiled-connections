import { motion } from "framer-motion";
import card1 from "@/assets/veil-card-1.jpg";
import card2 from "@/assets/veil-card-2.jpg";

const stages = [
  { name: "Cold", body: "First whisper. Nothing seen." },
  { name: "Curious", body: "A blurred glimpse. A voice." },
  { name: "Magnetic", body: "Image clears. Name emerges." },
  { name: "Dangerous", body: "Numbers exchanged. Secrets traded." },
  { name: "Unmasked", body: "The veil falls. Off the platform." },
];

export function Reveal() {
  return (
    <section id="reveal" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
              The Chemistry Meter
            </p>
            <h2 className="font-display text-5xl leading-[1.05] text-gradient md:text-7xl">
              Five stages of <span className="italic text-veil">unveiling.</span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              A hidden score tracks reply speed, mutual energy, and reveal
              actions. As tension builds, your connection moves from cold
              curiosity to dangerous knowing.
            </p>

            <div className="mt-10 space-y-3">
              {stages.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="flex items-center gap-5"
                >
                  <div className="flex h-8 items-center gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-8 w-1.5 rounded-full transition-all ${
                          idx <= i
                            ? "bg-veil shadow-glow"
                            : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-display text-2xl text-foreground">{s.name}</p>
                    <p className="text-sm text-muted-foreground">{s.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stacked veiled cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto h-[32rem] w-full max-w-md"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-veil opacity-30 blur-[100px]" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 top-8 w-64 overflow-hidden rounded-3xl glass shadow-veil"
              style={{ rotate: "-6deg" }}
            >
              <img
                src={card1}
                alt="Veiled portrait"
                width={768}
                height={1024}
                loading="lazy"
                className="h-80 w-full object-cover"
              />
              <div className="space-y-1 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Codename
                </p>
                <p className="font-display text-2xl text-foreground">Nyx · 24</p>
                <p className="text-xs text-primary">Curious · Nairobi</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-0 bottom-0 w-64 overflow-hidden rounded-3xl glass shadow-veil"
              style={{ rotate: "6deg" }}
            >
              <img
                src={card2}
                alt="Silhouetted figure"
                width={768}
                height={1024}
                loading="lazy"
                className="h-80 w-full object-cover"
              />
              <div className="space-y-1 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Codename
                </p>
                <p className="font-display text-2xl text-foreground">Ash · 27</p>
                <p className="text-xs text-primary">Magnetic · Nairobi</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}