import type { ArchetypeDef } from "../types";

/** Modeled on the "Pestora" Framer template: reassuring 24/7 response. */
export const rapidShield: ArchetypeDef = {
  id: "rapid_shield",
  version: "1.0.0",
  vibe: "shield",
  fonts: { heading: "Manrope", body: "Manrope" },
  paletteLogic:
    "Clean white base, light gray cards, one yellow-olive accent (dark enough for text and focus rings on white). A brighter acid-yellow brand override (with near-black ink) is allowed only when buttons stay the sole accent surface. Reserve the accent for CTAs and key highlights so it never dilutes.",
  accessibilityFloor: {
    bodyContrastMin: 4.5,
    uiContrastMin: 3.0,
    focusRing: "required, 2px, accent color",
  },
  heroStyle:
    "Centered conversion hero: safety-forward headline, dual CTAs (book now + phone number), trust chips for experience and 24/7 availability directly beneath.",
  sectionPlan: [
    { type: "hero", variant: "classic" },
    { type: "bigNumbers", variant: "classic" },
    { type: "pain", variant: "classic" },
    { type: "plan", variant: "classic" },
    { type: "socialProof", variant: "classic" },
    { type: "guarantee", variant: "classic" },
    { type: "faq", variant: "classic" },
  ],
  copyRegister:
    "Reassuring direct-response: reliable, certified, eco-friendly, guaranteed. Mild urgency via 24/7 and emergency framing — never panic. Stats bars with inspections, locations, satisfaction percentages.",
  referenceBrands: [
    "Pestora (Framer template)",
    "Terminix clarity, local-operator warmth",
    "modern SaaS landing conventions applied to a trade",
  ],
  photographyRules: {
    requiredTone:
      "uniformed technicians on the job — professional, well-lit, reassuring context",
    reject: ["close-up pest/insect macro shots", "hazmat fear imagery", "dark moody lighting"],
    minHeroResolution: [1600, 1000],
  },
  bannedDesign: [
    "dark backgrounds",
    "serif display type",
    "red alarm color as accent",
    "glassmorphism",
  ],
  bannedCopyPatterns: [
    "fear-mongering infestation imagery in words",
    "fake countdown timers",
    "guarantees without stated terms",
  ],
  seo: {
    schemaOrg: "PestControlService",
    titleMaxChars: 60,
    descriptionShape: "safe-again promise + 24/7 availability + city — same promise as H1",
  },
};
