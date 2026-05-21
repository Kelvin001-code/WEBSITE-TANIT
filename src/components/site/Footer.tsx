import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, ArrowRight, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import logo from "@/assets/tanit-logo-final.png";

const services = ["Software Development","Web Development","Mobile Applications","Cybersecurity","ICT Infrastructure","Artificial Intelligence & IoT","Creative & Branding","Repair & Support"];
const company  = [{ to:"/about",label:"About Us"},{ to:"/services",label:"Services"},{ to:"/products",label:"Products"},{ to:"/contact",label:"Contact"}];

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
            <div className="mt-5 flex gap-3">
              {[
                { icon: Facebook,  href: "#" },
                { icon: Twitter,   href: "#" },
                { icon: Linkedin,  href: "#" },
                { icon: Github,    href: "#" },
              ].map(({ icon: Icon, href }) => (
                <a key={href+Icon.name} href={href} className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary-foreground/15 text-primary-foreground/50 transition hover:border-accent hover:text-accent">
                  <Icon size={15} />
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
              <li className="flex items-start gap-2.5"><MapPin size={15} className="mt-0.5 flex-shrink-0 text-accent" /> Mkuranga, Coast Region, Tanzania</li>
              <li className="flex items-center gap-2.5"><Phone size={15} className="flex-shrink-0 text-accent" /> +255 699 846 887</li>
              <li className="flex items-center gap-2.5"><Phone size={15} className="flex-shrink-0 text-accent" /> +255 694 893 936</li>
              <li className="flex items-center gap-2.5"><Mail size={15} className="flex-shrink-0 text-accent" /> info@tanit.co.tz</li>
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
