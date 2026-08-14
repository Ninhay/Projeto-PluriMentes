import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="neurodivergencia" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] text-pm-gray">
            01&nbsp;&nbsp;&nbsp;COMECE POR AQUI
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold text-pm-ink lg:text-5xl">
            O que é Neurodivergência?
          </h2>

          <p className="mt-6 text-pm-gray leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mt-4 text-pm-gray leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <a
            href="#neurodivergencias"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-pm-blue px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            Entenda mais sobre Neurodivergência
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="flex justify-center">
          <div className="relative h-[320px] w-[320px]">
            <div className="absolute left-6 top-0 h-48 w-48 rounded-full bg-pm-yellow mix-blend-multiply opacity-90" />
            <div className="absolute right-0 top-6 h-48 w-48 rounded-full bg-pm-blue mix-blend-multiply opacity-90" />
            <div className="absolute bottom-6 left-10 h-48 w-48 rounded-full bg-pm-red mix-blend-multiply opacity-90" />
            <div className="absolute bottom-0 right-6 h-48 w-48 rounded-full bg-pm-green mix-blend-multiply opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
}
