import { CartaoNumerado } from "@/components/CartaoNumerado";
import type { NumberedCardProps } from "@/types/content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ProximaNeurodivergencia } from "@/components/ProximaNeuroDivergencia";
import { ROUTES } from "@/constants/routes";
import { Puzzle } from "lucide-react";

const secoes: NumberedCardProps[] = [
  {
    numero: "01",
    titulo: "O que é o autismo?",
    texto:
      "O autismo, ou Transtorno do Espectro Autista (TEA), é uma condição do neurodesenvolvimento que pode influenciar a comunicação, a interação social e a forma como a pessoa percebe e vivencia o mundo. Cada pessoa autista é diferente, por isso suas características, habilidades e necessidades podem variar bastante.",
    link: {
      href: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/a/autismo",
      label: "Saiba mais sobre o autismo",
    },
  },
  {
    numero: "02",
    titulo: "Características",
    texto:
      "Entre as características que podem estar presentes estão diferenças na comunicação e na interação social, interesses específicos, comportamentos repetitivos, preferência por determinadas rotinas e diferentes formas de responder a estímulos sensoriais, como sons, luzes, cheiros e texturas. Essas características não aparecem da mesma maneira em todas as pessoas autistas.",
  },
  {
    numero: "03",
    titulo: "Possíveis necessidades de apoio",
    texto:
      "As necessidades de apoio dependem de cada pessoa. Algumas podem precisar de auxílio na comunicação, na organização da rotina, nas atividades escolares ou na adaptação a mudanças e estímulos do ambiente. O apoio deve ser individualizado e pode envolver família, escola e profissionais especializados, de acordo com as necessidades da pessoa.",
  },
  {
    numero: "04",
    titulo: "Estratégias de acolhimento",
    texto:
      "Um bom acolhimento começa pelo respeito às diferenças e pela compreensão das necessidades de cada pessoa. Na escola, podem ajudar atitudes como manter uma rotina organizada, explicar mudanças com antecedência, utilizar recursos visuais quando necessário, comunicar-se de forma clara, respeitar o tempo do estudante e oferecer um ambiente confortável e seguro. Também é importante combater o preconceito e o bullying.",
  },
  {
    numero: "05",
    titulo: "Inclusão no ambiente escolar",
    texto:
      "A inclusão acontece quando o estudante autista tem condições de participar das atividades escolares, aprender e conviver com os demais, sem ser excluído por suas diferenças. Para isso, a escola pode adaptar estratégias, materiais e ambientes conforme as necessidades do estudante, promovendo acessibilidade, respeito e participação.",
  },
];

export default function AutismoPage() {
  return (
    <main className="bg-pm-bg font-body text-pm-ink min-h-screen">
      <Header />
      <header className="bg-pm-blue relative overflow-hidden">
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform group-hover:-translate-x-0.5"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
            Todas as neurodivergências
          </a>
          <div className="mt-10 flex items-center gap-8 md:gap-10">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-white/20 md:h-28 md:w-28">
              <Puzzle
                className="h-10 w-10 text-white md:h-12 md:w-12"
                aria-hidden="true"
              />
            </div>

            <div>
              <h1 className="font-display text-6xl font-extrabold tracking-tight text-white md:text-7xl">
                Autismo
              </h1>
              <p className="mt-3 text-xl text-white/70 md:text-2xl">TEA</p>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1500px] px-6 py-16 md:px-10 md:py-20">
        <div className="space-y-8">
          {secoes.map((secao, i) => (
            <CartaoNumerado key={secao.numero} {...secao} delay={i * 120} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1500px] px-6 pb-24 md:px-10">
        <ProximaNeurodivergencia nome="TDAH" href={ROUTES.tdah} />
      </section>
      <Footer />
    </main>
  );
}
