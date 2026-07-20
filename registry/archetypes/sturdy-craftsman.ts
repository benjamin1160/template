import type { ArchetypeDef } from "../types";

/** Modeled on the "Roofivo" Framer template: earthy contractor trust. */
export const sturdyCraftsman: ArchetypeDef = {
  id: "sturdy_craftsman",
  version: "1.0.0",
  vibe: "craftsman",
  fonts: { heading: "Plus Jakarta Sans", body: "Inter" },
  paletteLogic:
    "Cream/eggshell base with deep espresso-brown ink instead of black, terracotta accent on CTAs. Reads 'shingle brown + terracotta on cream' — an earthy trade palette. Dark espresso bands may bookend the page.",
  accessibilityFloor: {
    bodyContrastMin: 4.5,
    uiContrastMin: 3.0,
    focusRing: "required, 2px, accent color",
  },
  heroStyle:
    "Full-bleed job-site photo background with dark overlay, oversized display headline in white, single call CTA. Protection and peace-of-mind framing in the first line.",
  sectionPlan: [
    { type: "hero", variant: "classic" },
    { type: "pain", variant: "classic" },
    { type: "plan", variant: "classic" },
    { type: "bigNumbers", variant: "classic" },
    { type: "socialProof", variant: "classic" },
    { type: "guarantee", variant: "classic" },
    { type: "faq", variant: "classic" },
  ],
  copyRegister:
    "Professional trust-builder, benefit-led and mildly protective: secure, protect, guaranteed. Numbered process steps, years-of-expertise stats, phone-call conversion path. Testimonials carry names and dates.",
  referenceBrands: [
    "Roofivo (Framer template)",
    "GAF Master Elite contractor pages",
    "regional roofer done premium",
  ],
  photographyRules: {
    requiredTone:
      "real job-site photography — crews on roofs, material close-ups, finished homes",
    reject: ["renderings passed off as photos", "drone shots with no crew", "clip-art houses"],
    minHeroResolution: [2000, 1200],
  },
  bannedDesign: [
    "neon accents",
    "pure black text (#000)",
    "glassmorphism",
    "rounded-pill cards",
  ],
  bannedCopyPatterns: [
    "storm-chaser urgency ('act before the next storm!')",
    "fake countdown timers",
    "guarantees without stated terms",
  ],
  seo: {
    schemaOrg: "RoofingContractor",
    titleMaxChars: 60,
    descriptionShape: "protection promise + trade + city — same promise as H1",
  },
};
