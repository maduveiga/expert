import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/irpf")({
  head: () => ({
    meta: [
      { title: "IRPF — Declaração de Imposto de Renda | Expert Contabilidade" },
      { name: "description", content: "Declaração de IRPF, regularização, malha fina e restituição com atendimento especializado em Araquari SC." },
      { property: "og:title", content: "Imposto de Renda Pessoa Física" },
      { property: "og:description", content: "Segurança e clareza na sua declaração de IRPF." },
    ],
  }),
  component: Page,
});

const services = [
  { label: "Declaração IRPF", value: 95, desc: "Conferência detalhada e envio dentro do prazo, com a maior restituição possível." },
  { label: "Regularização", value: 80, desc: "Pendências, omissos e correções de exercícios anteriores tratados com cuidado." },
  { label: "Malha fina", value: 88, desc: "Análise da notificação, ajustes e resposta à Receita Federal." },
  { label: "Restituição", value: 92, desc: "Acompanhamento de lotes e orientação sobre liberação de valores." },
  { label: "Atendimento próximo", value: 100, desc: "Suporte humano e direto, sem repassar você para múltiplos canais." },
  { label: "Planejamento anual", value: 85, desc: "Orientação durante o ano para reduzir imposto e organizar bens." },
];

const faqs = [
  { q: "Quem precisa declarar o IRPF?", a: "Quem teve rendimentos tributáveis acima do limite anual, posse de bens acima de valores definidos pela Receita ou movimentações específicas em bolsa, entre outros critérios." },
  { q: "Posso retificar uma declaração já entregue?", a: "Sim. É possível retificar pelo mesmo modelo enviado, mantendo o número do recibo da declaração original." },
  { q: "O que é a malha fina?", a: "É a revisão automatizada feita pela Receita quando há inconsistências. Atuamos com regularização rápida e segura." },
  { q: "Como funciona a restituição?", a: "A devolução ocorre conforme o cronograma da Receita, priorizando idosos, professores e contribuintes que entregam com antecedência." },
  { q: "Como a Expert acompanha minha declaração?", a: "Atendimento especializado, revisão completa de documentos e suporte ao longo do ano todo." },
];

function Page() {
  const [open, setOpen] = useState<number | null>(0);
  const max = Math.max(...services.map((s) => s.value));

  return (
    <PageShell>
      <PageHero
        eyebrow="IRPF"
        title={<>Declaração de Imposto de Renda com clareza e segurança.</>}
        subtitle="Atendimento especializado para declaração, regularização, malha fina e restituição. Sem complicação, com acompanhamento do início ao fim."
      />

      {/* Services as elegant chart */}
      <section className="container-tight py-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 reveal lg:sticky lg:top-32">
            <span className="eyebrow">Como atendemos</span>
            <h2 className="mt-5 text-3xl md:text-4xl font-medium text-gradient leading-tight">
              Cada frente do seu IRPF, desenhada com precisão.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Visualize as áreas em que atuamos. Cada barra representa o nosso nível de cuidado em cada etapa da sua declaração.
            </p>
          </div>

          <div className="lg:col-span-8 reveal">
            <ul className="divide-y divide-white/8 border-y border-white/8">
              {services.map((s, i) => (
                <li key={s.label} className="group py-7">
                  <div className="flex items-baseline justify-between gap-6">
                    <div className="flex items-baseline gap-5">
                      <span className="text-xs tracking-[0.3em] text-[color:var(--orange-premium)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg md:text-xl font-medium group-hover:text-[color:var(--neon)] transition-colors">
                        {s.label}
                      </h3>
                    </div>
                    <span className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                      {s.value}%
                    </span>
                  </div>

                  {/* Chart bar */}
                  <div className="mt-4 h-[6px] rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[color:var(--neon)] via-[color:var(--neon)] to-[color:var(--orange-premium)] transition-all duration-700 group-hover:from-[color:var(--orange-premium)] group-hover:to-[color:var(--neon)]"
                      style={{ width: `${(s.value / max) * 100}%` }}
                    />
                  </div>

                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {s.desc}
                  </p>
                </li>
              ))}
            </ul>

            {/* Decorative chart frame */}
            <div className="mt-10 hidden md:flex items-end gap-2 h-24 opacity-60">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-[color:var(--neon)]/40 to-[color:var(--orange-premium)]/40"
                  style={{ height: `${s.value}%` }}
                />
              ))}
            </div>
            <div className="mt-2 hidden md:flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-foreground/40">
              <span>Início</span>
              <span>Entrega</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-tight py-20">
        <div className="max-w-3xl mx-auto">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium text-gradient">Tudo o que você precisa saber.</h2>
          <div className="mt-10 divide-y divide-white/8 border-y border-white/8">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                  >
                    <span className="font-medium text-base md:text-lg group-hover:text-[color:var(--neon)] transition-colors">{f.q}</span>
                    <ChevronDown className={`shrink-0 transition-transform ${isOpen ? "rotate-180 text-[color:var(--orange-premium)]" : "text-[color:var(--neon)]"}`} size={18} />
                  </button>
                  <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contato" className="btn-primary">Declarar com a Expert <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
