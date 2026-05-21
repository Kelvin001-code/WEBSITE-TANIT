import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/site/Layout";
import {
  Code2, ShieldCheck, Network, Cpu, Palette, Wrench, GraduationCap,
  BarChart3, Check, ArrowRight, Database, Cloud, Lock, Smartphone,
  Camera, Brain, Server, Globe,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  component: Services,
  head: () => ({
    meta: [
      { title: "Services — Software, Cybersecurity, ICT Infrastructure | TANIT" },
      { name: "description", content: "Detailed breakdown of TANIT's ICT services: software development, cybersecurity audits, infrastructure, AI/IoT, consultancy, training, repair and creative production." },
    ],
  }),
});

type ServiceDetail = {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  code: string;
  title: string;
  tagline: string;
  intro: string;
  capabilities: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string; desc: string }[];
  deliverables: string[];
  stack: string[];
  outcome: string;
};

const services: ServiceDetail[] = [
  {
    id: "software",
    code: "A.",
    icon: Code2,
    title: "Software Engineering",
    tagline: "Custom web, mobile and enterprise platforms built to scale.",
    intro:
      "We design, build and maintain bespoke digital products — from internal business systems to public-facing platforms. Every engagement starts with discovery and ends with documentation, training and a long-term support plan, so the software keeps delivering value long after launch.",
    capabilities: [
      { icon: Globe, title: "Web Applications", desc: "Responsive, fast and SEO-ready web platforms built with modern frameworks and accessible UI." },
      { icon: Smartphone, title: "Mobile Applications", desc: "Native-feeling Android and iOS apps for field operations, customer engagement and m-commerce." },
      { icon: Database, title: "ERP & CRM Systems", desc: "End-to-end business systems covering sales, inventory, HR, accounting and customer relationships." },
      { icon: Server, title: "APIs & Integrations", desc: "Secure REST APIs, payment gateways, SMS, USSD and third-party system integrations." },
    ],
    deliverables: [
      "Discovery workshop & technical specification document",
      "UI/UX design system with clickable prototype",
      "Production-grade source code in a private repository",
      "Deployment, CI/CD pipeline and environment setup",
      "User manual, admin training and 90-day warranty support",
    ],
    stack: ["React", "Next.js", "Node.js", "Laravel", "Flutter", "PostgreSQL", "MySQL", "Docker"],
    outcome:
      "Operational systems that automate manual work, eliminate spreadsheet chaos and produce reliable data for decisions.",
  },
  {
    id: "cybersecurity",
    code: "B.",
    icon: ShieldCheck,
    title: "Cybersecurity & Auditing",
    tagline: "Find weaknesses before attackers do. Protect what matters most.",
    intro:
      "Our cybersecurity practice combines offensive testing with defensive engineering. We assess your environment the way a real attacker would, then help you close every gap — from misconfigured servers and weak passwords to insecure code and unprotected data flows.",
    capabilities: [
      { icon: Lock, title: "Penetration Testing", desc: "Black-box and grey-box testing of web apps, mobile apps, networks and APIs against OWASP and PTES standards." },
      { icon: ShieldCheck, title: "Security Audits & Compliance", desc: "Policy review, ISO 27001-aligned assessments, gap analysis and remediation roadmaps." },
      { icon: Database, title: "Data Protection", desc: "Encryption strategy, access governance and alignment with Tanzania's Personal Data Protection Act, 2022." },
      { icon: Brain, title: "Incident Readiness", desc: "Tabletop exercises, response playbooks, log monitoring guidance and post-incident forensics." },
    ],
    deliverables: [
      "Executive summary report for leadership",
      "Technical findings report with CVSS-scored vulnerabilities",
      "Proof-of-concept evidence for every critical finding",
      "Prioritised remediation roadmap with effort estimates",
      "Re-test pass to confirm fixes",
    ],
    stack: ["Burp Suite", "Nmap", "Metasploit", "OWASP ZAP", "Wireshark", "Nessus", "Kali Linux"],
    outcome:
      "Verifiable evidence that your systems are hardened — useful for boards, regulators, insurers and tenders.",
  },
  {
    id: "infrastructure",
    code: "C.",
    icon: Network,
    title: "ICT Infrastructure & Networking",
    tagline: "Reliable backbones for offices, branches, schools and government.",
    intro:
      "From a single office to multi-site enterprises, we design and deploy network and server infrastructure that is fast, secure and easy to manage. Every install follows structured cabling best practice and is fully documented for handover.",
    capabilities: [
      { icon: Network, title: "LAN, WAN & Wi-Fi", desc: "Site surveys, structured cabling, switching, routing and high-density wireless coverage." },
      { icon: Camera, title: "CCTV & Access Control", desc: "IP camera systems, NVR/cloud recording, biometric and card-based access control." },
      { icon: Cloud, title: "Cloud & Hybrid Deployments", desc: "AWS, Azure and on-premise virtualization, backups, disaster recovery and email." },
      { icon: Server, title: "Servers & Data Centers", desc: "Server room design, UPS, cooling, rack layout, Active Directory and file services." },
    ],
    deliverables: [
      "Network design drawings and IP addressing plan",
      "Bill of quantities and procurement support",
      "Professional installation and labeling",
      "Configuration backups and admin handover",
      "As-built documentation and maintenance schedule",
    ],
    stack: ["Cisco", "MikroTik", "Ubiquiti", "Fortinet", "Hikvision", "VMware", "Windows Server", "Linux"],
    outcome:
      "An infrastructure that performs predictably, is observable when something goes wrong, and grows with your organisation.",
  },
  {
    id: "consultancy",
    code: "D.",
    icon: BarChart3,
    title: "ICT Consultancy & Strategy",
    tagline: "From idea to roadmap — independent, vendor-neutral guidance.",
    intro:
      "We help leadership teams make confident ICT decisions: where to invest, what to build versus buy, how to digitize a workflow, and how to write defensible tender specifications. Our consultants combine engineering depth with business literacy.",
    capabilities: [
      { icon: BarChart3, title: "Digital Strategy", desc: "Multi-year ICT strategy aligned to organisational goals, with KPIs and a phased budget." },
      { icon: Brain, title: "Needs Assessment", desc: "Stakeholder interviews, process mapping and a clear gap analysis with prioritised recommendations." },
      { icon: Check, title: "Procurement Advisory", desc: "Tender specifications, vendor evaluation matrices and contract review support." },
      { icon: Cpu, title: "Project Management", desc: "PMI-aligned management of complex ICT rollouts — scope, schedule, risk and quality." },
    ],
    deliverables: [
      "Current-state assessment report",
      "Target-state architecture and roadmap",
      "Budget estimate and procurement plan",
      "Risk register and governance model",
      "Executive presentation for stakeholders",
    ],
    stack: ["TOGAF", "PMBOK", "ITIL", "ISO 27001", "COBIT", "Lucidchart", "MS Project"],
    outcome:
      "A clear, costed plan your leadership team can defend and your delivery team can execute.",
  },
  {
    id: "training",
    code: "E.",
    icon: GraduationCap,
    title: "ICT Training & Capacity Building",
    tagline: "Practical, hands-on training that actually changes how people work.",
    intro:
      "We run targeted training programs for institutions, government and private companies. Sessions are interactive, scenario-based and delivered by working engineers — not slide-readers. Each course ends with an assessment and a TANIT certificate of completion.",
    capabilities: [
      { icon: GraduationCap, title: "Professional Courses", desc: "Cybersecurity essentials, ethical hacking, networking, cloud and software development." },
      { icon: Database, title: "Corporate Training", desc: "Tailored programs for staff teams: digital literacy, data protection, M365 and productivity." },
      { icon: Brain, title: "Train-the-Trainer", desc: "Equip your in-house team to deliver and sustain digital skills development internally." },
      { icon: Check, title: "Certification Prep", desc: "Coaching for CompTIA, Cisco, AWS and Microsoft certification exams." },
    ],
    deliverables: [
      "Customised curriculum and lesson plans",
      "Lab environment for hands-on practice",
      "Printed and digital training materials",
      "Pre- and post-training competency assessment",
      "Certificate of completion for each participant",
    ],
    stack: ["CompTIA", "Cisco", "AWS", "Microsoft 365", "Google Workspace", "Linux"],
    outcome:
      "Confident teams that can run, secure and improve their own systems — reducing long-term dependency on outside vendors.",
  },
  {
    id: "repair",
    code: "F.",
    icon: Wrench,
    title: "Repair, Maintenance & Support",
    tagline: "Keep your IT environment healthy, safe and continuously available.",
    intro:
      "Whether you need a one-off repair or a continuous managed-services contract, our technicians keep your hardware, software and networks running. Preventive maintenance plans catch issues before they become outages.",
    capabilities: [
      { icon: Wrench, title: "Hardware Support", desc: "Laptops, desktops, servers, printers, UPS, projectors and peripherals." },
      { icon: Brain, title: "Diagnostics & Recovery", desc: "Boot failure, malware cleanup, OS reinstall, file and database recovery." },
      { icon: Server, title: "Managed IT Services", desc: "Scheduled maintenance, patching, monitoring and helpdesk for SMEs." },
      { icon: Lock, title: "Onsite & Remote Support", desc: "On-call response in Dar, Coast Region and remote support nationwide." },
    ],
    deliverables: [
      "Free initial diagnosis",
      "Written repair quotation before work begins",
      "Genuine parts with warranty",
      "Maintenance log per device",
      "Optional service-level agreement (SLA) for ongoing support",
    ],
    stack: ["Dell", "HP", "Lenovo", "Apple", "APC", "Hikvision"],
    outcome:
      "Less downtime, longer equipment life and a single accountable partner for everything IT in your office.",
  },
  {
    id: "innovation",
    code: "G.",
    icon: Cpu,
    title: "Innovation, AI & IoT",
    tagline: "Practical emerging-tech pilots tailored to African market realities.",
    intro:
      "We help organisations test real-world applications of AI, IoT and automation — without the hype. Our R&D lab prototypes solutions you can measure, iterate on, and scale only when the business case is proven.",
    capabilities: [
      { icon: Brain, title: "Applied AI", desc: "Document automation, chatbots, computer vision and predictive analytics for local business problems." },
      { icon: Cpu, title: "IoT Solutions", desc: "Sensor networks for agriculture, fleet, energy and asset tracking with mobile dashboards." },
      { icon: Wrench, title: "Robotics & Automation", desc: "Workflow automation, RPA bots and educational robotics for schools and competitions." },
      { icon: BarChart3, title: "Data & Analytics", desc: "Dashboards, BI reporting and data-driven decision support for management." },
    ],
    deliverables: [
      "Proof-of-concept prototype",
      "Pilot deployment with real users",
      "Performance and ROI report",
      "Scaling and productionisation plan",
    ],
    stack: ["Python", "TensorFlow", "OpenAI", "ESP32", "Raspberry Pi", "Power BI", "Grafana"],
    outcome:
      "Evidence-based innovation — small bets that prove their value before you commit to large investment.",
  },
  {
    id: "branding",
    code: "H.",
    icon: Palette,
    title: "Branding & Creative Studio",
    tagline: "Design, photography and motion that make your brand unmistakable.",
    intro:
      "A strong brand earns trust and shortens sales cycles. Our in-house creative team handles everything from logo design to social media production, so your visual identity stays consistent across every touchpoint.",
    capabilities: [
      { icon: Palette, title: "Visual Identity", desc: "Logos, brand guidelines, stationery, profiles and pitch decks." },
      { icon: Camera, title: "Photography & Filming", desc: "Corporate, product, event and aerial drone photography and videography." },
      { icon: Smartphone, title: "Digital Content", desc: "Social media kits, motion graphics, reels and short-form video for marketing." },
      { icon: Globe, title: "Print & Signage", desc: "Brochures, banners, vehicle branding, large-format print and exhibition booths." },
    ],
    deliverables: [
      "Creative brief and concept boards",
      "Production-ready print and digital files",
      "Source files in editable formats",
      "Brand guideline document",
    ],
    stack: ["Adobe Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Figma", "DJI"],
    outcome:
      "A polished brand presence that competes with international players and converts attention into business.",
  },
];

const principles = [
  { t: "Quality First", d: "Every deliverable goes through internal review before it ever reaches the client." },
  { t: "Confidentiality", d: "Signed NDAs by default. Your data, code and strategy stay yours." },
  { t: "Local Reality", d: "Solutions designed for Tanzanian infrastructure, languages and budgets." },
  { t: "Long-Term Partnership", d: "We invest in client relationships — not one-off jobs." },
];

function Services() {
  return (
    <Layout>
      <PageHero
        eyebrow="Core Service Portfolio"
        title="Eight specialised practices. One accountable partner."
        subtitle="Every TANIT service is delivered by a dedicated practice lead, with documented scope, measurable outcomes and post-delivery support — so you always know what you're paying for and what you'll get."
      />

      {/* Quick navigation */}
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Jump to:</span>
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground/80 transition hover:border-accent hover:text-foreground"
              >
                <span className="text-accent">{s.code}</span> {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed service sections */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {services.map((s, idx) => {
          const Icon = s.icon;
          return (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-20 border-b border-border py-20 last:border-b-0"
            >
              <div className="grid gap-10 lg:grid-cols-12">
                {/* Left rail */}
                <div className="lg:col-span-4">
                  <div className="sticky top-24">
                    <div className="flex items-center gap-3">
                      <span className="rounded-md bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">
                        {s.code} {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg ring-4 ring-accent/20">
                      <Icon size={30} className="text-accent" />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground">{s.title}</h2>
                    <p className="mt-3 text-base font-medium text-accent-foreground/80">{s.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.intro}</p>
                    <Link
                      to="/contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent-foreground"
                    >
                      Discuss this service <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Right content */}
                <div className="lg:col-span-8">
                  {/* Capabilities */}
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Capabilities</div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {s.capabilities.map((c) => {
                      const CIcon = c.icon;
                      return (
                        <div
                          key={c.title}
                          className="group rounded-xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15">
                            <CIcon size={18} className="text-primary" />
                          </div>
                          <h3 className="mt-4 text-base font-semibold text-foreground">{c.title}</h3>
                          <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Deliverables + Stack + Outcome */}
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-border bg-secondary p-6">
                      <div className="text-xs font-semibold uppercase tracking-widest text-accent-foreground/70">What you receive</div>
                      <ul className="mt-4 space-y-2.5">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-foreground">
                            <Check size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-6">
                      <div className="rounded-xl border border-border bg-card p-6">
                        <div className="text-xs font-semibold uppercase tracking-widest text-accent-foreground/70">Tools & Standards</div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {s.stack.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground/80"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex-1 rounded-xl border border-accent/40 bg-primary p-6 text-primary-foreground shadow-lg">
                        <div className="text-xs font-semibold uppercase tracking-widest text-accent">Outcome</div>
                        <p className="mt-3 text-sm leading-relaxed text-primary-foreground/90">{s.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Delivery approach */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-accent">Delivery Approach</div>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">How TANIT works.</h2>
              <p className="mt-4 text-primary-foreground/80">
                A repeatable, accountable delivery model used on every engagement — from a single
                website to a multi-site enterprise rollout.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
              {[
                { n: "01", t: "Discover", d: "Stakeholder interviews, process mapping and a written scope of work." },
                { n: "02", t: "Design", d: "Architecture, prototypes and a costed plan you approve before we build." },
                { n: "03", t: "Deliver", d: "Iterative implementation with weekly demos, version control and QA." },
                { n: "04", t: "Support", d: "Training, documentation, warranty and an optional ongoing SLA." },
              ].map((p) => (
                <div
                  key={p.n}
                  className="relative rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6"
                >
                  <div className="text-3xl font-bold text-accent">{p.n}</div>
                  <div className="mt-3 text-lg font-semibold">{p.t}</div>
                  <p className="mt-2 text-sm text-primary-foreground/75">{p.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-6 border-t border-primary-foreground/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.t}>
                <div className="text-sm font-bold uppercase tracking-widest text-accent">{p.t}</div>
                <p className="mt-2 text-sm text-primary-foreground/80">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Not sure which service fits your problem?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us what you're trying to achieve. We'll recommend the right combination — or honestly tell you if you don't need us yet.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition hover:opacity-90"
          >
            Book a free consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}