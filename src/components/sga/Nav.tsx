import logo from "@/assets/sga-logo.png";
import { SignupDialogTrigger } from "@/components/sga/SignupDialog";

const ASSET_VERSION = "20260511";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={`${logo}?v=${ASSET_VERSION}`} alt="Santos Games Arena" className="h-8 w-auto" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-xs text-display tracking-widest text-muted-foreground">
          <a href="#destaques" className="hover:text-foreground transition">Destaques</a>
          <a href="#como-funciona" className="hover:text-foreground transition">Como Funciona</a>
          <a href="#premiacao" className="hover:text-foreground transition">Premiação</a>
          <a href="#transmissao" className="hover:text-foreground transition">Transmissão</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </div>
        <SignupDialogTrigger className="text-xs text-display tracking-widest font-bold bg-primary text-primary-foreground px-5 py-2.5 corner-cut hover:bg-primary-glow transition shadow-glow">
          Inscrever Time
        </SignupDialogTrigger>
      </div>
    </nav>
  );
}
