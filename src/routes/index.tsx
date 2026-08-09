import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Works } from "@/components/portfolio/Works";
import { Faq } from "@/components/portfolio/Faq";
import { SiteFooter } from "@/components/portfolio/SiteFooter";

const title = "Shadhin Shomen — UX/UI Designer & Webflow Developer";
const description =
  "Portfolio of Shadhin Shomen: UX/UI design, Webflow development and conversion-focused websites for professionals and growing businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <div className="bg-ink pb-2">
        <SiteHeader />
      </div>
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
