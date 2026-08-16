import type { SVGProps } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";

interface CartaoComunidade {
  numero: string;
  titulo: string;
  texto: string;
  corBadge: string;
}

const cartoes: CartaoComunidade[] = [
  {
    numero: "01",
    titulo: "Como acolher uma pessoa neurodivergente",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    corBadge: "bg-pm-purple",
  },
  {
    numero: "02",
    titulo: "Como apoiar um aluno",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    corBadge: "bg-pm-orange",
  },
  {
    numero: "03",
    titulo: "Como lidar com diferenças",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    corBadge: "bg-pm-yellow",
  },
  {
    numero: "04",
    titulo: "A importância da empatia",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    corBadge: "bg-pm-red",
  },
  {
    numero: "05",
    titulo: "Comunicação",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    corBadge: "bg-pm-green",
  },
  {
    numero: "06",
    titulo: "Inclusão escolar",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    corBadge: "bg-pm-blue",
  },
];

function IconeCoracaoUniao(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
      <path d="m18 15-2-2" />
      <path d="m15 18-2-2" />
    </svg>
  );
}

function Blob({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  );
}

interface CartaoProps extends CartaoComunidade {
  delay?: number;
}

function CartaoComunidadeItem({
  numero,
  titulo,
  texto,
  corBadge,
  delay = 0,
}: CartaoProps) {
  return (
    <article
      className="animate-fade-up border-pm-ink/5 rounded-3xl border bg-white/60 p-8 shadow-sm md:p-10"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-5">
        <span
          className={`font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white ${corBadge}`}
        >
          {numero}
        </span>
        <span aria-hidden="true" className="bg-pm-ink/10 h-px flex-1" />
      </div>

      <h2 className="font-display text-pm-ink mt-8 text-2xl font-bold">
        {titulo}
      </h2>
      <p className="text-pm-gray mt-4 leading-relaxed">{texto}</p>
    </article>
  );
}

export default function ComunidadePage() {
  return (
    <main className="bg-pm-bg font-body text-pm-ink relative min-h-screen overflow-hidden">
      <Header />
      <header className="relative">
        <Blob className="bg-pm-green/30 -top-32 -right-28 h-96 w-96" />
        <Blob className="bg-pm-red/25 bottom-0 -left-28 h-80 w-80" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-24 md:px-10 md:pt-28">
          <div className="animate-pop-in bg-pm-green flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm">
            <IconeCoracaoUniao className="h-7 w-7 text-white" />
          </div>

          <p className="animate-fade-up text-pm-gray mt-12 text-xs font-semibold tracking-[0.3em] uppercase">
            Para alunos, familiares e comunidade escolar
          </p>

          <h1
            className="animate-fade-up font-display mt-6 text-6xl font-extrabold tracking-tight md:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Comunidade
          </h1>

          <p
            className="animate-fade-up text-pm-gray mt-6 text-xl md:text-2xl"
            style={{ animationDelay: "240ms" }}
          >
            Acolhimento, empatia e convivência no dia a dia.
          </p>
        </div>
      </header>
      <Marquee />

      <section className="relative mx-auto w-full max-w-[1500px] px-6 pt-16 pb-24 md:px-10 md:pt-20">
        <div className="grid gap-8 md:grid-cols-2">
          {cartoes.map((cartao, i) => (
            <CartaoComunidadeItem
              key={cartao.numero}
              {...cartao}
              delay={i * 100}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
