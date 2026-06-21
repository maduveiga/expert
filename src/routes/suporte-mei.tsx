import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { ArrowRight, CheckCircle2, Zap, BarChart3, MessageCircle, Clock, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/suporte-mei")({
  head: () => ({
    meta: [
      { title: "Suporte MEI — Gestão Simplificada | Expert Contabilidade" },
      { name: "description", content: "Pacote exclusivo para Microempreendedores Individuais. Nota fiscal, guias mensais e consultoria especializada por apenas R$ 100/mês." },
    ],
  }),
  component: Page,
});

const meiServices = [
  "Emissão de nota fiscal pelo WhatsApp (até 5 NF serviço)",
  "Recebimento das guias mensais (DAS)",
  "Lembrete de vencimento",
  "Entrega da declaração anual gratuita",
  "Consultoria a qualquer momento",
];

const extraServices = [
  { title: "Diagnóstico de Ponto Comercial", icon: ShieldCheck },
  { title: "Diagnóstico Empresarial", icon: BarChart3 },
  { title: "Diagnóstico de Liderança", icon: Zap },
  { title: "Pesquisa de Mercado", icon: BarChart3 },
  { title: "Análise de Perfil - Instagram", icon: Zap },
  { title: "Análise de DRE", icon: BarChart3 },
  { title: "Consultorias diversas", icon: MessageCircle },
];

export function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Suporte MEI"
        title={<>Torne a gestão do seu negócio mais simples!</>}
        subtitle="Com nosso pacote de serviços exclusivo para Microempreendedor Individual, você terá tudo o que precisa para gerenciar sua empresa de forma eficiente."
      />

      <section className="container-tight py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-medium text-gradient mb-8">
              Tudo o que você precisa por um valor justo.
            </h2>
            <ul className="space-y-4">
              {meiServices.map((s) => (
                <li key={s} className="flex gap-3 text-foreground/85">
                  <CheckCircle2 className="text-[color:var(--neon)] shrink-0 mt-0.5" size={20} />
                  <span>{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-8 rounded-3xl glass border-[color:var(--neon)]/30 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 bg-[color:var(--neon)]/10 rounded-bl-3xl text-[10px] uppercase tracking-widest text-[color:var(--neon)] font-bold">
                Sem Fidelidade
              </div>
              <p className="text-sm text-foreground/60 uppercase tracking-widest mb-2">Investimento</p>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-foreground/60">A partir de</span>
                <span className="text-5xl font-display font-medium text-gradient">R$ 100</span>
                <span className="text-foreground/60">/mês</span>
              </div>
              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                Tenha a tranquilidade de contar com especialistas no assunto. Cuide do seu negócio, nós cuidamos do resto!
              </p>
              <a 
                href="https://wa.me/5547992373196?text=Olá! Gostaria de saber mais sobre o Suporte MEI." 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary w-full mt-8"
              >
                Contratar Suporte MEI <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <div className="relative reveal">
            <div className="absolute -inset-10 bg-[color:var(--neon)]/5 blur-3xl rounded-full" />
            <div className="relative glass p-8 md:p-10 rounded-3xl border-white/5">
              <span className="eyebrow">Exclusivo: Dados & I.A</span>
              <h3 className="mt-4 text-2xl font-medium mb-6">Extras com utilização de dados e I.A</h3>
              <div className="grid gap-4">
                {extraServices.map((s) => (
                  <div key={s.title} className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[color:var(--neon)]/30 transition-all group">
                    <s.icon className="text-[color:var(--neon)] group-hover:scale-110 transition-transform" size={20} />
                    <span className="text-sm font-medium">{s.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-tight py-20">
        <div className="glass rounded-3xl p-12 text-center reveal">
          <h2 className="text-3xl md:text-4xl font-medium text-gradient mb-6">Pronto para o próximo nível?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
            Nossa equipe está pronta para transformar a burocracia do MEI em estratégia de crescimento para sua empresa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/5547992373196" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary"
            >
              Falar com Especialista <MessageCircle size={18} />
            </a>
            <Link to="/contato" className="btn-ghost">Ver outras soluções</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
