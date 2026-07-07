import type { ComponentType } from "react";
import {
  Wrench,
  Hammer,
  ShieldCheck,
  Clock,
  Phone,
  MapPin,
  Star,
  Heart,
  Home,
  Truck,
  Sparkles,
  Leaf,
  Sun,
  Droplets,
  Zap,
  Thermometer,
  PawPrint,
  Utensils,
  Scale,
  Stethoscope,
  GraduationCap,
  Car,
  Camera,
  Paintbrush,
  Scissors,
  Dumbbell,
  Briefcase,
  Calculator,
  Key,
  Trees,
} from "lucide-react";
import type { IconName } from "@/registry/icons";

interface IconProps {
  className?: string;
  "aria-hidden"?: boolean;
}

/**
 * Static name → component map for the registry icon menu
 * (registry/icons.ts). Static imports keep this RSC-safe and
 * tree-shakeable to exactly the icons listed.
 */
export const ICONS: Record<IconName, ComponentType<IconProps>> = {
  wrench: Wrench,
  hammer: Hammer,
  "shield-check": ShieldCheck,
  clock: Clock,
  phone: Phone,
  "map-pin": MapPin,
  star: Star,
  heart: Heart,
  home: Home,
  truck: Truck,
  sparkles: Sparkles,
  leaf: Leaf,
  sun: Sun,
  droplets: Droplets,
  zap: Zap,
  thermometer: Thermometer,
  "paw-print": PawPrint,
  utensils: Utensils,
  scale: Scale,
  stethoscope: Stethoscope,
  "graduation-cap": GraduationCap,
  car: Car,
  camera: Camera,
  paintbrush: Paintbrush,
  scissors: Scissors,
  dumbbell: Dumbbell,
  briefcase: Briefcase,
  calculator: Calculator,
  key: Key,
  trees: Trees,
};

/** Resolve a config icon string; unknown names return null, never throw. */
export function getIcon(name: string | undefined): ComponentType<IconProps> | null {
  if (!name) return null;
  return ICONS[name as IconName] ?? null;
}
