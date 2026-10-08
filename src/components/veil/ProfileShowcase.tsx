import { useState } from "react";
import portrait from "@/assets/veil-card-1.jpg";

const prompts = [
  "Defend this: most startups fail from too much capital, not too little.",
  "Design a city for 1M people with zero cars. Where do you start?",
  "Is love a decision or a discovery? Pick one and argue it.",
];

export function ProfileShowcase() {
  const [picked, setPicked] = useState<number | null>(null);
  return (
    <section id="profile" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-veil">
            Profile architecture
          </p>
          <h2 className="mt-4 font-display text-5xl text-foreground md:text-6xl">
            The <span className="italic">Frame</span> + The{" "}
            <span className="italic text-gradient">Thesis</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            You see who's there — real, unfiltered faces. And right beside them, how they think.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={portrait}
              alt="Verified member portrait"
              loading="lazy"
              className="h-full min-h-[480px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="glass rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
                ✓ Live-verified · No filters
              </span>
              <p className="mt-3 font-display text-4xl text-foreground">Amara, 29</p>
              <p className="text-sm text-muted-foreground">Quant researcher · Nairobi</p>
            </div>
          </div>

          <div className="glass flex flex-col rounded-3xl p-8 md:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              The Thesis
            </p>
            <dl className="mt-6 space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-veil">Active obsession</dt>
                <dd className="mt-1 font-display text-2xl text-foreground">
                  Market regime detection with agent swarms
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-veil">Contrarian belief</dt>
                <dd className="mt-1 text-foreground">
                  Most "intelligence" is just compressed taste.
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-veil">Problem space</dt>
                <dd className="mt-1 text-foreground">
                  Making African capital markets legible to machines.
                </dd>
              </div>
            </dl>

            <div className="mt-10 border-t border-border pt-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                First contact · choose a dialectic
              </p>
              <div className="mt-4 space-y-2">
                {prompts.map((p, i) => (
                  <button
                    key={p}
                    onClick={() => setPicked(i)}
                    className={`w-full rounded-xl border p-4 text-left text-sm transition-all ${picked === i ? "border-ring bg-secondary text-foreground shadow-glow" : "border-border text-muted-foreground hover:text-foreground"}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-xs text-muted-foreground/70">
                {picked === null
                  ? "“Hey” is disabled. Pick a prompt to open the conversation."
                  : "Your opening move is set. She'll see your answer first."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
