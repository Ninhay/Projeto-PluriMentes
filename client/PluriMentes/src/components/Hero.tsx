import { ArrowRight } from "lucide-react";

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
    <section id="inicio">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8 lg:pt-20">
        <p className="animate-fade-up text-xs font-semibold tracking-[0.25em] text-pm-gray">
          PLATAFORMA EDUCATIVA · INCLUSÃO ESCOLAR
        </p>

        <h1 className="animate-fade-up mt-6 font-display font-extrabold leading-[0.95] tracking-tight text-pm-ink [animation-delay:120ms]">
          <span className="block text-[clamp(3.5rem,10vw,8rem)]">PLURI</span>
          <span className="block text-[clamp(3.5rem,10vw,8rem)]">
            {MENTES_COLORS.map(({ char, color }, i) => (
              <span key={i} className={color}>
                {char}
              </span>
            ))}
          </span>
        </h1>

        <p className="animate-fade-up mt-8 max-w-xl text-lg text-pm-gray [animation-delay:240ms]">
          Plataforma educativa para conscientização sobre neurodivergência e
          inclusão escolar.
        </p>

        <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-4 [animation-delay:360ms]">
          <a
            href="#neurodivergencias"
            className="group inline-flex items-center gap-2 rounded-full bg-pm-ink px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Conheça as neurodivergências
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>

          <a
            href="#neurodivergencia"
            className="inline-flex items-center gap-2 rounded-full border border-pm-ink/15 bg-white px-6 py-3.5 text-sm font-semibold text-pm-ink transition-colors hover:border-pm-ink/30"
          >
            O que é neurodivergência?
          </a>
        </div>

        <div className="mt-20 flex flex-col items-center justify-center gap-2 text-xs font-semibold tracking-[0.3em] text-pm-gray/70">
          <span>ROLE</span>
          <span className="h-10 w-px bg-pm-gray/30" />
        </div>
      </div>
    </section>
  );
}
