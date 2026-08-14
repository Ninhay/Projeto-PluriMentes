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
    <section id="inicio" className="relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-10 top-24 h-64 w-64 rounded-full bg-pm-blue/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-pm-yellow/25 blur-3xl" />
        <div className="absolute bottom-0 right-24 h-72 w-72 rounded-full bg-pm-red/20 blur-3xl" />
        <div className="absolute bottom-0 left-24 h-56 w-56 rounded-full bg-pm-green/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-8 lg:pt-20">
        <p className="text-xs font-semibold tracking-[0.25em] text-pm-gray">
          PLATAFORMA EDUCATIVA · INCLUSÃO ESCOLAR
        </p>

        <h1 className="mt-6 font-display font-extrabold leading-[0.95] tracking-tight text-pm-ink">
          <span className="block text-[clamp(3.5rem,10vw,8rem)]">PLURI</span>
          <span className="block text-[clamp(3.5rem,10vw,8rem)]">
            {MENTES_COLORS.map(({ char, color }, i) => (
              <span key={i} className={color}>
                {char}
              </span>
            ))}
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-lg text-pm-gray">
          Plataforma educativa para conscientização sobre neurodivergência e
          inclusão escolar.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#neurodivergencias"
            className="inline-flex items-center gap-2 rounded-full bg-pm-ink px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Conheça as neurodivergências
            <ArrowRight size={16} />
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
