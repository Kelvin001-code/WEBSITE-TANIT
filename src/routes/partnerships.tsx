import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/site/Layout";
import {
  ArrowRight, ChevronRight, ExternalLink, Mail, Phone, MapPin,
  Globe, Code2, ShieldCheck, Network, Palette, Brain, Cloud,
  Building2, Users, Handshake, Lightbulb, Zap, Target, Award,
  TrendingUp, BookOpen, Layers, Star, CheckCircle2, Send,
  MessageSquare, Upload, BarChart3, Cpu, GraduationCap,
  Megaphone, UserCheck, Rocket, DollarSign,
} from "lucide-react";

export const Route = createFileRoute("/partnerships")({
  component: Partnerships,
  head: () => ({
    meta: [
      { title: "Partnerships & Strategic Collaboration — TANIT Tanzania Innovative Technology" },
      { name: "description", content: "Partner with TANIT to deliver scalable digital transformation solutions across Tanzania and East Africa. Explore technology, business, reseller and individual collaboration opportunities." },
    ],
  }),
});

/* ─────────────────────────────────────────────
   Constants
───────────────────────────────────────────── */
const GOLD = "#c8a84b";
const GOLD_DIM = "rgba(200,168,75,0.7)";
const NAVY = "oklch(0.20 0.05 258)";

/* ─────────────────────────────────────────────
   Hooks
───────────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); }
    }, { threshold: 0.06 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─────────────────────────────────────────────
   Shared helpers
───────────────────────────────────────────── */
const label = (text: string) => (
  <div className="inline-flex items-center gap-3 mb-5">
    <div style={{ height:"1px", width:"36px", background:`linear-gradient(90deg,transparent,${GOLD_DIM})` }} />
    <span style={{ fontSize:"10.5px", fontWeight:700, letterSpacing:"0.28em", color:GOLD_DIM, textTransform:"uppercase" as const }}>{text}</span>
    <div style={{ height:"1px", width:"36px", background:`linear-gradient(90deg,${GOLD_DIM},transparent)` }} />
  </div>
);

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const whyPartner = [
  { icon: Zap,         title:"Enterprise Technology Access",   desc:"Gain access to TANIT's full suite of enterprise ICT solutions, platforms and digital infrastructure." },
  { icon: Handshake,   title:"Strategic Digital Collaboration",desc:"Co-develop, co-deploy and co-market technology solutions with a trusted Tanzanian ICT company." },
  { icon: Lightbulb,   title:"Joint Innovation Opportunities", desc:"Collaborate on R&D, AI, IoT and emerging technology projects that create real market impact." },
  { icon: TrendingUp,  title:"Market Expansion Partnerships",  desc:"Leverage TANIT's network across Tanzania and East Africa to expand your market reach." },
  { icon: Cpu,         title:"Technical Implementation Support",desc:"Benefit from TANIT's engineering teams for seamless technical integration and deployment." },
  { icon: Palette,     title:"Branding & Business Growth",     desc:"Grow your brand through joint campaigns, co-branded solutions and shared marketing initiatives." },
  { icon: Network,     title:"Scalable ICT Infrastructure",    desc:"Access enterprise-grade networking, cloud and cybersecurity infrastructure for your operations." },
  { icon: Star,        title:"Long-Term Strategic Relations",  desc:"Build lasting partnerships built on trust, shared goals and mutual business success." },
];

const partnershipTypes = [
  {
    icon: Code2,
    title:"Technology Partnerships",
    tag:"Tech",
    color:"blue",
    desc:"For software companies, infrastructure providers, hosting companies and cybersecurity firms seeking to integrate or co-deliver solutions.",
    benefits:["Software integrations","API & platform partnerships","Co-developed products","Joint technical deployments"],
  },
  {
    icon: Building2,
    title:"Business Partnerships",
    tag:"Business",
    color:"gold",
    desc:"For enterprises, startups and organisations seeking strategic ICT collaboration to accelerate their digital transformation journey.",
    benefits:["Enterprise ICT projects","Digital transformation","Joint go-to-market","Institutional contracts"],
  },
  {
    icon: DollarSign,
    title:"Reseller Partnerships",
    tag:"Reseller",
    color:"green",
    desc:"For individuals or companies interested in reselling TANIT products, services and platforms to their own client base.",
    benefits:["Reseller commissions","Sales support","Marketing materials","Dedicated account manager"],
  },
  {
    icon: GraduationCap,
    title:"Academic & Research",
    tag:"Academic",
    color:"violet",
    desc:"For universities, colleges, research institutions and innovation labs seeking technology collaboration and knowledge exchange.",
    benefits:["Research partnerships","Student programmes","Innovation labs","Knowledge exchange"],
  },
  {
    icon: Megaphone,
    title:"Marketing & Media",
    tag:"Media",
    color:"orange",
    desc:"For branding agencies, media companies and digital marketers looking to collaborate on campaigns and creative technology projects.",
    benefits:["Co-branded campaigns","Content partnerships","Digital media projects","Creative collaborations"],
  },
  {
    icon: UserCheck,
    title:"Freelance & Individual",
    tag:"Individual",
    color:"teal",
    desc:"For developers, designers, consultants, creators and innovators who want to collaborate with TANIT on project-based engagements.",
    benefits:["Project-based work","Flexible collaboration","Skills-based matching","Portfolio building"],
  },
];

const collabOpportunities = [
  { icon: Code2,       title:"Software Integration",       desc:"Integrate your software or APIs with TANIT's platforms for seamless cross-platform delivery." },
  { icon: Cloud,       title:"Cloud & Hosting",            desc:"Partner on cloud infrastructure, managed hosting and hybrid deployment solutions." },
  { icon: ShieldCheck, title:"Cybersecurity Collaboration",desc:"Co-deliver security audits, penetration testing and data protection services." },
  { icon: Network,     title:"ICT Infrastructure",         desc:"Joint deployment of networking, structured cabling, servers and enterprise connectivity." },
  { icon: Brain,       title:"AI & Innovation",            desc:"Collaborate on artificial intelligence, IoT and automation projects for African markets." },
  { icon: Palette,     title:"Branding & Creative",        desc:"Partner on brand identity, motion graphics, digital content and creative campaigns." },
  { icon: Layers,      title:"Government & Enterprise",    desc:"Jointly bid and deliver large-scale government and institutional technology projects." },
  { icon: BookOpen,    title:"Research & Development",     desc:"Co-invest in R&D initiatives that push the boundaries of technology in East Africa." },
];

const partnershipAppTypes = ["Company Partnership","Technology Partnership","Strategic Collaboration","Reseller Program","Individual Collaboration","Research Partnership"];
const industries = ["Information & Communication Technology","Finance & Banking","Healthcare","Education","Government & Public Sector","Retail & E-Commerce","Logistics & Transport","Agriculture","Media & Creative","NGO & Non-Profit","Other"];

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

/** Form field */
function Field({ label: lbl, name, type="text", required, as, options, placeholder, className="" }: {
  label:string; name:string; type?:string; required?:boolean;
  as?:"textarea"|"select"; options?:string[]; placeholder?:string; className?:string;
}) {
  const base = "w-full rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 placeholder:text-muted-foreground/50";
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-1.5">
        {lbl}{required && <span style={{ color:GOLD }}> *</span>}
      </label>
      {as === "textarea" ? (
        <textarea id={name} name={name} required={required} rows={4} placeholder={placeholder} className={`${base} resize-none`} />
      ) : as === "select" ? (
        <select id={name} name={name} required={required} className={base}>
          <option value="">Select {lbl}</option>
          {options?.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input id={name} name={name} type={type} required={required} placeholder={placeholder} className={base} />
      )}
    </div>
  );
}

/** Upload box */
function UploadBox({ label: lbl, hint }: { label:string; hint?:string }) {
  const [file, setFile] = useState<string|null>(null);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-1.5">{lbl}</label>
      <div onClick={() => ref.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); const f = e.dataTransfer.files[0]; if(f) setFile(f.name); }}
        className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 text-center transition-all duration-200"
        style={{ borderColor: dragging ? GOLD : file ? "rgba(200,168,75,0.5)" : "rgba(0,0,0,0.12)", background: file ? "rgba(200,168,75,0.03)" : "rgba(0,0,0,0.01)" }}>
        <input ref={ref} type="file" accept=".pdf,.docx,.zip,.pptx" className="hidden"
          onChange={(e) => { if(e.target.files?.[0]) setFile(e.target.files[0].name); }} />
        {file ? (
          <><CheckCircle2 size={22} style={{ color:GOLD }} /><span className="text-xs font-semibold" style={{ color:GOLD }}>{file}</span><span className="text-[10px] text-muted-foreground">Click to replace</span></>
        ) : (
          <><Upload size={22} style={{ color:"rgba(0,0,0,0.3)" }} /><span className="text-xs font-semibold text-foreground/60">Drag & drop or click to upload</span><span className="text-[10px] text-muted-foreground">{hint || "PDF, DOCX, PPTX — max 10MB"}</span></>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main page
───────────────────────────────────────────── */
function Partnerships() {
  const [selectedType, setSelectedType] = useState("Company Partnership");
  const [submitted, setSubmitted] = useState(false);
  const r1=useReveal(), r2=useReveal(), r3=useReveal(),
        r4=useReveal(), r5=useReveal(), r6=useReveal(), r7=useReveal();

  return (
    <Layout>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-primary text-primary-foreground">

        {/* Slim cinematic atmospheric glow */}
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"-8%", left:"50%", transform:"translateX(-50%)", width:"700px", height:"280px", background:"radial-gradient(ellipse,rgba(59,130,246,0.09) 0%,transparent 70%)", filter:"blur(50px)" }} />
          <div style={{ position:"absolute", bottom:"0", left:"15%", width:"350px", height:"200px", background:"radial-gradient(ellipse,rgba(200,168,75,0.06) 0%,transparent 70%)", filter:"blur(60px)" }} />
          <div style={{ position:"absolute", top:"25%", right:"3%", width:"280px", height:"280px", background:"radial-gradient(ellipse,rgba(59,130,246,0.05) 0%,transparent 70%)", filter:"blur(70px)" }} />
        </div>

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.8) 1px,transparent 1px)", backgroundSize:"32px 32px" }} />

        {/* Network SVG */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.045]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {[
            [180,140],[480,70],[720,190],[960,100],[1150,280],[260,340],[580,390],[820,330],[1060,170],[140,290],[700,60],[1000,350],
          ].map(([x,y],i,arr) => (
            <g key={i}>
              <circle cx={x} cy={y} r="5" fill="#c8a84b" opacity="0.55"/>
              {i < arr.length-1 && <line x1={x} y1={y} x2={arr[i+1][0]} y2={arr[i+1][1]} stroke="#c8a84b" strokeWidth="0.7" opacity="0.35"/>}
              {i % 3 === 0 && i+3 < arr.length && <line x1={x} y1={y} x2={arr[i+3][0]} y2={arr[i+3][1]} stroke="#c8a84b" strokeWidth="0.5" opacity="0.2"/>}
            </g>
          ))}
        </svg>

        {/* Content */}
        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">

            {/* Label */}
            <div className="mb-8 inline-flex items-center gap-3">
              <div style={{ height:"1px", width:"36px", background:`linear-gradient(90deg,transparent,${GOLD_DIM})` }} />
              <span style={{ fontSize:"10.5px", fontWeight:700, letterSpacing:"0.28em", color:GOLD_DIM, textTransform:"uppercase" as const }}>Partnerships & Collaboration</span>
              <div style={{ height:"1px", width:"36px", background:`linear-gradient(90deg,${GOLD_DIM},transparent)` }} />
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Building Strategic{" "}
              <span className="gradient-text">Technology Partnerships</span>
              <br className="hidden lg:block" /> for Africa's Digital Future.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
              style={{ color:"rgba(255,255,255,0.62)", fontWeight:300, lineHeight:1.85 }}>
              TANIT collaborates with{" "}
              <span style={{ fontWeight:600, color:"rgba(255,255,255,0.9)" }}>technology providers</span>,{" "}
              <span style={{ fontWeight:600, color:"rgba(255,255,255,0.9)" }}>innovators</span>, enterprises, institutions and individuals to deliver impactful digital transformation solutions across multiple industries.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#apply"
                className="btn-glow group inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground transition-all">
                Become a Partner <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#types"
                className="glass group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-white/10">
                Explore Opportunities <ChevronRight size={15} />
              </a>
            </div>

            {/* Trust pills */}
            <div className="mt-12 flex flex-wrap gap-3">
              {["6 Partnership Types","Tanzania & East Africa","Enterprise-Grade Collaboration","Open to All Industries"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold"
                  style={{ borderColor:"rgba(200,168,75,0.3)", color:GOLD_DIM, background:"rgba(200,168,75,0.06)" }}>
                  <CheckCircle2 size={10} style={{ color:GOLD }} /> {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className="h-8 w-px bg-primary-foreground/20" />
          <span className="text-[9px] uppercase tracking-[0.2em] text-primary-foreground/30">Scroll</span>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 1 — WHY PARTNER WITH TANIT
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24" style={{ background:"linear-gradient(180deg,oklch(0.99 0.003 250) 0%,oklch(0.97 0.007 255) 100%)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"10%", left:"-5%", width:"320px", height:"320px", background:"radial-gradient(ellipse,rgba(200,168,75,0.05) 0%,transparent 70%)", filter:"blur(60px)" }} />
          <div style={{ position:"absolute", bottom:"10%", right:"-5%", width:"320px", height:"320px", background:"radial-gradient(ellipse,rgba(59,130,246,0.04) 0%,transparent 70%)", filter:"blur(60px)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage:"radial-gradient(circle,oklch(0.20 0.05 258) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

        <div ref={r1} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {label("Why Partner With Us")}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Why Partner With <span className="gradient-text">TANIT?</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Partnering with TANIT means joining a growing ecosystem of technology, innovation and enterprise collaboration across East Africa.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyPartner.map((w, i) => (
              <div key={w.title}
                className="group relative overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ borderColor:"rgba(200,168,75,0.14)", boxShadow:"0 2px 20px rgba(0,0,0,0.05)", animationDelay:`${i*50}ms` }}>
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-all duration-300 group-hover:opacity-100"
                  style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background:"radial-gradient(circle at 50% 0%,rgba(200,168,75,0.04) 0%,transparent 65%)" }} />
                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ background:"linear-gradient(135deg,rgba(200,168,75,0.15),rgba(200,168,75,0.04))", border:"1px solid rgba(200,168,75,0.24)" }}>
                    <w.icon size={19} style={{ color:NAVY, strokeWidth:1.75 }} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground" style={{ lineHeight:1.3 }}>{w.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — PARTNERSHIP TYPES
      ══════════════════════════════════════════ */}
      <section id="types" className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"0", left:"50%", transform:"translateX(-50%)", width:"600px", height:"250px", background:"radial-gradient(ellipse,rgba(59,130,246,0.08) 0%,transparent 70%)", filter:"blur(50px)" }} />
          <div style={{ position:"absolute", bottom:"0", right:"10%", width:"300px", height:"200px", background:"radial-gradient(ellipse,rgba(200,168,75,0.05) 0%,transparent 70%)", filter:"blur(60px)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.8) 1px,transparent 1px)", backgroundSize:"32px 32px" }} />

        <div ref={r2} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {label("Partnership Types")}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Choose Your <span className="gradient-text">Partnership Model</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color:"rgba(255,255,255,0.5)" }}>
              We offer flexible partnership structures designed for every type of collaborator — from global enterprises to individual innovators.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipTypes.map((p, i) => (
              <div key={p.title}
                className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5"
                style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(200,168,75,0.18)", backdropFilter:"blur(16px)", boxShadow:"0 4px 24px rgba(0,0,0,0.25),inset 0 1px 0 rgba(255,255,255,0.06)", animationDelay:`${i*60}ms` }}>
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background:"radial-gradient(circle at 50% 0%,rgba(200,168,75,0.07) 0%,transparent 65%)" }} />
                <div className="relative">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                      style={{ background:"rgba(200,168,75,0.12)", border:"1px solid rgba(200,168,75,0.28)" }}>
                      <p.icon size={20} style={{ color:GOLD, strokeWidth:1.75 }} />
                    </div>
                    <span className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                      style={{ background:"rgba(200,168,75,0.1)", border:"1px solid rgba(200,168,75,0.25)", color:GOLD }}>
                      {p.tag}
                    </span>
                  </div>
                  <h3 style={{ fontSize:"14px", fontWeight:700, color:"rgba(255,255,255,0.92)" }}>{p.title}</h3>
                  <p style={{ marginTop:"8px", fontSize:"12px", lineHeight:1.7, color:"rgba(255,255,255,0.42)" }}>{p.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {p.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2" style={{ fontSize:"11.5px", color:"rgba(255,255,255,0.55)" }}>
                        <span style={{ width:"4px", height:"4px", borderRadius:"50%", background:GOLD, flexShrink:0 }} />{b}
                      </li>
                    ))}
                  </ul>
                  <a href="#apply"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold transition-all"
                    style={{ color:GOLD }}>
                    Apply Now <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 3 — STRATEGIC PARTNERS
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24" style={{ background:"linear-gradient(180deg,oklch(0.99 0.003 250) 0%,oklch(0.97 0.007 255) 100%)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"500px", height:"300px", background:"radial-gradient(ellipse,rgba(200,168,75,0.05) 0%,transparent 70%)", filter:"blur(70px)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage:"radial-gradient(circle,oklch(0.20 0.05 258) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

        <div ref={r3} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {label("Strategic Partners")}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our Strategic <span className="gradient-text">Partners</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              TANIT works alongside trusted partners to deliver comprehensive, integrated technology solutions across Tanzania and East Africa.
            </p>
          </div>

          {/* ── TEXTFY FEATURED CARD ── */}
          <div className="mt-14 mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border p-8 sm:p-10"
              style={{ borderColor:"rgba(200,168,75,0.25)", background:"linear-gradient(135deg,rgba(200,168,75,0.05) 0%,rgba(255,255,255,0.95) 60%,rgba(200,168,75,0.03) 100%)", boxShadow:"0 8px 60px rgba(0,0,0,0.09),inset 0 1px 0 rgba(200,168,75,0.2)" }}>

              {/* Top gold line */}
              <div className="absolute inset-x-0 top-0 h-[3px] rounded-t-3xl"
                style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />

              {/* Corner accents */}
              {[["top-0 left-0","border-t-2 border-l-2 rounded-tl-3xl"],["top-0 right-0","border-t-2 border-r-2 rounded-tr-3xl"],["bottom-0 left-0","border-b-2 border-l-2 rounded-bl-3xl"],["bottom-0 right-0","border-b-2 border-r-2 rounded-br-3xl"]].map(([pos,cls]) => (
                <div key={pos} className={`absolute ${pos} h-8 w-8 ${cls}`} style={{ borderColor:GOLD, opacity:0.45 }} />
              ))}

              <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
                {/* Left — info */}
                <div>
                  {/* Partner badge */}
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                    style={{ background:"rgba(200,168,75,0.1)", border:"1px solid rgba(200,168,75,0.3)" }}>
                    <Star size={12} style={{ color:GOLD }} />
                    <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.22em", color:GOLD, textTransform:"uppercase" as const }}>Featured Strategic Partner</span>
                  </div>

                  {/* Partner name */}
                  <h3 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl"
                    style={{ background:`linear-gradient(135deg,${NAVY},${GOLD})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                    TEXTFY
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">Bulk SMS Communication Platform</p>

                  <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                    TEXTFY provides reliable bulk SMS communication solutions for businesses, organisations, institutions and digital platforms across Tanzania. Through our strategic partnership, TANIT clients gain direct access to enterprise-grade messaging infrastructure.
                  </p>

                  {/* Benefits */}
                  <ul className="mt-5 grid grid-cols-2 gap-2">
                    {["Bulk SMS Services","Marketing Campaigns","OTP Verification","Business Notifications","Customer Engagement","API Integration"].map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs font-medium text-foreground/70">
                        <CheckCircle2 size={13} style={{ color:GOLD, flexShrink:0 }} /> {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — CTA panel */}
                <div className="flex flex-col items-center justify-center gap-5 rounded-2xl p-8 text-center"
                  style={{ background:"linear-gradient(135deg,rgba(200,168,75,0.06),rgba(200,168,75,0.02))", border:"1px solid rgba(200,168,75,0.2)" }}>

                  {/* SMS icon visual */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl"
                    style={{ background:`linear-gradient(135deg,${GOLD},#f0d080)`, boxShadow:`0 8px 32px rgba(200,168,75,0.35)` }}>
                    <MessageSquare size={36} style={{ color:"#1a1a0e", strokeWidth:2 }} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-foreground">Ready to send bulk SMS?</p>
                    <p className="mt-1 text-xs text-muted-foreground">Purchase SMS bundles and start reaching your audience instantly.</p>
                  </div>

                  {/* Primary CTA */}
                  <a href="https://sms.kogpos.co.tz/" target="_blank" rel="noopener noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background:`linear-gradient(135deg,${GOLD},#f0d080)`, color:"#1a1a0e", boxShadow:`0 4px 20px rgba(200,168,75,0.4)` }}>
                    <MessageSquare size={15} />
                    Buy Bulk SMS
                    <ExternalLink size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {/* Secondary CTA */}
                  <a href="https://sms.kogpos.co.tz/" target="_blank" rel="noopener noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all duration-200 hover:shadow-md"
                    style={{ borderColor:"rgba(200,168,75,0.4)", color:NAVY, background:"rgba(200,168,75,0.06)" }}>
                    Open SMS Platform <ExternalLink size={13} />
                  </a>

                  <p className="text-[10px] text-muted-foreground">Powered by TEXTFY · Integrated by TANIT</p>
                </div>
              </div>
            </div>
          </div>

          {/* More partners placeholder */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <div style={{ height:"1px", flex:1, maxWidth:"120px", background:`linear-gradient(90deg,transparent,rgba(200,168,75,0.3))` }} />
            <span style={{ fontSize:"11px", color:"rgba(0,0,0,0.35)", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase" as const }}>More partnerships coming soon</span>
            <div style={{ height:"1px", flex:1, maxWidth:"120px", background:`linear-gradient(90deg,rgba(200,168,75,0.3),transparent)` }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — BECOME A PARTNER (FORM)
      ══════════════════════════════════════════ */}
      <section id="apply" className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"0", left:"50%", transform:"translateX(-50%)", width:"600px", height:"250px", background:"radial-gradient(ellipse,rgba(59,130,246,0.08) 0%,transparent 70%)", filter:"blur(50px)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.8) 1px,transparent 1px)", backgroundSize:"32px 32px" }} />

        <div ref={r4} className="reveal relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {label("Become a Partner")}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Become a <span className="gradient-text">TANIT Partner</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color:"rgba(255,255,255,0.5)" }}>
              We welcome collaboration opportunities with businesses, institutions, innovators and professionals interested in driving digital transformation.
            </p>
          </div>

          {/* Type selector */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {partnershipAppTypes.map((t) => (
              <button key={t} onClick={() => setSelectedType(t)}
                className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200"
                style={{
                  background: selectedType === t ? `linear-gradient(135deg,${GOLD},#f0d080)` : "rgba(200,168,75,0.06)",
                  border: `1px solid ${selectedType === t ? GOLD : "rgba(200,168,75,0.25)"}`,
                  color: selectedType === t ? "#1a1a0e" : GOLD_DIM,
                  boxShadow: selectedType === t ? `0 4px 16px rgba(200,168,75,0.3)` : "none",
                }}>
                {t}
              </button>
            ))}
          </div>

          {/* Form card */}
          <div className="mt-10 relative overflow-hidden rounded-3xl border p-8 sm:p-10"
            style={{ borderColor:"rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.97)", boxShadow:"0 8px 60px rgba(0,0,0,0.2)" }}>
            <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-3xl"
              style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full"
                  style={{ background:"rgba(200,168,75,0.1)", border:`2px solid rgba(200,168,75,0.4)` }}>
                  <CheckCircle2 size={36} style={{ color:GOLD }} />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-foreground">Partnership Request Received</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Thank you for your interest in partnering with TANIT. Our business development team will review your proposal and respond within 3–5 business days.
                </p>
                <button onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-xl px-6 py-3 text-sm font-bold transition-all"
                  style={{ background:`linear-gradient(135deg,${GOLD},#f0d080)`, color:"#1a1a0e" }}>
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-foreground">{selectedType}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">Fields marked with * are required</p>
                  </div>
                  <span className="rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{ background:"rgba(200,168,75,0.1)", border:"1px solid rgba(200,168,75,0.3)", color:GOLD }}>
                    {selectedType}
                  </span>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name" name="name" required placeholder="Your full name" />
                    <Field label="Company Name" name="company" placeholder="Your company (optional)" />
                    <Field label="Email Address" name="email" type="email" required placeholder="you@company.com" />
                    <Field label="Phone Number" name="phone" type="tel" placeholder="+255 700 000 000" />
                    <Field label="Country / Location" name="location" required placeholder="Tanzania, Kenya, Uganda..." />
                    <Field label="Partnership Type" name="ptype" as="select" required options={partnershipAppTypes} />
                    <Field label="Industry / Area of Interest" name="industry" as="select" required options={industries} />
                    <Field label="Website / Portfolio" name="website" placeholder="https://yourwebsite.com" />
                  </div>
                  <div className="mt-4">
                    <Field label="Partnership Proposal" name="proposal" as="textarea" required
                      placeholder="Describe your partnership idea, what you bring to the table, and what you hope to achieve with TANIT..." />
                  </div>
                  <div className="mt-6">
                    <UploadBox label="Upload Company Profile (Optional)" hint="PDF, DOCX or PPTX — max 10MB" />
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button type="submit"
                      className="btn-glow group inline-flex flex-1 items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-accent-foreground transition-all"
                      style={{ background:`linear-gradient(135deg,${GOLD},#f0d080)`, color:"#1a1a0e", minWidth:"200px" }}>
                      <Send size={15} /> Submit Partnership Request
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </button>
                    <a href="mailto:partnerships@tanitcoltd.co.tz"
                      className="group inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:shadow-md"
                      style={{ borderColor:"rgba(200,168,75,0.35)", background:"rgba(200,168,75,0.04)" }}>
                      <Mail size={15} style={{ color:GOLD }} /> Email Us Directly
                    </a>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — COLLABORATION OPPORTUNITIES
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24" style={{ background:"linear-gradient(180deg,oklch(0.99 0.003 250) 0%,oklch(0.97 0.007 255) 100%)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"10%", right:"-5%", width:"300px", height:"300px", background:"radial-gradient(ellipse,rgba(200,168,75,0.05) 0%,transparent 70%)", filter:"blur(60px)" }} />
          <div style={{ position:"absolute", bottom:"10%", left:"-5%", width:"300px", height:"300px", background:"radial-gradient(ellipse,rgba(59,130,246,0.04) 0%,transparent 70%)", filter:"blur(60px)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage:"radial-gradient(circle,oklch(0.20 0.05 258) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

        <div ref={r5} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {label("Collaboration Areas")}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Collaboration <span className="gradient-text">Opportunities</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Explore the specific areas where TANIT actively seeks and welcomes strategic collaboration.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {collabOpportunities.map((c, i) => (
              <div key={c.title}
                className="group relative overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ borderColor:"rgba(200,168,75,0.14)", boxShadow:"0 2px 20px rgba(0,0,0,0.05)", animationDelay:`${i*50}ms` }}>
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-all duration-300 group-hover:opacity-100"
                  style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
                <div className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
                  style={{ background:`linear-gradient(180deg,transparent,${GOLD},transparent)` }} />
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background:"radial-gradient(circle at 50% 0%,rgba(200,168,75,0.04) 0%,transparent 65%)" }} />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                    style={{ background:"linear-gradient(135deg,rgba(200,168,75,0.15),rgba(200,168,75,0.04))", border:"1px solid rgba(200,168,75,0.24)" }}>
                    <c.icon size={20} style={{ color:NAVY, strokeWidth:1.75 }} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground" style={{ lineHeight:1.3 }}>{c.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
                  <div className="mt-4 flex items-center gap-1 opacity-0 transition-all duration-200 group-hover:opacity-100"
                    style={{ fontSize:"11px", fontWeight:700, color:GOLD }}>
                    Explore <ArrowRight size={11} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6 — CONTACT & BUSINESS DEV
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"0", left:"50%", transform:"translateX(-50%)", width:"500px", height:"200px", background:"radial-gradient(ellipse,rgba(59,130,246,0.07) 0%,transparent 70%)", filter:"blur(50px)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.8) 1px,transparent 1px)", backgroundSize:"32px 32px" }} />

        <div ref={r6} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {label("Get In Touch")}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Talk to Our <span className="gradient-text">Partnerships Team</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color:"rgba(255,255,255,0.5)" }}>
              Ready to explore a partnership? Our business development team is available to discuss opportunities and answer your questions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Mail,    title:"Partnerships Email",    value:"partnerships@tanitcoltd.co.tz", href:"mailto:partnerships@tanitcoltd.co.tz", sub:"For partnership enquiries" },
              { icon: Mail,    title:"Business Development",  value:"business@tanitcoltd.co.tz",     href:"mailto:business@tanitcoltd.co.tz",     sub:"For business proposals" },
              { icon: Phone,   title:"Official Hotline",      value:"+255 699 846 887",          href:"tel:+255699846887",               sub:"Mon–Sat, 8am–6pm EAT" },
              { icon: MapPin,  title:"Head Office",           value:"Posta, Dar es Salaam",      href:"#",                               sub:"Dodoma · Coast Region · Mwanza" },
            ].map((c, i) => (
              <a key={i} href={c.href}
                className="group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1.5 block"
                style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(200,168,75,0.18)", backdropFilter:"blur(16px)", boxShadow:"0 4px 24px rgba(0,0,0,0.2),inset 0 1px 0 rgba(255,255,255,0.06)" }}>
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background:"radial-gradient(circle at 50% 0%,rgba(200,168,75,0.07) 0%,transparent 65%)" }} />
                <div className="relative">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background:"rgba(200,168,75,0.12)", border:"1px solid rgba(200,168,75,0.28)" }}>
                    <c.icon size={20} style={{ color:GOLD, strokeWidth:1.75 }} />
                  </div>
                  <div style={{ fontSize:"10.5px", fontWeight:700, letterSpacing:"0.2em", color:GOLD_DIM, textTransform:"uppercase" as const }}>{c.title}</div>
                  <div style={{ marginTop:"6px", fontSize:"13px", fontWeight:600, color:"rgba(255,255,255,0.85)" }}>{c.value}</div>
                  <div style={{ marginTop:"4px", fontSize:"11px", color:"rgba(255,255,255,0.35)" }}>{c.sub}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Social row */}
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <div style={{ height:"1px", width:"60px", background:`linear-gradient(90deg,transparent,rgba(200,168,75,0.4))` }} />
              <span style={{ fontSize:"11px", color:"rgba(255,255,255,0.35)", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase" as const }}>Also find us on</span>
              <div style={{ height:"1px", width:"60px", background:`linear-gradient(90deg,rgba(200,168,75,0.4),transparent)` }} />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label:"Facebook",   href:"#", svg:<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg> },
                { label:"X / Twitter",href:"#", svg:<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                { label:"LinkedIn",   href:"#", svg:<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { label:"Instagram",  href:"#", svg:<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                { label:"TikTok",     href:"#", svg:<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg> },
                { label:"YouTube",    href:"#", svg:<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
              ].map(({ label: lbl, href, svg }) => (
                <a key={lbl} href={href} aria-label={lbl}
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:border-accent/50"
                  style={{ borderColor:"rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.4)", background:"rgba(255,255,255,0.04)" }}>
                  <span className="transition-colors duration-200 group-hover:text-white/80">{svg}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24" style={{ background:"linear-gradient(180deg,oklch(0.99 0.003 250) 0%,oklch(0.97 0.007 255) 100%)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"600px", height:"400px", background:"radial-gradient(ellipse,rgba(200,168,75,0.06) 0%,transparent 70%)", filter:"blur(60px)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage:"radial-gradient(circle,oklch(0.20 0.05 258) 1px,transparent 1px)", backgroundSize:"32px 32px" }} />

        <div ref={r7} className="reveal relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border p-10 sm:p-14 text-center"
            style={{ borderColor:"rgba(200,168,75,0.22)", background:"linear-gradient(135deg,rgba(200,168,75,0.04) 0%,rgba(255,255,255,0.92) 50%,rgba(200,168,75,0.03) 100%)", backdropFilter:"blur(20px)", boxShadow:"0 8px 60px rgba(0,0,0,0.08),inset 0 1px 0 rgba(200,168,75,0.2)" }}>
            {[["top-0 left-0","border-t-2 border-l-2 rounded-tl-3xl"],["top-0 right-0","border-t-2 border-r-2 rounded-tr-3xl"],["bottom-0 left-0","border-b-2 border-l-2 rounded-bl-3xl"],["bottom-0 right-0","border-b-2 border-r-2 rounded-br-3xl"]].map(([pos,cls]) => (
              <div key={pos} className={`absolute ${pos} h-8 w-8 ${cls}`} style={{ borderColor:GOLD, opacity:0.5 }} />
            ))}
            <div className="relative">
              {label("Let's Build Together")}
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Ready to Partner with{" "}
                <span className="gradient-text">TANIT?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Whether you're a global technology company, a local startup, an institution or an individual innovator — there's a place for you in the TANIT ecosystem.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a href="#apply"
                  className="btn-glow group inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-bold transition-all"
                  style={{ background:`linear-gradient(135deg,${GOLD},#f0d080)`, color:"#1a1a0e" }}>
                  <Rocket size={15} /> Start a Partnership
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </a>
                <Link to="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl border px-8 py-4 text-sm font-semibold text-foreground transition-all hover:shadow-md"
                  style={{ borderColor:"rgba(200,168,75,0.35)", background:"rgba(200,168,75,0.05)" }}>
                  Contact Our Team <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
