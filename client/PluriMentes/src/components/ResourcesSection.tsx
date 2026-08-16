import {
  GraduationCap,
  HeartHandshake,
  Bookmark,
  ArrowRight,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";
import type { ResourceCard } from "@/types/content";

const CARDS: ResourceCard[] = [
  {
    id: "educacao",
    href: ROUTES.educacao,
    eyebrow: "PARA PROFESSORES E PROFISSIONAIS DA ESCOLA",
    title: "Educação",
    description:
      "Conteúdos e estratégias para apoiar práticas pedagógicas inclusivas e promover a aprendizagem de estudantes neurodivergentes.",
    bg: "bg-pm-blue",
    icon: GraduationCap,
  },
  {
    id: "comunidade",
    href: ROUTES.comunidade,
    eyebrow: "PARA ALUNOS, FAMILIARES E COMUNIDADE ESCOLAR",
    title: "Comunidade",
    description:
      "Informações e orientações para fortalecer o acolhimento, a inclusão e a participação de pessoas neurodivergentes na comunidade escolar.",
    bg: "bg-pm-green",
    icon: HeartHandshake,
  },
  {
    id: "glossario",
    href: ROUTES.glossario,
    eyebrow: "CONCEITOS",
    title: "Glossário",
    description:
      "Encontre definições e conceitos sobre neurodivergência, inclusão, educação especial e diferentes condições do neurodesenvolvimento. Consulte explicações sobre termos importantes, características, estratégias de apoio e conceitos relacionados ao ambiente educacional.",
    bg: "bg-pm-orange",
    icon: Bookmark,
  },
];

export default function ResourcesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <p className="text-pm-gray text-xs font-semibold tracking-[0.25em]">
        03&nbsp;&nbsp;&nbsp;PARA CADA PESSOA
      </p>
      <h2 className="font-display text-pm-ink mt-4 text-4xl font-bold lg:text-5xl">
        Recursos por Público
      </h2>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              id={card.id}
              className={`group relative flex min-h-[380px] flex-col overflow-hidden rounded-2xl p-8 text-white transition-transform duration-300 hover:-translate-y-1 ${card.bg}`}
            >
              <p className="text-xs font-semibold tracking-[0.15em] text-white/80 uppercase">
                {card.eyebrow}
              </p>
              <h3 className="font-display mt-4 text-3xl font-bold">
                {card.title}
              </h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/85">
                {card.description}
              </p>

              <a
                href={card.href}
                className="mt-auto inline-flex w-fit items-center gap-3 pt-8 text-sm font-semibold"
              >
                Explorar
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight size={17} strokeWidth={2.25} aria-hidden="true" />
                </span>
              </a>

              <Icon
                size={110}
                strokeWidth={1.2}
                aria-hidden="true"
                className="pointer-events-none absolute -right-4 -bottom-4 text-white/10"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
