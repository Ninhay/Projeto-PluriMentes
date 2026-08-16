import {
  Puzzle,
  Zap,
  BookOpen,
  Target,
  Users,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { ROUTES } from "@/constants/routes";
import type { NeurodivergenceCard } from "@/types/content";

type CardColor = "blue" | "orange" | "purple" | "red" | "green" | "yellow";

const COLOR_MAP: Record<
  CardColor,
  { bg: string; tagBg: string; tagText: string }
> = {
  blue: { bg: "bg-pm-blue", tagBg: "bg-pm-blue/10", tagText: "text-pm-blue" },
  orange: {
    bg: "bg-pm-orange",
    tagBg: "bg-pm-orange/10",
    tagText: "text-pm-orange",
  },
  purple: {
    bg: "bg-pm-purple",
    tagBg: "bg-pm-purple/10",
    tagText: "text-pm-purple",
  },
  red: { bg: "bg-pm-red", tagBg: "bg-pm-red/10", tagText: "text-pm-red" },
  green: {
    bg: "bg-pm-green",
    tagBg: "bg-pm-green/10",
    tagText: "text-pm-green",
  },
  yellow: {
    bg: "bg-pm-yellow",
    tagBg: "bg-pm-yellow/15",
    tagText: "text-[#a8791a]",
  },
};

const CARDS: NeurodivergenceCard[] = [
  {
    icon: Puzzle,
    href: ROUTES.autismo,
    tag: "TEA",
    title: "Autismo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "blue",
  },
  {
    icon: Zap,
    href: ROUTES.tdah,
    tag: "TDAH",
    title: "TDAH",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "orange",
  },
  {
    icon: BookOpen,
    href: ROUTES.dislexia,
    tag: "DISLEXIA",
    title: "Dislexia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "purple",
  },
  {
    icon: Target,
    href: ROUTES.discalculia,
    tag: "DISCALCULIA",
    title: "Discalculia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "red",
  },
  {
    icon: Users,
    href: ROUTES.tod,
    tag: "TOD",
    title: "TOD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "green",
  },
  {
    icon: Sparkles,
    href: ROUTES.altasHabilidades,
    tag: "AH/SD",
    title: "Altas Habilidades",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "yellow",
  },
];

export default function NeurodivergenceCards() {
  return (
    <section
      id="neurodivergencias"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
    >
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="text-pm-gray text-xs font-semibold tracking-[0.25em]">
            02&nbsp;&nbsp;&nbsp;GUIA ILUSTRADO
          </p>
          <h2 className="font-display text-pm-ink mt-4 text-4xl font-bold lg:text-5xl">
            Conheça as Neurodivergências
          </h2>
        </div>
        <p className="text-pm-gray max-w-sm text-right text-sm leading-relaxed lg:mt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card) => {
          const Icon = card.icon;
          const colors = COLOR_MAP[card.color];
          return (
            <div
              key={card.title}
              className="rounded-2xl border border-black/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg}`}
                >
                  <Icon
                    size={24}
                    strokeWidth={2.25}
                    aria-hidden="true"
                    className="text-white"
                  />
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${colors.tagBg} ${colors.tagText}`}
                >
                  {card.tag}
                </span>
              </div>

              <h3 className="font-display text-pm-ink mt-6 text-xl font-bold">
                {card.title}
              </h3>
              <p className="text-pm-gray mt-3 text-sm leading-relaxed">
                {card.description}
              </p>

              <a
                href={card.href}
                className="group text-pm-ink mt-6 inline-flex items-center gap-3 text-sm font-semibold"
              >
                Saiba mais
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 ${colors.bg}`}
                >
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.25}
                    aria-hidden="true"
                    className="text-white"
                  />
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
