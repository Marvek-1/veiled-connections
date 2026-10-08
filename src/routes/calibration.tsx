import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "@/components/veil/Nav";
import { analyse, type Profile } from "@/lib/cognitive";

export const Route = createFileRoute("/calibration")({
  head: () => ({
    meta: [
      { title: "Begin Calibration — Veil" },
      { name: "description", content: "Veil's dual-gated admission: verify your real, unfiltered face, then pass the cognitive vectoring. Beauty and brains, both required." },
      { property: "og:title", content: "Begin Calibration — Veil" },
      { property: "og:description", content: "Visual authenticity + cognitive vectoring. Apply to enter the sanctuary." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Calibration,
});

const DIALECTIC = [
  { k: "Agency", q: "Describe something you built, started or fixed that nobody asked you to." },
  { k: "Obsession", q: "Which problem would you work on for ten years without pay? Why that one?" },
  { k: "Depth", q: "What do you believe about love that most people would find uncomfortable?" },
];

const STEPS = ["The Frame", "The Dialectic", "The Thesis", "Submitted"];

function Calibration() {
  const [step, setStep] = useState(0);
  const [photos, setPhotos] = useState<string[]>([]);
  const [confirmed, setConfirmed] = useState(false);
  const [answers, setAnswers] = useState(["", "", ""]);
  const [thesis, setThesis] = useState({ name: "", age: "", obsession: "", belief: "", problem: "" });
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => () => photos.forEach((u) => URL.revokeObjectURL(u)), [photos]);

  const onFiles = (files: FileList | null) => {
    if (!files) return;
    const urls = Array.from(files).slice(0, 4 - photos.length).filter((f) => f.type.startsWith("image/")).map((f) => URL.createObjectURL(f));
    setPhotos((p) => [...p, ...urls]);
  };

  const canNext =
    step === 0 ? photos.length >= 2 && confirmed
    : step === 1 ? answers.every((a) => a.trim().length >= 40)
    : step === 2 ? thesis.name.trim() && Number(thesis.age) >= 18 && thesis.obsession.trim() && thesis.belief.trim() && thesis.problem.trim()
    : false;

  const next = () => {
    if (step === 2) setProfile(analyse([...answers, thesis.obsession, thesis.belief, thesis.problem]));
    setStep((s) => s + 1);
  };

  const field = "w-full rounded-xl border border-border bg-background/40 p-4 text-foreground placeholder:text-muted-foreground/60 focus:border-ring focus:outline-none";

  return (
    <main className="grain relative min-h-screen overflow-hidden">
      <Nav />
      <div className="absolute left-[5%] top-[20%] -z-10 h-80 w-80 rounded-full bg-veil opacity-20 blur-3xl" />
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-veil">Dual-calibration</p>
        <h1 className="mt-3 font-display text-5xl text-foreground md:text-6xl">Earn your way <span className="italic text-gradient">in.</span></h1>

        <ol className="mt-10 grid grid-cols-4 gap-2">
          {STEPS.map((s, i) => (
            <li key={s}>
              <div className={`h-1 rounded-full ${i <= step ? "bg-veil" : "bg-border"}`} />
              <p className={`mt-2 font-mono text-[10px] uppercase tracking-[0.2em] ${i === step ? "text-foreground" : "text-muted-foreground"}`}>{s}</p>
            </li>
          ))}
        </ol>

        <div className="glass mt-10 rounded-3xl p-8 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }}>
              {step === 0 && (
                <div>
                  <h2 className="font-display text-3xl text-foreground">Step 1 · Visual authenticity</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Upload 2–4 recent photos. Your face clearly visible. No filters, no heavy edits, no group shots. A live selfie check follows before approval.</p>
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {photos.map((u, i) => (
                      <div key={u} className="relative aspect-[3/4] overflow-hidden rounded-xl">
                        <img src={u} alt={`Your photo ${i + 1}`} className="h-full w-full object-cover" />
                        <button onClick={() => setPhotos((p) => p.filter((x) => x !== u))} className="glass absolute right-1 top-1 rounded-full px-2 text-xs text-foreground">×</button>
                      </div>
                    ))}
                    {photos.length < 4 && (
                      <label className="flex aspect-[3/4] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-border text-sm text-muted-foreground hover:border-ring hover:text-foreground">
                        <span className="text-2xl">+</span>Add photo
                        <input type="file" accept="image/*" multiple className="hidden" onChange={(e) => onFiles(e.target.files)} />
                      </label>
                    )}
                  </div>
                  <label className="mt-6 flex items-start gap-3 text-sm text-muted-foreground">
                    <input type="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} className="mt-1 accent-[var(--primary)]" />
                    These are real, recent, unfiltered photos of me. I'm 18 or older.
                  </label>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="font-display text-3xl text-foreground">Step 2 · Cognitive vectoring</h2>
                    <p className="mt-2 text-sm text-muted-foreground">Three dialectic prompts. No right answers — we read for agency, obsession and depth. At least a few real sentences each.</p>
                  </div>
                  {DIALECTIC.map((d, i) => (
                    <div key={d.k}>
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-veil">{d.k}</p>
                      <p className="mt-1 text-foreground">{d.q}</p>
                      <textarea rows={4} maxLength={1200} value={answers[i]} onChange={(e) => setAnswers((a) => a.map((v, j) => (j === i ? e.target.value : v)))} className={`${field} mt-3 resize-none`} />
                      <p className="mt-1 text-right font-mono text-[10px] text-muted-foreground">{answers[i].trim().length}/40 min</p>
                    </div>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <h2 className="font-display text-3xl text-foreground">Step 3 · Your Thesis</h2>
                    <p className="mt-2 text-sm text-muted-foreground">This sits beside your photos. It's what people answer when they reach out.</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-[2fr_1fr]">
                    <input placeholder="First name" maxLength={40} value={thesis.name} onChange={(e) => setThesis({ ...thesis, name: e.target.value })} className={field} />
                    <input placeholder="Age" type="number" min={18} max={99} value={thesis.age} onChange={(e) => setThesis({ ...thesis, age: e.target.value })} className={field} />
                  </div>
                  <input placeholder="Active obsession — e.g. agent swarms for market prediction" maxLength={120} value={thesis.obsession} onChange={(e) => setThesis({ ...thesis, obsession: e.target.value })} className={field} />
                  <input placeholder="Contrarian belief" maxLength={160} value={thesis.belief} onChange={(e) => setThesis({ ...thesis, belief: e.target.value })} className={field} />
                  <input placeholder="Problem space you're attacking" maxLength={160} value={thesis.problem} onChange={(e) => setThesis({ ...thesis, problem: e.target.value })} className={field} />
                </div>
              )}

              {step === 3 && profile && (
                <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
                  {photos[0] && <img src={photos[0]} alt="Your frame" className="aspect-[3/4] w-full rounded-2xl object-cover" />}
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-veil">Application received</p>
                    <h2 className="mt-2 font-display text-4xl text-foreground">{thesis.name}, {thesis.age}</h2>
                    <p className="mt-1 font-display text-2xl italic text-gradient">{profile.archetype}</p>
                    <dl className="mt-6 space-y-3 text-sm">
                      <div><dt className="text-muted-foreground">Obsession</dt><dd className="text-foreground">{thesis.obsession}</dd></div>
                      <div><dt className="text-muted-foreground">Contrarian belief</dt><dd className="text-foreground">{thesis.belief}</dd></div>
                      <div><dt className="text-muted-foreground">Vectors</dt><dd className="text-foreground">{profile.vectors.join(" · ")}</dd></div>
                      <div><dt className="text-muted-foreground">Agency / Depth</dt><dd className="text-foreground">{profile.agency} · {profile.depth}/100</dd></div>
                    </dl>
                    <p className="mt-6 text-sm text-muted-foreground">Our curators review every application by hand. You'll hear back on WhatsApp once your live verification is complete.</p>
                    <Link to="/" className="mt-6 inline-block text-sm text-veil hover:underline">← Back to Veil</Link>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {step < 3 && (
            <div className="mt-10 flex justify-between">
              <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="text-sm text-muted-foreground disabled:opacity-30">← Back</button>
              <button onClick={next} disabled={!canNext} className="rounded-full bg-veil px-7 py-3 text-sm font-medium text-primary-foreground shadow-glow disabled:opacity-40">
                {step === 2 ? "Submit for review" : "Continue"}
              </button>
            </div>
          )}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground/70">Preview build — photos stay on your device and nothing is uploaded yet.</p>
      </div>
    </main>
  );
}
