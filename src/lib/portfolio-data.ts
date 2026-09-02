import autotrace from "@/assets/project-autotrace.jpg";
import transit from "@/assets/project-transit.jpg";
import yutnori from "@/assets/project-yutnori.jpg";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  tags: string[];
  image: string;
  fit?: "cover" | "contain";
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
    title: "WordPress Development",
    copy: "Developing custom, scalable, and easy-to-manage WordPress websites optimized for performance and SEO.",
    items: ["Custom theme development", "Plugin integration & setup", "SEO & performance optimization", "Content management systems"],
  },
  {
    title: "Graphic Design",
    copy: "Promotional designs and social content that keep a brand consistent and recognisable.",
    items: ["Social media creatives", "Posters & event branding", "Canva & Photoshop", "Illustrator artwork"],
  },
];

export const timeline = [
  {
    period: "JUL 2026 — PRESENT",
    title: "IT & Graphics Intern",
    org: "Vacancy Hunting",
    copy: "Design structured visual assets, layouts, and promotional materials utilizing Figma and Canva. Manage official online accounts to drive digital engagement and ensure consistent brand identity.",
  },
  {
    period: "Jul 2026 — Aug 2026",
    title: "Trainee, 2026 WFK IT Online Training Program",
    org: "KAIST",
    copy: "Selected for an intensive online IT program covering modern product development and AI-assisted design workflows.",
  },
  {
    period: "MAR 2024 — JUN 2025",
    title: "Former Executive, Art & Creative Design Team",
    org: "UITS Computer Club",
    copy: "Created visually engaging content, including posters, banners, and social media graphics, to enhance the club's branding. Collaborated with a creative team to support events, workshops, and community initiatives through effective design and digital media.",
  },
  {
    period: "SEP 2022 — 2026",
    title: "BSc in Computer Science & Engineering",
    org: "University of Information Technology and Sciences",
    copy: "Graduated with a focus on human-centered design, design thinking and frontend engineering.",
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