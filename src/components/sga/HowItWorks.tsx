import { SectionHeader } from "./Features";

const steps = [
  { t: "Monte seu time", d: "Reúna seus jogadores e prepare sua line de Valorant." },
  { t: "Faça a inscrição", d: "Cada jogador paga R$29,90 para garantir participação." },
  { t: "Dispute online", d: "Partidas online com organização e acompanhamento da SGA." },
  { t: "Seja transmitido", d: "Transmissão, narração, comentários e HUD profissional." },
  { t: "Chegue à final", d: "Os melhores avançam para disputar a final presencial na SGA." },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-32 px-6 border-t border-border bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Como Funciona" title={<>Da inscrição<br />ao <span className="text-primary">palco principal.</span></>} />
        <div className="mt-20 relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="w-24 h-24 corner-cut border border-primary/40 bg-background flex items-center justify-center mb-6 relative z-10">
                  <span className="text-display font-black text-3xl text-primary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-display font-bold text-xl mb-2">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
