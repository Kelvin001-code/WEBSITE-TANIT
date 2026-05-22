import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Layout } from "@/components/site/Layout";
import {
  ArrowRight, ChevronRight, Store, ShieldCheck, GraduationCap,
  Landmark, HandHeart, Hotel, Building, Truck, ShoppingCart,
  Home, Shirt, Leaf, Users, Code2, Smartphone, Globe, Cloud,
  Lock, Brain, Database, BarChart3, Cpu, CheckCircle2,
  MessageSquare, Zap, Settings,
} from "lucide-react";

export const Route = createFileRoute("/industries")({
  component: Industries,
  head: () => ({
    meta: [
      { title: "Industries We Serve — TANIT Tanzania Innovative Technology" },
      { name: "description", content: "TANIT delivers enterprise-grade ICT solutions across retail, healthcare, education, banking, government, logistics and more in Tanzania and East Africa." },
    ],
  }),
});

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

const industries = [
  { Icon: Store,         title: "Retail Enterprises",         desc: "Point-of-sale systems, inventory management, loyalty platforms and e-commerce solutions that modernise retail operations and drive revenue growth." },
  { Icon: ShieldCheck,   title: "Healthcare Facilities",      desc: "Secure patient management systems, hospital information platforms, telemedicine solutions and health data protection aligned to international standards." },
  { Icon: GraduationCap, title: "Educational Institutions",   desc: "Learning management systems, school administration platforms, student portals and digital classroom solutions for schools, colleges and universities." },
  { Icon: Landmark,      title: "Banking & Fintech",          desc: "Secure banking platforms, digital payment systems, mobile money integrations, fintech applications and enterprise-grade transaction technologies." },
  { Icon: Building,      title: "Government Institutions",    desc: "E-government platforms, public service portals, citizen management systems and secure digital infrastructure for government agencies." },
  { Icon: Truck,         title: "Logistics & Transportation", desc: "Intelligent fleet management, real-time tracking, route optimisation and supply chain platforms for logistics and transport companies." },
  { Icon: Leaf,          title: "Agriculture & Agribusiness", desc: "Smart farm management systems, agribusiness platforms, IoT sensor networks and digital tools that improve agricultural productivity and efficiency." },
  { Icon: ShoppingCart,  title: "E-Commerce Industry",        desc: "Scalable online stores, marketplace platforms, payment gateway integrations and digital commerce solutions for businesses selling online." },
  { Icon: Home,          title: "Real Estate Industry",       desc: "Property management systems, smart listing platforms, virtual tour solutions and digital tools for real estate agencies and developers." },
  { Icon: Shirt,         title: "Fashion & Apparel",          desc: "Fashion brand websites, inventory systems, digital marketing platforms and smart retail technologies for clothing and apparel businesses." },
  { Icon: Hotel,         title: "Hospitality Industry",       desc: "Hotel management systems, online booking platforms, guest experience technology and reservation systems for hotels and hospitality businesses." },
  { Icon: HandHeart,     title: "NGOs & Organisations",       desc: "Donor management platforms, field reporting tools, project tracking systems and operational software for non-governmental organisations." },
  { Icon: Users,         title: "SMEs & Startups",            desc: "Affordable, scalable technology solutions, business management systems and digital tools designed to help small businesses and startups grow fast." },
  { Icon: BarChart3,     title: "Manufacturing Sector",       desc: "Production management systems, quality control platforms, supply chain tools and industrial automation solutions for manufacturing businesses." },
];

const solutions = [
  { Icon: Code2,       title: "Custom Software Systems",    desc: "Bespoke enterprise platforms built to your exact specifications." },
  { Icon: Smartphone,  title: "Mobile Applications",        desc: "Native Android and iOS apps for field teams and customers." },
  { Icon: Globe,       title: "Web & E-Commerce Platforms", desc: "Fast, scalable websites and online stores." },
  { Icon: Lock,        title: "Cybersecurity Solutions",    desc: "Audits, penetration testing and data protection." },
  { Icon: Database,    title: "ERP & CRM Systems",          desc: "End-to-end business management and customer platforms." },
  { Icon: Cloud,       title: "Cloud Infrastructure",       desc: "AWS, Azure and hybrid cloud deployments." },
  { Icon: Cpu,         title: "AI & Automation",            desc: "Intelligent automation and data-driven decision tools." },
  { Icon: BarChart3,   title: "Data Analytics",             desc: "Dashboards, reporting and business intelligence." },
];

/* ── shared inline styles ── */
const GOLD = "#c8a84b";
const GOLD_DIM = "rgba(200,168,75,0.7)";
const GOLD_FAINT = "rgba(200,168,75,0.12)";
const label = (text: string) => (
  <div className="inline-flex items-center gap-3 mb-5">
    <div style={{ height:"1px", width:"36px", background:`linear-gradient(90deg,transparent,${GOLD_DIM})` }} />
    <span style={{ fontSize:"10.5px", fontWeight:700, letterSpacing:"0.28em", color:GOLD_DIM, textTransform:"uppercase" as const }}>{text}</span>
    <div style={{ height:"1px", width:"36px", background:`linear-gradient(90deg,${GOLD_DIM},transparent)` }} />
  </div>
);

function Industries() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(),
        r4 = useReveal(), r5 = useReveal();

  return (
    <Layout>

      {/* ══════════════════════════════════════════════
          HERO — clean flat dark navy
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground" style={{ minHeight:"520px" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage:"radial-gradient(circle at 15% 50%, var(--accent) 0, transparent 40%), radial-gradient(circle at 85% 30%, var(--accent) 0, transparent 35%)" }} />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-700">
            {label("Industry Expertise")}
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Digital Solutions Tailored<br className="hidden sm:block" />
              for <span className="gradient-text">Every Industry.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
              style={{ color:"rgba(255,255,255,0.65)", fontWeight:300, lineHeight:1.85 }}>
              TANIT delivers{" "}
              <span style={{ fontWeight:600, color:"rgba(255,255,255,0.9)" }}>secure</span>,{" "}
              <span style={{ fontWeight:600, color:"rgba(255,255,255,0.9)" }}>scalable</span> and innovative
              technology solutions across multiple sectors in Tanzania and East Africa —
              from government institutions to growing{" "}
              <span style={{ fontWeight:600, background:`linear-gradient(90deg,${GOLD},#f0d080)`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>startups</span>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-glow group inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground">
                Request Consultation <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="glass inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-white/10">
                Explore Services <ChevronRight size={15} />
              </Link>
            </div>
            {/* Mini trust row */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[["14+","Industries"],["50+","Projects"],["24/7","Support"]].map(([v,l]) => (
                <div key={l} className="flex items-center gap-2">
                  <span style={{ fontSize:"1.4rem", fontWeight:800, background:`linear-gradient(135deg,#fff 30%,${GOLD})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{v}</span>
                  <span style={{ fontSize:"11px", fontWeight:600, letterSpacing:"0.12em", textTransform:"uppercase" as const, color:"rgba(255,255,255,0.4)" }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust pills ── */}
      <div className="border-b border-border bg-secondary/50 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3 px-4">
          {["Enterprise-Grade Solutions","Secure & Scalable Systems","Trusted Technology Partner","Serving Tanzania & East Africa","14+ Industries Served"].map((t) => (
            <span key={t}
              className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11.5px] font-bold uppercase tracking-wider"
              style={{ borderColor:"rgba(200,168,75,0.4)", color:"rgba(200,168,75,0.92)", background:"rgba(200,168,75,0.07)" }}>
              <CheckCircle2 size={10} style={{ color:"#c8a84b" }} /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          INDUSTRIES GRID — light section with depth
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24" style={{
        background:"linear-gradient(180deg, oklch(0.99 0.003 250) 0%, oklch(0.97 0.007 255) 100%)",
      }}>
        {/* Ambient glow blobs */}
        <div className="glow-light-center" style={{ left:"-80px", top:"30%", transform:"none", width:"220px", height:"220px" }} />
        <div className="glow-blue-left" style={{ left:"auto", right:"-80px", top:"auto", bottom:"20%", width:"200px", height:"200px" }} />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage:"radial-gradient(circle,oklch(0.20 0.05 258) 1px,transparent 1px)",
          backgroundSize:"28px 28px",
        }} />

        <div ref={r1} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {label("Industries We Serve")}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Trusted Across <span className="gradient-text">Multiple Sectors</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              We understand that every industry has unique challenges. Our solutions are tailored to the specific operational needs of each sector.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((ind, i) => (
              <div key={ind.title}
                className="group relative overflow-hidden rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ borderColor:"rgba(200,168,75,0.14)", boxShadow:"0 2px 20px rgba(0,0,0,0.05)", animationDelay:`${i*45}ms` }}>
                {/* Top glow line */}
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-all duration-300 group-hover:opacity-100"
                  style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
                {/* Radial bg tint */}
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background:"radial-gradient(circle at 50% 0%,rgba(200,168,75,0.05) 0%,transparent 65%)" }} />
                {/* Left accent bar */}
                <div className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
                  style={{ background:`linear-gradient(180deg,transparent,${GOLD},transparent)` }} />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ background:`linear-gradient(135deg,rgba(200,168,75,0.15),rgba(200,168,75,0.04))`, border:`1px solid rgba(200,168,75,0.24)` }}>
                    <ind.Icon size={20} style={{ color:"oklch(0.20 0.05 258)", strokeWidth:1.75 }} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground" style={{ letterSpacing:"0.01em", lineHeight:1.3 }}>{ind.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{ind.desc}</p>
                  <div className="mt-4 flex items-center gap-1 opacity-0 transition-all duration-200 group-hover:opacity-100"
                    style={{ fontSize:"11px", fontWeight:700, color:GOLD }}>
                    Learn more <ArrowRight size={11} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SOLUTIONS — dark section
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-primary py-14 text-primary-foreground">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage:"radial-gradient(circle at 10% 50%, var(--accent) 0, transparent 40%), radial-gradient(circle at 90% 50%, var(--accent) 0, transparent 35%)" }} />

        <div ref={r2} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center text-primary-foreground">
            {label("What We Deliver")}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Industry Solutions <span className="gradient-text">We Provide</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed" style={{ color:"rgba(255,255,255,0.55)" }}>
              Regardless of your sector, we bring the right technology to solve your specific business challenges.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s, i) => (
              <div key={s.title}
                className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(200,168,75,0.16)", backdropFilter:"blur(16px)", boxShadow:"0 4px 30px rgba(0,0,0,0.25),inset 0 1px 0 rgba(255,255,255,0.06)", animationDelay:`${i*55}ms` }}>
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background:"radial-gradient(circle at 50% 0%,rgba(200,168,75,0.07) 0%,transparent 65%)" }} />
                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background:"rgba(200,168,75,0.12)", border:"1px solid rgba(200,168,75,0.28)" }}>
                    <s.Icon size={19} style={{ color:GOLD, strokeWidth:1.75 }} />
                  </div>
                  <h3 style={{ fontSize:"13px", fontWeight:700, color:"rgba(255,255,255,0.9)", letterSpacing:"0.01em" }}>{s.title}</h3>
                  <p style={{ marginTop:"6px", fontSize:"12px", lineHeight:1.65, color:"rgba(255,255,255,0.42)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          IS YOUR INDUSTRY MISSING? — engagement section
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24" style={{
        background:"linear-gradient(180deg, oklch(0.99 0.003 250) 0%, oklch(0.96 0.008 255) 100%)",
      }}>
        {/* Ambient depth */}
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
          style={{ background:"radial-gradient(circle,rgba(200,168,75,0.06) 0%,transparent 70%)" }} />
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage:"radial-gradient(circle,oklch(0.20 0.05 258) 1px,transparent 1px)",
          backgroundSize:"32px 32px",
        }} />

        <div ref={r3} className="reveal relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Main card */}
          <div className="relative overflow-hidden rounded-3xl border p-10 sm:p-14 text-center"
            style={{ borderColor:"rgba(200,168,75,0.22)", background:"linear-gradient(135deg,rgba(200,168,75,0.04) 0%,rgba(255,255,255,0.8) 50%,rgba(200,168,75,0.03) 100%)", backdropFilter:"blur(20px)", boxShadow:"0 8px 60px rgba(0,0,0,0.08),inset 0 1px 0 rgba(200,168,75,0.2)" }}>
            {/* Corner accents */}
            {[["top-0 left-0","border-t-2 border-l-2 rounded-tl-3xl"],["top-0 right-0","border-t-2 border-r-2 rounded-tr-3xl"],["bottom-0 left-0","border-b-2 border-l-2 rounded-bl-3xl"],["bottom-0 right-0","border-b-2 border-r-2 rounded-br-3xl"]].map(([pos,cls]) => (
              <div key={pos} className={`absolute ${pos} h-8 w-8 ${cls}`} style={{ borderColor:GOLD, opacity:0.5 }} />
            ))}

            <div className="relative">
              {label("Custom Solutions")}
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Is Your Industry <span className="gradient-text">Missing?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Don't see your sector listed? No problem. From startups to enterprise institutions,
                we design and build <strong className="text-foreground font-semibold">scalable digital systems</strong> tailored
                to your specific operational needs — regardless of your industry or field.
              </p>

              {/* Feature pills */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {[
                  { Icon: Zap,            text:"Rapid Deployment" },
                  { Icon: Settings,       text:"Fully Customisable" },
                  { Icon: Lock,           text:"Enterprise Security" },
                  { Icon: CheckCircle2,   text:"Proven Methodology" },
                ].map(({ Icon, text }) => (
                  <div key={text} className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold"
                    style={{ borderColor:"rgba(200,168,75,0.3)", background:"rgba(200,168,75,0.06)", color:"oklch(0.20 0.05 258)" }}>
                    <Icon size={13} style={{ color:GOLD }} /> {text}
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link to="/contact"
                  className="btn-glow group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition-all">
                  <MessageSquare size={15} /> Talk to Our Team
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl border px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:shadow-md"
                  style={{ borderColor:"rgba(200,168,75,0.35)", background:"rgba(200,168,75,0.05)" }}>
                  Request Custom Solution <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          TRUST STATS — light premium
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-border bg-white py-20">
        <div className="absolute inset-0 opacity-[0.025]" style={{
          backgroundImage:"radial-gradient(circle,oklch(0.20 0.05 258) 1px,transparent 1px)",
          backgroundSize:"24px 24px",
        }} />
        <div ref={r4} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Experience You Can Trust</h2>
            <p className="mt-3 text-sm text-muted-foreground">Numbers that reflect our commitment to delivering excellence across every industry.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { v:"✦",    l:"Modern ICT Company" },
              { v:"14+",  l:"Industries Served" },
              { v:"50+",  l:"Projects Delivered" },
              { v:"100%", l:"Client Satisfaction" },
              { v:"24/7", l:"Support Available" },
            ].map((s) => (
              <div key={s.l}
                className="group flex flex-col items-center rounded-2xl border border-border bg-secondary/30 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
                <div style={{ fontSize:"2rem", fontWeight:800, letterSpacing:"-0.02em", background:`linear-gradient(135deg,oklch(0.20 0.05 258),${GOLD})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                  {s.v}
                </div>
                <div style={{ marginTop:"6px", fontSize:"11px", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase" as const, color:"rgba(0,0,0,0.45)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA — dark section
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-primary py-14 text-primary-foreground">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage:"radial-gradient(circle at 20% 20%, var(--accent) 0, transparent 40%), radial-gradient(circle at 80% 60%, var(--accent) 0, transparent 35%)" }} />

        <div ref={r5} className="reveal relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          {label("Get Started")}
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Let's Build the Future<br className="hidden sm:block" />
            of <span className="gradient-text">Your Industry.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed"
            style={{ color:"rgba(255,255,255,0.58)", fontWeight:300, lineHeight:1.85 }}>
            Tell us about your industry and business challenges. We will design and deliver a
            technology solution that drives{" "}
            <span style={{ fontWeight:600, color:"rgba(255,255,255,0.9)" }}>real results</span>.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/contact"
              className="btn-glow group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-bold text-accent-foreground transition-all">
              Request Consultation <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/services"
              className="glass inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-white/10">
              View All Services
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
