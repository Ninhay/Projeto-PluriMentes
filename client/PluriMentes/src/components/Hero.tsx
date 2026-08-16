import { ArrowRight } from "lucide-react";
import { ROUTES } from "@/constants/routes";

const MENTES_COLORS = [
  { char: "M", color: "text-pm-blue" },
  { char: "E", color: "text-pm-orange" },
  { char: "N", color: "text-pm-yellow" },
  { char: "T", color: "text-pm-green" },
  { char: "E", color: "text-pm-purple" },
  { char: "S", color: "text-pm-red" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="flex min-h-[calc(100svh-73px)] items-center"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
        <p className="animate-fade-up text-pm-gray text-xs font-semibold tracking-[0.5em]">
          PLATAFORMA EDUCATIVA · INCLUSÃO ESCOLAR
        </p>

        <h1 className="animate-fade-up font-display text-pm-ink mt-6 leading-[0.95] font-extrabold tracking-tight [animation-delay:120ms]">
          <span className="block text-[clamp(5rem,20vw,12rem)]">PLURI</span>
          <span className="block text-[clamp(5rem,20vw,12rem)]">
            {MENTES_COLORS.map(({ char, color }, i) => (
              <span key={i} className={color}>
                {char}
              </span>
            ))}
          </span>
        </h1>

        <p className="animate-fade-up text-pm-gray mt-8 max-w-xl text-lg [animation-delay:240ms]">
          Plataforma educativa para conscientização sobre neurodivergência e
          inclusão escolar.
        </p>

        <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-4 [animation-delay:360ms]">
          <a
            href={`${ROUTES.home}#neurodivergencias`}
            className="group bg-pm-ink inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Conheça as neurodivergências
            <ArrowRight
              size={18}
              strokeWidth={2.25}
              aria-hidden="true"
              className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

          <a
            href={ROUTES.neurodivergencia}
            className="border-pm-ink/15 text-pm-ink hover:border-pm-ink/30 inline-flex items-center gap-2 rounded-full border bg-white px-6 py-3.5 text-sm font-semibold transition-colors"
          >
            O que é neurodivergência?
          </a>
        </div>
      </div>
    </section>
  );
}
