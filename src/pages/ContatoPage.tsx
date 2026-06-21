import { Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { MessageCircle, Phone, Mail, MapPin, Clock, Instagram, Facebook, Navigation, Car } from "lucide-react";
import { useState } from "react";

export default function ContatoPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow="Fale com Especialistas"
        title={<>Vamos conversar sobre a sua empresa.</>}
        subtitle="Atendimento próximo, estratégico e humano. Estamos prontos para entender seu momento e desenhar a melhor solução."
      />

      <section className="container-tight py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 glass rounded-3xl p-8 md:p-10 reveal">
            <h2 className="text-2xl font-medium">Envie uma mensagem</h2>
            <p className="text-sm text-muted-foreground mt-2">Retornamos em horário comercial.</p>
            {sent ? (
              <div className="mt-10 text-center py-12">
                <div className="text-[color:var(--neon)] text-lg">Mensagem enviada com sucesso.</div>
                <p className="text-muted-foreground mt-2 text-sm">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="mt-8 grid sm:grid-cols-2 gap-4"
              >
                <input required placeholder="Nome" className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[color:var(--neon)] outline-none text-sm" />
                <input required type="email" placeholder="E-mail" className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[color:var(--neon)] outline-none text-sm" />
                <input placeholder="Telefone" className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[color:var(--neon)] outline-none text-sm" />
                <input placeholder="Empresa" className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[color:var(--neon)] outline-none text-sm" />
                <textarea required rows={5} placeholder="Como podemos ajudar?" className="sm:col-span-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[color:var(--neon)] outline-none text-sm" />
                <button type="submit" className="btn-primary sm:col-span-2 mt-2">Enviar mensagem</button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="glass-soft rounded-2xl p-6 reveal">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[color:var(--neon)]">Contato direto</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3"><MessageCircle size={16} className="mt-0.5 text-[color:var(--orange-premium)]" /><a href="https://wa.me/5547992373196" target="_blank" rel="noreferrer" className="hover:text-[color:var(--neon)]">WhatsApp 47 99237 3196</a></li>
                <li className="flex gap-3"><Phone size={16} className="mt-0.5 text-[color:var(--orange-premium)]" /><a href="tel:+5547992373196" className="hover:text-[color:var(--neon)]">47 99237 3196</a></li>
                <li className="flex gap-3"><Mail size={16} className="mt-0.5 text-[color:var(--orange-premium)]" /><a href="mailto:contador.expert01@gmail.com" className="hover:text-[color:var(--neon)] break-all">contador.expert01@gmail.com</a></li>
                <li className="flex gap-3"><Instagram size={16} className="mt-0.5 text-[color:var(--orange-premium)]" /><a href="https://instagram.com/expert.contabilidade" target="_blank" rel="noreferrer" className="hover:text-[color:var(--neon)]">@expert.contabilidade</a></li>
                <li className="flex gap-3"><Facebook size={16} className="mt-0.5 text-[color:var(--orange-premium)]" /><a href="https://www.facebook.com/Expert.contabill" target="_blank" rel="noreferrer" className="hover:text-[color:var(--neon)]">Expert.contabill</a></li>
              </ul>
            </div>
            <div className="glass-soft rounded-2xl p-6 reveal">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[color:var(--neon)]">Endereço</h3>
              <p className="mt-4 text-sm text-foreground/85 flex gap-3">
                <MapPin size={16} className="mt-0.5 text-[color:var(--orange-premium)] shrink-0" />
                Av. Pref. Alberto Natalino Miquelute, 8239 sala 04, Itinga, Araquari SC
              </p>
            </div>
            <div className="glass-soft rounded-2xl p-6 reveal">
              <h3 className="text-sm uppercase tracking-[0.2em] text-[color:var(--neon)]">Horário</h3>
              <p className="mt-4 text-sm text-foreground/85 flex gap-3">
                <Clock size={16} className="mt-0.5 text-[color:var(--orange-premium)] shrink-0" />
                Segunda a sexta, 08h às 12h e 13h às 17h30
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 reveal">
          <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[color:var(--petrol)]/40 via-white/[0.02] to-transparent px-8 md:px-12 py-10 md:py-12 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[color:var(--neon)]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[color:var(--orange-premium)]/10 blur-3xl pointer-events-none" />
            <div className="relative grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="eyebrow">Cobertura de atendimento</span>
                <h3 className="mt-4 text-2xl md:text-3xl font-medium text-gradient leading-tight">
                  Atendimento contábil com suporte presencial e digital para empresas em toda a região norte de Santa Catarina.
                </h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Araquari", "Joinville", "Jaraguá do Sul", "Guaramirim", "Garuva", "Região Norte SC"].map((c) => (
                    <span key={c} className="text-xs tracking-wide px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-foreground/80">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5">
                <ul className="space-y-4 text-sm">
                  {[
                    "Atendimento digital com agilidade e segurança",
                    "Suporte online para dúvidas do dia a dia",
                    "Contabilidade física e digital integradas",
                    "Sistema online exclusivo para empresas",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-px w-6 bg-[color:var(--orange-premium)] shrink-0" />
                      <span className="text-foreground/85 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-12 gap-6 items-stretch reveal">
          <div className="md:col-span-7 rounded-2xl overflow-hidden border border-white/10 relative group">
            <iframe
              title="Mapa Expert Contabilidade"
              src="https://www.google.com/maps?q=Av.%20Pref.%20Alberto%20Natalino%20Miquelute%208239%20Itinga%20Araquari%20SC&output=embed"
              className="w-full h-[220px] md:h-[260px] grayscale-[40%] opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>

          <div className="md:col-span-5 glass-soft rounded-2xl p-6 md:p-7 flex flex-col justify-between">
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-[color:var(--neon)]">Como chegar</h3>
              <p className="mt-3 text-sm text-foreground/85 leading-relaxed">
                Toque no app de sua preferência para abrir a rota direta até nosso escritório.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Av.+Pref.+Alberto+Natalino+Miquelute+8239+Itinga+Araquari+SC"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-4 hover:border-[color:var(--orange-premium)] hover:bg-white/[0.06] transition"
              >
                <MapPin size={20} className="text-[color:var(--neon)] group-hover:text-[color:var(--orange-premium)] transition-colors" />
                <span className="text-xs font-medium">Maps</span>
              </a>
              <a
                href="https://www.waze.com/ul?ll=-26.3711,-48.7222&navigate=yes&q=Av.+Pref.+Alberto+Natalino+Miquelute+8239+Itinga+Araquari+SC"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-4 hover:border-[color:var(--orange-premium)] hover:bg-white/[0.06] transition"
              >
                <Navigation size={20} className="text-[color:var(--neon)] group-hover:text-[color:var(--orange-premium)] transition-colors" />
                <span className="text-xs font-medium">Waze</span>
              </a>
              <a
                href="https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=Av.%20Pref.%20Alberto%20Natalino%20Miquelute%208239%2C%20Itinga%2C%20Araquari%20SC"
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-4 hover:border-[color:var(--orange-premium)] hover:bg-white/[0.06] transition"
              >
                <Car size={20} className="text-[color:var(--neon)] group-hover:text-[color:var(--orange-premium)] transition-colors" />
                <span className="text-xs font-medium">Uber</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
