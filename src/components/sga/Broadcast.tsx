import broadcastImg from "@/assets/broadcast.jpg";

export function Broadcast() {
  return (
    <section id="transmissao" className="relative py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative corner-cut overflow-hidden border border-border shadow-elevated">
          <img src={broadcastImg} alt="Transmissão profissional" loading="lazy" width={1600} height={1000} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/80 backdrop-blur px-3 py-1.5 text-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-primary font-bold">LIVE</span>
            <span className="text-muted-foreground">/ MAIN STAGE</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
            <div className="flex items-center justify-between text-mono text-xs">
              <span className="text-muted-foreground">ROUND 12 · MAP 02</span>
              <span className="text-primary">SGA.TV</span>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-3 text-mono text-xs tracking-[0.3em] text-primary mb-6">
            <span className="w-8 h-px bg-primary" /> TRANSMISSÃO PROFISSIONAL
          </div>
          <h2 className="text-display font-black text-4xl md:text-5xl leading-[0.95] mb-6">
            Todos os jogos<br /><span className="text-primary">com transmissão</span><br />ao vivo. Todos.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Não é apenas mais um campeonato online. Na SGA, cada partida ganha clima de cenário profissional —
            narração, comentários, HUD personalizada e transmissão ao vivo. Mesmo jogando de casa, seu time entra em uma experiência pensada para gerar visibilidade, emoção e conteúdo.
          </p>
          <ul className="grid grid-cols-2 gap-3">
            {["Narração ao vivo", "Comentarista", "HUD personalizada", "Overlays pro", "Padrão competitivo", "Clipes para redes", "Cobertura completa", "Visibilidade real"].map(item => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="w-1.5 h-1.5 bg-primary rotate-45" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
