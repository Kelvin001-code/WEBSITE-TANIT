import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/site/Layout";
import directorscofounders from "@/assets/directorscofounders.png";
import pos from "@/assets/pos.jpg";
import security from "@/assets/security.jpg";
import {
  ArrowRight, Code2, ShieldCheck, Network, Cpu, Palette, Wrench,
  CheckCircle2, Globe, Smartphone, Cloud, Lock, Brain,
  Star, Users, Clock, Zap, HeartHandshake, ChevronRight,
  Monitor, Trophy, Flag, LayoutGrid, Headphones,
} from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

/* ── Scroll reveal hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── Animated counter ── */
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; obs.disconnect();
      let cur = 0; const step = value / 50;
      const t = setInterval(() => { cur += step; if (cur >= value) { setN(value); clearInterval(t); } else setN(Math.floor(cur)); }, 30);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ── Data ── */
const services = [
  { icon: Globe,       title: "Web Development",        desc: "Fast, responsive and SEO-optimised websites and web applications built with modern frameworks.", color: "blue" },
  { icon: Code2,       title: "Software Development",   desc: "Custom enterprise software, automation systems and business platforms engineered to scale.", color: "indigo" },
  { icon: Smartphone,  title: "Mobile Applications",    desc: "Native-quality Android and iOS apps for field operations, commerce and customer engagement.", color: "violet" },
  { icon: ShieldCheck, title: "Cybersecurity",          desc: "Penetration testing, security audits and data protection aligned to international standards.", color: "green" },
  { icon: Cloud,       title: "Cloud Solutions",        desc: "Cloud architecture, migrations, backups and hybrid deployments on AWS and Azure.", color: "sky" },
  { icon: Network,     title: "ICT Infrastructure",     desc: "Structured cabling, networking, servers and CCTV deployments built to last.", color: "teal" },
  { icon: Brain,       title: "Artificial Intelligence & IoT", desc: "Practical AI, IoT sensor networks and automation solutions tailored to African markets.", color: "orange" },
  { icon: Palette,     title: "Creative & Branding",    desc: "Logos, brand identity, motion graphics, photography and digital content production.", color: "pink" },
];

const stats = [
  { value: 5,   suffix: "+",  label: "Years Experience",   sub: "Delivering excellence since day one",  Icon: Trophy },
  { value: 100, suffix: "%",  label: "Tanzanian Owned",    sub: "Proudly built and led locally",         Icon: Flag },
  { value: 8,   suffix: "",   label: "Service Lines",      sub: "End-to-end technology coverage",        Icon: LayoutGrid },
  { value: 24,  suffix: "/7", label: "Client Support",     sub: "Always available when you need us",     Icon: Headphones },
];

const whyUs = [
  { icon: Zap,           title: "Fast Delivery",        desc: "Agile delivery with weekly demos and transparent timelines." },
  { icon: Users,         title: "Professional Team",    desc: "Certified engineers, designers and consultants under one roof." },
  { icon: Monitor,       title: "Modern Technologies",  desc: "React, Flutter, Node.js, Laravel, Python, AWS and more." },
  { icon: Clock,         title: "24/7 Support",         desc: "Round-the-clock helpdesk and managed services for all clients." },
  { icon: Lock,          title: "Secure Systems",       desc: "Security built into every layer — not bolted on afterwards." },
  { icon: HeartHandshake,title: "Affordable Pricing",   desc: "Transparent, competitive pricing with no hidden costs." },
];

const techStack = [
  "React","Next.js","Flutter","Laravel","Node.js","Python","TypeScript",
  "PostgreSQL","MySQL","Docker","AWS","Firebase","Figma","TailwindCSS",
];

const testimonials = [
  { name: "Amina Saleh",    role: "CEO, RetailPro Tanzania",   stars: 5, text: "TANIT transformed our entire retail operation with BiasharaLink. The system is fast, reliable and our staff adopted it within days." },
  { name: "Dr. James Mwita",role: "Director, MedCare Clinic",  stars: 5, text: "Their cybersecurity audit uncovered critical vulnerabilities we had no idea about. Professional, thorough and highly recommended." },
  { name: "Grace Kimaro",   role: "Founder, GK Enterprises",   stars: 5, text: "The website they built for us looks world-class. We started getting client enquiries within the first week of launch." },
];

const trustedSectors = ["Government Institutions","Retail Enterprises","Healthcare Facilities","Educational Institutions","Financial Services","Non-Governmental Organisations","Hospitality Industry","Manufacturing Sector"];

/* ── Page component ── */
function Index() {
  const s1 = useReveal(), s2 = useReveal(), s3 = useReveal(),
        s4 = useReveal(), s5 = useReveal(), s6 = useReveal(), s7 = useReveal();

  return (
    <Layout>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-primary pb-16 text-primary-foreground lg:items-center lg:pb-0">

        {/* Background photo */}
        <img src={directorscofounders} alt="TANIT founders"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 45%" }} />

        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

        {/* Floating orbs */}
        <div className="float-orb absolute right-[15%] top-[20%] h-64 w-64 rounded-full bg-accent/8 blur-3xl hidden lg:block" />
        <div className="float-orb-2 absolute right-[30%] top-[50%] h-40 w-40 rounded-full bg-blue-400/6 blur-2xl hidden lg:block" />
        <div className="float-orb-3 absolute right-[8%] bottom-[20%] h-48 w-48 rounded-full bg-accent/6 blur-3xl hidden lg:block" />

        {/* Content */}
        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Premium brand badge */}
            <div className="mb-8 inline-block">
              <div className="brand-badge group relative inline-flex items-center gap-3 px-5 py-2.5"
                style={{
                  background: "linear-gradient(135deg, rgba(200,168,75,0.08) 0%, rgba(200,168,75,0.03) 100%)",
                  border: "1px solid rgba(200,168,75,0.35)",
                  borderRadius: "4px",
                  boxShadow: "0 0 20px rgba(200,168,75,0.12), inset 0 1px 0 rgba(200,168,75,0.15)",
                  backdropFilter: "blur(12px)",
                }}>
                {/* Left accent line */}
                <span style={{ width:"2px", height:"22px", background:"linear-gradient(180deg,transparent,#c8a84b,transparent)", borderRadius:"2px", flexShrink:0 }} />

                {/* Text */}
                <span style={{
                  fontFamily: "'Arial', sans-serif",
                  fontSize: "10.5px",
                  fontWeight: 700,
                  letterSpacing: "0.28em",
                  color: "#c8a84b",
                  textTransform: "uppercase" as const,
                  lineHeight: 1,
                  textShadow: "0 0 20px rgba(200,168,75,0.4)",
                }}>
                  Tanzania Innovative Technology Ltd
                </span>

                {/* Right accent line */}
                <span style={{ width:"2px", height:"22px", background:"linear-gradient(180deg,transparent,#c8a84b,transparent)", borderRadius:"2px", flexShrink:0 }} />

                {/* Corner dots */}
                <span style={{ position:"absolute", top:"4px", left:"4px", width:"3px", height:"3px", borderRadius:"50%", background:"rgba(200,168,75,0.6)" }} />
                <span style={{ position:"absolute", top:"4px", right:"4px", width:"3px", height:"3px", borderRadius:"50%", background:"rgba(200,168,75,0.6)" }} />
                <span style={{ position:"absolute", bottom:"4px", left:"4px", width:"3px", height:"3px", borderRadius:"50%", background:"rgba(200,168,75,0.6)" }} />
                <span style={{ position:"absolute", bottom:"4px", right:"4px", width:"3px", height:"3px", borderRadius:"50%", background:"rgba(200,168,75,0.6)" }} />
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
              Our Technology,{" "}
              <span className="gradient-text">Your Success.</span>
            </h1>

            {/* Description */}
            <div className="mt-7 max-w-lg space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              {/* Company identity line */}
              <p style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.38)",
                lineHeight: 1.6,
              }}>
                Tanzania Innovative Technology Company Limited &nbsp;·&nbsp; Reg. No. 200925394
              </p>

              {/* Main description */}
              <p style={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "1.85",
                color: "rgba(255,255,255,0.78)",
                letterSpacing: "0.01em",
              }}>
                Delivering{" "}
                <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.95)" }}>secure</span>,{" "}
                <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.95)" }}>scalable</span>{" "}
                software,{" "}
                <span style={{
                  fontWeight: 600,
                  background: "linear-gradient(90deg, #c8a84b, #f0d080)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>cybersecurity</span>{" "}
                and{" "}
                <span style={{
                  fontWeight: 600,
                  background: "linear-gradient(90deg, #c8a84b, #f0d080)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>digital solutions</span>{" "}
                to enterprises and institutions across East Africa.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact"
                className="btn-glow group inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground transition-all">
                Get Started <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services"
                className="glass group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-white/10">
                View Services <ChevronRight size={15} />
              </Link>
            </div>

            {/* Mini stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[["8+","Service Lines"],["100%","Tanzanian Owned"],["24/7","Support"]].map(([v,l]) => (
                <div key={l}>
                  <div className="text-2xl font-extrabold text-accent">{v}</div>
                  <div className="text-xs text-primary-foreground/55 uppercase tracking-wider">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className="h-8 w-px bg-primary-foreground/25" />
          <span className="text-[9px] uppercase tracking-[0.2em] text-primary-foreground/35">Scroll</span>
        </div>
      </section>

      {/* ════════════════════════════════════════
          INDUSTRIES TEASER
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-y border-border bg-secondary/40 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span style={{ height:"2px", width:"20px", background:"#c8a84b", borderRadius:"2px", display:"inline-block" }} />
              <span style={{ fontSize:"10.5px", fontWeight:700, letterSpacing:"0.24em", color:"rgba(200,168,75,0.85)", textTransform:"uppercase" as const }}>Industry Expertise</span>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
              Trusted Across <span className="gradient-text">14+ Industries</span>
            </h2>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground">
              From retail and healthcare to government and fintech — we deliver enterprise-grade digital solutions across every sector in East Africa.
            </p>
          </div>
          <Link to="/industries"
            className="btn-glow group inline-flex flex-shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all">
            Explore Industries <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS — Premium achievements strip
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage:"radial-gradient(circle at 20% 20%, var(--accent) 0, transparent 40%), radial-gradient(circle at 80% 60%, var(--accent) 0, transparent 35%)" }} />

        <div ref={s1} className="reveal relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          {/* Section label */}
          <div className="mb-10 flex items-center justify-center gap-4">
            <div style={{ height:"1px", width:"60px", background:"linear-gradient(90deg,transparent,rgba(200,168,75,0.5))" }} />
            <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.3em", color:"rgba(200,168,75,0.7)", textTransform:"uppercase" }}>
              Company Achievements
            </span>
            <div style={{ height:"1px", width:"60px", background:"linear-gradient(90deg,rgba(200,168,75,0.5),transparent)" }} />
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(200,168,75,0.15)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
                  animationDelay: `${i * 100}ms`,
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(200,168,75,0.08) 0%, transparent 70%)" }} />

                {/* Top accent line */}
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(90deg, transparent, #c8a84b, transparent)" }} />

                {/* Icon */}
                <div className="mb-4 flex items-center justify-center">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background:"rgba(200,168,75,0.12)", border:"1px solid rgba(200,168,75,0.25)" }}>
                    <s.Icon size={20} style={{ color:"#c8a84b", strokeWidth:1.75 }} />
                  </div>
                </div>

                {/* Number */}
                <div style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(135deg, #ffffff 30%, #c8a84b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  <Counter value={s.value} suffix={s.suffix} />
                </div>

                {/* Label */}
                <div style={{
                  marginTop: "8px",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.85)",
                }}>
                  {s.label}
                </div>

                {/* Sub label */}
                <div style={{
                  marginTop: "6px",
                  fontSize: "11px",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  color: "rgba(255,255,255,0.38)",
                  letterSpacing: "0.01em",
                }}>
                  {s.sub}
                </div>

                {/* Bottom corner dots */}
                <div className="absolute bottom-3 left-3 h-1 w-1 rounded-full opacity-30 group-hover:opacity-70 transition-opacity"
                  style={{ background: "#c8a84b" }} />
                <div className="absolute bottom-3 right-3 h-1 w-1 rounded-full opacity-30 group-hover:opacity-70 transition-opacity"
                  style={{ background: "#c8a84b" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICES
      ════════════════════════════════════════ */}
      <section className="bg-background py-24">
        <div ref={s2} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-accent/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground">What We Do</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">A full-spectrum technology partner.</h2>
            <p className="mt-4 text-muted-foreground">From strategy to deployment — one accountable partner across the entire digital lifecycle.</p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="service-card group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-${s.color}-50 ring-1 ring-${s.color}-100 transition group-hover:scale-110`}>
                  <s.icon size={22} className={`text-${s.color}-600`} />
                </div>
                <h3 className="text-sm font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent opacity-0 transition-all duration-200 group-hover:opacity-100">
                  Learn more <ArrowRight size={11} />
                </div>
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-accent/0 transition-all duration-300 group-hover:ring-accent/30" />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:border-accent hover:shadow-md">
              View All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          BIASHARALINK PRODUCT
      ════════════════════════════════════════ */}
      <section className="bg-secondary/50 py-24">
        <div ref={s3} className="reveal mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-block rounded-full bg-accent/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground">Flagship Product</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">BiasharaLink / KOG POS</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A real-time, mobile-friendly point-of-sale and business management platform built for
              retailers, pharmacies, restaurants and wholesalers across Tanzania.
            </p>
            <ul className="mt-6 space-y-3">
              {["Access from any device, anywhere","Real-time sales, stock and reports","Easy, secure and efficient point of sale","Flexible plans: Plain · Premium · Pro"].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 size={17} className="flex-shrink-0 text-accent" /> {t}
                </li>
              ))}
            </ul>
            <Link to="/products" className="btn-glow group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all">
              Discover BiasharaLink <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-accent/8 blur-3xl" />
            <img src={pos} alt="BiasharaLink POS" loading="lazy" className="relative rounded-2xl shadow-2xl ring-1 ring-border" />
            <div className="absolute -bottom-4 -right-4 hidden rounded-2xl bg-accent px-5 py-3 text-sm font-bold text-accent-foreground shadow-xl sm:block">
              Anza Leo — Start Smart Today
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WHY CHOOSE US
      ════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div ref={s4} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-accent/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground">Why Choose Us</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">Local understanding.<br />Global standards.</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We combine deep technical expertise with an understanding of the Tanzanian business
                environment to deliver solutions that work in the real world.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {whyUs.map((w) => (
                  <div key={w.title} className="service-card rounded-xl border border-border bg-secondary/40 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15">
                      <w.icon size={18} className="text-primary" />
                    </div>
                    <div className="mt-3 text-sm font-bold text-foreground">{w.title}</div>
                    <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{w.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-primary/5 blur-3xl" />
              <img src={security} alt="Secure infrastructure" loading="lazy" className="relative rounded-2xl shadow-xl ring-1 ring-border" />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TECHNOLOGY STACK
      ════════════════════════════════════════ */}
      <section className="bg-secondary/40 py-20">
        <div ref={s5} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <span className="inline-block rounded-full bg-accent/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground">Technology Stack</span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl">Built with industry-leading tools.</h2>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <div key={t} className="tech-badge rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground shadow-sm">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════════ */}
      <section className="bg-white py-24">
        <div ref={s6} className="reveal mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <span className="inline-block rounded-full bg-accent/15 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground">Client Testimonials</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">What our clients say.</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="service-card relative rounded-2xl border border-border bg-secondary/30 p-7 shadow-sm">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
                {/* Decorative quote */}
                <div className="absolute right-6 top-5 text-5xl font-serif leading-none text-accent/15 select-none">"</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        {/* Decorative blobs */}
        <div className="float-orb absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="float-orb-2 absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-blue-400/8 blur-3xl" />
        <div className="float-orb-3 absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/6 blur-3xl" />

        <div ref={s7} className="reveal relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Ready to Build?
          </span>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Ready to Build Your Next<br className="hidden sm:block" />
            <span className="gradient-text"> Digital Solution?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/70">
            Modern solutions. Smart technology. Real results. Tell us what you need and we will
            build something that drives your success.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-glow group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-bold text-accent-foreground transition-all">
              Talk to TANIT <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/about" className="glass inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-white/10">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
