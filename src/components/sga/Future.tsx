import { SectionHeader } from "./Features";

export function Future() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="O Futuro"
          title={<>O começo de um novo<br /><span className="text-primary">cenário competitivo</span> regional.</>}
          sub="O campeonato SGA nasce com Valorant, mas a visão é maior: temporadas, rankings, divisões e uma comunidade competitiva recorrente."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {[
            { t: "Série C", d: "Porta de entrada para times em ascensão." },
            { t: "Série B", d: "Equipes consolidadas em busca do topo." },
            { t: "Série A", d: "A elite competitiva regional da SGA." },
            { t: "256 times", d: "Meta de expansão para temporadas futuras." },
          ].map((d, i) => (
            <div key={i} className="bg-background p-8 hover:bg-surface transition">
              <div className="text-mono text-xs text-primary mb-4">// {String(i + 1).padStart(2, "0")}</div>
              <div className="text-display font-black text-3xl mb-3">{d.t}</div>
              <div className="text-sm text-muted-foreground">{d.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
