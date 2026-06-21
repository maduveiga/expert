import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from "@tanstack/react-router";
import "./styles.css";

// Lazy-load route components from the real routes directory
const IndexPage = React.lazy(() => import("./routes/index").then(m => ({ default: m.Home })));
const ContatoPage = React.lazy(() => import("./routes/contato").then(m => ({ default: m.Page })));
const ConteudosPage = React.lazy(() => import("./routes/conteudos").then(m => ({ default: m.Page })));
const CrescimentoPage = React.lazy(() => import("./routes/crescimento").then(m => ({ default: m.Page })));
const IrpfPage = React.lazy(() => import("./routes/irpf").then(m => ({ default: m.Page })));
const MaisQueContabilidadePage = React.lazy(() => import("./routes/mais-que-contabilidade").then(m => ({ default: m.Page })));
const SolucoesPage = React.lazy(() => import("./routes/solucoes").then(m => ({ default: m.Page })));
const SuporteMeiPage = React.lazy(() => import("./routes/suporte-mei").then(m => ({ default: m.Page })));
const LoginPage = React.lazy(() => import("./routes/login").then(m => ({ default: m.Page })));
const TalentosPage = React.lazy(() => import("./routes/talentos").then(m => ({ default: m.Page })));
const LgpdPage = React.lazy(() => import("./routes/lgpd").then(m => ({ default: m.Page })));
const PoliticaPrivacidadePage = React.lazy(() => import("./routes/politica-de-privacidade").then(m => ({ default: m.Page })));
const TermosDeUsoPage = React.lazy(() => import("./routes/termos-de-uso").then(m => ({ default: m.Page })));

const queryClient = new QueryClient();

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <React.Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-[color:var(--neon)] border-t-transparent animate-spin" />
              <div className="text-sm text-foreground/50 tracking-widest uppercase">Carregando...</div>
            </div>
          </div>
        }
      >
        <Outlet />
        
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/5547992373196"
          target="_blank"
          rel="noreferrer"
          aria-label="Falar pelo WhatsApp"
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] w-14 h-14 rounded-full glass border border-[color:var(--neon)]/20 text-[color:var(--neon)] flex items-center justify-center shadow-[0_8px_32px_rgba(0,229,241,0.2)] hover:bg-[color:var(--neon)] hover:border-[color:var(--neon)] hover:text-black hover:scale-110 transition-all duration-300"
        >
          <svg viewBox="0 0 448 512" width="28" height="28" fill="currentColor">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </a>
      </React.Suspense>
    </QueryClientProvider>
  ),
});

// Routes
const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: "/", component: IndexPage });
const contatoRoute = createRoute({ getParentRoute: () => rootRoute, path: "/contato", component: ContatoPage });
const conteudosRoute = createRoute({ getParentRoute: () => rootRoute, path: "/conteudos", component: ConteudosPage });
const crescimentoRoute = createRoute({ getParentRoute: () => rootRoute, path: "/crescimento", component: CrescimentoPage });
const irpfRoute = createRoute({ getParentRoute: () => rootRoute, path: "/irpf", component: IrpfPage });
const maisQueContabilidadeRoute = createRoute({ getParentRoute: () => rootRoute, path: "/mais-que-contabilidade", component: MaisQueContabilidadePage });
const solucoesRoute = createRoute({ getParentRoute: () => rootRoute, path: "/solucoes", component: SolucoesPage });
const suporteMeiRoute = createRoute({ getParentRoute: () => rootRoute, path: "/suporte-mei", component: SuporteMeiPage });
const loginRoute = createRoute({ getParentRoute: () => rootRoute, path: "/login", component: LoginPage });
const talentosRoute = createRoute({ getParentRoute: () => rootRoute, path: "/talentos", component: TalentosPage });
const lgpdRoute = createRoute({ getParentRoute: () => rootRoute, path: "/lgpd", component: LgpdPage });
const politicaPrivacidadeRoute = createRoute({ getParentRoute: () => rootRoute, path: "/politica-de-privacidade", component: PoliticaPrivacidadePage });
const termosDeUsoRoute = createRoute({ getParentRoute: () => rootRoute, path: "/termos-de-uso", component: TermosDeUsoPage });

// Route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  contatoRoute,
  conteudosRoute,
  crescimentoRoute,
  irpfRoute,
  maisQueContabilidadeRoute,
  solucoesRoute,
  suporteMeiRoute,
  loginRoute,
  talentosRoute,
  lgpdRoute,
  politicaPrivacidadeRoute,
  termosDeUsoRoute,
]);

const router = createRouter({ routeTree, defaultPreloadStaleTime: 0 });

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
