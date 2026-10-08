export const QUESTIONS = [
  "What's a belief you hold that most people disagree with?",
  "What problem keeps you up at night?",
  "What's the last idea that changed your mind?",
];

const VECTORS: Record<string, string[]> = {
  "Artificial Intelligence": ["ai", "agent", "model", "llm", "machine", "neural", "automation"],
  "Markets & Capital": ["market", "money", "finance", "trade", "invest", "economy", "crypto", "capital"],
  "Biology & Longevity": ["bio", "health", "body", "longevity", "gene", "brain", "medicine"],
  "Philosophy & Meaning": ["truth", "meaning", "god", "conscious", "ethic", "moral", "free will", "exist"],
  "Systems & Society": ["system", "society", "politic", "govern", "education", "city", "africa", "power"],
  "Art & Design": ["art", "design", "music", "beauty", "film", "write", "story"],
  "Energy & Climate": ["energy", "climate", "solar", "water", "food", "planet"],
};

export type Profile = { archetype: string; vectors: string[]; agency: string; depth: number };

export function analyse(answers: string[]): Profile {
  const text = answers.join(" ").toLowerCase();
  const words = text.split(/\s+/).filter(Boolean).length;
  const vectors = Object.entries(VECTORS)
    .map(([k, kws]) => [k, kws.filter((w) => text.includes(w)).length] as const)
    .filter(([, n]) => n > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([k]) => k);
  const agencyHits = ["build", "start", "create", "solve", "ship", "fix", "launch", "make"].filter((w) =>
    text.includes(w),
  ).length;
  const depth = Math.min(100, Math.round(words * 1.4 + vectors.length * 8 + agencyHits * 6));
  const archetype =
    agencyHits >= 2
      ? "First-Principles Builder"
      : vectors.length >= 3
        ? "Polymath Strategist"
        : text.includes("why") || vectors.includes("Philosophy & Meaning")
          ? "Contrarian Philosopher"
          : "Emerging Visionary";
  return {
    archetype,
    vectors: vectors.length ? vectors : ["Undeclared — go deeper"],
    agency: agencyHits >= 2 ? "High" : agencyHits === 1 ? "Rising" : "Latent",
    depth,
  };
}
