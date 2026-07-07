/**
 * The icon menu. ServiceItem.icon (and future section slices) must use
 * one of these names — the factory AI picks from this list, and
 * lib/icon-map.ts maps each name to its lucide-react component.
 * check-registry verifies the two stay in sync.
 */
export const ICON_NAMES = [
  "wrench",
  "hammer",
  "shield-check",
  "clock",
  "phone",
  "map-pin",
  "star",
  "heart",
  "home",
  "truck",
  "sparkles",
  "leaf",
  "sun",
  "droplets",
  "zap",
  "thermometer",
  "paw-print",
  "utensils",
  "scale",
  "stethoscope",
  "graduation-cap",
  "car",
  "camera",
  "paintbrush",
  "scissors",
  "dumbbell",
  "briefcase",
  "calculator",
  "key",
  "trees",
] as const;

export type IconName = (typeof ICON_NAMES)[number];
