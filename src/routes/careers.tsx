import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Layout } from "@/components/site/Layout";
import {
  ArrowRight, ChevronRight, ChevronDown, Users, Briefcase,
  GraduationCap, HeartHandshake, Clock, Star, Zap, Code2,
  ShieldCheck, Network, Palette, BarChart3, Settings, Brain,
  Building2, Mail, Phone, MapPin, Upload, CheckCircle2,
  Send, Globe, Lightbulb, Award, Target, Layers,
  UserCheck, FileText, Search, MessageSquare, Rocket,
  TrendingUp, BookOpen, Handshake, DollarSign, Cpu,
} from "lucide-react";

export const Route = createFileRoute("/careers")({
  component: Careers,
  head: () => ({
    meta: [
      { title: "Corporate Structure & Careers — TANIT Tanzania Innovative Technology" },
      { name: "description", content: "Explore TANIT's corporate organizational structure and join our team. Apply for internships, full-time roles, freelance collaborations and more." },
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
   Shared UI helpers
───────────────────────────────────────────── */
const label = (text: string) => (
  <div className="inline-flex items-center gap-3 mb-5">
    <div style={{ height:"1px", width:"36px", background:`linear-gradient(90deg,transparent,${GOLD_DIM})` }} />
    <span style={{ fontSize:"10.5px", fontWeight:700, letterSpacing:"0.28em", color:GOLD_DIM, textTransform:"uppercase" as const }}>{text}</span>
    <div style={{ height:"1px", width:"36px", background:`linear-gradient(90deg,${GOLD_DIM},transparent)` }} />
  </div>
);

const GoldLine = () => (
  <div style={{ height:"2px", background:`linear-gradient(90deg,transparent,${GOLD},transparent)`, borderRadius:"2px", margin:"0 auto", width:"60px" }} />
);

/* ─────────────────────────────────────────────
   Data — Org Structure
───────────────────────────────────────────── */
const boardMembers = [
  { title:"Chairman",                   desc:"Provides strategic oversight and ultimate governance of TANIT's corporate direction." },
  { title:"Vice Chairman",              desc:"Supports the Chairman and leads board committees on innovation and growth." },
  { title:"Finance Director",           desc:"Oversees financial strategy, investment decisions and fiscal accountability." },
  { title:"Technology Director",        desc:"Guides the company's technology vision, R&D and digital transformation agenda." },
  { title:"Business Strategy Director", desc:"Drives market expansion, partnerships and long-term strategic planning." },
];

const executives = [
  { title:"Chief Executive Officer",  abbr:"CEO", desc:"Leads overall company operations, culture and strategic execution." },
  { title:"Managing Director",        abbr:"MD",  desc:"Manages day-to-day business operations and departmental performance." },
  { title:"General Secretary",        abbr:"GS",  desc:"Oversees corporate governance, records and administrative compliance." },
  { title:"Company Legal Counsel",    abbr:"CLC", desc:"Provides legal guidance, contract management and regulatory compliance." },
];

const departments = [
  {
    title:"Software Development & IT Services",
    icon: Code2,
    color:"blue",
    desc:"Builds enterprise software, web platforms, mobile apps and manages all ICT infrastructure and digital services.",
    units:["Software Development","ICT Infrastructure & Networking","Cybersecurity & Auditing","ICT Consultancy","ICT Training","Innovation & Research","Branding & Creative"],
  },
  {
    title:"Corporate Finance & Partnerships",
    icon: DollarSign,
    color:"gold",
    desc:"Manages investor relations, strategic partnerships, corporate funding and business development alliances.",
    units:["Investor Relations","Partnership Development","Corporate Funding","Business Alliances","Financial Reporting"],
  },
  {
    title:"Financial Management & Compliance",
    icon: BarChart3,
    color:"green",
    desc:"Handles accounting, budgeting, tax compliance, auditing and financial risk management across all operations.",
    units:["Accounting & Bookkeeping","Budget Management","Tax & Compliance","Internal Audit","Financial Risk"],
  },
  {
    title:"Tendering & Project Management",
    icon: Layers,
    color:"violet",
    desc:"Manages government and institutional tenders, project delivery, timelines and quality assurance.",
    units:["Tender Preparation","Project Planning","Quality Assurance","Client Delivery","Risk Management"],
  },
  {
    title:"Sales, Marketing & Strategic Procurement",
    icon: TrendingUp,
    color:"orange",
    desc:"Drives revenue growth through sales strategy, digital marketing, brand campaigns and procurement management.",
    units:["Sales Strategy","Digital Marketing","Brand Campaigns","Procurement","Client Relations"],
  },
  {
    title:"Human Resources & Administration",
    icon: Users,
    color:"teal",
    desc:"Manages talent acquisition, employee development, payroll, administration and organisational culture.",
    units:["Talent Acquisition","Employee Development","Payroll & Benefits","Administration","Culture & Welfare"],
  },
];

/* ─────────────────────────────────────────────
   Data — Careers
───────────────────────────────────────────── */
const opportunityTypes = [
  { icon: GraduationCap, title:"Internship Program",    tag:"Internship",   desc:"Gain hands-on experience working alongside TANIT's professional teams on real enterprise projects." },
  { icon: HeartHandshake,title:"Volunteer Program",     tag:"Volunteer",    desc:"Contribute your skills to meaningful technology initiatives and community-driven digital projects." },
  { icon: Clock,         title:"Part-Time Opportunities",tag:"Part-Time",   desc:"Flexible roles designed for students and professionals seeking to grow while managing other commitments." },
  { icon: Briefcase,     title:"Full-Time Careers",     tag:"Full-Time",    desc:"Build a long-term career at TANIT with competitive packages, growth paths and enterprise exposure." },
  { icon: BookOpen,      title:"Industrial Training",   tag:"Industrial",   desc:"Structured industrial attachment programmes for university and college students across all departments." },
  { icon: Globe,         title:"Freelance Collaboration",tag:"Freelance",   desc:"Partner with TANIT on project-based engagements as a skilled independent professional or consultant." },
];

const whyJoin = [
  { icon: Lightbulb,   title:"Innovation-Driven",       desc:"Work on cutting-edge projects using modern technologies that shape Africa's digital future." },
  { icon: TrendingUp,  title:"Career Growth",           desc:"Structured career paths, mentorship and promotion opportunities for every team member." },
  { icon: Cpu,         title:"Modern Technologies",     desc:"React, Flutter, Node.js, Python, AWS, AI/ML and more — always working with the best tools." },
  { icon: Users,       title:"Collaborative Culture",   desc:"A team-first environment where ideas are valued and cross-functional collaboration thrives." },
  { icon: Award,       title:"Leadership Development",  desc:"Leadership training, workshops and opportunities to lead real enterprise projects." },
  { icon: Building2,   title:"Enterprise Projects",     desc:"Work on large-scale government, institutional and corporate technology deployments." },
  { icon: BookOpen,    title:"Training & Mentorship",   desc:"Continuous learning through internal training, certifications and expert mentorship." },
  { icon: Target,      title:"Real-World Impact",       desc:"Your work directly impacts businesses, institutions and communities across East Africa." },
];

const hiringSteps = [
  { step:"01", title:"Application Submission",  desc:"Submit your application with CV, cover letter and relevant documents through our portal.", icon: FileText },
  { step:"02", title:"CV Review",               desc:"Our HR team carefully reviews all applications and shortlists qualified candidates.", icon: Search },
  { step:"03", title:"Interview Process",       desc:"Selected candidates are invited for a structured interview with our team leads.", icon: MessageSquare },
  { step:"04", title:"Technical Assessment",    desc:"Role-specific technical or practical assessment to evaluate your skills and expertise.", icon: Code2 },
  { step:"05", title:"Final Selection",         desc:"Top candidates receive an offer letter with full details of the role and package.", icon: CheckCircle2 },
  { step:"06", title:"Onboarding",              desc:"Welcome to TANIT. A structured onboarding programme gets you up to speed fast.", icon: Rocket },
];

const departments_apply = [
  "Software Development & IT Services",
  "Cybersecurity & Auditing",
  "ICT Consultancy",
  "Branding & Creative",
  "Sales & Business Development",
  "Digital Marketing",
  "Human Resources",
  "Project Management",
  "ICT Infrastructure & Networking",
  "Innovation & Research",
  "Finance & Compliance",
];

const applicationTypes = ["Internship","Volunteer","Part-Time","Full-Time","Industrial Training","Collaboration","Freelance"];
const experienceLevels = ["No Experience (Student)","Entry Level (0–1 years)","Junior (1–3 years)","Mid-Level (3–5 years)","Senior (5+ years)","Expert / Lead"];

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

/** Org hierarchy connector arrow */
function HierarchyArrow() {
  return (
    <div className="flex flex-col items-center py-2">
      <div style={{ width:"2px", height:"24px", background:`linear-gradient(180deg,${GOLD},rgba(200,168,75,0.2))` }} />
      <div style={{ width:0, height:0, borderLeft:"6px solid transparent", borderRight:"6px solid transparent", borderTop:`8px solid ${GOLD}`, opacity:0.7 }} />
    </div>
  );
}

/** Board / Executive card (dark glass) */
function ExecCard({ title, abbr, desc }: { title:string; abbr?:string; desc:string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5"
      style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(200,168,75,0.2)", backdropFilter:"blur(16px)", boxShadow:"0 4px 24px rgba(0,0,0,0.25),inset 0 1px 0 rgba(255,255,255,0.06)" }}>
      <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
      <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background:"radial-gradient(circle at 50% 0%,rgba(200,168,75,0.07) 0%,transparent 65%)" }} />
      <div className="relative">
        {abbr && (
          <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg text-xs font-black"
            style={{ background:"rgba(200,168,75,0.15)", border:"1px solid rgba(200,168,75,0.35)", color:GOLD, letterSpacing:"0.05em" }}>
            {abbr}
          </div>
        )}
        {!abbr && (
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg"
            style={{ background:"rgba(200,168,75,0.12)", border:"1px solid rgba(200,168,75,0.28)" }}>
            <UserCheck size={16} style={{ color:GOLD, strokeWidth:1.75 }} />
          </div>
        )}
        <h4 style={{ fontSize:"13px", fontWeight:700, color:"rgba(255,255,255,0.92)", lineHeight:1.3 }}>{title}</h4>
        <p style={{ marginTop:"6px", fontSize:"11.5px", lineHeight:1.65, color:"rgba(255,255,255,0.42)" }}>{desc}</p>
      </div>
    </div>
  );
}

/** Department card (light) */
function DeptCard({ dept }: { dept: typeof departments[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{ borderColor:"rgba(200,168,75,0.16)", boxShadow:"0 2px 20px rgba(0,0,0,0.05)" }}>
      <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-all duration-300 group-hover:opacity-100"
        style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
      <div className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
          style={{ background:"linear-gradient(135deg,rgba(200,168,75,0.15),rgba(200,168,75,0.04))", border:"1px solid rgba(200,168,75,0.24)" }}>
          <dept.icon size={20} style={{ color:NAVY, strokeWidth:1.75 }} />
        </div>
        <h3 className="text-sm font-bold text-foreground" style={{ lineHeight:1.3 }}>{dept.title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{dept.desc}</p>
        <button onClick={() => setOpen(!open)}
          className="mt-4 flex items-center gap-1.5 text-xs font-semibold transition-all"
          style={{ color:GOLD }}>
          {open ? "Hide Units" : "View Units"}
          <ChevronDown size={13} style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition:"transform 0.3s" }} />
        </button>
      </div>
      {open && (
        <div className="border-t px-6 pb-5 pt-4" style={{ borderColor:"rgba(200,168,75,0.12)", background:"rgba(200,168,75,0.02)" }}>
          <ul className="space-y-2">
            {dept.units.map((u) => (
              <li key={u} className="flex items-center gap-2 text-xs text-foreground/70">
                <span style={{ width:"5px", height:"5px", borderRadius:"50%", background:GOLD, flexShrink:0 }} />
                {u}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Upload component
───────────────────────────────────────────── */
function UploadBox({ label: lbl, required, hint }: { label:string; required?:boolean; hint?:string }) {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) setFile(f.name);
  };

  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-wider mb-1.5" style={{ color:"rgba(0,0,0,0.5)" }}>
        {lbl}{required && <span style={{ color:GOLD }}> *</span>}
      </label>
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className="relative flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 text-center transition-all duration-200"
        style={{
          borderColor: dragging ? GOLD : file ? "rgba(200,168,75,0.5)" : "rgba(0,0,0,0.12)",
          background: dragging ? "rgba(200,168,75,0.04)" : file ? "rgba(200,168,75,0.03)" : "rgba(0,0,0,0.01)",
        }}>
        <input ref={inputRef} type="file" accept=".pdf,.docx,.zip" className="hidden"
          onChange={(e) => { if (e.target.files?.[0]) setFile(e.target.files[0].name); }} />
        {file ? (
          <>
            <CheckCircle2 size={22} style={{ color:GOLD }} />
            <span className="text-xs font-semibold" style={{ color:GOLD }}>{file}</span>
            <span className="text-[10px] text-muted-foreground">Click to replace</span>
          </>
        ) : (
          <>
            <Upload size={22} style={{ color:"rgba(0,0,0,0.3)" }} />
            <span className="text-xs font-semibold text-foreground/60">Drag & drop or click to upload</span>
            <span className="text-[10px] text-muted-foreground">{hint || "PDF, DOCX, ZIP — max 10MB"}</span>
          </>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Form field helper
───────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────
   Main page component
───────────────────────────────────────────── */
function Careers() {
  const [selectedType, setSelectedType] = useState("Full-Time");
  const [submitted, setSubmitted] = useState(false);
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(),
        r4 = useReveal(), r5 = useReveal(), r6 = useReveal(),
        r7 = useReveal(), r8 = useReveal();

  return (
    <Layout>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-primary text-primary-foreground">

        {/* Slim cinematic atmospheric glow — controlled */}
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"-10%", left:"50%", transform:"translateX(-50%)", width:"600px", height:"300px", background:"radial-gradient(ellipse,rgba(59,130,246,0.08) 0%,transparent 70%)", filter:"blur(40px)" }} />
          <div style={{ position:"absolute", bottom:"0", left:"20%", width:"400px", height:"200px", background:"radial-gradient(ellipse,rgba(200,168,75,0.06) 0%,transparent 70%)", filter:"blur(50px)" }} />
          <div style={{ position:"absolute", top:"30%", right:"5%", width:"300px", height:"300px", background:"radial-gradient(ellipse,rgba(59,130,246,0.05) 0%,transparent 70%)", filter:"blur(60px)" }} />
        </div>

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.8) 1px,transparent 1px)", backgroundSize:"32px 32px" }} />

        {/* Network node SVG */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <radialGradient id="ng" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c8a84b" stopOpacity="1"/>
              <stop offset="100%" stopColor="#c8a84b" stopOpacity="0"/>
            </radialGradient>
          </defs>
          {[[200,150],[500,80],[750,200],[900,120],[1100,300],[300,350],[650,400],[850,350],[1050,180],[150,300]].map(([x,y],i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="4" fill="#c8a84b" opacity="0.6"/>
              {i < 9 && <line x1={x} y1={y} x2={[500,750,900,1100,300,650,850,1050,150][i]} y2={[80,200,120,300,350,400,350,180,300][i]} stroke="#c8a84b" strokeWidth="0.8" opacity="0.4"/>}
            </g>
          ))}
        </svg>

        {/* Content */}
        <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Label badge */}
            <div className="mb-8 inline-flex items-center gap-3">
              <div style={{ height:"1px", width:"36px", background:`linear-gradient(90deg,transparent,${GOLD_DIM})` }} />
              <span style={{ fontSize:"10.5px", fontWeight:700, letterSpacing:"0.28em", color:GOLD_DIM, textTransform:"uppercase" as const }}>Corporate Structure & Careers</span>
              <div style={{ height:"1px", width:"36px", background:`linear-gradient(90deg,${GOLD_DIM},transparent)` }} />
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Building Tanzania's{" "}
              <span className="gradient-text">Next Generation</span>
              <br className="hidden sm:block" /> Technology Workforce.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
              style={{ color:"rgba(255,255,255,0.62)", fontWeight:300, lineHeight:1.85 }}>
              TANIT combines{" "}
              <span style={{ fontWeight:600, color:"rgba(255,255,255,0.9)" }}>structured corporate leadership</span>{" "}
              with innovation-driven teams to deliver world-class ICT solutions across Tanzania and East Africa.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#departments"
                className="btn-glow group inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground transition-all">
                Explore Departments <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#apply"
                className="glass group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-white/10">
                Apply With TANIT <ChevronRight size={15} />
              </a>
            </div>

            {/* Mini stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              {[["6","Departments"],["7+","Opportunity Types"],["100%","Tanzanian Owned"]].map(([v,l]) => (
                <div key={l}>
                  <div className="text-2xl font-extrabold" style={{ color:GOLD }}>{v}</div>
                  <div className="text-xs uppercase tracking-wider" style={{ color:"rgba(255,255,255,0.4)" }}>{l}</div>
                </div>
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
          SECTION 1 — CORPORATE ORG STRUCTURE
      ══════════════════════════════════════════ */}
      <section id="departments" className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        {/* Slim atmospheric glow */}
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"0", left:"50%", transform:"translateX(-50%)", width:"500px", height:"200px", background:"radial-gradient(ellipse,rgba(59,130,246,0.07) 0%,transparent 70%)", filter:"blur(50px)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.8) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

        <div ref={r1} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {label("Organisational Structure")}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Corporate <span className="gradient-text">Organizational Structure</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color:"rgba(255,255,255,0.5)" }}>
              TANIT operates through structured leadership, specialised departments and collaborative technical units to ensure innovation, accountability, operational excellence and scalable growth.
            </p>
          </div>

          {/* ── LEVEL 1: BOARD ── */}
          <div className="mt-16">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div style={{ height:"1px", flex:1, maxWidth:"120px", background:`linear-gradient(90deg,transparent,rgba(200,168,75,0.4))` }} />
              <span className="rounded-full px-5 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background:"rgba(200,168,75,0.12)", border:"1px solid rgba(200,168,75,0.3)", color:GOLD }}>
                Board of Directors
              </span>
              <div style={{ height:"1px", flex:1, maxWidth:"120px", background:`linear-gradient(90deg,rgba(200,168,75,0.4),transparent)` }} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {boardMembers.map((m) => <ExecCard key={m.title} title={m.title} desc={m.desc} />)}
            </div>
          </div>

          <HierarchyArrow />

          {/* ── LEVEL 2: EXECUTIVES ── */}
          <div className="mt-2">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div style={{ height:"1px", flex:1, maxWidth:"120px", background:`linear-gradient(90deg,transparent,rgba(200,168,75,0.4))` }} />
              <span className="rounded-full px-5 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background:"rgba(200,168,75,0.12)", border:"1px solid rgba(200,168,75,0.3)", color:GOLD }}>
                Executive Leadership
              </span>
              <div style={{ height:"1px", flex:1, maxWidth:"120px", background:`linear-gradient(90deg,rgba(200,168,75,0.4),transparent)` }} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {executives.map((e) => <ExecCard key={e.title} title={e.title} abbr={e.abbr} desc={e.desc} />)}
            </div>
          </div>

          <HierarchyArrow />

          {/* ── LEVEL 3: DEPARTMENTS ── */}
          <div className="mt-2">
            <div className="mb-6 flex items-center justify-center gap-4">
              <div style={{ height:"1px", flex:1, maxWidth:"120px", background:`linear-gradient(90deg,transparent,rgba(200,168,75,0.4))` }} />
              <span className="rounded-full px-5 py-1.5 text-xs font-bold uppercase tracking-widest"
                style={{ background:"rgba(200,168,75,0.12)", border:"1px solid rgba(200,168,75,0.3)", color:GOLD }}>
                Core Departments
              </span>
              <div style={{ height:"1px", flex:1, maxWidth:"120px", background:`linear-gradient(90deg,rgba(200,168,75,0.4),transparent)` }} />
            </div>
            {/* Departments rendered on light background below */}
          </div>
        </div>
      </section>

      {/* Departments — light section */}
      <section className="relative overflow-hidden py-16" style={{ background:"linear-gradient(180deg,oklch(0.99 0.003 250) 0%,oklch(0.97 0.007 255) 100%)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"10%", left:"-5%", width:"300px", height:"300px", background:"radial-gradient(ellipse,rgba(200,168,75,0.05) 0%,transparent 70%)", filter:"blur(60px)" }} />
          <div style={{ position:"absolute", bottom:"10%", right:"-5%", width:"300px", height:"300px", background:"radial-gradient(ellipse,rgba(59,130,246,0.04) 0%,transparent 70%)", filter:"blur(60px)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage:"radial-gradient(circle,oklch(0.20 0.05 258) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

        <div ref={r2} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => <DeptCard key={d.title} dept={d} />)}
          </div>

          {/* Units legend */}
          <div className="mt-10 flex items-center justify-center gap-3">
            <div style={{ height:"1px", width:"40px", background:`linear-gradient(90deg,transparent,${GOLD_DIM})` }} />
            <span style={{ fontSize:"11px", color:"rgba(0,0,0,0.4)", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase" as const }}>
              Click "View Units" on any department card to expand its teams
            </span>
            <div style={{ height:"1px", width:"40px", background:`linear-gradient(90deg,${GOLD_DIM},transparent)` }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 — JOIN TANIT / OPPORTUNITIES
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"0", left:"50%", transform:"translateX(-50%)", width:"600px", height:"250px", background:"radial-gradient(ellipse,rgba(59,130,246,0.07) 0%,transparent 70%)", filter:"blur(50px)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.8) 1px,transparent 1px)", backgroundSize:"32px 32px" }} />

        <div ref={r3} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {label("Join TANIT")}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Join <span className="gradient-text">TANIT</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color:"rgba(255,255,255,0.5)" }}>
              We are building a modern technology ecosystem powered by ambitious thinkers, innovators, engineers, creatives and future leaders.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {opportunityTypes.map((o, i) => (
              <div key={o.title}
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
                      <o.icon size={20} style={{ color:GOLD, strokeWidth:1.75 }} />
                    </div>
                    <span className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                      style={{ background:"rgba(200,168,75,0.1)", border:"1px solid rgba(200,168,75,0.25)", color:GOLD }}>
                      {o.tag}
                    </span>
                  </div>
                  <h3 style={{ fontSize:"14px", fontWeight:700, color:"rgba(255,255,255,0.92)" }}>{o.title}</h3>
                  <p style={{ marginTop:"8px", fontSize:"12px", lineHeight:1.7, color:"rgba(255,255,255,0.42)" }}>{o.desc}</p>
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
          SECTION 3 — APPLICATION SYSTEM
      ══════════════════════════════════════════ */}
      <section id="apply" className="relative overflow-hidden py-24" style={{ background:"linear-gradient(180deg,oklch(0.99 0.003 250) 0%,oklch(0.97 0.007 255) 100%)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"5%", left:"50%", transform:"translateX(-50%)", width:"500px", height:"200px", background:"radial-gradient(ellipse,rgba(200,168,75,0.05) 0%,transparent 70%)", filter:"blur(60px)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage:"radial-gradient(circle,oklch(0.20 0.05 258) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

        <div ref={r4} className="reveal relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {label("Apply Now")}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Apply to <span className="gradient-text">Join TANIT</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We are always looking for innovators, developers, creatives, engineers, strategists and future leaders ready to shape Africa's digital future.
            </p>
          </div>

          {/* Application type selector */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {applicationTypes.map((t) => (
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

          {/* Application form card */}
          <div className="mt-10 relative overflow-hidden rounded-3xl border p-8 sm:p-10 shadow-xl"
            style={{ borderColor:"rgba(200,168,75,0.18)", background:"white", boxShadow:"0 8px 60px rgba(0,0,0,0.08)" }}>
            <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-3xl"
              style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full"
                  style={{ background:"rgba(200,168,75,0.1)", border:`2px solid rgba(200,168,75,0.4)` }}>
                  <CheckCircle2 size={36} style={{ color:GOLD }} />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-foreground">Application Submitted</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  Thank you for applying to TANIT. Our HR team will review your application and reach out within 5–7 business days.
                </p>
                <button onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-xl px-6 py-3 text-sm font-bold transition-all"
                  style={{ background:`linear-gradient(135deg,${GOLD},#f0d080)`, color:"#1a1a0e" }}>
                  Submit Another Application
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-foreground">
                      {selectedType} Application
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">Fill in all required fields marked with *</p>
                  </div>
                  <span className="rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider"
                    style={{ background:"rgba(200,168,75,0.1)", border:"1px solid rgba(200,168,75,0.3)", color:GOLD }}>
                    {selectedType}
                  </span>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full Name" name="name" required placeholder="Your full name" />
                    <Field label="Email Address" name="email" type="email" required placeholder="you@example.com" />
                    <Field label="Phone Number" name="phone" type="tel" placeholder="+255 700 000 000" />
                    <Field label="Location / City" name="location" placeholder="Dar es Salaam, Tanzania" />
                    <Field label="Position Applying For" name="position" required placeholder="e.g. Software Developer" />
                    <Field label="Department of Interest" name="department" as="select" required options={departments_apply} />
                    <Field label="Experience Level" name="experience" as="select" required options={experienceLevels} />
                    <Field label="Portfolio / LinkedIn / GitHub" name="portfolio" placeholder="https://..." />
                  </div>

                  <div className="mt-4">
                    <Field label="Cover Letter / Motivation" name="cover" as="textarea" required
                      placeholder="Tell us why you want to join TANIT and what you bring to the team..." />
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <UploadBox label="Upload CV / Resume" required hint="PDF or DOCX — max 10MB" />
                    <UploadBox label="Upload Certificates (Optional)" hint="PDF, DOCX or ZIP — max 10MB" />
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <button type="submit"
                      className="btn-glow group inline-flex flex-1 items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-accent-foreground transition-all"
                      style={{ background:`linear-gradient(135deg,${GOLD},#f0d080)`, minWidth:"200px" }}>
                      <Send size={15} /> Submit Application
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </button>
                    <a href="mailto:careers@tanit.co.tz"
                      className="group inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:shadow-md"
                      style={{ borderColor:"rgba(200,168,75,0.35)", background:"rgba(200,168,75,0.04)" }}>
                      <Mail size={15} style={{ color:GOLD }} /> Email CV Directly
                    </a>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 4 — WHY JOIN TANIT
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"0", left:"50%", transform:"translateX(-50%)", width:"500px", height:"200px", background:"radial-gradient(ellipse,rgba(59,130,246,0.07) 0%,transparent 70%)", filter:"blur(50px)" }} />
          <div style={{ position:"absolute", bottom:"0", right:"10%", width:"300px", height:"200px", background:"radial-gradient(ellipse,rgba(200,168,75,0.05) 0%,transparent 70%)", filter:"blur(60px)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.8) 1px,transparent 1px)", backgroundSize:"32px 32px" }} />

        <div ref={r5} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {label("Why Work With Us")}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Why Work With <span className="gradient-text">TANIT?</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyJoin.map((w, i) => (
              <div key={w.title}
                className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5"
                style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(200,168,75,0.16)", backdropFilter:"blur(16px)", boxShadow:"0 4px 24px rgba(0,0,0,0.2),inset 0 1px 0 rgba(255,255,255,0.06)", animationDelay:`${i*50}ms` }}>
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background:"radial-gradient(circle at 50% 0%,rgba(200,168,75,0.07) 0%,transparent 65%)" }} />
                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background:"rgba(200,168,75,0.12)", border:"1px solid rgba(200,168,75,0.28)" }}>
                    <w.icon size={19} style={{ color:GOLD, strokeWidth:1.75 }} />
                  </div>
                  <h3 style={{ fontSize:"13px", fontWeight:700, color:"rgba(255,255,255,0.92)" }}>{w.title}</h3>
                  <p style={{ marginTop:"6px", fontSize:"12px", lineHeight:1.65, color:"rgba(255,255,255,0.42)" }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 5 — HIRING PROCESS
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24" style={{ background:"linear-gradient(180deg,oklch(0.99 0.003 250) 0%,oklch(0.97 0.007 255) 100%)" }}>
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"10%", left:"50%", transform:"translateX(-50%)", width:"400px", height:"200px", background:"radial-gradient(ellipse,rgba(200,168,75,0.05) 0%,transparent 70%)", filter:"blur(60px)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage:"radial-gradient(circle,oklch(0.20 0.05 258) 1px,transparent 1px)", backgroundSize:"28px 28px" }} />

        <div ref={r6} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {label("Our Process")}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Our <span className="gradient-text">Hiring Process</span>
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">A transparent, structured and fair recruitment journey from application to onboarding.</p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hiringSteps.map((s, i) => (
              <div key={s.step}
                className="group relative overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                style={{ borderColor:"rgba(200,168,75,0.14)", boxShadow:"0 2px 20px rgba(0,0,0,0.05)", animationDelay:`${i*60}ms` }}>
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-all duration-300 group-hover:opacity-100"
                  style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background:"radial-gradient(circle at 50% 0%,rgba(200,168,75,0.04) 0%,transparent 65%)" }} />
                <div className="relative flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{ background:"linear-gradient(135deg,rgba(200,168,75,0.15),rgba(200,168,75,0.04))", border:"1px solid rgba(200,168,75,0.24)" }}>
                      <s.icon size={20} style={{ color:NAVY, strokeWidth:1.75 }} />
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest" style={{ color:GOLD }}>{s.step}</div>
                    <h3 className="mt-1 text-sm font-bold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 6 — HR CONTACT
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
        <div className="pointer-events-none absolute inset-0">
          <div style={{ position:"absolute", top:"0", left:"50%", transform:"translateX(-50%)", width:"500px", height:"200px", background:"radial-gradient(ellipse,rgba(59,130,246,0.07) 0%,transparent 70%)", filter:"blur(50px)" }} />
        </div>
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage:"radial-gradient(circle,rgba(255,255,255,0.8) 1px,transparent 1px)", backgroundSize:"32px 32px" }} />

        <div ref={r7} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {label("HR & Recruitment")}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Contact <span className="gradient-text">Our HR Team</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color:"rgba(255,255,255,0.5)" }}>
              Have questions about a role or the application process? Our HR team is ready to help.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Mail,     title:"Careers Email",      value:"careers@tanit.co.tz",   href:"mailto:careers@tanit.co.tz",   sub:"For job applications" },
              { icon: Mail,     title:"HR Department",      value:"hr@tanit.co.tz",         href:"mailto:hr@tanit.co.tz",         sub:"For HR enquiries" },
              { icon: Phone,    title:"Recruitment Hotline",value:"+255 699 846 887",        href:"tel:+255699846887",             sub:"Mon–Sat, 8am–6pm EAT" },
              { icon: MapPin,   title:"Head Office",        value:"Posta, Dar es Salaam",   href:"#",                             sub:"Dodoma · Coast Region · Mwanza" },
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

          {/* LinkedIn / social row */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div style={{ height:"1px", width:"60px", background:`linear-gradient(90deg,transparent,rgba(200,168,75,0.4))` }} />
            <span style={{ fontSize:"11px", color:"rgba(255,255,255,0.35)", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase" as const }}>Also find us on</span>
            <div style={{ height:"1px", width:"60px", background:`linear-gradient(90deg,rgba(200,168,75,0.4),transparent)` }} />
          </div>
          <div className="mt-5 flex justify-center gap-3 flex-wrap">
            {[
              { label:"Facebook",  href:"#", svg:<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg> },
              { label:"X / Twitter",href:"#", svg:<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
              { label:"LinkedIn",  href:"#", svg:<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              { label:"Instagram", href:"#", svg:<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
              { label:"TikTok",    href:"#", svg:<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg> },
              { label:"YouTube",   href:"#", svg:<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
            ].map(({ label: lbl, href, svg }) => (
              <a key={lbl} href={href} aria-label={lbl}
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/8"
                style={{ borderColor:"rgba(255,255,255,0.1)", color:"rgba(255,255,255,0.4)", background:"rgba(255,255,255,0.04)" }}>
                <span className="transition-colors duration-200 group-hover:text-white/80">{svg}</span>
              </a>
            ))}
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

        <div ref={r8} className="reveal relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border p-10 sm:p-14 text-center"
            style={{ borderColor:"rgba(200,168,75,0.22)", background:"linear-gradient(135deg,rgba(200,168,75,0.04) 0%,rgba(255,255,255,0.9) 50%,rgba(200,168,75,0.03) 100%)", backdropFilter:"blur(20px)", boxShadow:"0 8px 60px rgba(0,0,0,0.08),inset 0 1px 0 rgba(200,168,75,0.2)" }}>
            {/* Corner accents */}
            {[["top-0 left-0","border-t-2 border-l-2 rounded-tl-3xl"],["top-0 right-0","border-t-2 border-r-2 rounded-tr-3xl"],["bottom-0 left-0","border-b-2 border-l-2 rounded-bl-3xl"],["bottom-0 right-0","border-b-2 border-r-2 rounded-br-3xl"]].map(([pos,cls]) => (
              <div key={pos} className={`absolute ${pos} h-8 w-8 ${cls}`} style={{ borderColor:GOLD, opacity:0.5 }} />
            ))}
            <div className="relative">
              {label("Start Your Journey")}
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Ready to Shape Africa's{" "}
                <span className="gradient-text">Digital Future?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Join a team of innovators, engineers and creatives building Tanzania's most ambitious technology company. Your career journey starts here.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a href="#apply"
                  className="btn-glow group inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-bold text-accent-foreground transition-all"
                  style={{ background:`linear-gradient(135deg,${GOLD},#f0d080)` }}>
                  Start Your Career Journey <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </a>
                <Link to="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl border px-8 py-4 text-sm font-semibold text-foreground transition-all hover:shadow-md"
                  style={{ borderColor:"rgba(200,168,75,0.35)", background:"rgba(200,168,75,0.05)" }}>
                  Contact HR Team <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}
