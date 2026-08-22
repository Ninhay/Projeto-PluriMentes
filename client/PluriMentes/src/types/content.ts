import type { LucideIcon } from "lucide-react";

export interface NumberedCardProps {
  numero: string;
  titulo: string;
  texto: string;
  link?: {
    href: string;
    label: string;
  };
  delay?: number;
  corNumero?: string;
}

export interface NeurodivergenceCard {
  icon: LucideIcon;
  href: string;
  tag: string;
  title: string;
  description: string;
  color: "blue" | "orange" | "purple" | "red" | "green" | "yellow";
}

export interface ResourceCard {
  id: string;
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  bg: string;
  icon: LucideIcon;
}
