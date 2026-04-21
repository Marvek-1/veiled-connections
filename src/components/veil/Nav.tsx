import { motion } from "framer-motion";

export function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#" className="group flex items-center gap-2.5">
          <span className="relative flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-veil opacity-60 blur-md transition-opacity group-hover:opacity-100" />
            <span className="relative h-2 w-2 rounded-full bg-glow" />
          </span>
          <span className="font-display text-2xl tracking-wide text-foreground">
            Veil
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#how" className="transition-colors hover:text-foreground">How it works</a>
          <a href="#tokens" className="transition-colors hover:text-foreground">Tokens</a>
          <a href="#reveal" className="transition-colors hover:text-foreground">The Reveal</a>
          <a href="#faq" className="transition-colors hover:text-foreground">FAQ</a>
        </div>
        <a
          href="#waitlist"
          className="glass rounded-full px-5 py-2 text-sm font-medium text-foreground transition-all hover:shadow-glow"
        >
          Join the veil
        </a>
      </div>
    </motion.nav>
  );
}