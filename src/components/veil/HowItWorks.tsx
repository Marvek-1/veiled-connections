import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Slip behind the veil",
    body: "Sign up with your phone. Verify on WhatsApp. No pressure, no public profile — just a codename and a quiet curiosity.",
  },
  {
    n: "02",
    title: "Receive 100 tokens",
    body: "Your wallet starts full. Tokens are the pulse of every interaction — spend them to send, to see, to know.",
  },
  {
    n: "03",
    title: "Activate for 200 KES",
    body: "A one-time activation fee that keeps Veil verified, intentional, and free of fake accounts. Pay once. Enter fully.",
  },
  {
    n: "04",
    title: "Whisper. Reveal. Become.",
    body: "Chat anonymously. Spend tokens to unlock images, names, voices. Identity is earned, never given.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
            The Ritual
          </p>
          <h2 className="font-display text-5xl leading-tight text-gradient md:text-7xl">
            Four steps. <span className="italic text-veil">One unveiling.</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl glass p-8 transition-all hover:shadow-veil md:p-10"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-veil opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-30" />
              <span className="font-display text-7xl text-veil opacity-60">{s.n}</span>
              <h3 className="mt-4 font-display text-3xl text-foreground">{s.title}</h3>
              <p className="mt-3 max-w-md text-muted-foreground">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}