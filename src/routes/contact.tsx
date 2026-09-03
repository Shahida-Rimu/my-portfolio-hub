import { useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, Palette, Github, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
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
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);
    try {
      await emailjs.sendForm(
        "service_t81la7o",
        "template_dtsimt2",
        formRef.current,
        "zrvchrzndiQatnTHw0AVD",
      );
      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something thoughtful"
        copy="Share a few details about your project or role and I'll reply as soon as I can."
      />

      <section className="mx-auto grid w-[min(92%,1180px)] grid-cols-1 gap-8 py-8 lg:grid-cols-2">
        <form
          ref={formRef}
          className="w-full rounded-3xl border border-border bg-card p-6 sm:p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5">
            <input type="hidden" name="to_name" value="Shahida Akter Rimu" />
            <label className="grid gap-2 text-sm font-medium">
              Name
              <input
                name="from_name"
                required
                disabled={isSending}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base font-normal outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-60"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Email
              <input
                name="from_email"
                type="email"
                required
                disabled={isSending}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base font-normal outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-60"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              Message
              <textarea
                name="message"
                required
                rows={5}
                disabled={isSending}
                className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base font-normal outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-60"
              />
            </label>
            <button
              type="submit"
              disabled={isSending}
              className="inline-flex items-center justify-center gap-2 justify-self-start rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send message"
              )}
            </button>
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
