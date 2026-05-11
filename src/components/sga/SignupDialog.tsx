"use client";

import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const CAMPEONATO_NOME = "VCT-SP";
const WHATSAPP_NUMBER = "5516991069776";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const NO_TEAM_MESSAGE = `Quero participar do ${CAMPEONATO_NOME}, mas não tenho time.`;
const HAS_TEAM_MESSAGE = `Quero participar do ${CAMPEONATO_NOME}. Já tenho time.`;

function buildWhatsappUrl(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

type SignupDialogTriggerProps = {
  className?: string;
  children: React.ReactNode;
};

export function SignupDialogTrigger({ className, children }: SignupDialogTriggerProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className={cn(className)}>
          {children}
        </button>
      </DialogTrigger>

      <DialogContent className="border-border bg-background sm:max-w-xl">
        <DialogHeader className="space-y-3 text-left">
          <DialogTitle className="text-display text-2xl md:text-3xl font-black tracking-wider uppercase">
            Como você quer participar do {CAMPEONATO_NOME}?
          </DialogTitle>
          <DialogDescription className="text-sm md:text-base text-muted-foreground">
            Escolha a opção que descreve seu caso e siga direto para o WhatsApp.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 sm:grid-cols-2 pt-2">
          <a
            href={buildWhatsappUrl(NO_TEAM_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-24 items-center justify-center rounded-md border border-primary/30 bg-primary/10 px-5 py-4 text-center text-display text-sm font-bold tracking-widest text-foreground transition hover:border-primary hover:bg-primary/15 hover:text-primary"
          >
            QUERO PARTICIPAR, MAS NÃO TENHO TIME
          </a>
          <a
            href={buildWhatsappUrl(HAS_TEAM_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-24 items-center justify-center rounded-md border border-primary/30 bg-primary/10 px-5 py-4 text-center text-display text-sm font-bold tracking-widest text-foreground transition hover:border-primary hover:bg-primary/15 hover:text-primary"
          >
            JÁ TENHO TIME
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
