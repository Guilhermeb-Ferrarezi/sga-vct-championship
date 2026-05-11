import heroImg from "@/assets/hero-arena.jpg";
import { SignupDialogTrigger } from "@/components/sga/SignupDialog";

const ASSET_VERSION = "20260511";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <img src={`${heroImg}?v=${ASSET_VERSION}`} alt="Santos Games Arena" width={1920} height={1080} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* scan line */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-primary/30 overflow-hidden">
        <div className="w-full h-32 bg-gradient-to-b from-transparent via-primary to-transparent animate-scan" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-10 items-end w-full">
        <div className="lg:col-span-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 text-mono text-xs tracking-[0.3em] text-primary mb-6 border border-primary/40 px-3 py-1.5 corner-cut">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            AO VIVO • TEMPORADA 01 • VALORANT
          </div>

          <h1 className="text-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6">
            CAMPEONATO<br />
            <span className="text-primary text-glow">VCT-SP</span>{" "}
            <span className="text-muted-foreground/40">/</span>{" "}
            VALORANT
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Dispute online com seus jogos transmitidos ao vivo — narração, comentários e HUD profissional.
            Lute por uma <span className="text-foreground font-semibold">final presencial na Santos Games Arena</span>.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <SignupDialogTrigger className="group relative bg-primary text-primary-foreground text-display font-bold tracking-widest text-sm px-8 py-4 corner-cut shadow-glow hover:bg-primary-glow transition">
              INSCREVER MEU TIME
              <span className="ml-2">→</span>
            </SignupDialogTrigger>
            <SignupDialogTrigger className="inline-flex items-center justify-center bg-primary/90 text-primary-foreground text-display font-bold tracking-widest text-xs px-6 py-3 corner-cut hover:bg-primary-glow transition">
              ENCONTRAR UM TIME
            </SignupDialogTrigger>
            <a href="#como-funciona" className="border border-border text-display font-bold tracking-widest text-xs px-6 py-3 corner-cut hover:border-primary hover:text-primary transition">
              VER COMO FUNCIONA
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 grid grid-cols-2 gap-3 animate-fade-up">
          <Stat label="DATA" value="05.07" sub="2026" />
          <Stat label="INSCRIÇÃO" value="R$29,90" sub="por jogador" />
          <Stat label="PREMIAÇÃO" value="R$4.250" sub="total" highlight />
          <Stat label="TIMES" value="64+" sub="vagas iniciais" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background/80 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-3 text-display tracking-[0.3em] text-xs">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-4 text-muted-foreground">
              {["TRANSMISSÃO AO VIVO", "NARRAÇÃO PROFISSIONAL", "HUD CUSTOMIZADO", "FINAL PRESENCIAL", "COBERTURA COMPLETA", "COMENTARISTA", "OVERLAYS PRO", "VISIBILIDADE REAL"].map(t => (
                <span key={t} className="flex items-center gap-8">
                  <span className="text-primary">◆</span> {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, sub, highlight }: { label: string; value: string; sub: string; highlight?: boolean }) {
  return (
    <div className={`relative corner-cut p-4 border ${highlight ? "border-primary bg-primary/10 shadow-glow" : "border-border bg-surface/60"} backdrop-blur-sm`}>
      <div className="text-mono text-[10px] tracking-widest text-muted-foreground mb-2">{label}</div>
      <div className={`text-display font-black text-2xl md:text-3xl ${highlight ? "text-primary" : "text-foreground"}`}>{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{sub}</div>
    </div>
  );
}
