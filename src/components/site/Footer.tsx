import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logo from "@/assets/tanit-logo-final.png";

const services = ["Software Development","Web Development","Mobile Applications","Cybersecurity","ICT Infrastructure","Artificial Intelligence & IoT","Creative & Branding","Repair & Support"];
const company  = [{ to:"/about",label:"About Us"},{ to:"/services",label:"Services"},{ to:"/products",label:"Products"},{ to:"/partnerships",label:"Partnerships"},{ to:"/careers",label:"Careers"},{ to:"/contact",label:"Contact"}];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">

      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2">

          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logo} alt="TANIT" style={{ height:"40px", width:"auto", objectFit:"contain" }} className="brightness-0 invert opacity-90" />
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/65">
              Tanzania Innovative Technology Company Limited. Registered No. 200925394.
              Delivering world-class technology solutions across East Africa.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {[
                {
                  href: "#", label: "Facebook",
                  svg: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
                },
                {
                  href: "#", label: "X / Twitter",
                  svg: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                },
                {
                  href: "#", label: "LinkedIn",
                  svg: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                },
                {
                  href: "#", label: "Instagram",
                  svg: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                },
                {
                  href: "#", label: "TikTok",
                  svg: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/></svg>
                },
                {
                  href: "#", label: "YouTube",
                  svg: <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                },
              ].map(({ href, label, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary-foreground/15 text-primary-foreground/50 transition hover:border-accent hover:text-accent"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {company.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="group flex items-center gap-1.5 text-sm text-primary-foreground/65 transition hover:text-primary-foreground">
                    <ArrowRight size={11} className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/services" className="group flex items-center gap-1.5 text-sm text-primary-foreground/65 transition hover:text-primary-foreground">
                    <ArrowRight size={11} className="opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Get In Touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/65">
              <li className="flex items-start gap-2.5"><MapPin size={15} className="mt-0.5 flex-shrink-0 text-accent" /> Posta, Dar es Salaam, Tanzania</li>
              <li className="flex items-start gap-2.5 text-primary-foreground/40 text-xs"><MapPin size={13} className="mt-0.5 flex-shrink-0 text-accent/50" /> Offices also in Dodoma · Coast Region · Mwanza</li>
              <li className="flex items-center gap-2.5"><Phone size={15} className="flex-shrink-0 text-accent" /> +255 699 846 887</li>
              <li className="flex items-center gap-2.5"><Phone size={15} className="flex-shrink-0 text-accent" /> +255 694 893 936</li>
              <li className="flex items-center gap-2.5"><Mail size={15} className="flex-shrink-0 text-accent" /> info@tanitcoltd.co.tz</li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">Stay Updated</p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-2 flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 rounded-lg border border-primary-foreground/15 bg-primary-foreground/8 px-3 py-2 text-xs text-primary-foreground placeholder:text-primary-foreground/35 outline-none focus:border-accent"
                />
                <button type="submit" className="rounded-lg bg-accent px-3 py-2 text-xs font-bold text-accent-foreground transition hover:brightness-110">
                  <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-primary-foreground/45">
            © {new Date().getFullYear()} TANIT — Tanzania Innovative Technology Company Limited. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/35">Reg. No. 200925394 · Incorporated under the Companies Act of 2002</p>
        </div>
      </div>
    </footer>
  );
}
