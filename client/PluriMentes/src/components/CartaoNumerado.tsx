import type { NumberedCardProps } from "@/types/content";

export function CartaoNumerado({
  numero,
  titulo,
  texto,
  delay = 0,
  corNumero = "text-pm-blue",
}: NumberedCardProps) {
  return (
    <article
      className="animate-fade-up border-pm-ink/5 rounded-3xl border bg-white/60 p-8 shadow-sm md:p-12"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="grid gap-6 md:grid-cols-[280px_1fr] md:gap-8">
        <span
          className={`font-display text-5xl leading-none font-extrabold md:text-6xl ${corNumero}`}
        >
          {numero}
        </span>

        <div>
          <h2 className="font-display text-pm-ink text-2xl font-bold md:text-3xl">
            {titulo}
          </h2>
          <p className="text-pm-gray mt-4 leading-relaxed">{texto}</p>
        </div>
      </div>
    </article>
  );
}
