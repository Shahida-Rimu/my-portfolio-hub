import autotrace from "@/assets/project-autotrace.jpg";
import transit from "@/assets/project-transit.jpg";
import yutnori from "@/assets/project-yutnori.jpg";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  tags: string[];
  image: string;
  problem: string;
  solution: string;
  process: string[];
};

export const projects: Project[] = [
  {
    slug: "autotrace-ai",
    name: "AutoTrace AI",
    tagline: "AI-powered vehicle damage assessment system",
    tags: ["UI Planning", "Frontend Workflow", "Figma"],
    image: autotrace,
    problem:
      "Insurance assessors relied on manual photo reviews, making damage reports slow, inconsistent and hard to audit.",
    solution:
      "A dashboard that turns uploaded vehicle photos into an annotated damage report, with clear severity states and a guided review flow.",
    process: [
      "Mapped the assessor journey from upload to final report",
      "Wireframed the detection overlay and severity legend in Figma",
      "Built the component structure and states for the frontend team",
      "Tested the review flow for clarity and accessible contrast",
    ],
  },
  {
    slug: "kemne-jabo",
    name: "Kemne Jabo?",
    tagline: "Smart transit & fare estimation platform",
    tags: ["Interactive Maps", "Fare Calculator", "Mobile UX"],
    image: transit,
    problem:
      "Commuters in Dhaka had no reliable way to know a fair bus fare or the fastest route before boarding.",
    solution:
      "An interactive map paired with a dynamic fare calculator, so a route, its stops and its estimated cost appear in one glance.",
    process: [
      "Interviewed daily commuters about route and fare confusion",
      "Designed a map-first layout with a persistent fare sheet",
      "Prototyped the stop-to-stop fare interaction in Figma",
      "Refined typography and tap targets for one-handed use",
    ],
  },
  {
    slug: "yutnori",
    name: "Interactive Cultural Game — Yutnori",
    tagline: "A traditional Korean board game, reimagined for the browser",
    tags: ["Game UI", "Illustration", "AI-assisted Tools"],
    image: yutnori,
    problem:
      "Traditional games like Yutnori are rarely accessible to learners outside Korea, and rules are hard to grasp from text alone.",
    solution:
      "A friendly, illustrated digital board that teaches the rules through play, with clear turn states and playful motion.",
    process: [
      "Researched the original board, pieces and rule set",
      "Created illustrated assets with AI-assisted design tools",
      "Designed turn indicators and onboarding hints",
      "Polished animation timing for a light, playful feel",
    ],
  },
];

export const services = [
  {
    title: "UI/UX Design",
    copy: "Wireframing, prototyping and building intuitive interfaces that respect the way people actually think.",
    items: ["User flows & wireframes", "Interactive Figma prototypes", "Design systems", "Usability & accessibility reviews"],
  },
  {
    title: "Frontend Development",
    copy: "Turning designs into responsive, accessible interfaces that hold up on every screen size.",
    items: ["HTML & CSS", "React.js components", "Responsive layouts", "Design-to-code handoff"],
  },
  {
    title: "Graphic Design",
    copy: "Promotional designs and social content that keep a brand consistent and recognisable.",
    items: ["Social media creatives", "Posters & event branding", "Canva & Photoshop", "Illustrator artwork"],
  },
];

export const timeline = [
  {
    period: "Jul 2026 — Aug 2026",
    title: "Trainee, 2026 WFK IT Online Training Program",
    org: "KAIST",
    copy: "Selected for an intensive online IT program covering modern product development and AI-assisted design workflows.",
  },
  {
    period: "2024 — Present",
    title: "Executive, Art & Creative Design Team",
    org: "UITS Computer Club",
    copy: "Lead promotional design for club events, from posters and social campaigns to on-stage visuals.",
  },
  {
    period: "Sep 2022 — Present",
    title: "BSc in Computer Science & Engineering",
    org: "University of Information Technology and Sciences",
    copy: "Final-year student focused on human-centered design, design thinking and frontend engineering.",
  },
];

export const contact = {
  email: "shahida.rimu26@gmail.com",
  phone: "+8801581737636",
  linkedin: "https://www.linkedin.com/in/shahida-akter-rimu-4b9033350",
  linkedinLabel: "shahida-akter-rimu-4b9033350",
  behance: "https://www.behance.net/shahidarimu",
  behanceLabel: "shahidarimu",
};