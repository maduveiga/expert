import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { MessageCircle, Heart, Users, Sparkles, Send, Target, Mail } from "lucide-react";

export const Route = createFileRoute("/talentos")({
  head: () => ({
    meta: [
      { title: "Trabalhe com a Gente — Quer fazer parte desse time? | Expert Contabilidade" },
    ],
  }),
  component: Page,
});

const perks = [
  { icon: Heart, title: "Ambiente Humano", desc: "Pessoas sempre em primeiro lugar em nossa cultura." },
  { icon: Sparkles, title: "Inovação Constante", desc: "Liberdade para sugerir novas formas de fazer contabilidade." },
  { icon: Users, title: "Crescimento Mútuo", desc: "Acreditamos na evolução conjunta da equipe e empresa." },
  { icon: Target, title: "Propósito Real", desc: "Não entregamos apenas números, transformamos negócios." },
];

export function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Talentos Expert"
        title={<>Quer fazer parte desse time?</>}
        subtitle="Estamos sempre em busca de pessoas apaixonadas por transformar a vida dos empresários através de uma contabilidade estratégica e humana."
      />

      <section className="container-tight py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="eyebrow">Por que a Expert?</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-medium text-gradient">
              Mais do que um emprego, um propósito.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Na Expert Contabilidade, você encontrará um ambiente que valoriza a técnica, mas prioriza a humanidade. Nossa cultura é baseada em pilares sólidos que suportam o desenvolvimento de cada colaborador.
            </p>
            
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {perks.map((p) => (
                <div key={p.title} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[color:var(--neon)]/20 transition-all">
                  <p.icon className="text-[color:var(--neon)] mb-4" size={24} />
                  <h3 className="font-medium mb-2">{p.title}</h3>
                  <p className="text-xs text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal glass rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[color:var(--neon)]/10 blur-3xl" />
            <h2 className="text-2xl font-medium mb-6">Envie seu currículo</h2>
            <p className="text-sm text-foreground/70 mb-8">
              Mesmo que não haja vagas abertas no momento, queremos conhecer seu potencial para futuras oportunidades.
            </p>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[color:var(--neon)]/5 border border-[color:var(--neon)]/20 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[color:var(--neon)]/20 flex items-center justify-center shrink-0">
                  <Mail className="text-[color:var(--neon)]" size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">E-mail para Seleção</h4>
                  <p className="text-sm text-foreground/85">contador.expert01@gmail.com</p>
                  <p className="text-[10px] uppercase tracking-wider text-foreground/40 mt-1">Assunto: [TALENTO] Seu Nome - Área de interesse</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[color:var(--orange-premium)]/5 border border-[color:var(--orange-premium)]/20 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[color:var(--orange-premium)]/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="text-[color:var(--orange-premium)]" size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">WhatsApp de Talentos</h4>
                  <p className="text-sm text-foreground/85">47 99237 3196</p>
                  <p className="text-[10px] uppercase tracking-wider text-foreground/40 mt-1">Converse diretamente com nosso RH operacional</p>
                </div>
              </div>
            </div>

            <a 
              href="https://wa.me/5547992373196?text=Olá! Gostaria de enviar meu currículo para fazer parte da equipe Expert." 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary w-full mt-10"
            >
              Candidatar via WhatsApp <Send size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      <section className="container-tight py-20 border-t border-white/5">
        <div className="text-center max-w-3xl mx-auto reveal">
          <span className="eyebrow justify-center">Nossos Valores</span>
          <h2 className="mt-4 text-3xl font-medium text-gradient">É proibido viver sem sonhos, sem propósitos ou gratidão.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed italic">
            "Este é o lema da nossa empresa. Acreditamos que o trabalho deve ser um meio para alcançar grandes objetivos pessoais e profissionais."
          </p>
        </div>
      </section>
    </PageShell>
  );
}
