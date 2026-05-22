import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Layout } from "@/components/site/Layout";
import {
  ArrowRight, ShieldCheck, Lightbulb, Star, Users, Handshake,
  Zap, Award, Target, CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About TANIT — Tanzania Innovative Technology Company Limited" },
      { name: "description", content: "Learn about TANIT — a fully registered Tanzanian ICT company delivering software, cybersecurity and digital solutions across Tanzania and East Africa." },
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

const GOLD = "#c8a84b";
const GOLD_DIM = "rgba(200,168,75,0.7)";

const label = (text: string) => (
  <div className="inline-flex items-center gap-3 mb-5">
    <div style={{ height:"1px", width:"36px", background:`linear-gradient(90deg,transparent,${GOLD_DIM})` }} />
    <span style={{ fontSize:"10.5px", fontWeight:700, letterSpacing:"0.28em", color:GOLD_DIM, textTransform:"uppercase" as const }}>{text}</span>
    <div style={{ height:"1px", width:"36px", background:`linear-gradient(90deg,${GOLD_DIM},transparent)` }} />
  </div>
);

const values = [
  { Icon: Award,      title:"Professionalism", desc:"Upholding the highest standards in every project we undertake." },
  { Icon: ShieldCheck,title:"Integrity",       desc:"Uncompromising honesty, confidentiality and data security." },
  { Icon: Lightbulb,  title:"Innovation",      desc:"Continuously exploring and applying emerging technologies." },
  { Icon: Star,       title:"Excellence",      desc:"Delivering premium, reliable and scalable solutions every time." },
  { Icon: Zap,        title:"Creativity",      desc:"Blending technology with strong creative communication." },
  { Icon: Users,      title:"Teamwork",        desc:"Cross-departmental collaboration for holistic client success." },
];

function About() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal();

  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage:"radial-gradient(circle at 15% 50%, var(--accent) 0, transparent 40%), radial-gradient(circle at 85% 30%, var(--accent) 0, transparent 35%)" }} />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-6 duration-700">
            {label("About TANIT")}
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              A Modern Tanzanian ICT Company<br className="hidden lg:block" />
              <span className="gradient-text"> Built for the Digital Era.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
              style={{ color:"rgba(255,255,255,0.65)", fontWeight:300, lineHeight:1.85 }}>
              Founded on the belief that Africa's growth will be accelerated by{" "}
              <span style={{ fontWeight:600, color:"rgba(255,255,255,0.9)" }}>accessible</span>,{" "}
              <span style={{ fontWeight:600, color:"rgba(255,255,255,0.9)" }}>secure</span> and intelligently deployed{" "}
              <span style={{ fontWeight:600, background:`linear-gradient(90deg,${GOLD},#f0d080)`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>technology</span>.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-glow group inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground">
                Work With Us <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/services" className="glass inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-white/10 transition-all">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW ── */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute -right-48 top-1/4 h-[500px] w-[500px] rounded-full blur-[130px]"
          style={{ background:"radial-gradient(circle,rgba(200,168,75,0.05) 0%,transparent 70%)" }} />
        <div ref={r1} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-5">
              {label("Who We Are")}
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Tanzania Innovative Technology<br />
                <span className="gradient-text">Company Limited</span>
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-foreground/80">
                <p>Tanzania Innovative Technology Company Limited (TANIT) is a forward-thinking information and communication technology company dedicated to driving a technological revolution across Tanzania, East Africa and the wider African continent.</p>
                <p>Incorporated under the Companies Act of 2002, TANIT combines deep expertise in information technology, computer science and engineering to deliver software development, cybersecurity, network infrastructure, consultancy and digital creative services.</p>
                <p>From government institutions to growing enterprises, we empower organisations to thrive through innovation — supporting the full project lifecycle from strategy to deployment, optimisation and training.</p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Software Development","Cybersecurity","ICT Infrastructure","AI & IoT","Creative & Branding"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold"
                    style={{ borderColor:"rgba(200,168,75,0.3)", color:GOLD_DIM, background:"rgba(200,168,75,0.06)" }}>
                    <CheckCircle2 size={10} style={{ color:GOLD }} /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Company snapshot card */}
            <aside className="relative overflow-hidden rounded-2xl border p-7"
              style={{ borderColor:"rgba(200,168,75,0.2)", background:"linear-gradient(135deg,rgba(200,168,75,0.04),rgba(255,255,255,0.9))", boxShadow:"0 4px 40px rgba(0,0,0,0.06)" }}>
              <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
                style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
              <h3 style={{ fontSize:"10.5px", fontWeight:700, letterSpacing:"0.24em", color:GOLD_DIM, textTransform:"uppercase" as const }}>Company Snapshot</h3>
              <dl className="mt-5 space-y-3">
                {[
                  ["Short Name","TANIT"],
                  ["Legal Form","Limited Company"],
                  ["Registration No.","200925394"],
                  ["Head Office","Posta, Dar es Salaam"],
                  ["Branch Offices","Dodoma · Coast Region · Mwanza"],
                  ["Jurisdiction","United Republic of Tanzania"],
                  ["Incorporated","Companies Act of 2002"],
                  ["Key Focus","Enterprise Tech, POS, Cybersecurity"],
                ].map(([k,v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-border/50 pb-2.5 last:border-0 last:pb-0">
                    <dt className="text-xs text-muted-foreground">{k}</dt>
                    <dd className="text-right text-xs font-semibold text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ── */}
      <section className="relative overflow-hidden bg-primary py-14 text-primary-foreground">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage:"radial-gradient(circle at 10% 50%, var(--accent) 0, transparent 40%), radial-gradient(circle at 90% 50%, var(--accent) 0, transparent 35%)" }} />

        <div ref={r2} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center text-primary-foreground mb-12">
            {label("Our Direction")}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Vision & <span className="gradient-text">Mission</span></h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              { tag:"Our Vision", Icon:Target, text:"To be the leading technology innovation company in East Africa, driving growth through smart, secure and sustainable digital solutions." },
              { tag:"Our Mission", Icon:Handshake, text:"To deliver professional, reliable and transformative technology services that empower individuals, businesses and institutions to thrive in the digital era." },
            ].map((item) => (
              <div key={item.tag} className="group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(200,168,75,0.18)", backdropFilter:"blur(16px)", boxShadow:"0 4px 30px rgba(0,0,0,0.25),inset 0 1px 0 rgba(255,255,255,0.06)" }}>
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background:"rgba(200,168,75,0.12)", border:"1px solid rgba(200,168,75,0.28)" }}>
                  <item.Icon size={22} style={{ color:GOLD, strokeWidth:1.75 }} />
                </div>
                <div style={{ fontSize:"10.5px", fontWeight:700, letterSpacing:"0.22em", color:GOLD_DIM, textTransform:"uppercase" as const }}>{item.tag}</div>
                <p className="mt-3 text-base leading-relaxed" style={{ color:"rgba(255,255,255,0.8)", fontWeight:300, lineHeight:1.85 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="relative overflow-hidden bg-background py-24">
        <div className="glow-light-center" />
        <div ref={r3} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            {label("What Drives Us")}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Core <span className="gradient-text">Values</span></h2>
            <p className="mt-4 text-sm text-muted-foreground">The principles that guide every decision, every project and every client relationship.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div key={v.title}
                className="group relative overflow-hidden rounded-2xl border bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                style={{ borderColor:"rgba(200,168,75,0.14)", boxShadow:"0 2px 16px rgba(0,0,0,0.05)", animationDelay:`${i*60}ms` }}>
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl opacity-0 transition-all duration-300 group-hover:opacity-100"
                  style={{ background:`linear-gradient(90deg,transparent,${GOLD},transparent)` }} />
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background:"radial-gradient(circle at 50% 0%,rgba(200,168,75,0.04) 0%,transparent 65%)" }} />
                <div className="relative">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background:"linear-gradient(135deg,rgba(200,168,75,0.14),rgba(200,168,75,0.04))", border:"1px solid rgba(200,168,75,0.22)" }}>
                    <v.Icon size={19} style={{ color:"oklch(0.20 0.05 258)", strokeWidth:1.75 }} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground" style={{ letterSpacing:"0.01em" }}>{v.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-primary py-14 text-primary-foreground">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage:"radial-gradient(circle at 20% 20%, var(--accent) 0, transparent 40%), radial-gradient(circle at 80% 60%, var(--accent) 0, transparent 35%)" }} />
        <div ref={r4} className="reveal relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          {label("Partner With Us")}
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Ready to Work With<br className="hidden sm:block" />
            <span className="gradient-text"> Tanzania's Best?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed"
            style={{ color:"rgba(255,255,255,0.58)", fontWeight:300, lineHeight:1.85 }}>
            Let's discuss your project, tender or institutional technology need. Our team responds within one business day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-glow group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-sm font-bold text-accent-foreground">
              Get In Touch <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/services" className="glass inline-flex items-center gap-2 rounded-xl px-8 py-4 text-sm font-semibold text-primary-foreground hover:bg-white/10 transition-all">
              View Services
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
}
