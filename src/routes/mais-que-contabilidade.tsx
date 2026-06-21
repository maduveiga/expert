import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { ArrowRight, Compass, Eye, ShieldCheck, Users, Cpu, Zap, Heart, Star } from "lucide-react";
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
  {
    year: "Abr 2020",
    title: "O Início de Tudo",
    desc: "Jeferson inicia o planejamento do projeto após decidir empreender e transformar sua visão de contabilidade em realidade."
  },
  {
    year: "Set 2020",
    title: "Nascimento da Expert",
    desc: "A marca Expert Contabilidade é formalizada. Jeferson lança a primeira postagem no perfil oficial do Instagram — o ponto de partida de uma jornada disruptiva."
  },
  {
    year: "Mai 2021",
    title: "Formalização do CNPJ",
    desc: "O CNPJ da Expert é oficialmente constituído. Jeferson concilia o trabalho fixo com a expansão contínua da carteira de clientes."
  },
  {
    year: "Ago 2021",
    title: "Dedicação Total",
    desc: "Em 31/08/2021, Jeferson encerra suas atividades como contratado e passa a operar 100% focado na Expert, no modelo home-office."
  },
  {
    year: "Jan 2022",
    title: "Camila Entra no Time",
    desc: "Em 14/01/2022, Camila Prudencio deixa a dupla jornada e se une em dedicação total à sociedade da Expert, trazendo nova força à operação."
  },
  {
    year: "2022–2024",
    title: "Primeiro Escritório & Crescimento",
    desc: "Abertura da primeira sala física, estruturação da equipe operacional e expansão para mais de 200 clientes ativos com processos digitais escaláveis."
  },
  {
    year: "2025–Hoje",
    title: "Novo Capítulo Estratégico",
    desc: "Início de mentoria estratégica, reformulação de processos internos, consolidação da marca e foco em entregas de alto valor para empresários que crescem com método."
  },
];

const principles = [
  {
    icon: Compass,
    label: "Missão",
    title: "Ser referência em contabilidade em Araquari e Região.",
    desc: "Impulsionar o sucesso e a prosperidade dos nossos clientes por meio de serviços inovadores, personalizados e que fazem diferença real na operação de cada negócio.",
  },
  {
    icon: Eye,
    label: "Visão",
    title: "Ser disruptivo na área contábil.",
    desc: "Elevar nossos clientes para outro nível de excelência e resultados. Construir uma marca reconhecida pela proximidade humana, tecnologia aplicada e profundidade técnica em cada entrega.",
  },
  {
    icon: ShieldCheck,
    label: "Valores",
    title: "Nosso Código de Conduta.",
    desc: (
      <ul className="space-y-4">
        <li><strong className="text-foreground">Simplicidade:</strong> Mantemos as coisas simples e diretas, facilitando a comunicação e o entendimento em todas as nossas interações.</li>
        <li><strong className="text-foreground">Respeito:</strong> Tratamos todos com dignidade e consideração, independentemente da hierarquia ou posição na empresa.</li>
        <li><strong className="text-foreground">Honestidade:</strong> Agimos com transparência e integridade em todas as nossas ações e decisões profissionais.</li>
        <li><strong className="text-foreground">Clareza:</strong> Comunicamos de forma clara e objetiva, evitando mal-entendidos e promovendo a eficiência.</li>
      </ul>
    ),
  },
];

const pillars = [
  { icon: Users, title: "Pessoas", desc: "Sempre em primeiro lugar. Cada pessoa é única e primordial para nossa operação e cultura." },
  { icon: Zap, title: "Processos", desc: "Constantemente acompanhados, mensurados e aprimorados para garantir qualidade em escala." },
  { icon: Cpu, title: "Tecnologia", desc: "Ferramenta indispensável para otimizar e facilitar o dia a dia da empresa e dos clientes." },
  { icon: Star, title: "Inovação", desc: "Sempre bem-vinda. Pensamos e executamos de forma disruptiva — com coragem e método." },
  { icon: Heart, title: "Desfrute", desc: "Vivemos a trajetória profissional com propósito. É proibido viver sem sonhos, sem gratidão." },
];

const team = [
  { name: "Jeferson Prudencio", role: "Sócio-Fundador & Diretor" },
  { name: "Camila M. Prudencio", role: "Sócia & Diretora Operacional" },
  { name: "Juliana Cristina", role: "Liderança Operacional" },
  { name: "Bruna Eva", role: "Analista Fiscal" },
  { name: "Fabiani Mondini", role: "Departamento Pessoal" },
  { name: "Brenda Vitória", role: "Auxiliar Administrativo" },
];

const stats = [
  { value: "8", label: "Clientes no Início" },
  { value: "200+", label: "Clientes Ativos" },
  { value: "4 anos", label: "Crescimento Contínuo" },
  { value: "5★", label: "Avaliação no Google" },
];

export function Page() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Nossa História"
        title={<>Muito mais do que números. Uma relação de confiança.</>}
        subtitle="Acreditamos que a contabilidade pode ser próxima, estratégica e transformadora. Esse é o nosso jeito de fazer — desde o primeiro dia."
      />

      {/* STATS */}
      <section className="container-tight pt-4 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="glass-soft rounded-2xl p-6 md:p-8 text-center reveal">
              <div className="text-4xl md:text-5xl font-display font-medium text-gradient mb-2">{s.value}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* OWNERS */}
      <section className="container-tight py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5 relative reveal">
            <div className="absolute -inset-10 bg-[color:var(--neon)]/10 blur-3xl rounded-full" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img src={owners} alt="Sócios Jeferson e Camila — Expert Contabilidade" className="w-full h-auto" />
            </div>
          </div>
          <div className="md:col-span-7 reveal">
            <span className="eyebrow">Quem conduz</span>
            <h2 className="mt-5 text-3xl md:text-5xl font-medium text-gradient leading-[1.15] pb-1">
              Uma contabilidade construída com propósito, técnica e proximidade.
            </h2>
            <p className="mt-7 text-foreground/75 leading-relaxed text-lg">
              À frente da Expert estão <span className="text-foreground font-medium">Jeferson</span> e{" "}
              <span className="text-foreground font-medium">Camila Prudencio</span>, que desde 2020 transformaram uma visão ousada em uma das referências contábeis da região de Araquari e Norte Catarinense.
            </p>
            <p className="mt-4 text-foreground/75 leading-relaxed text-lg">
              Combinamos tecnologia de ponta, atendimento humano e visão consultiva. Cada cliente é único — e cada entrega carrega o cuidado de quem entende que por trás de cada CNPJ existe uma história em construção.
            </p>
            <Link to="/talentos" className="btn-ghost mt-8 inline-flex">
              Quer fazer parte do time? <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-tight py-20 border-t border-white/5">
        <div className="max-w-3xl reveal">
          <span className="eyebrow">Trajetória</span>
          <h2 className="mt-5 text-3xl md:text-4xl font-medium text-gradient">
            Uma caminhada feita com propósito.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl">
            Do planejamento em casa ao crescimento de uma marca reconhecida — cada etapa foi construída com coragem, consistência e foco no que realmente importa.
          </p>
        </div>
        <ol className="mt-16 relative border-l-2 border-white/8 pl-8 md:pl-14 space-y-12">
          {timeline.map((t) => (
            <li key={t.year} className="reveal relative">
              <span className="absolute -left-[41px] md:-left-[57px] top-1 w-4 h-4 rounded-full bg-[color:var(--neon)] ring-8 ring-[color:var(--neon)]/10 shrink-0" />
              <div className="flex flex-wrap items-baseline gap-4 mb-2">
                <span className="text-xs tracking-[0.3em] text-[color:var(--orange-premium)] font-mono">{t.year}</span>
                <h3 className="text-xl font-medium">{t.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">{t.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="container-tight py-20 border-t border-white/5">
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
              <div className="md:col-span-4 text-muted-foreground leading-relaxed">{p.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5 PILLARS */}
      <section className="container-tight py-20 border-t border-white/5">
        <div className="max-w-3xl reveal mb-16">
          <span className="eyebrow">Cultura Interna</span>
          <h2 className="mt-5 text-3xl md:text-4xl font-medium text-gradient">
            Os 5 pilares da Expert.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Esses pilares orientam cada decisão, cada contratação e cada entrega que fazemos.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {pillars.map((p, i) => (
            <div key={p.title} className="group glass-soft rounded-3xl p-7 hover:border-[color:var(--neon)]/20 transition-all reveal">
              <div className="text-[10px] tracking-[0.3em] text-[color:var(--orange-premium)] mb-4">{String(i + 1).padStart(2, "0")}</div>
              <p.icon size={28} className="text-[color:var(--neon)] mb-5 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="font-medium text-lg mb-3">{p.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 p-8 rounded-2xl bg-[color:var(--neon)]/5 border border-[color:var(--neon)]/10 reveal">
          <p className="text-center italic text-foreground/80 text-lg font-light">
            "É expressamente proibido viver sem sonhos, sem propósitos ou gratidão."
          </p>
          <p className="text-center mt-3 text-[10px] uppercase tracking-widest text-foreground/40">— Lema Expert Contabilidade</p>
        </div>
      </section>

      {/* TEAM */}
      <section className="container-tight py-20 border-t border-white/5">
        <div className="max-w-3xl reveal mb-12">
          <span className="eyebrow">Quem faz acontecer</span>
          <h2 className="mt-5 text-3xl md:text-4xl font-medium text-gradient">Nossa equipe.</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {team.map((m) => (
            <div key={m.name} className="glass-soft rounded-2xl p-6 flex items-center gap-4 reveal hover:border-[color:var(--neon)]/20 transition-all">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--neon)]/20 to-[color:var(--petrol)]/40 flex items-center justify-center text-[color:var(--neon)] font-display font-medium text-lg shrink-0">
                {m.name.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-sm">{m.name}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-tight py-20">
        <div className="glass rounded-3xl p-10 md:p-20 text-center reveal relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[color:var(--neon)]/10 blur-3xl rounded-full" />
          <span className="eyebrow justify-center">Trabalhe com a gente</span>
          <h2 className="mt-5 text-3xl md:text-5xl font-medium text-gradient max-w-2xl mx-auto">
            Quer fazer parte desse time?
          </h2>
          <p className="mt-5 text-muted-foreground max-w-lg mx-auto">
            Buscamos pessoas apaixonadas por fazer diferença na vida dos empresários. Confira nossas oportunidades ou envie seu currículo.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/talentos" className="btn-primary">
              Ver oportunidades <ArrowRight size={18} />
            </Link>
            <Link to="/contato" className="btn-ghost">Falar com a gente</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
