import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "./Features";

const faqs = [
  ["Qual é a modalidade do campeonato?", "A modalidade inicial será Valorant."],
  ["Quando acontece o campeonato?", "O campeonato está previsto para o dia 05 de Julho."],
  ["O campeonato é online ou presencial?", "As partidas serão online, com final presencial na Santos Games Arena."],
  ["Todos os jogos serão transmitidos?", "Sim. Todos os jogos serão transmitidos ao vivo com narrador, comentarista e HUD profissional."],
  ["Qual o valor da inscrição?", "A inscrição será de R$29,90 por jogador."],
  ["Qual será a premiação?", "A premiação inicial total será de R$4.250, distribuída entre os três primeiros colocados."],
  ["Quantos times vão participar?", "A meta inicial é ter no mínimo 64 times participantes, com possibilidade futura de expansão para 256 times."],
  ["Preciso ter um time completo?", "Sim, o campeonato é voltado para equipes de Valorant."],
  ["Onde será a final presencial?", "A final será realizada na Santos Games Arena."],
];

export function Faq() {
  return (
    <section id="faq" className="relative py-32 px-6 border-t border-border bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeader eyebrow="FAQ" title={<>Tudo o que <span className="text-primary">você precisa</span> saber.</>} />
        <Accordion type="single" collapsible className="mt-12">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-display font-bold text-lg hover:text-primary hover:no-underline py-6">
                <span className="flex items-center gap-4">
                  <span className="text-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                  {q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 pl-12">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
