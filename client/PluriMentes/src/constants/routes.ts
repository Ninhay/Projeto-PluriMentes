import type {
  NavigationItem,
  NeurodivergenceNavigationItem,
} from "@/types/navigation";

export const ROUTES = {
  home: "/",
  neurodivergencia: "/neurodivergencia",
  autismo: "/autismo",
  educacao: "/educacao",
  comunidade: "/comunidade",
  glossario: "/glossario",
  sobreNos: "/sobre-nos",
  neurodivergencias: "/neurodivergencias/",
  tdah: "/neurodivergencias/tdah",
  dislexia: "/neurodivergencias/dislexia",
  discalculia: "/neurodivergencias/discalculia",
  tod: "/neurodivergencias/tod",
  altasHabilidades: "/neurodivergencias/altas-habilidades",
} as const;

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Início", href: `${ROUTES.home}#inicio` },
  { label: "O que é neurodivergência", href: ROUTES.neurodivergencia },
  { label: "Educação", href: ROUTES.educacao },
  { label: "Comunidade", href: ROUTES.comunidade },
  { label: "Glossário", href: ROUTES.glossario },
  { label: "Quem somos", href: ROUTES.sobreNos },
];

export const FOOTER_NAVIGATION_ITEMS: NavigationItem[] = NAVIGATION_ITEMS;

export const NEURODIVERGENCE_NAVIGATION_ITEMS: NeurodivergenceNavigationItem[] =
  [
    { label: "Autismo", href: ROUTES.autismo, color: "bg-pm-blue" },
    { label: "TDAH", href: ROUTES.tdah, color: "bg-pm-orange" },
    { label: "Dislexia", href: ROUTES.dislexia, color: "bg-pm-purple" },
    { label: "Discalculia", href: ROUTES.discalculia, color: "bg-pm-red" },
    { label: "TOD", href: ROUTES.tod, color: "bg-pm-green" },
    {
      label: "Altas Habilidades",
      href: ROUTES.altasHabilidades,
      color: "bg-pm-yellow",
    },
  ];

export const ACTIVE_NAVIGATION_BY_PATH: Record<string, string> = {
  [ROUTES.neurodivergencia]: "O que é neurodivergência",
  [ROUTES.educacao]: "Educação",
  [ROUTES.comunidade]: "Comunidade",
  [ROUTES.glossario]: "Glossário",
  [ROUTES.sobreNos]: "Quem somos",
};
