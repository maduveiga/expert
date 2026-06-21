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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
      { title: "Lovable App" },
      { name: "description", content: "Expert Contabilidade: modern, sophisticated website for accounting services." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Expert Contabilidade: modern, sophisticated website for accounting services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "Expert Contabilidade: modern, sophisticated website for accounting services." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/36c2363f-810f-4020-b55a-085e7287b0c8/id-preview-a93d9efb--4f306d3a-c029-4710-97f7-60891aa3774b.lovable.app-1778342315750.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/36c2363f-810f-4020-b55a-085e7287b0c8/id-preview-a93d9efb--4f306d3a-c029-4710-97f7-60891aa3774b.lovable.app-1778342315750.png" },
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

export function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      
      <a
        href="https://wa.me/5547992373196"
        target="_blank"
        rel="noreferrer"
        aria-label="Falar pelo WhatsApp"
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] w-14 h-14 rounded-full glass border border-[color:var(--neon)]/20 text-[color:var(--neon)] flex items-center justify-center shadow-[0_8px_32px_rgba(0,229,241,0.2)] hover:bg-[color:var(--neon)] hover:border-[color:var(--neon)] hover:text-black hover:scale-110 transition-all duration-300"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487 2.046.883 2.868 1.002 3.949 1.033 1.081.031 2.37-.446 2.812-1.112.443-.666.443-1.238.31-1.357-.133-.12-.52-.194-.817-.343zM12.002 24c-1.921 0-3.804-.497-5.46-1.442L0 24l1.503-6.352a11.95 11.95 0 0 1-1.453-5.648c0-6.613 5.368-12 11.952-12C15.197 0 18.196 1.252 20.448 3.528A11.921 11.921 0 0 1 24 12c0 6.613-5.367 12-11.996 12h-.002zM12.002 2C6.52 2 2.05 6.47 2.05 12c0 1.764.463 3.488 1.344 5l-.845 3.593 3.673-.833a9.962 9.962 0 0 0 4.78 1.242c5.483 0 9.948-4.47 9.948-9.946 0-2.658-1.03-5.158-2.906-7.038A9.914 9.914 0 0 0 12.002 2z"/>
        </svg>
      </a>
    </QueryClientProvider>
  );
}
