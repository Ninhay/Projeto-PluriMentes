import { GraduationCap } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";

const CARTOES = [
  {
    numero: "01",
    titulo: "Planejamento inclusivo",
    corBadge: "bg-pm-blue",
    texto:
      "Antes de planejar, identifique como o estudante aprende, quais barreiras enfrenta e quais apoios podem favorecer sua participação. Defina objetivos claros, organize as etapas da atividade e preveja diferentes formas de acesso ao conteúdo, evitando um planejamento baseado em uma única maneira de aprender. O planejamento deve ser construído de forma articulada com a equipe escolar e, quando necessário, com o AEE.",
      textoExtra: "Saiba mais no Ministério da Educação com o programa ",
      link: {
      href: "https://www.gov.br/mec/pt-br",
      label: "PNEEI (Política Nacional de Educação Especial Inclusiva).",
    }
  },
  {
    numero: "02",
    titulo: "Adaptações pedagógicas",
    corBadge: "bg-pm-green",
    texto:
      "Adapte estratégias, materiais, tempo, linguagem e recursos de acordo com as necessidades identificadas. Utilize instruções mais objetivas, recursos visuais, exemplos concretos, atividades divididas em etapas e diferentes formas de apresentação do conteúdo quando necessário. A adaptação deve favorecer o acesso ao currículo, sem simplesmente retirar do estudante a oportunidade de aprender.",
    textoExtra:
      "Para alunos em fase de alfabetização, é importante considerar o uso de recursos de apoio à leitura e escrita, como letras móveis, jogos de palavras, materiais táteis e atividades que estimulem a consciência fonológica.",
    link: {
      href: "https://expressia.life/atividades-adaptadas/",
      label: "Conheça o trabalho do Expressia."
    }
  },
  {
    numero: "03",
    titulo: "Práticas em sala de aula",
    corBadge: "bg-pm-yellow",
    texto:
      "Estabeleça uma rotina previsível, explique claramente as atividades e ofereça instruções passo a passo. Utilize diferentes estratégias de ensino, observe as respostas do estudante e ajuste a mediação quando necessário. Evite comparar estudantes ou interpretar dificuldades de aprendizagem como falta de interesse ou esforço. A prática inclusiva deve considerar ritmos, formas de comunicação e potencialidades individuais."
  },
  {
    numero: "04",
    titulo: "Avaliação acessível",
    corBadge: "bg-pm-red",
    texto:
      "Avaliar de forma inclusiva não significa diminuir os objetivos de aprendizagem, mas garantir condições adequadas para que o estudante demonstre o que aprendeu. Quando necessário, ofereça mais tempo, organize as questões de maneira objetiva, utilize recursos de acessibilidade e permita diferentes formas de resposta. Registre os avanços e as dificuldades para orientar os próximos passos do ensino."
  },
  {
    numero: "05",
    titulo: "Parceria com as famílias",
    corBadge: "bg-pm-purple",
    texto:
      "Mantenha uma comunicação respeitosa, frequente e objetiva com a família. Compartilhe avanços, dificuldades observadas e estratégias que apresentam bons resultados, evitando que o contato aconteça apenas quando surgem problemas. A família pode contribuir com informações importantes sobre a rotina, a comunicação, os interesses e as necessidades do estudante, fortalecendo o trabalho conjunto entre escola e família."
  },
  {
    numero: "06",
    titulo: "Formação continuada",
    corBadge: "bg-pm-orange",
    texto:
      "Busque formação sobre educação inclusiva, neurodiversidade, acessibilidade e estratégias pedagógicas e transforme esse conhecimento em prática. Participe das formações oferecidas pela rede de ensino, dialogue com professores do AEE e com a equipe pedagógica e registre estratégias que funcionam para diferentes estudantes. A formação continuada é parte essencial da construção de uma escola inclusiva; o próprio MEC mantém atualmente centros de formação continuada em educação especial inclusiva em todas as unidades da Federação.",
      textoExtra: "Caso queira se aprofundar, conheça o trabalho do programa ",
      link: {
      href: "https://institutoinclusaobrasil.com.br",
      label: "Instituto Inclusão Brasil.",
    }
  },
];

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
              {cartao.textoExtra || cartao.link ? (
                <p className="text-pm-gray mt-4 leading-relaxed">
                  {cartao.texto}
                  {cartao.textoExtra ? (
                    <>
                      <br /> <br />
                      {cartao.textoExtra}
                    </>
                  ) : null}
                  {cartao.link ? (
                    <>
                      <br />
                      <a
                        href={cartao.link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-pm-blue underline underline-offset-2 transition hover:text-pm-ink"
                      >
                        {cartao.link.label}
                      </a>
                    </>
                  ) : null}
                </p>
              ) : (
                <p className="text-pm-gray mt-4 leading-relaxed">{cartao.texto}</p>
              )}
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}