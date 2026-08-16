import { GraduationCap } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";

const CARTOES = [
  { numero: "01", titulo: "Planejamento inclusivo", corBadge: "bg-pm-blue" },
  { numero: "02", titulo: "Adaptações pedagógicas", corBadge: "bg-pm-green" },
  {
    numero: "03",
    titulo: "Práticas em sala de aula",
    corBadge: "bg-pm-yellow",
  },
  { numero: "04", titulo: "Avaliação acessível", corBadge: "bg-pm-red" },
  {
    numero: "05",
    titulo: "Parceria com as famílias",
    corBadge: "bg-pm-purple",
  },
  { numero: "06", titulo: "Formação continuada", corBadge: "bg-pm-orange" },
];

const TEXTO =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function Blob({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  );
}

export default function EducacaoPage() {
  return (
    <main className="bg-pm-bg font-body text-pm-ink relative min-h-screen overflow-hidden">
      <Header />
      <header className="relative">
        <Blob className="bg-pm-blue/30 -top-32 -right-28 h-96 w-96" />
        <Blob className="bg-pm-yellow/25 bottom-0 -left-28 h-80 w-80" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-24 md:px-10 md:pt-28">
          <div className="animate-pop-in bg-pm-blue flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm">
            <GraduationCap
              size={30}
              strokeWidth={2.25}
              aria-hidden="true"
              className="text-white"
            />
          </div>
          <p className="animate-fade-up text-pm-gray mt-12 text-xs font-semibold tracking-[0.3em] uppercase">
            Para professores e profissionais da escola
          </p>
          <h1
            className="animate-fade-up font-display mt-6 text-6xl font-extrabold tracking-tight md:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Educação
          </h1>
          <p
            className="animate-fade-up text-pm-gray mt-6 text-xl md:text-2xl"
            style={{ animationDelay: "240ms" }}
          >
            Caminhos para uma escola mais acessível e acolhedora.
          </p>
        </div>
      </header>
      <Marquee />

      <section className="relative mx-auto w-full max-w-[1500px] px-6 pt-16 pb-24 md:px-10 md:pt-20">
        <div className="grid gap-8 md:grid-cols-2">
          {CARTOES.map((cartao, indice) => (
            <article
              key={cartao.numero}
              className="animate-fade-up border-pm-ink/5 rounded-3xl border bg-white/60 p-8 shadow-sm md:p-10"
              style={{ animationDelay: `${indice * 100}ms` }}
            >
              <div className="flex items-center gap-5">
                <span
                  className={`font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white ${cartao.corBadge}`}
                >
                  {cartao.numero}
                </span>
                <span aria-hidden="true" className="bg-pm-ink/10 h-px flex-1" />
              </div>
              <h2 className="font-display text-pm-ink mt-8 text-2xl font-bold">
                {cartao.titulo}
              </h2>
              <p className="text-pm-gray mt-4 leading-relaxed">{TEXTO}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
