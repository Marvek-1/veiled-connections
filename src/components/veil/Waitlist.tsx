import { motion } from "framer-motion";
import { useState } from "react";
import mistImg from "@/assets/veil-mist.jpg";

export function Waitlist() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim().length < 7) return;
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative isolate overflow-hidden rounded-[2.5rem] glass p-10 text-center md:p-20 grain"
        >
          <div className="absolute inset-0 -z-10">
            <img
              src={mistImg}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/90" />
          </div>

          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
            The first 300
          </p>
          <h2 className="font-display text-5xl leading-tight text-gradient md:text-7xl">
            Step inside <span className="italic text-veil">before the world does.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Veil opens in Nairobi by invitation only. Drop your number and we'll
            send a WhatsApp invitation when your seat opens.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto mt-10 max-w-md rounded-2xl bg-secondary/60 p-6 text-center"
            >
              <p className="font-display text-2xl text-foreground">
                Your seat is whispered for.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Watch your WhatsApp. The veil will reach out.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="tel"
                inputMode="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+254 7•• ••• •••"
                className="flex-1 rounded-full border border-border bg-input/60 px-6 py-4 text-base text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              <button
                type="submit"
                className="group relative overflow-hidden rounded-full bg-veil px-8 py-4 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                <span className="relative z-10">Request invite</span>
                <span className="absolute inset-0 animate-shimmer" />
              </button>
            </form>
          )}

          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground/60">
            18+ only · No spam · Verified on WhatsApp
          </p>
        </motion.div>
      </div>
    </section>
  );
}