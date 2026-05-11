import { SectionHeader } from "./Features";

export function Prize() {
  return (
    <section id="premiacao" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto">
        <SectionHeader eyebrow="Premiação" title={<><span className="text-primary">R$ 4.250</span><br />em disputa.</>} sub="Premiação inicial — com potencial de crescimento conforme o campeonato evoluir em temporadas, divisões e séries." />

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <PrizeCard place="1º" amount="R$ 2.500" tag="CHAMPION" highlight />
          <PrizeCard place="2º" amount="R$ 1.250" tag="RUNNER-UP" />
          <PrizeCard place="3º" amount="R$ 500" tag="THIRD" />
        </div>
      </div>
    </section>
  );
}

function PrizeCard({ place, amount, tag, highlight }: { place: string; amount: string; tag: string; highlight?: boolean }) {
  return (
    <div className={`relative corner-cut p-10 border ${highlight ? "border-primary bg-gradient-to-br from-primary/20 to-transparent shadow-glow" : "border-border bg-surface"}`}>
      <div className="text-mono text-xs tracking-[0.3em] text-muted-foreground mb-8">{tag}</div>
      <div className="text-display font-black text-7xl md:text-8xl text-primary mb-4">{place}</div>
      <div className={`text-display font-bold text-3xl ${highlight ? "text-foreground" : "text-muted-foreground"}`}>{amount}</div>
      {highlight && (
        <div className="absolute top-4 right-4 text-mono text-[10px] tracking-widest text-primary border border-primary px-2 py-1">CAMPEÃO</div>
      )}
    </div>
  );
}
