import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import pos from "@/assets/pos.jpg";
import { Check } from "lucide-react";

export const Route = createFileRoute("/products")({ component: Products });

const plans = [
  { name: "Plain", tag: "Starter", features: ["Core POS & sales", "Basic stock tracking", "Single user", "Email support"] },
  { name: "Premium", tag: "Most popular", features: ["Everything in Plain", "Multi-user access", "Advanced reports", "Priority support"], featured: true },
  { name: "Pro", tag: "Scale", features: ["Everything in Premium", "Multi-branch", "API & integrations", "Dedicated account manager"] },
];

function Products() {
  return (
    <Layout>
      <PageHero
        eyebrow="Product & Solution Ecosystem"
        title="Tools that turn day-to-day operations into growth."
        subtitle="We build operational ecosystems — software, infrastructure, analytics and support — that help organizations digitize sustainably."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <img src={pos} alt="BiasharaLink POS" width={1200} height={900} loading="lazy" className="rounded-2xl shadow-xl ring-1 ring-border" />
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground/70">Spotlight</div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">BiasharaLink / KOG POS</h2>
          <p className="mt-4 text-muted-foreground">
            A real-time web app for smart business management. Mfumo wa kisasa wa kufuatilia biashara
            muda wowote, mahali popote — built for Tanzanian retailers, pharmacies, restaurants and wholesalers.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Access anywhere on any device",
              "Real-time sales & stock visibility",
              "Operational efficiency at scale",
              "Practical, mobile-friendly UX",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 text-accent" size={18} /> {t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight">BiasharaLink Packages</h2>
            <p className="mt-3 text-muted-foreground">Flexible plans for every business. Chagua kifurushi kinachokufaa.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {plans.map((p) => (
              <div key={p.name} className={`relative rounded-2xl border bg-card p-8 ${p.featured ? "border-accent shadow-xl ring-2 ring-accent" : "border-border"}`}>
                {p.featured && (
                  <div className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{p.tag}</div>
                )}
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2"><Check className="mt-0.5 text-accent" size={16} /> {f}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-8 inline-flex w-full items-center justify-center rounded-md px-4 py-2.5 text-sm font-semibold transition ${p.featured ? "bg-accent text-accent-foreground hover:brightness-95" : "bg-primary text-primary-foreground hover:opacity-90"}`}>
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">No stress about your budget — our priority is giving you the right solution.</p>
        </div>
      </section>
    </Layout>
  );
}