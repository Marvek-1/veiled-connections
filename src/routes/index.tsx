import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/veil/Nav";
import { Hero } from "@/components/veil/Hero";
import { Protocol } from "@/components/veil/Protocol";
import { Diagnostic } from "@/components/veil/Diagnostic";
import { ProfileShowcase } from "@/components/veil/ProfileShowcase";
import { Verification } from "@/components/veil/Verification";
import { Faq } from "@/components/veil/Faq";
import { Waitlist } from "@/components/veil/Waitlist";
import { Footer } from "@/components/veil/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veil — Where Beauty Meets Brilliance" },
      {
        name: "description",
        content:
          "A dual-gated sanctuary for attractive, high-agency minds. Real faces, vetted thinking, dialectic-first conversations, real devotion.",
      },
      { property: "og:title", content: "Veil — Where Beauty Meets Brilliance" },
      {
        property: "og:description",
        content:
          "Cognitive resonance, physical attraction, real devotion. For those who refuse to choose between mind and body.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Nav />
      <Hero />
      <Protocol />
      <Diagnostic />
      <ProfileShowcase />
      <Verification />
      <Faq />
      <Waitlist />
      <Footer />
    </main>
  );
}
