import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  ACTIVE_NAVIGATION_BY_PATH,
  NAVIGATION_ITEMS,
  ROUTES,
} from "@/constants/routes";

export default function Header() {
  const [active, setActive] = useState(
    ACTIVE_NAVIGATION_BY_PATH[window.location.pathname] ?? "Início",
  );
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-pm-bg/90 fixed inset-x-0 top-0 z-50 border-b border-black/5 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <a
          href={`${ROUTES.home}#inicio`}
          className="flex shrink-0 items-center gap-2"
        >
          <span aria-hidden="true" className="flex items-center">
            <span className="bg-pm-yellow/80 h-8 w-8 rounded-full" />
            <span className="bg-pm-blue/80 -ml-4 h-8 w-8 rounded-full" />
          </span>
          <span className="font-display text-pm-ink text-lg font-bold">
            Pluri<span className="text-pm-blue">Mentes</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 rounded-full lg:flex">
          {NAVIGATION_ITEMS.map((item) => (
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
            href={ROUTES.sobreNos}
            className="bg-pm-yellow text-pm-ink rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm transition-transform hover:scale-[1.03]"
          >
            Fale conosco
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-pm-ink inline-flex items-center justify-center rounded-full p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-principal"
        >
          {open ? (
            <X size={24} strokeWidth={2.25} aria-hidden="true" />
          ) : (
            <Menu size={24} strokeWidth={2.25} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="bg-pm-bg border-t border-black/5 px-6 pt-2 pb-6 lg:hidden">
          <nav id="menu-principal" className="flex flex-col gap-1">
            {NAVIGATION_ITEMS.map((item) => (
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
            href={ROUTES.sobreNos}
            className="bg-pm-yellow text-pm-ink mt-4 inline-block rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Fale conosco
          </a>
        </div>
      )}
    </header>
  );
}
