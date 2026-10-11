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
  {
    slug: "flaxpay",
    name: "FlaxPay",
    tagline: "A mobile wallet for clear, confident everyday payments",
    tags: ["Mobile UI", "Fintech"],
    image: "/Flaxpay mockup.png",
    fit: "contain",
    problem: "Mobile payment interfaces often overwhelm users with competing actions and unclear transaction feedback. This concept explores how a wallet can make balances, transfers and QR payments easier to understand without sacrificing a sense of security.",
    solution: "A focused mobile experience with a prominent balance, distinct send and receive actions, readable activity history and a guided QR scanning flow. A high-contrast visual system gives essential financial information a consistent hierarchy.",
    process: [
      "Define the core wallet journeys: sign-in, balance review, transfer and QR payment",
      "Wireframe a dashboard that prioritizes balances and frequent payment actions",
      "Prototype onboarding, transaction feedback and QR confirmation states in Figma",
      "Review contrast, touch targets and error recovery across the mobile flow",
    ],
  },
  {
    slug: "aniways",
    name: "Aniways",
    tagline: "An immersive storefront for anime collectibles and fandom culture",
    tags: ["Web UI", "E-commerce"],
    image: "/Anyway mockup.jpg",
    fit: "contain",
    problem: "Collectibles shoppers need to discover new releases quickly while comparing products across figures, manga and gaming categories. This concept addresses the tension between expressive fandom branding and a straightforward shopping experience.",
    solution: "A responsive storefront pairs bold character-led imagery with clear category navigation, featured drops and structured product discovery. Consistent product presentation and visible trust signals support a more confident path to purchase.",
    process: [
      "Map browsing and purchase journeys across collectible categories",
      "Organize navigation, new releases and promotional content into a clear hierarchy",
      "Develop responsive storefront and product-card prototypes in Figma",
      "Review mobile browsing, product readability and checkout entry points",
    ],
  },
  {
    slug: "nexiok",
    name: "Nexiok",
    tagline: "An approachable AI automation platform for growing businesses",
    tags: ["SaaS", "AI", "UI/UX"],
    image: "/Nexiok mockup.png",
    fit: "contain",
    problem: "AI automation offerings can be difficult to evaluate when technical language obscures practical business benefits. This concept explores how prospective customers can understand capabilities, compare plans and identify a suitable starting point.",
    solution: "A structured SaaS website translates automation capabilities into clear service categories, supported by project examples, a focused FAQ and comparable pricing plans. Friendly visual cues make a technical product feel more accessible.",
    process: [
      "Identify key evaluation questions around automation services, pricing and support",
      "Build an information architecture connecting benefits, use cases and plans",
      "Prototype reusable service, project, FAQ and pricing components",
      "Refine content hierarchy and responsive behavior for easier plan comparison",
    ],
  },
  {
    slug: "seiro",
    name: "Seiro",
    tagline: "A modern digital presence for next-generation AI solutions",
    tags: ["Web Design", "AI Solutions"],
    image: "/Seiro mockup.png",
    fit: "contain",
    problem: "AI consultancies must communicate complex capabilities while establishing credibility and helping visitors choose a relevant service. This concept explores a clearer presentation of integration, documentation and ongoing technical support.",
    solution: "A visually distinctive website combines a concise offer with a scannable service layout and clear contact pathways. Modular content blocks separate key capabilities so visitors can evaluate the offering without navigating dense technical copy.",
    process: [
      "Define visitor goals and organize AI services around business needs",
      "Wireframe the primary offer, service overview and enquiry pathways",
      "Create a cohesive visual system for typography, imagery and service modules",
      "Review responsive layouts, content contrast and contact discoverability",
    ],
  },
  {
    slug: "gardnix",
    name: "Gardnix",
    tagline: "A CMS-ready website for gardening and landscape services",
    tags: ["Web UI", "CMS"],
    image: "/Gardnix mockup.png",
    fit: "contain",
    problem: "Landscaping businesses need to explain varied services, demonstrate their work and keep seasonal content current. This concept addresses how a service website can build trust while remaining straightforward for a non-technical team to maintain.",
    solution: "A nature-led website organizes services, project imagery, team profiles and customer feedback around a clear appointment pathway. Reusable CMS-oriented content patterns support consistent updates to projects and articles.",
    process: [
      "Map customer enquiries and define service, project and article content types",
      "Plan a navigation structure that connects service discovery to appointments",
      "Design reusable CMS templates and image-led project presentations",
      "Review mobile readability, enquiry placement and content-editing consistency",
    ],
  },
  {
    slug: "novera-studio",
    name: "Novera Studio",
    tagline: "A bold agency portfolio connecting creative craft with clear storytelling",
    tags: ["Agency", "UX"],
    image: "/Novera studio mockup.png",
    fit: "contain",
    problem: "Creative agency websites can emphasize visual impact at the expense of service clarity and portfolio navigation. This concept explores how a distinctive studio identity can also help potential clients understand its expertise and start a conversation.",
    solution: "An editorial agency experience uses expressive typography, structured service listings, curated project imagery and a dedicated team presentation. A consistent hierarchy connects the studio’s personality with practical enquiry pathways.",
    process: [
      "Define the studio narrative and key client evaluation journeys",
      "Structure services, selected work and team content around client questions",
      "Prototype an editorial visual system with reusable portfolio layouts",
      "Refine navigation, responsive typography and contact transitions",
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