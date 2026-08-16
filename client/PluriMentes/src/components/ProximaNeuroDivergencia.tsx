import type { SVGProps } from "react";

export interface ProximaNeurodivergenciaProps {
  nome: string;
  href: string;
  /** Classe Tailwind da cor do ponto (padrão: laranja) */
  corPonto?: string;
}

function IconeSetaDireita(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function ProximaNeurodivergencia({
  nome,
  href,
  corPonto = "bg-pm-orange",
}: ProximaNeurodivergenciaProps) {
  return (
    <a
      href={href}
      aria-label={`Próxima neurodivergência: ${nome}`}
      className="group bg-pm-ink hover:bg-pm-dark focus-visible:outline-pm-blue flex items-center justify-between gap-6 rounded-3xl p-10 transition-colors focus-visible:outline-2 md:p-12"
    >
      <div>
        <p className="text-xs font-semibold tracking-[0.3em] text-white/50 uppercase">
          Próxima neurodivergência
        </p>

        <h2 className="font-display mt-3 text-4xl font-extrabold text-white md:text-5xl">
          {nome}
          <span
            aria-hidden="true"
            className={`ml-3 inline-block h-3 w-3 rounded-full ${corPonto} md:h-3.5 md:w-3.5`}
          />
        </h2>
      </div>

      <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white/20">
        <IconeSetaDireita className="transition-transform group-hover:translate-x-1" />
      </span>
    </a>
  );
}
