import type { ValueStackItem } from "@/site.config.types";

export function currency(amount: number, locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function totalValue(items: ValueStackItem[]): number {
  return items.reduce((sum, item) => sum + (item.originalValue || 0), 0);
}

export function suggestedPrice(items: ValueStackItem[]): string {
  const total = totalValue(items);
  const price = Math.round((total * 0.2) / 100) * 100;
  return currency(price);
}
