const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "O que é neurodivergência", href: "#neurodivergencia" },
  { label: "Educação", href: "#educacao" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Glossário", href: "#glossario" },
  { label: "Quem somos", href: "#quem-somos" },
];

const NEURO_LINKS = [
  { label: "Autismo", color: "bg-pm-blue" },
  { label: "TDAH", color: "bg-pm-orange" },
  { label: "Dislexia", color: "bg-pm-purple" },
  { label: "Discalculia", color: "bg-pm-red" },
  { label: "TOD", color: "bg-pm-green" },
  { label: "Altas Habilidades", color: "bg-pm-yellow" },
];

const DOT_COLORS = [
  "bg-pm-blue",
  "bg-pm-orange",
  "bg-pm-purple",
  "bg-pm-red",
  "bg-pm-green",
  "bg-pm-yellow",
];

export default function Footer() {
  return (
    <footer id="quem-somos" className="bg-pm-dark">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <span className="font-display text-2xl font-bold text-white">
              Pluri<span className="text-pm-yellow">Mentes</span><span className="text-pm-blue">.</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Plataforma de conscientização sobre neurodivergência e inclusão
              escolar.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-white/40">
              NAVEGAÇÃO
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-white/40">
              NEURODIVERGÊNCIAS
            </p>
            <ul className="mt-5 space-y-3">
              {NEURO_LINKS.map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${link.color}`} />
                  <a
                    href="#neurodivergencias"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © 2026 PluriMentes — Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            {DOT_COLORS.map((color, i) => (
              <span key={i} className={`h-2 w-2 rounded-full ${color}`} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
