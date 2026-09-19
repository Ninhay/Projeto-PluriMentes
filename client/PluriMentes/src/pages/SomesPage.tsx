import { useState, type FormEvent, type SVGProps } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

/* ---------- Dados ---------- */

interface CartaoSobre {
  numero: string;
  titulo: string;
  texto: string;
}

const textoDesenvolvedores =
  "O PluriMentes foi desenvolvido por Maria Isabela de Lima Alencar e Marianna de Oliveira Sousa, com orientação do professor Cícero Samuel Rodrigues Mendes, no âmbito da EEEP Valter Nunes de Alencar, em Araripe-CE. O projeto foi apresentado no XII Festival Científico e Tecnológico da Escola Estadual de Educação Profissional Valter Nunes de Alencar (FESCTEV), em 2026.";

const textoContato =
  "O PluriMentes também é um espaço aberto ao diálogo com pesquisadores, professores, profissionais da educação e demais interessados em neurodiversidade e inclusão escolar. Entre em contato para esclarecer dúvidas sobre o projeto, conhecer nossa pesquisa e discutir informações.";

const cartoes: CartaoSobre[] = [
  {
    numero: "01",
    titulo: "O que é o PluriMentes",
    texto:
      "O PluriMentes é uma plataforma digital informativa e educativa criada para reunir conteúdos sobre neurodivergência, inclusão escolar, direitos, estratégias pedagógicas e orientações para estudantes e profissionais da educação. O projeto utiliza a tecnologia como instrumento de conscientização, acesso contínuo à informação e promoção de uma cultura escolar mais acolhedora, acessível e inclusiva."
  },
  {
    numero: "02",
    titulo: "Por que o projeto foi criado",
    texto:
      "O projeto foi criado diante da necessidade de ampliar o conhecimento sobre neurodiversidade nas escolas e combater situações de preconceito, exclusão e capacitismo identificadas na pesquisa realizada pelo grupo. O estudo envolveu aproximadamente 391 estudantes e profissionais da educação de três escolas de Araripe, e os resultados mostraram que, embora muitos estudantes já tivessem contato com o tema, ainda existiam conhecimentos limitados e uma demanda significativa por informação e conscientização."
  },
  {
    numero: "03",
    titulo: "Nosso objetivo e público",
    texto:
      "O principal objetivo do PluriMentes é promover a inclusão e a valorização de pessoas neurodivergentes, ampliando o acesso à informação e incentivando ações educativas que contribuam para o combate à marginalização e ao capacitismo. A plataforma foi pensada especialmente para estudantes, professores, profissionais da educação, famílias e comunidade escolar, oferecendo conteúdos que possam auxiliar na compreensão da neurodiversidade e na construção de práticas mais inclusivas."
  },
  {
    numero: "04",
    titulo: "Por que falar de neurodivergência na escola",
    texto:
      "Falar sobre neurodivergência na escola é importante porque a falta de informação pode dificultar o acolhimento, a aprendizagem e a participação dos estudantes. A pesquisa do PluriMentes identificou relatos de preconceito, exclusão e piadas ofensivas nas instituições analisadas, além de apontar a necessidade de maior formação dos profissionais e de adaptação de materiais e metodologias. Nesse contexto, informar é também uma forma de combater barreiras, promover respeito e contribuir para uma escola mais inclusiva."
  },
];

/* ---------- Ícones / utilidades ---------- */

function IconeMail(props: SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconeEnvio(props: SVGProps<SVGSVGElement>) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
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

const campo =
  "w-full rounded-xl border border-pm-ink/10 bg-pm-ink/[0.04] px-4 py-3.5 text-sm text-pm-ink outline-none transition placeholder:text-pm-gray/80 focus:border-pm-blue focus:ring-2 focus:ring-pm-blue/25";

export default function SobrePage() {
  const [status, setStatus] = useState("");

  async function aoEnviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formulario = e.currentTarget;
    const dados = Object.fromEntries(new FormData(formulario));

    try {
      const resposta = await fetch(
        `${import.meta.env.VITE_API_URL ?? "http://localhost:3000"}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: dados.nome,
            email: dados.email,
            subject: dados.assunto,
            message: dados.mensagem,
          }),
        },
      );
      const resultado = await resposta.json();

      if (!resposta.ok) {
        throw new Error(resultado.error ?? "Não foi possível enviar a mensagem.");
      }

      setStatus("Mensagem enviada com sucesso!");
      formulario.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Erro ao enviar mensagem.");
    }
  }

  return (
    <main className="bg-pm-bg font-body text-pm-ink relative min-h-screen overflow-hidden">
      <Header />
      <header className="relative">
        <Blob className="bg-pm-yellow/40 -top-28 -right-24 h-96 w-96" />
        <Blob className="bg-pm-purple/25 bottom-0 -left-28 h-80 w-80" />

        <div className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-20 md:px-10 md:pt-28">
          <p className="animate-fade-up text-pm-gray text-xs font-semibold tracking-[0.3em] uppercase">
            Sobre o projeto
          </p>

          <h1
            className="animate-fade-up font-display mt-8 text-6xl leading-[1.05] font-extrabold tracking-tight md:text-8xl"
            style={{ animationDelay: "120ms" }}
          >
            <span className="block">Quem</span>
            <span className="text-pm-blue block">
              somos
              <span
                aria-hidden="true"
                className="bg-pm-yellow ml-1 inline-block h-4 w-4 rounded-full md:h-5 md:w-5"
              />
            </span>
          </h1>

          <p
            className="animate-fade-up text-pm-gray mt-10 max-w-xl leading-relaxed"
            style={{ animationDelay: "240ms" }}
          >
            O <b>PluriMentes</b> é um projeto educacional desenvolvido para ampliar o acesso à informação sobre neurodiversidade e fortalecer a inclusão escolar no município de Araripe-CE. A iniciativa surgiu a partir da identificação de desafios como a desinformação,preconceito, capacitismo e a falta de práticas pedagógicas inclusivas, buscando transformar conhecimento em informação acessível para a comunidade.
          </p>
        </div>
      </header>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          {cartoes.map((cartao, i) => (
            <article
              key={cartao.numero}
              className="animate-fade-up border-pm-ink/5 rounded-3xl border bg-white/60 p-8 shadow-sm md:p-10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="text-pm-gray text-xs font-semibold tracking-[0.3em]">
                {cartao.numero}
              </span>
              <h2 className="font-display mt-6 text-2xl font-bold">
                {cartao.titulo}
              </h2>
              <p className="text-pm-gray mt-4 leading-relaxed">
                {cartao.texto}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1500px] px-6 pb-16 md:px-10">
        <div className="animate-fade-up border-pm-ink/5 rounded-[2.5rem] border bg-white/60 p-10 md:p-16">
          <p className="text-pm-gray text-xs font-semibold tracking-[0.3em] uppercase">
            02 · Por trás do PluriMentes
          </p>
          <h2 className="font-display mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
            Integrantes do grupo de pesquisa
          </h2>
          <p className="text-pm-gray mt-8 max-w-3xl leading-relaxed">
            {textoDesenvolvedores}
          </p>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-[1500px] px-6 pb-24 md:px-10">
        <div className="bg-pm-ink relative overflow-hidden rounded-[2.5rem] p-8 md:p-16">
          <span
            aria-hidden="true"
            className="bg-pm-blue/20 pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full blur-3xl"
          />
          <span
            aria-hidden="true"
            className="bg-pm-yellow/15 pointer-events-none absolute -bottom-28 left-[30%] h-80 w-80 rounded-full blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* coluna de texto */}
            <div>
              <p className="text-xs font-semibold tracking-[0.3em] text-white/50 uppercase">
                03 · Entre em contato
              </p>
              <h2 className="font-display mt-6 text-5xl font-extrabold text-white md:text-6xl">
                Vamos conversar?
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-white/60">
                {textoContato}
              </p>

              <a
                href="mailto:plurimentes@gmail.com"
                className="mt-10 inline-flex items-center gap-4 transition hover:opacity-80"
              >
                <span className="bg-pm-yellow/15 text-pm-yellow flex h-11 w-11 items-center justify-center rounded-full">
                  <IconeMail className="h-5 w-5" />
                </span>
                <span className="text-pm-yellow font-semibold">
                  plurimentes@gmail.com
                </span>
              </a>
            </div>

            {/* formulário */}
            <form
              onSubmit={aoEnviar}
              className="animate-fade-up bg-pm-bg rounded-3xl p-6 md:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="nome"
                  type="text"
                  placeholder="Seu nome"
                  className={campo}
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Seu e-mail"
                  className={campo}
                  required
                />
              </div>
              <input
                name="assunto"
                type="text"
                placeholder="Assunto"
                className={`${campo} mt-4`}
                required
              />
              <textarea
                name="mensagem"
                placeholder="Sua mensagem"
                rows={5}
                className={`${campo} mt-4 resize-none`}
                required
              />
              <button
                type="submit"
                className="bg-pm-ink hover:bg-pm-dark mt-6 inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold text-white transition"
              >
                Enviar mensagem
                <IconeEnvio className="h-4 w-4" />
              </button>
              {status && <p className="mt-4 text-sm text-pm-gray">{status}</p>}
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
