import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-pm-dark px-8 py-16 sm:px-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-pm-yellow/10 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 h-2/3 w-1/2 bg-gradient-to-tr from-pm-blue/15 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-white/50">
            PLURIMENTES
          </p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Toda mente aprende de um jeito.{" "}
            <span className="text-pm-yellow">Todos os jeitos importam.</span>
          </h2>
          <p className="mt-6 max-w-xl text-white/60 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <a
            href="#quem-somos"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-pm-yellow px-6 py-3.5 text-sm font-semibold text-pm-ink transition-transform hover:scale-[1.02]"
          >
            Conheça o projeto
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
