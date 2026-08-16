import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import { ROUTES } from "@/constants/routes";

const conteudo = [
  {
    numero: "01",
    titulo: "O que significa neurodivergência",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    numero: "02",
    titulo: "O conceito de neurodiversidade",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    numero: "03",
    titulo: "Exemplos de neurodivergências",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    numero: "04",
    titulo: "Neurodivergência e neurotipicidade",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    numero: "05",
    titulo: "A importância do respeito e da inclusão",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    numero: "06",
    titulo: "Neurodivergência no ambiente escolar",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function Blob({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-2xl ${className}`}
    />
  );
}

type CartaoNumeradoProps = {
  numero: string;
  titulo: string;
  texto: string;
  delay?: number;
  cor: string;
};

function CartaoNumerado({
  numero,
  titulo,
  texto,
  delay = 0,
  cor,
}: CartaoNumeradoProps) {
  return (
    <article
      className="animate-fade-up border-pm-ink/5 rounded-3xl border bg-white/60 p-8 shadow-sm md:p-12"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="grid gap-6 md:grid-cols-[200px_1fr] md:gap-10">
        <span
          className={`font-display text-5xl leading-none font-extrabold md:text-6xl ${cor}`}
        >
          {numero}
        </span>

        <div>
          <h2 className="font-display text-pm-ink text-2xl font-bold md:text-[1.7rem]">
            {titulo}
          </h2>
          <p className="text-pm-gray mt-4 leading-relaxed">{texto}</p>
        </div>
      </div>
    </article>
  );
}

const explorar = [
  { titulo: "Autismo", cor: "bg-pm-blue", fundo: "bg-pm-blue/10" },
  { titulo: "TDAH", cor: "bg-pm-orange", fundo: "bg-pm-orange/10" },
  { titulo: "Dislexia", cor: "bg-pm-purple", fundo: "bg-pm-purple/10" },
  { titulo: "Discalculia", cor: "bg-pm-red", fundo: "bg-pm-red/10" },
  { titulo: "TOD", cor: "bg-pm-green", fundo: "bg-pm-green/10" },
  {
    titulo: "Altas Habilidades",
    cor: "bg-pm-yellow",
    fundo: "bg-pm-yellow/10",
  },
];

function ContinueExplorando() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <h2
        className={`font-display text-pm-ink text-4xl font-bold md:text-5xl ${
          visivel ? "animate-fade-up" : "opacity-0"
        }`}
      >
        Continue explorando
      </h2>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {explorar.map((item, index) => (
          <a
            key={item.titulo}
            href={`${ROUTES.home}#neurodivergencias`}
            className={`group flex min-h-32 flex-col items-center justify-center rounded-2xl p-5 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-md ${
              visivel ? "animate-pop-in" : "opacity-0"
            } ${item.fundo}`}
            style={{ animationDelay: `${120 + index * 90}ms` }}
          >
            <span className={`h-4 w-4 rounded-full ${item.cor}`} />
            <span className="text-pm-ink mt-5 text-sm font-bold">
              {item.titulo}
            </span>
            <ArrowRight
              size={18}
              className="text-pm-gray mt-3 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default function NeurodivergenciaPage() {
  const coresNumeros = [
    "text-pm-blue",
    "text-pm-purple",
    "text-pm-green",
    "text-pm-red",
    "text-pm-yellow",
    "text-pm-blue",
  ];

  return (
    <div className="bg-pm-bg font-body text-pm-ink relative min-h-screen overflow-hidden">
      <Header />
      <main>
        <header className="relative min-h-[78svh]">
          <Blob className="bg-pm-yellow/60 -top-24 -right-24 h-80 w-80 blur-3xl" />
          <Blob className="bg-pm-purple/30 top-20 left-[33%] h-24 w-24 blur-xl" />
          <Blob className="bg-pm-blue/30 top-[38%] -left-24 h-52 w-52 blur-2xl" />
          <Blob className="bg-pm-green/40 -bottom-28 left-[26%] h-36 w-36 blur-2xl" />
          <Blob className="bg-pm-red/30 right-[26%] -bottom-20 h-40 w-40 blur-2xl" />

          <div className="mx-auto flex min-h-[78svh] w-full max-w-6xl flex-col justify-center px-6 py-20 md:px-10">
            <p className="animate-fade-up text-pm-gray text-xs font-semibold tracking-[0.4em] uppercase">
              Guia Essencial
            </p>

            <h1
              className="animate-fade-up font-display mt-6 text-5xl leading-[1.08] font-extrabold md:text-8xl"
              style={{ animationDelay: "120ms" }}
            >
              O que é
              <span className="text-pm-blue block">
                Neurodivergência<span className="text-pm-ink">?</span>
              </span>
            </h1>

            <p
              className="animate-fade-up text-pm-gray mt-8 max-w-xl leading-relaxed"
              style={{ animationDelay: "240ms" }}
            >
              Uma explicação clara e acessível sobre a diversidade das mentes
              humanas — e por que ela torna a escola (e o mundo) um lugar
              melhor.
            </p>
          </div>
        </header>

        <section className="relative mx-auto w-full max-w-6xl px-6 pb-24 md:px-10">
          <div className="space-y-8">
            {conteudo.map((item, i) => (
              <CartaoNumerado
                key={item.numero}
                {...item}
                cor={coresNumeros[i]}
                delay={i * 120}
              />
            ))}
          </div>
        </section>

        <Marquee />
        <ContinueExplorando />
        <Footer />
      </main>
    </div>
  );
}
