import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/crescimento")({
  head: () => ({
    meta: [
      { title: "Crescimento Empresarial — Expert Contabilidade" },
      { name: "description", content: "Estrutura financeira, controle e gestão consultiva para empresas crescerem com organização e segurança." },
      { property: "og:title", content: "Crescimento Empresarial" },
      { property: "og:description", content: "Estrutura, organização e estratégia para crescer com segurança." },
    ],
  }),
  component: Page,
});

const steps = [
  { n: "01", title: "Estrutura financeira", desc: "Bases sólidas para sustentar a próxima fase do seu negócio." },
  { n: "02", title: "Crescimento sustentável", desc: "Decisões guiadas por dados, sem improvisos." },
  { n: "03", title: "Controle empresarial", desc: "Indicadores e governança que devolvem clareza ao gestor." },
  { n: "04", title: "Redução de erros", desc: "Padronização e automação que diminuem retrabalho." },
  { n: "05", title: "Gestão eficiente", desc: "Acompanhamento próximo para transformar números em decisões." },
  { n: "06", title: "Apoio consultivo", desc: "Um time que pensa o seu negócio junto com você." },
];

function Page() {
  const total = steps.length;
  return (
    <PageShell>
      <PageHero
        eyebrow="Crescimento Empresarial"
        title={<>Crescer é uma decisão. Sustentar esse crescimento é estratégia.</>}
        subtitle="A Expert acompanha empresas em cada estágio, oferecendo organização, controle e visão consultiva para escalar com segurança."
      />

      <section className="container-tight pb-32">
        <div className="max-w-2xl mb-20 reveal">
          <span className="eyebrow">Trajetória de crescimento</span>
          <h2 className="mt-5 text-3xl md:text-4xl font-medium text-gradient">
            Seis degraus para escalar com método.
          </h2>
        </div>

        {/* Real ascending staircase */}
        <div className="relative">
          <div className="flex flex-col-reverse">
            {steps.map((s, i) => {
              const stepWidth = 100 - i * 8; // top step narrowest
              const offset = i * 4; // shift right as we go up
              return (
                <div
                  key={s.n}
                  className="reveal group relative self-start"
                  style={{
                    width: `${stepWidth}%`,
                    marginLeft: `${offset}%`,
                    marginTop: i === 0 ? 0 : "-1px",
                  }}
                >
                  <div className="relative flex items-stretch border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm transition-all duration-500 hover:border-[color:var(--orange-premium)] hover:shadow-[0_0_0_1px_var(--orange-premium),0_30px_80px_-20px_color-mix(in_oklab,var(--neon)_45%,transparent)] hover:z-10">
                    {/* Step number block (riser) */}
                    <div className="flex flex-col items-center justify-center px-6 md:px-10 py-7 md:py-9 border-r border-white/10 bg-[color:var(--petrol)]/30 min-w-[120px] md:min-w-[160px]">
                      <span className="text-3xl md:text-5xl font-display font-medium text-[color:var(--neon)] group-hover:text-[color:var(--orange-premium)] transition-colors">
                        {s.n}
                      </span>
                      <span className="mt-2 text-[10px] uppercase tracking-[0.3em] text-foreground/50">
                        Etapa
                      </span>
                    </div>
                    {/* Tread */}
                    <div className="flex-1 px-6 md:px-10 py-7 md:py-9 flex flex-col justify-center">
                      <h3 className="text-xl md:text-2xl font-medium leading-snug">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
                        {s.desc}
                      </p>
                    </div>
                    {/* Step indicator on the right */}
                    <div className="hidden md:flex items-center pr-6 text-xs tracking-[0.3em] text-foreground/40">
                      {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Floor line */}
          <div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>

        <div className="mt-24 text-center reveal">
          <Link to="/contato" className="btn-primary">
            Quero crescer com a Expert <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
