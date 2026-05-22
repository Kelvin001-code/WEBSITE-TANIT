import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Layout, PageHero } from "@/components/site/Layout";
import pos from "@/assets/pos.jpg";
import {
  Check, Monitor, Star, Shield, ExternalLink,
  Wifi, BarChart3, Smartphone, CloudUpload, Zap, CheckCircle2,
  LayoutDashboard,
} from "lucide-react";

export const Route = createFileRoute("/products")({
  component: Products,
  head: () => ({
    meta: [
      { title: "Products — BiasharaLink KOG POS | TANIT Tanzania Innovative Technology" },
      { name: "description", content: "Discover BiasharaLink / KOG POS — TANIT's flagship point-of-sale and business management platform for retailers, pharmacies, restaurants and wholesalers across Tanzania." },
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

const plans = [
  {
    name: "Plain",
    tag: "Starter",
    price: "180K",
    period: "TSH / Year",
    desc: "Essential point-of-sale tools for small businesses getting started.",
    Icon: Monitor,
    featured: false,
    features: [
      "Core point-of-sale and sales management",
      "Basic stock tracking and inventory",
      "Single user access",
      "Email support",
    ],
  },
  {
    name: "Premium",
    tag: "Most Popular",
    price: "360K",
    period: "TSH / Year",
    desc: "Advanced features for growing businesses that need more control.",
    Icon: Star,
    featured: true,
    features: [
      "Everything in Plain",
      "Multi-user access",
      "Advanced reporting and analytics",
      "Priority support",
    ],
  },
  {
    name: "Pro",
    tag: "Enterprise",
    price: "550K",
    period: "TSH / Year",
    desc: "Complete business control for enterprise operations and multi-branch management.",
    Icon: Shield,
    featured: false,
    features: [
      "Everything in Premium",
      "Multi-branch support",
      "API and third-party integrations",
      "Dedicated account manager",
    ],
  },
];

const featureStrip = [
  { Icon: Wifi,         text: "Access Anywhere" },
  { Icon: BarChart3,    text: "Real-Time Reports" },
  { Icon: Smartphone,   text: "Multi-Device Support" },
  { Icon: CloudUpload,  text: "Cloud Backup" },
  { Icon: Zap,          text: "Smart Analytics" },
];

function Products() {
  const r1 = useReveal(), r2 = useReveal();

  return (
    <Layout>
      <PageHero
        eyebrow="Product & Solution Ecosystem"
        title="Tools that turn day-to-day operations into growth."
        subtitle="We build operational ecosystems — software, infrastructure, analytics and support — that help organizations digitize sustainably."
      />

      {/* ── PRODUCT SPOTLIGHT ── */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl blur-2xl" style={{ background:"rgba(200,168,75,0.06)" }} />
          <img src={pos} alt="BiasharaLink KOG POS" width={1200} height={900} loading="lazy"
            className="relative rounded-2xl shadow-2xl ring-1 ring-border" />
        </div>
        <div ref={r1} className="reveal">
          <div className="inline-flex items-center gap-3 mb-4">
            <div style={{ height:"1px", width:"28px", background:`linear-gradient(90deg,transparent,${GOLD_DIM})` }} />
            <span style={{ fontSize:"10.5px", fontWeight:700, letterSpacing:"0.28em", color:GOLD_DIM, textTransform:"uppercase" as const }}>Flagship Product</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">BiasharaLink / KOG POS</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            A real-time, mobile-friendly point-of-sale and business management platform built for
            retailers, pharmacies, restaurants and wholesalers across Tanzania. Run your business
            from any device, anywhere.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Access from any device, anywhere",
              "Real-time sales and stock visibility",
              "Operational efficiency at scale",
              "Practical, mobile-friendly interface",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm">
                <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-accent" /> {t}
              </li>
            ))}
          </ul>
          <a
            href="https://kogpos.co.tz/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all"
          >
            <LayoutDashboard size={15} />
            Launch KOG POS Web App
          </a>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage:"radial-gradient(circle at 20% 20%, var(--accent) 0, transparent 40%), radial-gradient(circle at 80% 60%, var(--accent) 0, transparent 35%)" }} />

        <div ref={r2} className="reveal relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mx-auto max-w-xl text-center mb-14">
            <div className="inline-flex items-center gap-3 mb-4">
              <div style={{ height:"1px", width:"28px", background:`linear-gradient(90deg,transparent,${GOLD_DIM})` }} />
              <span style={{ fontSize:"10.5px", fontWeight:700, letterSpacing:"0.28em", color:GOLD_DIM, textTransform:"uppercase" as const }}>Pricing Plans</span>
              <div style={{ height:"1px", width:"28px", background:`linear-gradient(90deg,${GOLD_DIM},transparent)` }} />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              BiasharaLink <span className="gradient-text">Packages</span>
            </h2>
            <p className="mt-3 text-sm text-primary-foreground/60">
              Flexible plans for every business. Chagua kifurushi kinachokufaa.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: p.featured
                    ? "linear-gradient(135deg, rgba(200,168,75,0.15) 0%, rgba(200,168,75,0.05) 100%)"
                    : "rgba(255,255,255,0.04)",
                  border: p.featured
                    ? `1px solid rgba(200,168,75,0.5)`
                    : "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(16px)",
                  boxShadow: p.featured
                    ? `0 0 40px rgba(200,168,75,0.15), 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(200,168,75,0.2)`
                    : "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                {/* Top glow line */}
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl"
                  style={{ background: p.featured
                    ? `linear-gradient(90deg, transparent, ${GOLD}, transparent)`
                    : "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }} />

                {/* Most Popular badge */}
                {p.featured && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <div className="rounded-b-xl px-4 py-1 text-[10px] font-bold uppercase tracking-widest"
                      style={{ background:GOLD, color:"oklch(0.15 0.04 255)" }}>
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8 pt-10">
                  {/* Icon + plan name */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: p.featured ? "rgba(200,168,75,0.2)" : "rgba(255,255,255,0.08)", border:`1px solid ${p.featured ? "rgba(200,168,75,0.4)" : "rgba(255,255,255,0.12)"}` }}>
                      <p.Icon size={18} style={{ color: p.featured ? GOLD : "rgba(255,255,255,0.7)", strokeWidth:1.75 }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: p.featured ? GOLD_DIM : "rgba(255,255,255,0.4)" }}>{p.tag}</div>
                      <div className="text-lg font-extrabold text-white">{p.name}</div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span style={{
                        fontSize:"2.8rem", fontWeight:800, lineHeight:1, letterSpacing:"-0.03em",
                        background: p.featured ? `linear-gradient(135deg,#fff 20%,${GOLD})` : "linear-gradient(135deg,#fff 40%,rgba(255,255,255,0.6))",
                        WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
                      }}>{p.price}</span>
                      <span style={{ fontSize:"13px", fontWeight:500, color:"rgba(255,255,255,0.45)", marginLeft:"4px" }}>{p.period}</span>
                    </div>
                    <p style={{ marginTop:"8px", fontSize:"12px", lineHeight:1.6, color:"rgba(255,255,255,0.5)" }}>{p.desc}</p>
                  </div>

                  {/* Divider */}
                  <div className="my-5 h-px" style={{ background: p.featured ? "rgba(200,168,75,0.25)" : "rgba(255,255,255,0.08)" }} />

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs" style={{ color:"rgba(255,255,255,0.75)" }}>
                        <Check size={14} className="mt-0.5 flex-shrink-0" style={{ color: p.featured ? GOLD : "rgba(255,255,255,0.5)" }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      background: p.featured ? GOLD : "rgba(255,255,255,0.08)",
                      color: p.featured ? "oklch(0.15 0.04 255)" : "rgba(255,255,255,0.85)",
                      border: p.featured ? "none" : "1px solid rgba(255,255,255,0.12)",
                      boxShadow: p.featured ? `0 4px 20px rgba(200,168,75,0.35)` : "none",
                    }}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Feature strip */}
          <div className="mt-14 rounded-2xl border p-6"
            style={{ borderColor:"rgba(200,168,75,0.18)", background:"rgba(255,255,255,0.03)" }}>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {featureStrip.map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={15} style={{ color:GOLD }} />
                  <span style={{ fontSize:"12px", fontWeight:600, color:"rgba(255,255,255,0.6)", letterSpacing:"0.04em" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Official link */}
          <div className="mt-10 text-center">
            <p className="text-xs text-primary-foreground/40 mb-3">Ready to try it yourself?</p>
            <a
              href="https://kogpos.co.tz/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow group inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold transition-all"
              style={{ background:`linear-gradient(135deg,${GOLD},#e8c060)`, color:"oklch(0.15 0.04 255)" }}
            >
              <LayoutDashboard size={15} />
              Launch KOG POS Web App
            </a>
            <p className="mt-3 text-xs text-primary-foreground/35">No stress about your budget — our priority is giving you the right solution.</p>
          </div>
        </div>
      </section>

    </Layout>
  );
}
