import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Why do I have to pay 200 KES to activate?",
    a: "It's a ritual fee — small enough not to sting, sharp enough to keep the platform free of fakes, bots, and the unserious. Pay once. The veil opens forever.",
  },
  {
    q: "How is my identity protected?",
    a: "You sign up with a codename. No name, no photo, no number is shown to anyone. Your phone is verified privately on WhatsApp. Identity is revealed only when you choose, action by action.",
  },
  {
    q: "What happens with the 100 free tokens?",
    a: "They're yours the moment you verify. Use them to send your first connection requests, open chats, and unlock first impressions before deciding to buy more.",
  },
  {
    q: "Can I match with anyone?",
    a: "For the MVP, Veil only connects you with the opposite sex. Matching is local, anonymous, and limited daily — to keep every conversation worth its weight.",
  },
  {
    q: "How do reveals work?",
    a: "Each reveal — image, name, voice, WhatsApp — costs tokens. Once unlocked in a connection, the reveal stays. Some require mutual consent before the veil drops.",
  },
  {
    q: "Is Veil safe?",
    a: "Every account is WhatsApp-verified and 18+. Reports, blocks, and abuse filters live inside every chat. Suspicious behavior is moderated swiftly.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
            Whispered questions
          </p>
          <h2 className="font-display text-5xl leading-tight text-gradient md:text-6xl">
            Things people ask in the dark.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-16"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl glass border-0 px-6"
              >
                <AccordionTrigger className="py-6 text-left font-display text-xl text-foreground hover:no-underline md:text-2xl">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}