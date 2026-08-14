import type { LucideIcon } from "lucide-react";
import { Puzzle, Zap, BookOpen, Target, Users, Sparkles, ArrowUpRight } from "lucide-react";

type CardColor = "blue" | "orange" | "purple" | "red" | "green" | "yellow";

interface CardData {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  color: CardColor;
}

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

const CARDS: CardData[] = [
  {
    icon: Puzzle,
    tag: "TEA",
    title: "Autismo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "blue",
  },
  {
    icon: Zap,
    tag: "TDAH",
    title: "TDAH",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "orange",
  },
  {
    icon: BookOpen,
    tag: "DISLEXIA",
    title: "Dislexia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "purple",
  },
  {
    icon: Target,
    tag: "DISCALCULIA",
    title: "Discalculia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "red",
  },
  {
    icon: Users,
    tag: "TOD",
    title: "TOD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "green",
  },
  {
    icon: Sparkles,
    tag: "AH/SD",
    title: "Altas Habilidades",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    color: "yellow",
  },
];

export default function NeurodivergenceCards() {
  return (
    <section id="neurodivergencias" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-pm-gray">
            02&nbsp;&nbsp;&nbsp;GUIA ILUSTRADO
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-pm-ink lg:text-5xl">
            Conheça as Neurodivergências
          </h2>
        </div>
        <p className="max-w-sm text-right text-sm text-pm-gray leading-relaxed lg:mt-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
              className="rounded-2xl border border-black/5 bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg}`}>
                  <Icon size={22} className="text-white" />
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${colors.tagBg} ${colors.tagText}`}
                >
                  {card.tag}
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-bold text-pm-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-pm-gray">
                {card.description}
              </p>

              <a
                href="#"
                className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-pm-ink"
              >
                Saiba mais
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full ${colors.bg}`}
                >
                  <ArrowUpRight size={14} className="text-white" />
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
