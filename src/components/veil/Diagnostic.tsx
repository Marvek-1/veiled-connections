import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { QUESTIONS, analyse, type Profile } from "@/lib/cognitive";

export function Diagnostic() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(["", "", ""]);
  const [result, setResult] = useState<Profile | null>(null);
  const current = answers[step] ?? "";

  const next = () => {
    if (step < 2) setStep(step + 1);
    else setResult(analyse(answers));
  };
  const reset = () => {
    setStep(0);
    setAnswers(["", "", ""]);
    setResult(null);
  };

  return (
    <section id="diagnostic" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-veil">Interactive preview</p>
        <h2 className="mt-4 font-display text-5xl text-foreground md:text-6xl">
          Test your <span className="italic text-gradient">Cognitive Profile</span>
        </h2>
        <p className="mt-5 text-muted-foreground">
          Three sharp calibration queries. Your first step into the sanctuary.
        </p>
      </div>

      <div className="glass mx-auto mt-14 max-w-3xl rounded-3xl p-8 md:p-12">
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                <span>Query {step + 1} / 3</span>
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className={`h-1 w-8 rounded-full ${i <= step ? "bg-veil" : "bg-border"}`} />
                  ))}
                </div>
              </div>
              <h3 className="mt-6 font-display text-3xl text-foreground md:text-4xl">{QUESTIONS[step]}</h3>
              <textarea
                value={current}
                onChange={(e) => setAnswers((a) => a.map((v, i) => (i === step ? e.target.value : v)))}
                rows={4}
                maxLength={600}
                placeholder="Think out loud. Be specific."
                className="mt-6 w-full resize-none rounded-xl border border-border bg-background/40 p-4 text-foreground placeholder:text-muted-foreground/60 focus:border-ring focus:outline-none"
              />
              <div className="mt-6 flex justify-between">
                <button
                  onClick={() => setStep(Math.max(0, step - 1))}
                  disabled={step === 0}
                  className="text-sm text-muted-foreground disabled:opacity-30"
                >
                  ← Back
                </button>
                <button
                  onClick={next}
                  disabled={current.trim().length < 10}
                  className="rounded-full bg-veil px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow disabled:opacity-40"
                >
                  {step < 2 ? "Next query" : "Reveal my profile"}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-veil">Your Cognitive Profile</p>
              <h3 className="mt-4 font-display text-5xl italic text-foreground">{result.archetype}</h3>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Obsession vectors</p>
                  <ul className="mt-2 space-y-1 text-sm text-foreground">
                    {result.vectors.map((v) => <li key={v}>{v}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Agency</p>
                  <p className="mt-2 font-display text-3xl text-foreground">{result.agency}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Depth</p>
                  <p className="mt-2 font-display text-3xl text-foreground">{result.depth}<span className="text-base text-muted-foreground">/100</span></p>
                  <div className="mt-2 h-1 rounded-full bg-border">
                    <div className="h-1 rounded-full bg-veil" style={{ width: `${result.depth}%` }} />
                  </div>
                </div>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link to="/calibration" className="rounded-full bg-veil px-6 py-3 text-center text-sm font-medium text-primary-foreground shadow-glow">
                  Begin full calibration
                </Link>
                <button onClick={reset} className="text-sm text-muted-foreground hover:text-foreground">Retake</button>
              </div>
              <p className="mt-6 text-xs text-muted-foreground/70">Preview only. Full admission is reviewed by humans.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
