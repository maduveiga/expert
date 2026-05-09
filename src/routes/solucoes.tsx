import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import {
  ArrowRight,
  Briefcase,
  Calculator,
  Wallet,
  Users,
  FileSearch,
  Building2,
  Cloud,
  Scale,
  LineChart,
} from "lucide-react";

export const Route = createFileRoute("/solucoes")({
  head: () => ({
    meta: [
      { title: "Soluções Estratégicas — Expert Contabilidade" },
      { name: "description", content: "Inteligência empresarial e suporte estratégico: contabilidade, BPO financeiro, planejamento tributário e mais para o seu negócio crescer." },
      { property: "og:title", content: "Soluções Estratégicas — Expert Contabilidade" },
      { property: "og:description", content: "Suporte estratégico para empresas que pensam além do convencional." },
    ],
  }),
  component: Page,
});

const items = [
  { icon: Briefcase, title: "Contabilidade Empresarial", desc: "Arquitetura contábil sob medida, traduzindo cada lançamento em informação útil para o gestor." },
  { icon: Wallet, title: "BPO Financeiro", desc: "Operação financeira conduzida ponta a ponta, com indicadores diários e disciplina de caixa." },
  { icon: Calculator, title: "Planejamento Tributário", desc: "Estudo aprofundado de regimes e cenários para encontrar o caminho fiscal mais eficiente." },
  { icon: Users, title: "Departamento Pessoal", desc: "Folha, eSocial e jornada do colaborador conduzidos com rigor técnico e zero atrito." },
  { icon: FileSearch, title: "Regularização Empresarial", desc: "Diagnóstico minucioso de pendências fiscais e plano de ação para colocar a casa em ordem." },
  { icon: Cloud, title: "Contabilidade Digital", desc: "Plataformas integradas, automação de obrigações e visibilidade contínua do seu negócio." },
  { icon: Scale, title: "Suporte Societário", desc: "Estruturação, alterações e blindagem patrimonial pensadas para a longevidade da sua empresa." },
  { icon: Building2, title: "Abertura de Empresa", desc: "Do estudo de viabilidade ao primeiro faturamento, com curadoria consultiva em cada passo." },
  { icon: LineChart, title: "Consultoria Estratégica", desc: "Leitura crítica de indicadores e direcionamento financeiro para escalar com previsibilidade." },
];

function Page() {
  return (
    <PageShell flush>
      {/* Custom hero with animated grid (scoped via inline style) */}
      <style>{`
        @keyframes solucoes-grid-move {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 80px 80px, 80px 80px; }
        }
        .solucoes-hero-grid::before {
          content: "";
          position: absolute;
          inset: -2px;
          background-image:
            linear-gradient(to right, color-mix(in oklab, var(--neon) 18%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in oklab, var(--neon) 18%, transparent) 1px, transparent 1px);
          background-size: 80px 80px, 80px 80px;
          animation: solucoes-grid-move 18s linear infinite;
          mask-image: radial-gradient(ellipse at 50% 40%, #000 30%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 40%, #000 30%, transparent 80%);
          pointer-events: none;
        }
        .solucoes-hero-grid::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, color-mix(in oklab, var(--neon) 8%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in oklab, var(--neon) 8%, transparent) 1px, transparent 1px);
          background-size: 16px 16px, 16px 16px;
          animation: solucoes-grid-move 9s linear infinite reverse;
          mask-image: radial-gradient(ellipse at 50% 40%, #000 20%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 40%, #000 20%, transparent 70%);
          pointer-events: none;
        }
      `}</style>

      <section className="solucoes-hero-grid relative overflow-hidden pt-64 pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--petrol)]/30 via-transparent to-transparent" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[color:var(--neon)]/10 blur-3xl" />
        </div>
        <div className="container-tight relative reveal">
          <span className="eyebrow">Soluções Estratégicas</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-medium text-gradient max-w-4xl leading-[1.15] pb-1">
            Inteligência empresarial em cada decisão contábil.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Reunimos expertise técnica, tecnologia e visão estratégica para entregar muito além de obrigações fiscais.
          </p>
          <div className="mt-10 h-px w-24 bg-[color:var(--orange-premium)]" />
        </div>
      </section>

      {/* Solutions grid — different style: blueprint cards with corner brackets */}
      <section className="container-tight pb-28">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative p-7 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-[color:var(--neon)]/60 transition-all duration-500"
            >
              {/* corner brackets */}
              <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[color:var(--neon)]/60" />
              <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[color:var(--neon)]/60" />
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[color:var(--neon)]/60" />
              <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[color:var(--neon)]/60 group-hover:border-[color:var(--orange-premium)] transition-colors" />

              <div className="flex items-start justify-between">
                <s.icon size={28} className="text-[color:var(--neon)] group-hover:text-[color:var(--orange-premium)] transition-colors" strokeWidth={1.4} />
                <span className="text-[10px] tracking-[0.35em] text-[color:var(--orange-premium)]">
                  S.{String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-8 text-xl md:text-2xl font-medium leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-[color:var(--neon)]/40 via-white/10 to-transparent" />
              <div className="mt-3 text-[10px] uppercase tracking-[0.3em] text-foreground/40">
                Solução Expert
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center reveal">
          <Link to="/contato" className="btn-primary">
            Falar com Especialistas <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
