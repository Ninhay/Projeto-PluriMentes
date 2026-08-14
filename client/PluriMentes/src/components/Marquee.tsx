const PHRASES = [
  "Cada mente é única",
  "Neurodiversidade",
  "Inclusão",
  "Empatia",
  "Respeito",
  "Acolhimento",
  "Educação para todos",
];

const DOT_COLORS = [
  "bg-pm-red",
  "bg-pm-blue",
  "bg-pm-orange",
  "bg-pm-yellow",
  "bg-pm-green",
  "bg-pm-purple",
  "bg-pm-red",
];

function Track() {
  return (
    <div className="flex shrink-0 items-center">
      {PHRASES.map((phrase, i) => (
        <span key={i} className="flex items-center">
          <span className="mx-8 whitespace-nowrap text-2xl font-medium text-pm-ink/80">
            {phrase}
          </span>
          <span className={`h-2 w-2 rounded-full ${DOT_COLORS[i % DOT_COLORS.length]}`} />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-black/5 bg-pm-bg py-6">
      <div className="flex w-max animate-marquee">
        <Track />
        <Track />
      </div>
    </div>
  );
}
