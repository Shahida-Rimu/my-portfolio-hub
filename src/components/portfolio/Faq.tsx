import { Eyebrow } from "./Eyebrow";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most projects run 3 to 6 weeks depending on page count and complexity. You get a clear timeline with milestones before we start, and weekly check-ins throughout.",
  },
  {
    q: "Do you handle both design and development?",
    a: "Yes. I design in Figma and build the live site myself, so nothing gets lost between the mockup and the finished website.",
  },
  {
    q: "Will my website be mobile-friendly?",
    a: "Every build is designed mobile-first and tested across phones, tablets and desktops before launch.",
  },
  {
    q: "Can I update my website after it's live?",
    a: "Absolutely. I hand over an editable setup plus a short walkthrough so your team can publish updates without touching code.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes, monthly care plans cover updates, small design changes, performance checks and priority support.",
  },
];

export function Faq() {
  return (
    <section id="insights" className="mx-auto w-[min(92%,1000px)] py-24">
      <div className="text-center">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,3rem)]">Questions? Answers.</h2>
      </div>
      <Accordion type="single" collapsible className="mt-12 space-y-4">
        {faqs.map((f) => (
          <AccordionItem key={f.q} value={f.q} className="border border-border px-6">
            <AccordionTrigger className="py-6 text-left font-display text-base font-medium uppercase tracking-wide hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-base text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}