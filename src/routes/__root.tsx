import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-primary px-4 text-primary-foreground">
      {/* Slim glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div style={{ position:"absolute", top:"30%", left:"50%", transform:"translateX(-50%)", width:"500px", height:"200px", background:"radial-gradient(ellipse,rgba(59,130,246,0.08) 0%,transparent 70%)", filter:"blur(50px)" }} />
      </div>
      <div className="relative text-center">
        {/* Gold label */}
        <div className="mb-6 inline-flex items-center gap-3">
          <div style={{ height:"1px", width:"28px", background:"linear-gradient(90deg,transparent,rgba(200,168,75,0.7))" }} />
          <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:"0.28em", color:"rgba(200,168,75,0.7)", textTransform:"uppercase" as const }}>Page Not Found</span>
          <div style={{ height:"1px", width:"28px", background:"linear-gradient(90deg,rgba(200,168,75,0.7),transparent)" }} />
        </div>
        <h1 style={{ fontSize:"clamp(5rem,15vw,9rem)", fontWeight:900, lineHeight:1, letterSpacing:"-0.04em", background:"linear-gradient(135deg,#ffffff 30%,#c8a84b)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
          404
        </h1>
        <h2 className="mt-4 text-xl font-bold text-primary-foreground/80">This page doesn't exist.</h2>
        <p className="mt-2 text-sm text-primary-foreground/45 max-w-xs mx-auto">
          The page you're looking for may have been moved or the URL is incorrect.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all hover:-translate-y-0.5"
            style={{ background:"linear-gradient(135deg,#c8a84b,#f0d080)", color:"#1a1a0e" }}>
            Back to Home
          </Link>
          <Link to="/contact"
            className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all hover:bg-white/8"
            style={{ borderColor:"rgba(255,255,255,0.15)", color:"rgba(255,255,255,0.7)" }}>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TANIT — Tanzania Innovative Technology | ICT, Software & Cybersecurity" },
      { name: "description", content: "TANIT delivers secure, scalable ICT, software development, cybersecurity and POS solutions across Tanzania and East Africa. Our Technology, Your Success." },
      { name: "author", content: "TANIT — Tanzania Innovative Technology Company Limited" },
      { name: "theme-color", content: "#0d1b2e" },
      { property: "og:site_name", content: "TANIT" },
      { property: "og:title", content: "TANIT — Tanzania Innovative Technology" },
      { property: "og:description", content: "Secure, scalable ICT solutions — software, cybersecurity, infrastructure and digital transformation across Tanzania and East Africa." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://tanit.co.tz" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "TANIT — Tanzania Innovative Technology" },
      { name: "twitter:description", content: "Secure, scalable ICT solutions across Tanzania and East Africa." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
