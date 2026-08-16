import { Bookmark, Search } from "lucide-react";
import { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";

const CARTOES = [
  {
    numero: "01",
    titulo: "Neurodiversidade",
    corBadge: "bg-pm-orange",
    texto:
      "Refere-se à diversidade existente nas formas de funcionamento do cérebro e do sistema nervoso. O conceito reconhece diferentes maneiras de pensar, aprender, perceber, comunicar e interagir como parte da diversidade humana"
  },
  {
    numero: "02",
    titulo: "Neurodivergência",
    corBadge: "bg-pm-blue",
    texto:
      "Termo utilizado para descrever formas de funcionamento neurológico que diferem do padrão considerado neurotípico. Pode abranger diferentes condições e características do neurodesenvolvimento."
  },
  {
    numero: "03",
    titulo: "Neurotipicidade",
    corBadge: "bg-pm-green",
    texto:
      "Refere-se a um funcionamento neurológico considerado mais comum em determinada população. O conceito não estabelece que uma forma de funcionamento seja superior ou mais adequada que outra."
  },
  {
    numero: "04",
    titulo: "Autismo (TEA)",
    corBadge: "bg-pm-red",
    texto:
      "O Transtorno do Espectro Autista é uma condição do neurodesenvolvimento que envolve características relacionadas à comunicação, à interação social e a padrões de comportamento e interesses. As características e necessidades de apoio variam entre as pessoas."
  },
  {
    numero: "05",
    titulo: "TDAH",
    corBadge: "bg-pm-purple",
    texto:
      "O Transtorno do Déficit de Atenção e Hiperatividade é uma condição do neurodesenvolvimento associada a características como desatenção, impulsividade e hiperatividade, que podem repercutir na aprendizagem e nas atividades cotidianas."
  },
  {
    numero: "06",
    titulo: "Dislexia",
    corBadge: "bg-pm-yellow",
    texto:
      "É um transtorno específico da aprendizagem que envolve dificuldades persistentes relacionadas à leitura e à escrita. Essas dificuldades não significam falta de inteligência e podem exigir estratégias pedagógicas específicas."
  },
  {
    numero: "07",
    titulo: "Discalculia",
    corBadge: "bg-pm-orange",
    texto:
      "É uma dificuldade específica relacionada à aprendizagem da Matemática, podendo afetar a compreensão de números, quantidades, cálculos e relações matemáticas."
  },
  {
    numero: "08",
    titulo: "Altas Habilidades/Superdotação",
    corBadge: "bg-pm-blue",
    texto:
      "Refere-se a pessoas que apresentam desempenho ou potencial elevado em uma ou mais áreas, como intelectual, acadêmica, artística ou criativa. Na educação, essas potencialidades também demandam estratégias e oportunidades adequadas de desenvolvimento."
  },
  {
    numero: "09",
    titulo: "Transtorno do Desenvolvimento",
    corBadge: "bg-pm-green",
    texto:
      "São condições que podem afetar diferentes áreas do desenvolvimento, como linguagem, aprendizagem, funções cognitivas, motoras ou sociais, podendo demandar diferentes formas de apoio."
  },
  {
    numero: "10",
    titulo: "Processamento Sensorial",
    corBadge: "bg-pm-red",
    texto:
      "Refere-se à maneira como o sistema nervoso recebe, organiza e responde às informações sensoriais do ambiente e do próprio corpo, como sons, luzes, texturas, cheiros e movimentos."
  },
  {
    numero: "11",
    titulo: "Educação Inclusiva",
    corBadge: "bg-pm-purple",
    texto:
      "É uma perspectiva educacional que busca garantir acesso, participação, aprendizagem e permanência de todos os estudantes, reconhecendo suas diferenças e enfrentando as barreiras que dificultam sua participação escolar."
  },
  {
    numero: "12",
    titulo: "Educação Especial",
    corBadge: "bg-pm-yellow",
    texto:
      "É uma modalidade de educação escolar que atua de forma transversal às etapas e modalidades de ensino, oferecendo recursos e serviços para apoiar, complementar e suplementar a escolarização dos estudantes que constituem seu público."
  },
  {
    numero: "13",
    titulo: "Acessibilidade",
    corBadge: "bg-pm-orange",
    texto:
      "É a garantia de condições para que as pessoas possam acessar, utilizar e participar dos espaços, recursos, informações e atividades com autonomia e segurança. Na educação, envolve também recursos pedagógicos, tecnológicos e comunicacionais."
  },
  {
    numero: "14",
    titulo: "Acessibilidade Pedagógica",
    corBadge: "bg-pm-blue",
    texto:
      "Consiste na eliminação ou redução de barreiras presentes nas formas de ensinar, apresentar conteúdos, realizar atividades e avaliar. Pode envolver recursos, estratégias, materiais e diferentes formas de participação."
  },
  {
    numero: "15",
    titulo: "Tecnologia Assistiva",
    corBadge: "bg-pm-green",
    texto:
      "Abrange recursos, equipamentos, estratégias e serviços que ampliam a autonomia, a comunicação, a participação e o desempenho de pessoas com deficiência ou necessidades específicas."
  },
  {
    numero: "16",
    titulo: "Barreiras à Aprendizagem",
    corBadge: "bg-pm-red",
    texto:
      "São obstáculos que podem dificultar o acesso, a participação e a aprendizagem do estudante. Podem estar presentes no ambiente, nos materiais, nas práticas pedagógicas, na comunicação ou nas atitudes."
  },
  {
    numero: "17",
    titulo: "Capacitismo",
    corBadge: "bg-pm-purple",
    texto:
      "É o preconceito, a discriminação ou a desvalorização de pessoas com deficiência ou determinadas características de funcionamento. Na escola, pode aparecer quando diferenças são utilizadas para limitar oportunidades ou participação."
  },
  {
    numero: "18",
    titulo: "Desenho Universal para a Aprendizagem (DUA)",
    corBadge: "bg-pm-yellow",
    texto:
      "É uma abordagem que orienta o planejamento de experiências de aprendizagem considerando, desde o início, a diversidade dos estudantes. Busca oferecer diferentes formas de apresentar conteúdos, promover participação e possibilitar que os conhecimentos sejam demonstrados."
  },
  {
    numero: "19",
    titulo: "Adaptação Pedagógica",
    corBadge: "bg-pm-orange",
    texto:
      "É a adequação de estratégias, recursos, atividades, tempo ou formas de avaliação para atender às necessidades educacionais de determinado estudante, favorecendo seu acesso e participação no processo de aprendizagem."
  },
  {
    numero: "20",
    titulo: "Currículo Acessível",
    corBadge: "bg-pm-blue",
    texto:
      "É aquele organizado de modo a possibilitar que diferentes estudantes tenham acesso aos conhecimentos e objetivos educacionais. Pode envolver recursos de acessibilidade, estratégias diversificadas e diferentes formas de participação e expressão."
  },
  {
    numero: "21",
    titulo: "Atendimento Educacional Especializado (AEE)",
    corBadge: "bg-pm-green",
    texto:
      "É uma atividade pedagógica complementar ou suplementar à escolarização, destinada ao público da educação especial. Seu objetivo é identificar, elaborar e organizar recursos pedagógicos e de acessibilidade para eliminar barreiras à participação e à aprendizagem."
  },
  {
    numero: "22",
    titulo: "Plano Educacional Individualizado (PEI)",
    corBadge: "bg-pm-red",
    texto:
      "É um documento pedagógico que organiza medidas de acessibilidade curricular, estratégias de acompanhamento e ações necessárias para favorecer a aprendizagem do estudante, considerando suas características e necessidades."
  },
  {
    numero: "23",
    titulo: "Plano de Atendimento Educacional Especializado (PAEE)",
    corBadge: "bg-pm-purple",
    texto:
      "É o documento que registra o estudo de caso e organiza o atendimento educacional especializado, incluindo recursos, estratégias e apoios necessários para reduzir ou eliminar barreiras no contexto educacional."
  },
  {
    numero: "24",
    titulo: "Estudo de Caso",
    corBadge: "bg-pm-yellow",
    texto:
      "É um processo de análise das características, necessidades, potencialidades e barreiras enfrentadas pelo estudante no contexto educacional. Seus resultados orientam a definição dos recursos, estratégias e apoios necessários."
  },
  {
    numero: "25",
    titulo: "Profissional de Apoio Escolar",
    corBadge: "bg-pm-orange",
    texto:
      "É o profissional que atua para apoiar a participação do estudante nas atividades e espaços escolares, conforme suas necessidades e em articulação com o planejamento educacional. Sua atuação deve estar alinhada ao PAEE e ao PEI quando esses documentos forem aplicáveis."
  },
  {
    numero: "26",
    titulo: "Sala de Recursos Multifuncionais",
    corBadge: "bg-pm-blue",
    texto:
      "É um espaço organizado para a oferta do AEE, dispondo de recursos pedagógicos, equipamentos e materiais de acessibilidade destinados a apoiar a escolarização dos estudantes público da educação especial."
  },
  {
    numero: "27",
    titulo: "Avaliação Inclusiva",
    corBadge: "bg-pm-green",
    texto:
      "É uma forma de avaliar que considera as características e necessidades dos estudantes e oferece condições adequadas para que demonstrem seus conhecimentos e aprendizagens. Pode envolver diferentes recursos, estratégias e formas de resposta."
  },
  {
    numero: "28",
    titulo: "Práticas Pedagógicas Inclusivas",
    corBadge: "bg-pm-red",
    texto:
      "São estratégias de ensino que consideram a diversidade dos estudantes e buscam garantir participação, aprendizagem e desenvolvimento. Envolvem planejamento, flexibilidade, acessibilidade e acompanhamento contínuo."
  },
  {
    numero: "29",
    titulo: "Formação Continuada",
    corBadge: "bg-pm-purple",
    texto:
      "É o processo permanente de desenvolvimento profissional dos educadores por meio de estudos, cursos, experiências e reflexão sobre a própria prática. Na educação inclusiva, contribui para ampliar conhecimentos sobre acessibilidade, neurodiversidade e estratégias pedagógicas. A formação continuada está prevista entre as ações da atual política de educação especial inclusiva."
  },
  {
    numero: "30",
    titulo: "Inclusão Escolar",
    corBadge: "bg-pm-yellow",
    texto:
      "É o compromisso de garantir que os estudantes tenham acesso, permanência, participação e aprendizagem na escola, com os apoios e recursos necessários para superar barreiras e exercer seu direito à educação."
  }
];

function Blob({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    />
  );
}

export default function GlossarioPage() {
  const [busca, setBusca] = useState("");
  const termosFiltrados = useMemo(
    () =>
      CARTOES.filter((cartao) =>
        cartao.titulo
          .toLocaleLowerCase("pt-BR")
          .includes(busca.toLocaleLowerCase("pt-BR")),
      ),
    [busca],
  );

  return (
    <main className="bg-pm-bg font-body text-pm-ink relative min-h-screen overflow-hidden">
      <Header />
      <header className="relative">
        <Blob className="bg-pm-orange/30 -top-32 -right-28 h-96 w-96" />
        <Blob className="bg-pm-purple/25 bottom-0 -left-28 h-80 w-80" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-24 md:px-10 md:pt-28">
          <div className="animate-pop-in bg-pm-orange flex h-16 w-16 items-center justify-center rounded-2xl shadow-sm">
            <Bookmark
              size={30}
              strokeWidth={2.25}
              aria-hidden="true"
              className="text-white"
            />
          </div>
          <p className="animate-fade-up text-pm-gray mt-12 text-xs font-semibold tracking-[0.3em] uppercase">
            Termos e conceitos explicados de forma simples
          </p>
          <h1
            className="animate-fade-up font-display mt-6 text-6xl font-extrabold tracking-tight md:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Glossário
          </h1>
          <p
            className="animate-fade-up text-pm-gray mt-6 text-xl md:text-2xl"
            style={{ animationDelay: "240ms" }}
          >
            Palavras importantes para compreender e incluir melhor.
          </p>
        </div>
      </header>
      <Marquee />

      <section className="relative mx-auto w-full max-w-[1500px] px-6 pt-16 pb-24 md:px-10 md:pt-20">
        <div className="relative mx-auto max-w-2xl">
          <label htmlFor="busca-glossario" className="sr-only">
            Buscar termo no glossário
          </label>
          <Search
            size={20}
            strokeWidth={2.25}
            aria-hidden="true"
            className="text-pm-gray pointer-events-none absolute top-1/2 left-5 -translate-y-1/2"
          />
          <input
            id="busca-glossario"
            type="search"
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
            placeholder="Buscar termo"
            className="border-pm-ink/10 text-pm-ink focus:border-pm-orange focus:ring-pm-orange/15 w-full rounded-2xl border bg-white px-12 py-4 shadow-sm transition outline-none focus:ring-4"
          />
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {termosFiltrados.map((cartao, indice) => (
            <article
              key={cartao.numero}
              className="animate-fade-up border-pm-ink/5 rounded-3xl border bg-white/60 p-8 shadow-sm md:p-10"
              style={{ animationDelay: `${indice * 100}ms` }}
            >
              <div className="flex items-center gap-5">
                <span
                  className={`font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold text-white ${cartao.corBadge}`}
                >
                  {cartao.titulo.charAt(0)}
                </span>
                <span aria-hidden="true" className="bg-pm-ink/10 h-px flex-1" />
              </div>
              <h2 className="font-display text-pm-ink mt-8 text-2xl font-bold">
                {cartao.titulo}
              </h2>
              <p className="text-pm-gray mt-4 leading-relaxed">{cartao.texto}</p>
            </article>
          ))}
        </div>
        {termosFiltrados.length === 0 && (
          <p className="text-pm-gray mt-12 text-center">
            Nenhum termo encontrado.
          </p>
        )}
      </section>
      <Footer />
    </main>
  );
}
