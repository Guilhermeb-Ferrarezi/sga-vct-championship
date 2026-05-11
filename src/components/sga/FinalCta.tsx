import heroImg from "@/assets/hero-arena.jpg";
import logo from "@/assets/sga-logo.png";
import { SignupDialogTrigger } from "@/components/sga/SignupDialog";

const ASSET_VERSION = "20260511";

export function FinalCta() {
  return (
    <section id="inscricao" className="relative py-40 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={`${heroImg}?v=${ASSET_VERSION}`} alt="" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 text-mono text-xs tracking-[0.3em] text-primary mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
          INSCRIÇÕES ABERTAS · VAGAS LIMITADAS
        </div>
        <h2 className="text-display font-black text-5xl md:text-8xl leading-[0.9] mb-8">
          Seu time está pronto<br />
          para jogar em <span className="text-primary text-glow">outro nível?</span>
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Garanta sua vaga no campeonato SGA de Valorant, dispute partidas transmitidas ao vivo e lute por uma final presencial na Santos Games Arena.
        </p>
        <SignupDialogTrigger className="inline-flex items-center gap-3 bg-primary text-primary-foreground text-display font-bold tracking-widest text-base px-12 py-6 corner-cut shadow-glow hover:bg-primary-glow transition">
          INSCREVER MEU TIME AGORA
          <span>→</span>
        </SignupDialogTrigger>
        <div className="mt-8 text-mono text-xs tracking-widest text-muted-foreground">
          R$29,90 / JOGADOR · 05.07 · SANTOS GAMES ARENA
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <img src={`${logo}?v=${ASSET_VERSION}`} alt="Santos Games Arena" className="h-10 w-auto" />
          <div className="text-mono text-xs text-muted-foreground hidden md:block">Construindo o cenário competitivo regional.</div>
        </div>
        <div className="text-mono text-xs text-muted-foreground tracking-widest">
          © 2026 SGA · TODOS OS DIREITOS RESERVADOS
        </div>
      </div>
    </footer>
  );
}
