import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, ShieldCheck, TrendingUp, Layers, Cpu, Star } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import owners from "@/assets/owners.jpg";

const services = [
  { icon: Layers, title: "Contabilidade Empresarial", desc: "Gestão contábil precisa, sob medida para a realidade do seu negócio." },
  { icon: TrendingUp, title: "BPO Financeiro", desc: "Operação financeira terceirizada com indicadores claros e controle total." },
  { icon: ShieldCheck, title: "Planejamento Tributário", desc: "Estratégia fiscal inteligente para reduzir impostos com segurança jurídica." },
  { icon: Cpu, title: "Contabilidade Digital", desc: "Tecnologia, automação e relatórios em tempo real ao alcance da sua decisão." },
  { icon: Sparkles, title: "Departamento Pessoal", desc: "Folha, admissões e obrigações trabalhistas com excelência operacional." },
  { icon: ShieldCheck, title: "Suporte Societário", desc: "Estruturas societárias, alterações e regularização com visão estratégica." },
];

const reviews = [
  { name: "Jaqueline Ramos", text: "Excelente profissional, atendimento top, sempre atenciosos e orientando no que precisa." },
  { name: "Jeovane Santos", text: "Super atenciosos, atenderam de prontidão fora do horário de expediente da empresa e esclareceram todas as minhas dúvidas do início ao fim." },
  { name: "Simone Martins", text: "Amei o trabalho da Expert Contabilidade. Ótimo atendimento, rapidez no retorno e equipe muito prestativa." },
  { name: "Shirlei Aparecida Marcos", text: "Excelente trabalho e comprometimento com os clientes." },
  { name: "Karise Arruda", text: "Ótimo atendimento, sempre prestativos. Estamos com eles desde a abertura da nossa empresa e não trocamos por nada." },
  { name: "Regiane de Lima Borgert", text: "São muito ágeis em todo processo, esclarecem dúvidas e trabalham com muita seriedade e honestidade." },
  { name: "Rodrigo Reitz", text: "A equipe Expert é nota mil. Sempre prontos para auxiliar e muito organizados nas demandas." },
  { name: "Ivan Marques", text: "Excelente empresa com profissionais muito atenciosos e com grande conhecimento." },
  { name: "Luciane Schultz", text: "Excelente escritório de contabilidade. Profissionalismo e eficiência definem o atendimento." },
];

export default function IndexPage() {
  return (
    <PageShell flush>
        {/* HERO */}
        <section className="relative min-h-[100svh] flex items-center overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay muted loop playsInline preload="metadata"
            poster=""
          >
            <source src="/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1f24]/85 via-[color:var(--petrol)]/75 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#000_95%)] opacity-90" />
          <div className="absolute inset-0 bg-[color:var(--petrol)]/15 mix-blend-multiply" />

          <div className="relative container-tight pt-32 sm:pt-40 pb-20 sm:pb-24">
            <span className="eyebrow">Inteligência contábil em Araquari</span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-medium leading-[1.15] max-w-5xl text-gradient pb-2">
              Sua empresa merece mais do que uma contabilidade tradicional.
            </h1>
            <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed">
              A Expert Contabilidade une estratégia, tecnologia e atendimento próximo para ajudar empresas e empresários a crescerem com segurança.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
              <Link to="/contato" className="btn-primary">
                Falar com Especialistas <ArrowRight size={18} />
              </Link>
              <Link to="/contato" className="btn-ghost">Abrir meu CNPJ</Link>
            </div>

            <div className="mt-12 sm:mt-20 flex flex-wrap items-center gap-x-6 sm:gap-x-10 gap-y-3 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-foreground/50">
              <span>Estratégia</span>
              <span className="w-6 sm:w-8 h-px bg-[color:var(--orange-premium)]" />
              <span>Tecnologia</span>
              <span className="w-6 sm:w-8 h-px bg-[color:var(--orange-premium)]" />
              <span>Proximidade</span>
              <span className="w-6 sm:w-8 h-px bg-[color:var(--orange-premium)]" />
              <span>Resultado</span>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="container-tight py-16 md:py-28">
          <div className="max-w-2xl reveal">
            <span className="eyebrow">O que oferecemos</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-medium text-gradient">
              Soluções inteligentes para empresas que pensam além.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Desenhamos a operação contábil com foco em estratégia, controle e crescimento sustentável.
            </p>
          </div>
          <div className="mt-16 divide-y divide-white/8 border-y border-white/8">
            {services.map((s, i) => (
              <div key={s.title} className="group grid md:grid-cols-12 gap-6 md:gap-10 py-8 md:py-10 reveal items-start">
                <div className="md:col-span-1 text-xs tracking-[0.3em] text-[color:var(--orange-premium)] pt-1">{String(i + 1).padStart(2, "0")}</div>
                <div className="md:col-span-1 pt-1">
                  <s.icon size={22} className="text-[color:var(--neon)] group-hover:text-[color:var(--orange-premium)] transition-colors" />
                </div>
                <h3 className="md:col-span-4 text-2xl md:text-3xl font-medium leading-tight group-hover:text-[color:var(--neon)] transition-colors">{s.title}</h3>
                <p className="md:col-span-6 text-base text-muted-foreground leading-relaxed max-w-xl">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OWNERS */}
        <section className="container-tight py-16 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative reveal">
              <div className="absolute -inset-8 bg-[color:var(--neon)]/10 blur-3xl rounded-full" />
              <div className="absolute inset-x-6 bottom-0 h-1/2 bg-gradient-to-t from-[color:var(--petrol)]/40 to-transparent blur-2xl rounded-full" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10">
                <img src={owners} alt="Donos da Expert Contabilidade" className="w-full h-auto" />
              </div>
            </div>
            <div className="reveal">
              <span className="eyebrow">Quem somos</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-medium text-gradient">
                Uma contabilidade humana, próxima e estratégica.
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Desde 2021, a Expert Contabilidade nasceu do propósito de transformar a relação entre empresários e contadores. Unimos tecnologia, atendimento personalizado e visão estratégica para entregar muito mais do que números.
              </p>
              <Link to="/mais-que-contabilidade" className="btn-ghost mt-8">
                Conheça nossa história <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="container-tight py-16 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 reveal">
            <div>
              <span className="eyebrow">Avaliações Google</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-medium text-gradient max-w-2xl">
                Confiança construída com cada cliente.
              </h2>
            </div>
            <div className="flex items-center gap-3 glass-soft rounded-full px-5 py-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[color:var(--orange-premium)] text-[color:var(--orange-premium)]" />
                ))}
              </div>
              <span className="text-sm">5.0 no Google</span>
            </div>
          </div>
          <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-x-8 md:gap-x-14 gap-y-8 md:gap-y-10">
            {reviews.slice(0, 6).map((r) => (
              <figure key={r.name} className="reveal pl-6 border-l border-white/10 hover:border-[color:var(--orange-premium)] transition-colors">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[color:var(--orange-premium)] text-[color:var(--orange-premium)]" />
                  ))}
                </div>
                <blockquote className="text-base text-foreground/85 leading-relaxed font-light">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="mt-5 text-xs uppercase tracking-[0.18em] text-[color:var(--neon)]">
                  {r.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container-tight py-16 md:py-28">
          <div className="relative overflow-hidden rounded-3xl glass p-8 sm:p-12 md:p-20 reveal">
            <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[color:var(--neon)]/15 blur-3xl" />
            <span className="eyebrow">Próximo passo</span>
            <h2 className="mt-5 text-3xl md:text-5xl font-medium max-w-3xl text-gradient">
              Pronto para uma contabilidade à altura da sua ambição?
            </h2>
            <p className="mt-5 max-w-xl text-muted-foreground">
              Converse com nossos especialistas e descubra como organizar, otimizar e expandir a sua operação.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contato" className="btn-primary">Falar com Especialistas <ArrowRight size={18} /></Link>
              <Link to="/contato" className="btn-ghost">Abrir meu CNPJ</Link>
            </div>
          </div>
        </section>
    </PageShell>
  );
}
