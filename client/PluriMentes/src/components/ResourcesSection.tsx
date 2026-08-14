import type { LucideIcon } from "lucide-react";
import { GraduationCap, HeartHandshake, Bookmark, ArrowRight } from "lucide-react";

interface ResourceCard {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bg: string;
  icon: LucideIcon;
}

const CARDS: ResourceCard[] = [
  {
    id: "educacao",
    eyebrow: "PARA PROFESSORES E PROFISSIONAIS DA ESCOLA",
    title: "Educação",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bg: "bg-pm-blue",
    icon: GraduationCap,
  },
  {
    id: "comunidade",
    eyebrow: "PARA ALUNOS, FAMILIARES E COMUNIDADE ESCOLAR",
    title: "Comunidade",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bg: "bg-pm-green",
    icon: HeartHandshake,
  },
  {
    id: "glossario",
    eyebrow: "TERMOS E CONCEITOS EXPLICADOS DE FORMA SIMPLES",
    title: "Glossário",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bg: "bg-pm-orange",
    icon: Bookmark,
  },
];

export default function ResourcesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <p className="text-xs font-semibold tracking-[0.25em] text-pm-gray">
        03&nbsp;&nbsp;&nbsp;PARA CADA PESSOA
      </p>
      <h2 className="mt-4 font-display text-4xl font-bold text-pm-ink lg:text-5xl">
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
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
                {card.eyebrow}
              </p>
              <h3 className="mt-4 font-display text-3xl font-bold">
                {card.title}
              </h3>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/85">
                {card.description}
              </p>

              <a
                href="#"
                className="mt-auto inline-flex w-fit items-center gap-3 pt-8 text-sm font-semibold"
              >
                Explorar
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </span>
              </a>

              <Icon
                size={110}
                strokeWidth={1.2}
                className="pointer-events-none absolute -bottom-4 -right-4 text-white/10"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
