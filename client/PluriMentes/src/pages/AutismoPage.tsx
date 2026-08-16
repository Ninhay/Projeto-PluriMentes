import { CartaoNumerado } from "@/components/CartaoNumerado";
import type { NumberedCardProps } from "@/types/content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ProximaNeurodivergencia } from "@/components/ProximaNeuroDivergencia";
import { ROUTES } from "@/constants/routes";

const secoes: NumberedCardProps[] = [
  {
    numero: "01",
    titulo: "O que é o autismo?",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    numero: "02",
    titulo: "Características",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    numero: "03",
    titulo: "Possíveis necessidades de apoio",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    numero: "04",
    titulo: "Estratégias de acolhimento",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    numero: "05",
    titulo: "Inclusão no ambiente escolar",
    texto:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

function IconeQuebraCabeca(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.5-1.02.968a2.501 2.501 0 1 1-3.214-3.214c.446-.166.855-.497.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61a2.404 2.404 0 0 1 1.705-.707c.618 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.5 1.02-.968a2.501 2.501 0 1 1 3.214 3.214c-.446.166-.855.497-.925.968a.98.98 0 0 1-.276.837z" />
    </svg>
  );
}

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
              <IconeQuebraCabeca className="h-10 w-10 text-white md:h-12 md:w-12" />
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
