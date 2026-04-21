export function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-muted-foreground md:flex-row md:px-10">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-6 w-6 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-veil opacity-50 blur-md" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-glow" />
          </span>
          <span className="font-display text-xl text-foreground">Veil</span>
          <span className="ml-3 text-xs uppercase tracking-[0.2em]">
            Nairobi · 2026
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em]">
          <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
          <a href="#" className="transition-colors hover:text-foreground">Terms</a>
          <a href="#" className="transition-colors hover:text-foreground">Safety</a>
          <a href="#" className="transition-colors hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}