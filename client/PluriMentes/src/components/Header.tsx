import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "O que é neurodivergência", href: "#neurodivergencia" },
  { label: "Educação", href: "#educacao" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Glossário", href: "#glossario" },
  { label: "Quem somos", href: "#quem-somos" },
];

export default function Header() {
  const [active, setActive] = useState("Início");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-pm-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 shrink-0">
          <span className="flex h-8 w-8 overflow-hidden rounded-full">
            <span className="h-full w-1/2 bg-pm-green" />
            <span className="h-full w-1/2 bg-pm-blue" />
          </span>
          <span className="font-display text-lg font-bold text-pm-ink">
            Pluri<span className="text-pm-blue">Mentes</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 rounded-full lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === item.label
                  ? "bg-pm-ink text-white"
                  : "text-pm-ink/70 hover:text-pm-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <a
            href="#contato"
            className="rounded-full bg-pm-yellow px-5 py-2.5 text-sm font-semibold text-pm-ink shadow-sm transition-transform hover:scale-[1.03]"
          >
            Fale conosco
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-full p-2 text-pm-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-t border-black/5 bg-pm-bg px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActive(item.label);
                  setOpen(false);
                }}
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  active === item.label
                    ? "bg-pm-ink text-white"
                    : "text-pm-ink/70"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="mt-4 inline-block rounded-full bg-pm-yellow px-5 py-2.5 text-sm font-semibold text-pm-ink"
          >
            Fale conosco
          </a>
        </div>
      )}
    </header>
  );
}
