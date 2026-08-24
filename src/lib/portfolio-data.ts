import autotrace from "@/assets/project-autotrace.jpg";
import transit from "@/assets/project-transit.jpg";
import yutnori from "@/assets/project-yutnori.jpg";
import gardnix from "@/assets/Gardnix.png.asset.json";
import novera from "@/assets/noveras_studio_2.png.asset.json";
import nexiok from "@/assets/Nexiok.png.asset.json";
import flaxpay from "@/assets/Splash_2.png.asset.json";

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
  {
    slug: "gardnix",
    name: "Gardnix",
    tagline: "Modern gardening and landscape website UI",
    tags: ["Web UI", "Figma", "Landing Page"],
    image: gardnix.url,
    problem:
      "Local gardening and landscaping services had dated sites that buried their offer and made booking a visit hard.",
    solution:
      "A fresh, image-led landing page with a bold hero slider, clear service groups and an always-visible appointment CTA.",
    process: [
      "Collected references from garden and landscape brands",
      "Built a green-forward type and colour system",
      "Designed the hero slider, service and blog sections",
      "Tuned contrast over photography for readability",
    ],
  },
  {
    slug: "novera-studio",
    name: "Novera Studio",
    tagline: "Dark-themed, award-winning creative agency website design",
    tags: ["Dark UI", "Typography", "Agency Site"],
    image: novera.url,
    problem:
      "Creative studios need a site that shows craft immediately, not one that reads like a generic template.",
    solution:
      "An oversized display-type hero with a script accent, paired with a restrained dark palette and a full-bleed work grid.",
    process: [
      "Explored display type pairings for the wordmark hero",
      "Set a neutral dark palette with a single warm accent",
      "Laid out the work grid and case-study entry points",
      "Checked hierarchy and spacing at every breakpoint",
    ],
  },
  {
    slug: "nexiok",
    name: "Nexiok",
    tagline: "Intelligent AI system SaaS platform landing page",
    tags: ["SaaS", "Landing Page", "3D Visual"],
    image: nexiok.url,
    problem:
      "AI SaaS pages often overwhelm visitors with jargon before they understand what the product actually does.",
    solution:
      "A calm, centred hero with social proof, one primary action and a 3D product scene that shows the workflow at a glance.",
    process: [
      "Wrote a message hierarchy around one core promise",
      "Designed the review badge, hero and single CTA",
      "Composed the 3D scene with floating UI cards",
      "Balanced the soft blue palette for long reading",
    ],
  },
  {
    slug: "flaxpay",
    name: "Flaxpay",
    tagline: "Swift money transfer mobile app UI",
    tags: ["Mobile UI", "Fintech", "Splash Screen"],
    image: flaxpay.url,
    fit: "contain",
    problem:
      "Transfer apps feel heavy at first launch, which hurts trust in the seconds before the first screen loads.",
    solution:
      "A minimal dark splash with a two-tone wordmark and a soft green glow, setting a fast, confident tone for the app.",
    process: [
      "Defined the brand mark and its two-tone treatment",
      "Designed the splash, onboarding and transfer flows",
      "Set a dark palette with a single lime accent",
      "Validated tap targets and contrast on device sizes",
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