import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { ArrowRight, X } from "lucide-react";

export const Route = createFileRoute("/conteudos")({
  head: () => ({
    meta: [
      { title: "Conteúdos Inteligentes — Central de Conhecimento Empresarial" },
      { name: "description", content: "Hub educativo exclusivo sobre IRPF, MEI, planejamento tributário, gestão financeira, organização empresarial e contabilidade digital." },
      { property: "og:title", content: "Conteúdos Inteligentes" },
      { property: "og:description", content: "Conhecimento empresarial estratégico para decisões melhores." },
    ],
  }),
  component: Page,
});

type Topic = { tag: string; title: string; desc: string; body: string[] };

const topics: Topic[] = [
  {
    tag: "IRPF",
    title: "Como organizar documentos para a declaração",
    desc: "Um guia direto para reunir comprovantes, informes e bens com método.",
    body: [
      "A declaração do IRPF começa muito antes do prazo final. O segredo está em organizar os documentos durante o ano todo, e não às vésperas da entrega.",
      "Reúna informes de rendimentos de bancos, corretoras e fontes pagadoras. Junte comprovantes de despesas dedutíveis como saúde, educação e dependentes. Atualize a relação de bens e direitos com valores conforme escritura ou nota fiscal.",
      "Quem investe precisa também consolidar notas de corretagem, DARFs pagos e eventuais ganhos com criptoativos. Um ano organizado evita malha fina e garante a maior restituição possível dentro da lei.",
    ],
  },
  {
    tag: "MEI",
    title: "Quando o MEI deixa de ser vantajoso",
    desc: "Sinais financeiros e operacionais que indicam a hora de migrar de regime.",
    body: [
      "O MEI é um excelente ponto de partida, mas tem limites claros: faturamento anual, número de funcionários e atividades permitidas.",
      "Quando o faturamento se aproxima do teto, quando surgem novos sócios ou quando a empresa precisa contratar mais de uma pessoa, é sinal de que o regime ficou pequeno.",
      "Migrar para Simples Nacional, Lucro Presumido ou Lucro Real pode parecer um salto grande, mas com planejamento tributário a transição é segura e abre espaço para crescer com governança.",
    ],
  },
  {
    tag: "Planejamento Tributário",
    title: "Lucro Real, Presumido ou Simples?",
    desc: "Critérios estratégicos para escolher o regime que mais favorece o caixa.",
    body: [
      "A escolha do regime tributário é uma das decisões financeiras mais relevantes da empresa. Cada modelo tem regras, alíquotas e obrigações próprias.",
      "O Simples Nacional unifica tributos e simplifica a rotina, ideal para faturamentos menores e atividades de menor complexidade. O Presumido oferece previsibilidade e costuma ser vantajoso para margens altas. O Lucro Real é obrigatório em alguns casos e estratégico para operações com margens apertadas ou muitos créditos a recuperar.",
      "A análise correta considera margem, despesas dedutíveis, folha de pagamento e perspectiva de crescimento. Um estudo bem feito pode reduzir significativamente a carga tributária dentro da legalidade.",
    ],
  },
  {
    tag: "Gestão Financeira",
    title: "Indicadores que todo gestor deveria acompanhar",
    desc: "Margem, ciclo de caixa e ponto de equilíbrio explicados sem jargões.",
    body: [
      "Gerenciar uma empresa sem indicadores é dirigir no escuro. Três métricas formam o tripé essencial.",
      "Margem de contribuição mostra quanto cada venda realmente sobra para pagar custos fixos e gerar lucro. Ciclo de caixa revela quantos dias o dinheiro fica preso entre pagar fornecedores e receber dos clientes. Ponto de equilíbrio define o faturamento mínimo necessário para a operação não dar prejuízo.",
      "Acompanhar esses números em ritmo mensal transforma a gestão. Decisões sobre preço, prazo e investimento passam a ter base, não intuição.",
    ],
  },
  {
    tag: "Organização Empresarial",
    title: "Rotinas que evitam multas e retrabalho",
    desc: "Boas práticas para construir uma operação contábil enxuta e segura.",
    body: [
      "Multas fiscais raramente surgem por má fé. Quase sempre são fruto de prazo perdido, documento extraviado ou processo informal.",
      "Centralize notas fiscais, contratos e comprovantes em um repositório único e acessível. Defina responsáveis claros para cada obrigação acessória. Crie um calendário fiscal compartilhado com a contabilidade.",
      "A combinação de processo, ferramenta e pessoa certa elimina o caos e libera tempo para o que importa: crescer.",
    ],
  },
  {
    tag: "Contabilidade Digital",
    title: "Tecnologia a favor da decisão",
    desc: "Como automação e dados em tempo real mudam a gestão do negócio.",
    body: [
      "A contabilidade digital vai muito além de enviar documentos por nuvem. Ela conecta sistemas, automatiza lançamentos e entrega informação em tempo real.",
      "Com integrações entre ERP, banco e contabilidade, o gestor enxerga o resultado do mês a qualquer momento. Conciliações deixam de ser tarefa manual. Relatórios estratégicos saem em poucos cliques.",
      "O resultado é menos burocracia, menos erro e mais tempo para análise estratégica. A tecnologia liberta o empresário para tomar decisões melhores.",
    ],
  },
];

function Page() {
  const [active, setActive] = useState<Topic | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <PageShell>
      <PageHero
        eyebrow="Central de conhecimento"
        title={<>Conteúdos inteligentes para empresários inteligentes.</>}
        subtitle="Leituras objetivas, didáticas e valiosas sobre finanças, tributos e gestão. Direto ao ponto."
      />

      <section className="container-tight pb-24">
        <ul className="divide-y divide-white/8 border-y border-white/8">
          {topics.map((t, i) => (
            <li key={t.title} className="reveal">
              <button
                onClick={() => setActive(t)}
                className="group w-full text-left py-9 md:py-11 grid md:grid-cols-12 gap-4 md:gap-8 items-baseline"
              >
                <span className="md:col-span-1 text-xs tracking-[0.3em] text-[color:var(--orange-premium)]">{String(i + 1).padStart(2, "0")}</span>
                <span className="md:col-span-2 text-xs uppercase tracking-[0.2em] text-[color:var(--neon)]">{t.tag}</span>
                <h3 className="md:col-span-6 text-xl md:text-2xl font-medium leading-snug group-hover:text-[color:var(--neon)] transition-colors">{t.title}</h3>
                <span className="md:col-span-3 inline-flex items-center gap-2 text-xs text-foreground/60 group-hover:text-[color:var(--orange-premium)] transition-colors md:justify-end">
                  Ler agora <ArrowRight size={14} />
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-24 reveal max-w-2xl mx-auto text-center">
          <span className="eyebrow justify-center">Newsletter</span>
          <h3 className="mt-5 text-3xl md:text-4xl font-medium text-gradient">Receba conteúdos exclusivos.</h3>
          <p className="mt-4 text-muted-foreground">Insights, novidades fiscais e boas práticas direto para o seu e-mail.</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="seu@email.com"
              className="flex-1 px-5 py-3 rounded-full bg-white/5 border border-white/10 focus:border-[color:var(--neon)] outline-none text-sm"
            />
            <button type="submit" className="btn-primary">Inscrever</button>
          </form>
        </div>

        <div className="mt-16 text-center reveal">
          <Link to="/contato" className="btn-ghost">Falar com Especialistas <ArrowRight size={16} /></Link>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setActive(null)}
        >
          <article
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto glass rounded-3xl p-8 md:p-12 animate-in zoom-in-95 duration-300"
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Fechar"
              className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition"
            >
              <X size={18} />
            </button>
            <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--orange-premium)]">{active.tag}</span>
            <h2 className="mt-4 text-2xl md:text-3xl font-medium text-gradient leading-tight">{active.title}</h2>
            <div className="mt-3 h-px w-16 bg-[color:var(--orange-premium)]" />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/85">
              {active.body.map((p, i) => (<p key={i}>{p}</p>))}
            </div>
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-muted-foreground">Conteúdo Expert Contabilidade</span>
              <Link to="/contato" onClick={() => setActive(null)} className="btn-primary text-sm py-2.5 px-5">
                Falar com Especialistas <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        </div>
      )}
    </PageShell>
  );
}
