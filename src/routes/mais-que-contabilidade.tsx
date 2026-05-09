import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { ArrowRight, Compass, Eye, Sparkles } from "lucide-react";
import owners from "@/assets/owners-historia.jpg";

export const Route = createFileRoute("/mais-que-contabilidade")({
  head: () => ({
    meta: [
      { title: "Nossa História — Expert Contabilidade" },
      { name: "description", content: "Conheça a história, propósito e trajetória da Expert Contabilidade desde 2021. Atendimento humano, próximo e personalizado em Araquari SC." },
      { property: "og:title", content: "Nossa História — Expert Contabilidade" },
      { property: "og:description", content: "Uma contabilidade humana, próxima e estratégica desde 2021." },
    ],
  }),
  component: Page,
});

const timeline = [
  { year: "2021", title: "Fundação", desc: "Nasce a Expert Contabilidade com um propósito: aproximar contabilidade e empresário." },
  { year: "2022", title: "Crescimento", desc: "Expansão da carteira e estruturação de processos digitais para escala." },
  { year: "2023", title: "Tecnologia", desc: "Adoção de plataformas e automações que ampliam a visão estratégica do cliente." },
  { year: "2024", title: "Consultoria", desc: "Entrega ampliada com BPO financeiro e planejamento tributário consultivo." },
  { year: "Hoje", title: "Referência", desc: "Reconhecimento como parceira estratégica de empresas que crescem com método." },
];

const principles = [
  {
    icon: Compass,
    label: "Missão",
    title: "Transformar a contabilidade em estratégia.",
    desc: "Entregar inteligência contábil, financeira e tributária que sustente decisões melhores e impulsione o crescimento dos nossos clientes.",
  },
  {
    icon: Eye,
    label: "Visão",
    title: "Ser referência em contabilidade de excelência no Sul do Brasil.",
    desc: "Construir uma marca reconhecida pela proximidade humana, tecnologia aplicada e profundidade técnica em cada entrega.",
  },
  {
    icon: Sparkles,
    label: "Valores",
    title: "Confiança, clareza, evolução constante.",
    desc: "Ética como base, transparência em cada relação, escuta atenta, excelência operacional e compromisso real com o resultado de quem confia em nós.",
  },
];

function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Nossa História"
        title={<>Muito mais do que números. Uma relação de confiança.</>}
        subtitle="Acreditamos que a contabilidade pode ser próxima, estratégica e transformadora. Esse é o nosso jeito de fazer."
      />

      {/* Owners + story */}
      <section className="container-tight py-16">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5 relative reveal">
            <div className="absolute -inset-10 bg-[color:var(--neon)]/10 blur-3xl rounded-full" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img src={owners} alt="Sócios da Expert Contabilidade" className="w-full h-auto" />
            </div>
          </div>
          <div className="md:col-span-7 reveal">
            <span className="eyebrow">Quem conduz</span>
            <h2 className="mt-5 text-3xl md:text-5xl font-medium text-gradient leading-[1.15] pb-1">
              Uma contabilidade construída com propósito, técnica e proximidade.
            </h2>
            <p className="mt-7 text-muted-foreground leading-relaxed text-lg">
              À frente da Expert Contabilidade estão <span className="text-foreground font-medium">Camila</span> e <span className="text-foreground font-medium">Jeferson</span>, que conduzem a empresa com propósito claro: oferecer uma experiência diferente, que respeita o tempo, a estratégia e os sonhos de cada empresário.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
              Sob a liderança de Camila e Jeferson, combinamos tecnologia de ponta, atendimento humano e visão consultiva. Cada cliente é único e cada entrega carrega o cuidado de quem entende que por trás de cada CNPJ existe uma história em construção.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values — editorial, not cards */}
      <section className="container-tight py-24">
        <div className="max-w-3xl reveal">
          <span className="eyebrow">O que nos move</span>
          <h2 className="mt-5 text-3xl md:text-5xl font-medium text-gradient leading-tight">
            Princípios que guiam cada decisão.
          </h2>
        </div>
        <div className="mt-16 divide-y divide-white/8 border-y border-white/8">
          {principles.map((p) => (
            <div key={p.label} className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 reveal items-start">
              <div className="md:col-span-3 flex items-center gap-4">
                <p.icon size={26} className="text-[color:var(--neon)]" strokeWidth={1.5} />
                <div className="text-xs tracking-[0.35em] uppercase text-[color:var(--orange-premium)]">{p.label}</div>
              </div>
              <h3 className="md:col-span-5 text-2xl md:text-3xl font-medium leading-tight">{p.title}</h3>
              <p className="md:col-span-4 text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container-tight py-20">
        <div className="max-w-3xl reveal">
          <span className="eyebrow">Trajetória</span>
          <h2 className="mt-5 text-3xl md:text-4xl font-medium text-gradient">Uma caminhada feita com propósito.</h2>
        </div>
        <ol className="mt-14 relative border-l border-white/10 pl-8 space-y-10">
          {timeline.map((t) => (
            <li key={t.year} className="reveal relative">
              <span className="absolute -left-[37px] top-1 w-3 h-3 rounded-full bg-[color:var(--neon)] ring-4 ring-[color:var(--neon)]/15" />
              <div className="flex flex-wrap items-baseline gap-4">
                <span className="text-xs tracking-[0.3em] text-[color:var(--orange-premium)]">{t.year}</span>
                <h3 className="text-xl font-medium">{t.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl">{t.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-20 text-center reveal">
          <Link to="/contato" className="btn-primary">Vamos conversar <ArrowRight size={18} /></Link>
        </div>
      </section>
    </PageShell>
  );
}
