import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/site/Layout";
import {
  Mail, Phone, MapPin, ArrowRight, CheckCircle2,
  Clock, MessageSquare, Send,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Contact TANIT — Request a Quote or Consultation" },
      { name: "description", content: "Get in touch with TANIT for software development, cybersecurity, ICT infrastructure and digital solutions in Tanzania and East Africa." },
    ],
  }),
});

const GOLD = "#c8a84b";
const GOLD_DIM = "rgba(200,168,75,0.7)";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); }
    }, { threshold: 0.08 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Field({ label, name, type = "text", required, className = "" }: {
  label: string; name: string; type?: string; required?: boolean; className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-1.5">
        {label}{required && <span style={{ color:GOLD }}> *</span>}
      </label>
      <input
        id={name} name={name} type={type} required={required}
        className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 placeholder:text-muted-foreground/50"
      />
    </div>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const r1 = useReveal();

  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground" style={{ minHeight:"380px" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage:"radial-gradient(circle at 15% 50%, var(--accent) 0, transparent 40%), radial-gradient(circle at 85% 30%, var(--accent) 0, transparent 35%)" }} />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="inline-flex items-center gap-3 mb-5">
              <div style={{ height:"1px", width:"36px", background:`linear-gradient(90deg,transparent,${GOLD_DIM})` }} />
              <span style={{ fontSize:"10.5px", fontWeight:700, letterSpacing:"0.28em", color:GOLD_DIM, textTransform:"uppercase" as const }}>Partner With Us</span>
              <div style={{ height:"1px", width:"36px", background:`linear-gradient(90deg,${GOLD_DIM},transparent)` }} />
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Let's Build Technology<br className="hidden sm:block" />
              That Drives <span className="gradient-text">Your Success.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed"
              style={{ color:"rgba(255,255,255,0.62)", fontWeight:300, lineHeight:1.85 }}>
              Tell us about your project, tender or institutional need. Our team will respond within one business day.
            </p>
            <div className="mt-6 flex flex-wrap gap-5">
              {[
                { Icon:Clock,          text:"Response within 24 hours" },
                { Icon:CheckCircle2,   text:"Free initial consultation" },
                { Icon:MessageSquare,  text:"No obligation quote" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-xs font-medium" style={{ color:"rgba(255,255,255,0.55)" }}>
                  <Icon size={13} style={{ color:GOLD }} /> {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CONTENT ── */}
      <section className="relative overflow-hidden bg-background py-20">
        <div className="glow-light-center" style={{ width:"280px", height:"280px" }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage:"radial-gradient(circle,oklch(0.20 0.05 258) 1px,transparent 1px)",
          backgroundSize:"28px 28px",
        }} />

        <div ref={r1} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">

            {/* Left — contact info */}
            <div className="lg:col-span-2 space-y-5">
              {/* Office card */}
              <div className="relative overflow-hidden rounded-2xl border p-7"
                style={{ borderColor:"rgba(200,168,75,0.18)", background:"linear-gradient(135deg,rgba(200,168,75,0.04),rgba(255,255,255,0.95))", boxShadow:"0 4px 30px rgba(0,0,0,0.06)" }}>
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
                  style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
                <h3 style={{ fontSize:"10.5px", fontWeight:700, letterSpacing:"0.24em", color:GOLD_DIM, textTransform:"uppercase" as const }}>Head Office</h3>
                <div className="mt-5 space-y-3.5">
                  {[
                    { Icon:MapPin, text:"Posta, Dar es Salaam, Tanzania" },
                    { Icon:Phone,  text:"+255 699 846 887" },
                    { Icon:Phone,  text:"+255 694 893 936" },
                    { Icon:Phone,  text:"+255 623 766 144" },
                    { Icon:Mail,   text:"info@tanit.co.tz" },
                  ].map(({ Icon, text }, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-foreground/75">
                      <Icon size={15} className="mt-0.5 flex-shrink-0" style={{ color:GOLD }} />
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Registration card */}
              <div className="rounded-2xl border border-border bg-secondary/40 p-6">
                <h3 style={{ fontSize:"10.5px", fontWeight:700, letterSpacing:"0.24em", color:GOLD_DIM, textTransform:"uppercase" as const }}>Registered Presence</h3>
                <p className="mt-3 text-sm text-foreground/80">Dar es Salaam (Head Office) · Dodoma · Coast Region · Mwanza</p>
                <p className="mt-2 text-xs text-muted-foreground">Reg. No. 200925394 — Incorporated under the Companies Act of 2002.</p>
              </div>

              {/* Response time */}
              <div className="rounded-2xl border p-6 text-center"
                style={{ borderColor:"rgba(200,168,75,0.2)", background:"rgba(200,168,75,0.04)" }}>
                <Clock size={22} style={{ color:GOLD, margin:"0 auto 8px" }} />
                <p className="text-sm font-bold text-foreground">We respond within 24 hours</p>
                <p className="mt-1 text-xs text-muted-foreground">Monday – Saturday, 8am – 6pm EAT</p>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-2xl border p-8 shadow-lg"
                style={{ borderColor:"rgba(200,168,75,0.16)", background:"white", boxShadow:"0 8px 50px rgba(0,0,0,0.08)" }}>
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
                  style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />

                {sent ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full"
                      style={{ background:"rgba(200,168,75,0.12)", border:`2px solid rgba(200,168,75,0.4)` }}>
                      <CheckCircle2 size={28} style={{ color:GOLD }} />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-foreground">Message Received</h3>
                    <p className="mt-2 text-sm text-muted-foreground max-w-xs">Thank you for reaching out. A TANIT representative will be in touch within one business day.</p>
                    <button onClick={() => setSent(false)}
                      className="mt-6 text-xs font-semibold underline underline-offset-2" style={{ color:GOLD }}>
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h2 className="text-xl font-extrabold text-foreground">Send Us a Message</h2>
                      <p className="mt-1 text-xs text-muted-foreground">Fill in the form and we'll get back to you promptly.</p>
                    </div>
                    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Full Name" name="name" required />
                        <Field label="Organisation" name="org" />
                        <Field label="Email Address" name="email" type="email" required />
                        <Field label="Phone Number" name="phone" />
                      </div>
                      <Field label="Subject" name="subject" className="mt-4" />
                      <div className="mt-4">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-1.5">
                          Message <span style={{ color:GOLD }}>*</span>
                        </label>
                        <textarea
                          required rows={5} name="message"
                          className="w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none"
                          placeholder="Tell us about your project or requirement..."
                        />
                      </div>
                      <button type="submit"
                        className="btn-glow group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-all">
                        <Send size={15} /> Send Message
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
