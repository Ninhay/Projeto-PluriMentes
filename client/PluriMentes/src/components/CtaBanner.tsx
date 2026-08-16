import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="bg-pm-dark relative overflow-hidden rounded-3xl px-8 py-16 sm:px-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="from-pm-yellow/10 absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l via-transparent to-transparent" />
          <div className="from-pm-blue/15 absolute bottom-0 left-0 h-2/3 w-1/2 bg-gradient-to-tr via-transparent to-transparent" />
        </div>

        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-white/50">
            CONTEXTO
          </p>
          <h2 className="font-display mt-5 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
            Toda mente aprende de um jeito.{" "}
            <span className="text-pm-yellow">Todos os jeitos importam.</span>
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-white/60">
            Nosso projeto nasceu para transformar informação em conhecimento. Criamos este espaço para ampliar a compreensão sobre a neurodiversidade e aproximar profissionais, estudantes e famílias de informações que favoreçam o respeito e o acolhimento. Conheça quem somos e por que este projeto existe.
          </p>
          <a
            href={ROUTES.sobreNos}
            className="bg-pm-yellow text-pm-ink mt-9 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
          >
            Conheça o projeto
            <ArrowRight size={18} strokeWidth={2.25} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
