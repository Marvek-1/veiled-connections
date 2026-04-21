import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/veil/Nav";
import { Hero } from "@/components/veil/Hero";
import { HowItWorks } from "@/components/veil/HowItWorks";
import { TokenEconomy } from "@/components/veil/TokenEconomy";
import { Reveal } from "@/components/veil/Reveal";
import { Faq } from "@/components/veil/Faq";
import { Waitlist } from "@/components/veil/Waitlist";
import { Footer } from "@/components/veil/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Veil — Anonymous. Verified. Real." },
      {
        name: "description",
        content:
          "An anonymous, WhatsApp-verified dating ritual where mystery is the currency. Identity is earned, never given. Now opening in Nairobi.",
      },
      { property: "og:title", content: "Veil — Anonymous. Verified. Real." },
      {
        property: "og:description",
        content:
          "Connection through controlled revelation. WhatsApp-verified, token-based, invitation-only. Step behind the veil.",
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
      <HowItWorks />
      <TokenEconomy />
      <Reveal />
      <Faq />
      <Waitlist />
      <Footer />
    </main>
  );
}
