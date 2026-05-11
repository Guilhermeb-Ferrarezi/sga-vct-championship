import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/sga/Nav";
import { Hero } from "@/components/sga/Hero";
import { Features } from "@/components/sga/Features";
import { HowItWorks } from "@/components/sga/HowItWorks";
import { Prize } from "@/components/sga/Prize";
import { Broadcast } from "@/components/sga/Broadcast";
import { Finals } from "@/components/sga/Finals";
import { Future } from "@/components/sga/Future";
import { Faq } from "@/components/sga/Faq";
import { FinalCta, Footer } from "@/components/sga/FinalCta";

const BASE_URL = import.meta.env.BASE_URL;
const OG_IMAGE_URL = "https://cdn.santos-games.com/vct-sp/og-image.jpg?v=20260511";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VCT-SP · Valorant — Santos Games Arena" },
      { name: "description", content: "Campeonato VCT-SP de Valorant com todos os jogos transmitidos ao vivo, narração, comentários, HUD profissional e final presencial na Santos Games Arena. Inscreva seu time." },
      { property: "og:title", content: "VCT-SP · Valorant — Santos Games Arena" },
      { property: "og:description", content: "Online com transmissão profissional ao vivo. Final presencial na Santos Games Arena. R$4.250 em premiação." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "VCT-SP · Valorant" },
      { name: "twitter:description", content: "Transmissão ao vivo. Final presencial na Santos Games Arena. R$4.250 em premiação." },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Features />
      <HowItWorks />
      <Prize />
      <Broadcast />
      <Finals />
      <Future />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
