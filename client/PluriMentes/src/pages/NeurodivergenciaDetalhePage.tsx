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
import type { NumberedCardProps } from "@/types/content";

type Neurodivergencia = {
  titulo: string;
  sigla: string;
  rota: string;
  proxima: string;
  proximaRota: string;
  cor: string;
  corPonto: string;
  icone: LucideIcon;
  secoes: NumberedCardProps[];
};

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
      {
        numero: "01",
        titulo: "O que é o TDAH?",
        texto:
          "O Transtorno do Déficit de Atenção e Hiperatividade (TDAH) é uma condição do neurodesenvolvimento que pode afetar a atenção, o controle dos impulsos e o nível de atividade da pessoa. Essas características podem influenciar a aprendizagem, a organização e a convivência no ambiente escolar.",
        link: {
          href: "https://tdah.org.br/tdah-e-o-processo-de-aprendizagem/",
          label: "Saiba mais sobre o TDAH",
        },
      },
      {
        numero: "02",
        titulo: "Características",
        texto:
          "Entre as características mais comuns estão a desatenção, a hiperatividade e a impulsividade. A pessoa pode apresentar dificuldade para manter o foco, organizar tarefas, controlar impulsos, lembrar informações e permanecer em uma atividade por muito tempo. Essas características podem variar de uma pessoa para outra.",
      },
      {
        numero: "03",
        titulo: "Possíveis necessidades de apoio",
        texto:
          "Algumas pessoas com TDAH podem precisar de ajuda para organizar suas atividades, administrar o tempo, manter a atenção e acompanhar tarefas mais longas. Na escola, podem ser úteis atividades divididas em etapas menores, instruções claras, acompanhamento mais próximo e diferentes recursos para facilitar a aprendizagem.",
      },
      {
        numero: "04",
        titulo: "Estratégias de acolhimento",
        texto:
          "O acolhimento deve acontecer com paciência, respeito e compreensão, evitando rótulos e punições relacionadas às dificuldades do estudante. Algumas estratégias são estabelecer uma rotina organizada, dar orientações objetivas, oferecer feedback positivo, permitir pequenas pausas e ajudar o aluno a organizar seus materiais e tarefas.",
      },
      {
        numero: "05",
        titulo: "Inclusão no ambiente escolar",
        texto:
          "A inclusão do estudante com TDAH envolve criar condições para que ele participe das atividades e tenha oportunidades de aprender. A escola pode adaptar estratégias e formas de ensinar de acordo com as necessidades do aluno, além de promover a colaboração entre professores, família e profissionais envolvidos no acompanhamento.",
      },
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
      {
        numero: "01",
        titulo: "O que é a dislexia?",
        texto:
          "A dislexia é um transtorno específico de aprendizagem que afeta principalmente as habilidades de leitura e escrita. A pessoa pode apresentar dificuldade para reconhecer palavras, relacionar letras e sons e desenvolver uma leitura fluente. Essas dificuldades não significam falta de inteligência ou de capacidade para aprender.",
        link: {
          href: "https://www.dislexia.org.br/o-que-e-dislexia/?utm_source=chatgpt.com",
          label: "Saiba mais sobre a dislexia",
        },
      },
      {
        numero: "02",
        titulo: "Características",
        texto:
          "Entre as características mais comuns estão a dificuldade para ler e escrever com fluência, reconhecer e organizar letras e sons, soletrar palavras e compreender textos escritos. A intensidade dessas dificuldades pode variar de uma pessoa para outra.",
      },
      {
        numero: "03",
        titulo: "Possíveis necessidades de apoio",
        texto:
          "A pessoa com dislexia pode precisar de mais tempo para realizar atividades de leitura e escrita, instruções mais claras e apoio individualizado durante algumas tarefas. Na escola, também podem ser necessárias adaptações nas atividades e formas diferentes de apresentar os conteúdos.",
      },
      {
        numero: "04",
        titulo: "Estratégias de acolhimento",
        texto:
          "O acolhimento deve envolver paciência, incentivo e respeito ao ritmo de aprendizagem do estudante. Podem ser utilizadas atividades com diferentes recursos, estímulos visuais e auditivos, leitura acompanhada e estratégias que tornem a aprendizagem mais acessível. A identificação precoce e o acompanhamento adequado também são importantes.",
      },
      {
        numero: "05",
        titulo: "Inclusão no ambiente escolar",
        texto:
          "A inclusão do estudante com dislexia envolve adaptar as práticas pedagógicas às suas necessidades, valorizando suas habilidades e garantindo sua participação nas atividades. A pesquisa de Timachi destaca a importância da mediação da aprendizagem, da adaptação curricular, da formação dos profissionais e de práticas que favoreçam o desenvolvimento, a autoestima e a participação do estudante.",
      },
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
      {
        numero: "01",
        titulo: "O que é a discalculia?",
        texto:
          "A discalculia é um transtorno específico da aprendizagem relacionado à Matemática. A pessoa pode apresentar dificuldades para compreender números, quantidades, operações e outros conceitos matemáticos, mesmo tendo capacidade para aprender.",
        link: {
          href: "https://sites.usp.br/grepel/discalculia/",
          label: "Saiba mais sobre a discalculia",
        },
      },
      {
        numero: "02",
        titulo: "Características",
        texto:
          "Entre as características podem estar dificuldades para reconhecer e compreender números, realizar cálculos, memorizar fatos matemáticos, entender quantidades e resolver problemas que envolvem raciocínio matemático. Essas dificuldades podem variar de uma pessoa para outra.",
      },
      {
        numero: "03",
        titulo: "Possíveis necessidades de apoio",
        texto:
          "O estudante pode precisar de mais tempo para realizar atividades matemáticas, explicações passo a passo e recursos que facilitem a compreensão dos números e das operações. Também podem ser utilizadas atividades diferenciadas e materiais concretos ou lúdicos para tornar a aprendizagem mais acessível.",
      },
      {
        numero: "04",
        titulo: "Estratégias de acolhimento",
        texto:
          "É importante ter paciência, evitar comparações e valorizar os avanços do estudante. O professor pode utilizar jogos, materiais manipuláveis, exemplos do cotidiano e diferentes formas de explicar os conteúdos. A formação dos professores também é importante para que possam compreender a discalculia e desenvolver estratégias adequadas.",
      },
      {
        numero: "05",
        titulo: "Inclusão no ambiente escolar",
        texto:
          "A inclusão do estudante com discalculia envolve adaptar as estratégias de ensino às suas necessidades, garantindo que ele tenha oportunidades de aprender e participar das atividades de Matemática. O acompanhamento e a colaboração entre professores e profissionais da educação podem contribuir para uma aprendizagem mais inclusiva.",
      },
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
      {
        numero: "01",
        titulo: "O que é o TOD?",
        texto:
          "O Transtorno Opositivo Desafiador (TOD) é uma condição caracterizada por um padrão persistente de comportamentos de oposição, irritabilidade e desafio, especialmente diante de regras e figuras de autoridade. No ambiente escolar, esses comportamentos podem interferir na convivência e no processo de aprendizagem.",
        link: {
          href: "https://drauziovarella.uol.com.br/pediatria/tod-entenda-o-que-e-o-transtorno-opositor-desafiador/",
          label: "Saiba mais sobre o TOD",
        },
      },
      {
        numero: "02",
        titulo: "Características",
        texto:
          "Entre as características podem estar irritabilidade, discussões frequentes, dificuldade em aceitar regras e orientações, comportamento desafiador, teimosia e dificuldade para lidar com frustrações. É importante lembrar que comportamentos de oposição ocasionais não significam, por si só, que a pessoa tenha TOD.",
      },
      {
        numero: "03",
        titulo: "Possíveis necessidades de apoio",
        texto:
          "Pessoas com TOD podeM precisar de orientações claras, rotina organizada, acompanhamento próximo e estratégias que ajudem no controle das emoções e na resolução de conflitos. Também é importante considerar as necessidades individuais do estudante e manter a comunicação entre escola, família e profissionais que o acompanham.",
      },
      {
        numero: "04",
        titulo: "Estratégias de acolhimento",
        texto:
          "O acolhimento deve ser baseado em calma, respeito e limites claros. Evitar confrontos desnecessários, reconhecer comportamentos positivos, explicar as regras de maneira objetiva e ajudar o estudante a desenvolver formas mais adequadas de lidar com frustrações são estratégias que podem favorecer a convivência.",
      },
      {
        numero: "05",
        titulo: "Inclusão no ambiente escolar",
        texto:
          "A inclusão do estudante com TOD exige que a escola esteja preparada para compreender suas necessidades e desenvolver estratégias pedagógicas adequadas. A formação continuada dos professores, o apoio da escola e a colaboração entre família e profissionais são importantes para favorecer a aprendizagem e a participação do estudante.",
      },
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
      {
        numero: "01",
        titulo: "O que são altas habilidades?",
        texto:
          "Altas Habilidades/Superdotação são características apresentadas por pessoas que demonstram habilidades ou potencial elevado em determinadas áreas, como conhecimento acadêmico, criatividade, artes, liderança ou outras áreas de interesse. Isso não significa que a pessoa tenha o mesmo desempenho em todas as áreas.",
        link: {
          href: "https://revista.cognitioniss.org/index.php/cogn/article/view/632",
          label: "Saiba mais sobre altas habilidades",
        },
      },
      {
        numero: "02",
        titulo: "Características",
        texto:
          "Entre as características podem estar facilidade para aprender determinados conteúdos, criatividade, curiosidade, interesse intenso por assuntos específicos, capacidade de desenvolver ideias e soluções diferentes e grande motivação em áreas de interesse. Cada pessoa apresenta um conjunto próprio de habilidades e características.",
      },
      {
        numero: "03",
        titulo: "Possíveis necessidades de apoio",
        texto:
          "O estudante pode precisar de atividades mais desafiadoras, aprofundamento dos conteúdos e oportunidades para desenvolver seus interesses e talentos. Em alguns casos, o Atendimento Educacional Especializado (AEE) pode oferecer apoio complementar e atividades de enriquecimento para estimular suas habilidades.",
      },
      {
        numero: "04",
        titulo: "Estratégias de acolhimento",
        texto:
          "É importante ouvir os interesses do estudante, oferecer desafios adequados e permitir que ele explore diferentes possibilidades de aprendizagem. O professor pode utilizar projetos, pesquisas, atividades criativas e enriquecimento curricular, evitando atividades repetitivas que não representem um desafio para o aluno.",
      },
      {
        numero: "05",
        titulo: "Inclusão no ambiente escolar",
        texto:
          "A inclusão significa reconhecer e valorizar as habilidades do estudante, oferecendo oportunidades para que ele desenvolva seu potencial sem ser isolado dos demais colegas. A escola deve estar preparada para adaptar suas práticas e oferecer diferentes possibilidades de aprendizagem, contando também com a formação dos professores e, quando necessário, o apoio do AEE.",
      },
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
          {neurodivergencia.secoes.map((secao, indice) => (
            <CartaoNumerado
              key={secao.numero}
              {...secao}
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
