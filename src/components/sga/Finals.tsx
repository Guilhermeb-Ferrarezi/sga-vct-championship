import finalsImg from "@/assets/finals.jpg";
import playerImg from "@/assets/player.jpg";

const ASSET_VERSION = "20260511";

export function Finals() {
  return (
    <section className="relative py-32 px-6 bg-surface/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 text-mono text-xs tracking-[0.3em] text-primary mb-6">
              <span className="w-8 h-px bg-primary" /> FINAL PRESENCIAL
            </div>
            <h2 className="text-display font-black text-5xl md:text-7xl leading-[0.9]">
              A final não é online.<br />
              A final é <span className="text-primary text-glow">na arena.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-12">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Os melhores times disputam a grande final presencialmente na Santos Games Arena, com estrutura profissional, cobertura completa, mídia, fotos, vídeos e clima de decisão. Um momento marcante para os jogadores, a comunidade e a marca SGA.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-8 relative corner-cut overflow-hidden border border-border shadow-elevated group min-h-[520px] lg:min-h-[680px]">
            <img src={`${finalsImg}?v=${ASSET_VERSION}`} alt="Final presencial na Santos Games Arena" loading="lazy" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-mono text-xs tracking-widest text-primary mb-2">SANTOS GAMES ARENA</div>
              <div className="text-display font-black text-2xl md:text-3xl">Palco. Público. Pressão.</div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6 lg:min-h-[680px]">
            <div className="relative corner-cut overflow-hidden border border-border min-h-[220px] lg:flex-[1.1]">
              <img src={`${playerImg}?v=${ASSET_VERSION}`} alt="Foco competitivo" loading="lazy" width={1200} height={1500} className="absolute inset-0 h-full w-full object-cover object-top" />
            </div>
            <div className="relative corner-cut p-8 border border-primary bg-primary/10 flex flex-col justify-between shadow-glow lg:flex-[0.9] min-h-[220px]">
              <div className="text-mono text-xs tracking-widest text-primary">/ EXPERIÊNCIA</div>
              <div>
                <div className="text-display font-black text-3xl mb-2">Mais do que jogar.</div>
                <div className="text-muted-foreground text-sm">É viver o competitivo.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
