import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, Palette, Github } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { contact } from "@/lib/portfolio-data";

const title = "Contact — Shahida Akter Rimu";
const description =
  "Get in touch with Shahida Akter Rimu for UI/UX design, frontend development or graphic design work.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contact,
});

const details = [
  { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
  { icon: Linkedin, label: contact.linkedinLabel, href: "https://www.linkedin.com/in/shahida-akter-rimu-4b9033350/", external: true },
  { icon: Palette, label: contact.behanceLabel, href: "https://www.behance.net/shahidarimu", external: true },
  { icon: Github, label: "Shahida-Rimu", href: "https://github.com/Shahida-Rimu", external: true },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something thoughtful"
        copy="Share a few details about your project or role and I'll reply as soon as I can."
      />

      <section className="mx-auto grid w-[min(92%,1180px)] grid-cols-1 gap-8 py-8 lg:grid-cols-2">
        <form
          className="w-full rounded-3xl border border-border bg-card p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const body = `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`;
            window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
              "Portfolio enquiry",
            )}&body=${encodeURIComponent(String(body))}`;
            setSent(true);
          }}
        >
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-medium">
              Name
              <input
                name="name"
                required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base font-normal outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Email
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base font-normal outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base font-normal outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <button
              type="submit"
              className="justify-self-start rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send message
            </button>
            {sent && (
              <p className="text-sm text-primary" role="status">
                Your email app should open with the message ready to send.
              </p>
            )}
          </div>
        </form>

        <div className="grid w-full content-start gap-4">
          {details.map((d) => (
            <a
              key={d.label}
              href={d.href}
              target={d.external ? "_blank" : undefined}
              rel={d.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <d.icon className="size-4" />
              </span>
              <span className="min-w-0 text-sm break-all">{d.label}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}