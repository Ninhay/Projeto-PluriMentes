import type { SVGProps } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";

interface CartaoComunidade {
  numero: string;
  titulo: string;
  texto: string;
  textoExtra?: string;
  corBadge: string;
  link?: {
    href: string;
    label: string;
  };
}

const cartoes: CartaoComunidade[] = [
  {
    numero: "01",
    titulo: "Como acolher uma pessoa neurodivergente",
    texto:
      " Lidar com uma pessoa neurodivergente exige escuta ativa e respeito aos limites pessoais de cada um. Não acredite que acolher um neurodivergente é tentar mudar seu jeito de ser, muito pelo contrário, é entender e fazer parte da construção de um ambiente seguro. Antes de tudo, vale ressaltar que todos os neurodivergentes possuem suas particularidades, por isso a importância de compreender e se colocar no lugar do próximo. Tenha empatia com o indivíduo se ele necessitar de espaço, não tenha medo de perguntar antes de tomar alguma iniciativa que possa desencadear situações de desconforto, busque sempre entender seus limites sensoriais para evitar sobrecargas físicas e mentais, evite rótulos (cada pessoa tem sua forma de vivenciar a neurodivergência).",
    corBadge: "bg-pm-purple",
  },
  {
    numero: "02",
    titulo: "Como apoiar um aluno",
    texto:
      "Para apoiar um aluno neurodivergente, é de extrema necessidade que o professor compreenda as necessidades especiais do aluno, para assim, trazer uma rotina com objetivos claros e trazer um material adaptado de acordo com o estudante. Evite os materiais que possam sobrecarregar o aluno com estímulos visuais e auditivos, traga tarefas de socialização voltadas para os estudantes e ofereça ao aluno mais possibilidades de avaliação, se perceberem em conjunto com a gestão escolar, a família e o próprio neurodivergente que há a necessidade de um novo método avaliativo.",
    corBadge: "bg-pm-orange",
  },
  {
    numero: "03",
    titulo: "Como lidar com diferenças",
    texto:
      "Antes de tudo, seja um exemplo de respeito e empatia para as demais pessoas; quando falhar, reconheça o próprio erro. Conscientize os demais sobre termos preconceituosos, busque diálogo com o neurodivergente – respeitando sempre seu espaço, é claro – proponha atividades de acolhimento e inclusão.",
    corBadge: "bg-pm-yellow",
  },
  {
    numero: "04",
    titulo: "A importância da empatia",
    texto:
      "A empatia — a capacidade de se colocar no lugar do outro e sentir suas dores ou perspectivas — tornou-se uma necessidade urgente e, ao mesmo tempo, um recurso raro na sociedade atual. Marcada pela polarização, pelo excesso de conexões digitais superficiais e pelo individualismo, a cultura contemporânea frequentemente dificulta o exercício genuíno de escutar e validar o sofrimento alheio. Ela é importante na construção de uma sociedade mais digna, reduzindo conflitos e fortalecendo as relações humanas, principalmente quando for tratar de um neurodivergente.",
    corBadge: "bg-pm-red",
  },
  {
    numero: "05",
    titulo: "Comunicação",
    texto:
      "A comunicação é fundamental para a convivência, a aprendizagem e a construção de relações respeitosas. No contexto da neurodiversidade, é importante compreender que nem todas as pessoas se comunicam da mesma maneira. Pessoas neurodivergentes podem apresentar diferentes formas de comunicação, como fala, escrita, gestos, expressões faciais, imagens, símbolos ou tecnologias assistivas. Algumas podem precisar de mais tempo para compreender informações ou expressar o que sentem e pensam.",
    corBadge: "bg-pm-green",
  },
  {
    numero: "06",
    titulo: "Inclusão escolar",
    texto:
      "Os quatro pilares da educação propostos pela UNESCO — aprender a conhecer, fazer, viver juntos e ser — contribuem para uma escola mais inclusiva. Eles valorizam não apenas o aprendizado, mas também o respeito às diferenças, a cooperação e o desenvolvimento de cada estudante. Na inclusão escolar, esses pilares ajudam a construir um ambiente onde todos possam aprender, participar, conviver e desenvolver suas potencialidades, respeitando diferentes formas de aprender, pensar e se comunicar.",
      corBadge: "bg-pm-blue",
    textoExtra:
      "Saiba mais sobre os quatro pilares da educação no site ",
    link: {
      href: "https://institutoayrtonsenna.org.br/4-pilares-educacao-unesco/",
      label: "4 Pilares da Educação da UNESCO - Instituto Ayrton Senna.",
    },
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
  textoExtra,
  corBadge,
  link,
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
      <p className="text-pm-gray mt-4 leading-relaxed">
        {texto}
        {textoExtra ? (
          <>
            <br /> <br />
            {textoExtra}
          </>
        ) : null}
        {link ? (
          <>
            <br />
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-pm-blue underline underline-offset-2 transition hover:text-pm-ink"
            >
              {link.label}
            </a>
          </>
        ) : null}
      </p>
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
