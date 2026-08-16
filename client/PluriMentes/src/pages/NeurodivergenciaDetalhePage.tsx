import type { LucideIcon } from "lucide-react";
import {
  ArrowLeft,
  BookOpen,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { CartaoNumerado } from "@/components/CartaoNumerado";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ProximaNeurodivergencia } from "@/components/ProximaNeuroDivergencia";
import { ROUTES } from "@/constants/routes";

type Neurodivergencia = {
  titulo: string;
  sigla: string;
  rota: string;
  proxima: string;
  proximaRota: string;
  cor: string;
  corPonto: string;
  icone: LucideIcon;
  secoes: string[];
};

const TEXTO_PADRAO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const NEURODIVERGENCIAS: Neurodivergencia[] = [
  {
    titulo: "TDAH",
    sigla: "Transtorno do Déficit de Atenção e Hiperatividade",
    rota: ROUTES.tdah,
    proxima: "Dislexia",
    proximaRota: ROUTES.dislexia,
    cor: "bg-pm-orange",
    corPonto: "bg-pm-purple",
    icone: Zap,
    secoes: [
      "O que é o TDAH?",
      "Características",
      "Possíveis necessidades de apoio",
      "Estratégias de acolhimento",
      "Inclusão no ambiente escolar",
    ],
  },
  {
    titulo: "Dislexia",
    sigla: "Transtorno Específico de Aprendizagem",
    rota: ROUTES.dislexia,
    proxima: "Discalculia",
    proximaRota: ROUTES.discalculia,
    cor: "bg-pm-purple",
    corPonto: "bg-pm-red",
    icone: BookOpen,
    secoes: [
      "O que é a dislexia?",
      "Características",
      "Possíveis necessidades de apoio",
      "Estratégias de acolhimento",
      "Inclusão no ambiente escolar",
    ],
  },
  {
    titulo: "Discalculia",
    sigla: "Transtorno Específico de Aprendizagem em Matemática",
    rota: ROUTES.discalculia,
    proxima: "TOD",
    proximaRota: ROUTES.tod,
    cor: "bg-pm-red",
    corPonto: "bg-pm-green",
    icone: Target,
    secoes: [
      "O que é a discalculia?",
      "Características",
      "Possíveis necessidades de apoio",
      "Estratégias de acolhimento",
      "Inclusão no ambiente escolar",
    ],
  },
  {
    titulo: "TOD",
    sigla: "Transtorno Opositivo-Desafiador",
    rota: ROUTES.tod,
    proxima: "Altas Habilidades",
    proximaRota: ROUTES.altasHabilidades,
    cor: "bg-pm-green",
    corPonto: "bg-pm-yellow",
    icone: Users,
    secoes: [
      "O que é o TOD?",
      "Características",
      "Possíveis necessidades de apoio",
      "Estratégias de acolhimento",
      "Inclusão no ambiente escolar",
    ],
  },
  {
    titulo: "Altas Habilidades",
    sigla: "AH/SD — Altas Habilidades ou Superdotação",
    rota: ROUTES.altasHabilidades,
    proxima: "Autismo",
    proximaRota: ROUTES.autismo,
    cor: "bg-pm-yellow",
    corPonto: "bg-pm-blue",
    icone: Sparkles,
    secoes: [
      "O que são altas habilidades?",
      "Características",
      "Possíveis necessidades de apoio",
      "Estratégias de acolhimento",
      "Inclusão no ambiente escolar",
    ],
  },
];

export default function NeurodivergenciaDetalhePage({
  pathname,
}: {
  pathname: string;
}) {
  const neurodivergencia = NEURODIVERGENCIAS.find(
    (pagina) => pagina.rota === pathname,
  );
  if (!neurodivergencia) return null;

  const Icone = neurodivergencia.icone;

  return (
    <main className="bg-pm-bg font-body text-pm-ink min-h-screen">
      <Header />
      <header className={`relative overflow-hidden ${neurodivergencia.cor}`}>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-48 -right-40 h-[560px] w-[560px] rounded-full bg-white/10"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-[46%] left-[25%] h-52 w-52 rounded-full bg-white/10"
        />

        <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-24 md:px-10 md:pt-28">
          <a
            href={ROUTES.neurodivergencia}
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
          >
            <ArrowLeft
              size={18}
              strokeWidth={2.25}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-x-0.5"
            />
            Todas as neurodivergências
          </a>

          <div className="mt-10 flex items-center gap-8 md:gap-10">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white/20 md:h-28 md:w-28">
              <Icone
                size={48}
                strokeWidth={2}
                aria-hidden="true"
                className="text-white"
              />
            </div>

            <div>
              <h1 className="font-display text-5xl font-extrabold tracking-tight text-white md:text-7xl">
                {neurodivergencia.titulo}
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-white/70 md:text-2xl">
                {neurodivergencia.sigla}
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1500px] px-6 py-16 md:px-10 md:py-20">
        <div className="space-y-8">
          {neurodivergencia.secoes.map((titulo, indice) => (
            <CartaoNumerado
              key={titulo}
              numero={String(indice + 1).padStart(2, "0")}
              titulo={titulo}
              texto={TEXTO_PADRAO}
              delay={indice * 120}
              corNumero={neurodivergencia.cor.replace("bg-", "text-")}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1500px] px-6 pb-24 md:px-10">
        <ProximaNeurodivergencia
          nome={neurodivergencia.proxima}
          href={neurodivergencia.proximaRota}
          corPonto={neurodivergencia.corPonto}
        />
      </section>
      <Footer />
    </main>
  );
}
