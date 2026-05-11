const features = [
  { n: "01", t: "Todos os jogos ao vivo", d: "Cada partida transmitida com estrutura de transmissão profissional." },
  { n: "02", t: "Narração e comentários", d: "Narrador e comentarista para elevar a experiência competitiva." },
  { n: "03", t: "HUD profissional", d: "Visual de transmissão inspirado no cenário competitivo de e-sports." },
  { n: "04", t: "Final presencial na SGA", d: "Os melhores times disputam a decisão na Santos Games Arena." },
  { n: "05", t: "Premiação de R$4.250", d: "Premiação inicial para os três melhores times do campeonato." },
  { n: "06", t: "Experiência premium", d: "Cobertura, mídia, fotos, vídeos e conteúdo para valorizar os jogadores." },
];

export function Features() {
  return (
    <section id="destaques" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader eyebrow="Destaques" title={<>Não é mais um<br /><span className="text-primary">torneio de Discord.</span></>} />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border mt-16">
          {features.map((f) => (
            <div key={f.n} className="group bg-background p-8 hover:bg-surface transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-primary transition-all duration-500" />
              <div className="text-mono text-xs tracking-widest text-primary mb-6">/ {f.n}</div>
              <h3 className="text-display font-bold text-2xl mb-3">{f.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex items-center gap-3 text-mono text-xs tracking-[0.3em] text-primary mb-6">
        <span className="w-8 h-px bg-primary" /> {eyebrow.toUpperCase()}
      </div>
      <h2 className="text-display font-black text-4xl md:text-6xl leading-[0.95]">{title}</h2>
      {sub && <p className="text-lg text-muted-foreground mt-6 max-w-2xl">{sub}</p>}
    </div>
  );
}
