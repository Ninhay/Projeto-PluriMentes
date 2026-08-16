import type { FormEvent, SVGProps } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

/* ---------- Dados ---------- */

interface CartaoSobre {
  numero: string;
  titulo: string;
  texto: string;
}

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const cartoes: CartaoSobre[] = [
  { numero: "01", titulo: "O que é o PluriMentes", texto: LOREM },
  { numero: "02", titulo: "Por que o projeto foi criado", texto: LOREM },
  { numero: "03", titulo: "Nosso objetivo e público", texto: LOREM },
  {
    numero: "04",
    titulo: "Por que falar de neurodivergência na escola",
    texto: LOREM,
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
  function aoEnviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = Object.fromEntries(new FormData(e.currentTarget));
    console.log("Mensagem:", dados); // TODO: trocar por API / EmailJS
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
            Os desenvolvedores
          </h2>
          <p className="text-pm-gray mt-8 max-w-3xl leading-relaxed">{LOREM}</p>
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
                {LOREM}
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
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
