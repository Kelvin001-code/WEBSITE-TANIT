import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logo from "@/assets/tanit-logo-final.png";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

const links = [
  { to: "/",              label: "Home" },
  { to: "/about",         label: "About" },
  { to: "/services",      label: "Services" },
  { to: "/industries",    label: "Industries" },
  { to: "/products",      label: "Products" },
  { to: "/partnerships",  label: "Partnerships" },
  { to: "/careers",       label: "Careers" },
  { to: "/contact",       label: "Contact" },
];

export function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/90 shadow-[0_2px_20px_rgba(0,0,0,0.08)] backdrop-blur-xl border-b border-border/40"
          : "bg-white/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo — static, not a link */}
        <div className="flex-shrink-0 flex items-center">
          <img
            src={logo}
            alt="TANIT — Tanzania Innovative Technology"
            width={2957}
            height={628}
            style={{
              height: scrolled ? "36px" : "42px",
              width: "auto",
              objectFit: "contain",
              transition: "height 0.3s ease",
            }}
          />
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-4 py-2 text-[13.5px] font-medium rounded-lg transition-all duration-200 ${
                  active
                    ? "text-primary"
                    : "text-foreground/60 hover:text-foreground hover:bg-secondary/80"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-[3px] w-4 rounded-full bg-accent transition-all duration-300" />
                )}
              </Link>
            );
          })}

          <div className="mx-3 h-4 w-px bg-border" />

          <Link
            to="/contact"
            className="btn-glow group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-[13px] font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90"
          >
            Request a Quote
            <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-foreground/70 transition hover:bg-secondary md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`overflow-hidden border-t border-border/50 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${open ? "max-h-[400px]" : "max-h-0"}`}>
        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  active ? "bg-primary/8 text-primary font-semibold" : "text-foreground/70 hover:bg-secondary"
                }`}
              >
                {l.label}
                {active && <span className="h-2 w-2 rounded-full bg-accent" />}
              </Link>
            );
          })}
          <div className="mt-3 space-y-2 border-t border-border/50 pt-3">
            <Link to="/contact" className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
              Request a Quote <ArrowRight size={14} />
            </Link>
            <a href="tel:+255699846887" className="flex w-full items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-sm text-foreground/60 transition hover:bg-secondary">
              <Phone size={13} /> +255 699 846 887
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
