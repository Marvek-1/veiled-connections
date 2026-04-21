import { motion } from "framer-motion";
import { MessageCircle, ShieldCheck, EyeOff, Lock } from "lucide-react";

const points = [
  {
    icon: MessageCircle,
    title: "We send a code to your WhatsApp",
    body: "When you sign up, we send a 6-digit code to the WhatsApp number you provided. You enter it once to prove the number is yours.",
  },
  {
    icon: ShieldCheck,
    title: "That's the only thing your number does",
    body: "Your phone number is used for verification and account recovery — nothing else. It is never shown on your profile, never shared with other users, and never sold.",
  },
  {
    icon: EyeOff,
    title: "No WhatsApp contacts. No chat history.",
    body: "Veil does not read your WhatsApp messages, contacts, groups, or status. We only confirm that the code we sent reached your number.",
  },
  {
    icon: Lock,
    title: "Stored encrypted, deleted on request",
    body: "Your number is encrypted at rest. Delete your account and it's wiped from our systems, along with your profile and chats.",
  },
];

export function Verification() {
  return (
    <section id="verification" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
            How verification works
          </p>
          <h2 className="font-display text-5xl leading-tight text-gradient md:text-6xl">
            One code. <span className="italic text-veil">Nothing else.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            We use WhatsApp because it's already on your phone and it proves the
            number is real. Here's exactly what happens — in plain English.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl glass p-7 md:p-8"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-veil/15 text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl text-foreground md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {p.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-10 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground/60"
        >
          18+ only · WhatsApp-verified · Your number stays private
        </motion.p>
      </div>
    </section>
  );
}
