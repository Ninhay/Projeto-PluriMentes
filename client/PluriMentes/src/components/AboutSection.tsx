import { ROUTES } from "@/constants/routes";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="neurodivergencia"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
    >
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="text-pm-gray text-xs font-semibold tracking-[0.25em]">
            01&nbsp;&nbsp;&nbsp;COMECE POR AQUI
          </p>
          <h2 className="font-display text-pm-ink mt-4 text-4xl font-bold lg:text-5xl">
            O que é Neurodivergência?
          </h2>

          <p className="text-pm-gray mt-6 leading-relaxed">
            A neurodivergência refere-se às diferentes formas de funcionamento neurológico, que podem influenciar a maneira como cada pessoa aprende, pensa, percebe o ambiente, comunica-se e interage socialmente. Essa perspectiva reconhece as diferenças neurológicas como parte da diversidade humana e valoriza as particularidades de cada indivíduo.
          </p>
          <p className="text-pm-gray mt-4 leading-relaxed">
           No contexto educacional, compreender a neurodivergência é fundamental para promover inclusão, respeito e equidade, considerando as necessidades e potencialidades de cada estudante e contribuindo para a redução de barreiras e do capacitismo.
          </p>
          <a
            href={`${ROUTES.home}neurodivergencia`}
            className="bg-pm-blue mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Entenda mais sobre Neurodivergência
            <ArrowRight size={18} strokeWidth={2.25} aria-hidden="true" />
          </a>
        </div>

        <div className="flex justify-center">
          <div className="relative h-[320px] w-[320px]">
            <div className="bg-pm-yellow absolute top-0 left-6 h-48 w-48 rounded-full opacity-90 mix-blend-multiply" />
            <div className="bg-pm-blue absolute top-6 right-0 h-48 w-48 rounded-full opacity-90 mix-blend-multiply" />
            <div className="bg-pm-red absolute bottom-6 left-10 h-48 w-48 rounded-full opacity-90 mix-blend-multiply" />
            <div className="bg-pm-green absolute right-6 bottom-0 h-48 w-48 rounded-full opacity-90 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
