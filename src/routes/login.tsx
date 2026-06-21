import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { useState, useEffect } from "react";
import { Lock, Mail, ArrowRight, UserCheck, LayoutDashboard, FileText, Users, LogOut, ChevronRight, Download, Eye, X } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Área do Colaborador — Expert Contabilidade" },
    ],
  }),
  component: Page,
});

const VALID_EMAILS = [
  "econt.j01@gmail.com",
  "contador.expert01@gmail.com",
  "econt.m01@gmail.com",
  "econt.br01@gmail.com",
  "econt.p01@gmail.com",
  "econt.d01@gmail.com",
  "atend.expert@gmail.com",
  "econt.folha@gmail.com",
  "contador@experconta.com.br",
];

const DEFAULT_PASSWORD = "Expert@";

const quickLinks = [
  { icon: LayoutDashboard, label: "Painel Operacional", desc: "Visão geral das tarefas e demandas", color: "var(--neon)" },
  { icon: FileText, label: "Documentos Internos", desc: "Manuais, regras e procedimentos", color: "var(--orange-premium)", action: "docs" },
  { icon: Users, label: "Equipe Expert", desc: "Contatos e ramais internos", color: "var(--neon)" },
];

function Dashboard({ userEmail, onLogout }: { userEmail: string; onLogout: () => void }) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const firstName = userEmail.split(".")[0].replace("econt", "").replace("contador", "Contador").replace("atend", "Atendimento") || "Colaborador";
  const displayName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ambient bg */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-15%] right-[-5%] w-[45%] h-[45%] bg-[color:var(--neon)]/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] bg-[color:var(--orange-premium)]/5 blur-[120px] rounded-full" />
      </div>

      {/* Top bar */}
      <header className="border-b border-white/5 glass sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[color:var(--neon)]/15 flex items-center justify-center">
              <span className="text-[color:var(--neon)] font-display font-semibold text-sm">
                {displayName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p className="text-xs text-foreground/50 uppercase tracking-widest">Bem-vindo</p>
              <p className="text-sm font-medium leading-tight">{userEmail}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-xs text-foreground/40 hover:text-[color:var(--neon)] transition-colors px-3 py-2 rounded-xl hover:bg-white/5"
          >
            <LogOut size={14} />
            Sair
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Welcome banner */}
        <div className="glass rounded-3xl p-8 md:p-12 mb-10 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-[color:var(--neon)]/10 blur-3xl rounded-full" />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-[color:var(--neon)]/10 flex items-center justify-center">
              <UserCheck className="text-[color:var(--neon)]" size={32} />
            </div>
            <div>
              <p className="text-[10px] tracking-[0.3em] text-[color:var(--orange-premium)] uppercase mb-1">Acesso confirmado</p>
              <h1 className="text-2xl md:text-3xl font-display font-medium">Painel Expert Contabilidade</h1>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Seja bem-vindo(a) à área restrita da equipe. Aqui você encontra os recursos, documentos e ferramentas de trabalho da Expert Contabilidade.
          </p>
        </div>

        {/* Quick links */}
        <h2 className="text-sm uppercase tracking-[0.2em] text-foreground/40 mb-5">Acesso Rápido</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {quickLinks.map((l: any) => (
            <button
              key={l.label}
              onClick={() => l.action ? setActiveModal(l.action) : null}
              className="glass-soft rounded-2xl p-6 flex items-start gap-4 hover:border-[color:var(--neon)]/20 transition-all group text-left w-full h-full"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: `color-mix(in oklab, ${l.color} 15%, transparent)` }}
              >
                <l.icon size={22} style={{ color: l.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm mb-1">{l.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{l.desc}</p>
              </div>
              <ChevronRight size={16} className="text-foreground/20 group-hover:text-[color:var(--neon)] transition-colors mt-0.5 shrink-0" />
            </button>
          ))}
        </div>

        {/* Culture reminder */}
        <div className="rounded-2xl border border-[color:var(--orange-premium)]/15 bg-[color:var(--orange-premium)]/5 p-6">
          <p className="text-sm text-[color:var(--orange-premium)] font-medium mb-1">Lembrete de cultura</p>
          <p className="text-xs text-foreground/70 italic leading-relaxed">
            "É expressamente proibido viver sem sonhos, sem propósitos ou gratidão." — Lema Expert Contabilidade
          </p>
        </div>
      </main>

      {/* Modals */}
      {activeModal === "docs" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="glass rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300">
            <div className="p-6 md:p-8 border-b border-white/5 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-display font-medium">Documentos Internos</h3>
                <p className="text-sm text-muted-foreground mt-1">Materiais de apoio, normas e procedimentos.</p>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-white/5 rounded-full transition-colors shrink-0">
                <X size={20} className="text-foreground/60" />
              </button>
            </div>
            
            <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-4">
              {/* Arquivo 1 */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl border border-white/5 hover:bg-white/[0.02] transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-[color:var(--orange-premium)]/10 flex items-center justify-center shrink-0">
                  <FileText size={22} className="text-[color:var(--orange-premium)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm">Manual de Cultura e Conduta</p>
                  <p className="text-xs text-muted-foreground mt-1">Documento oficial com os valores, visão, missão e regras da Expert.</p>
                </div>
                <div className="flex items-center gap-2 mt-4 sm:mt-0 w-full sm:w-auto">
                  <a
                    href="/manual.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 h-10 rounded-xl bg-white/5 text-foreground hover:bg-[color:var(--neon)]/10 hover:text-[color:var(--neon)] transition-colors text-xs font-medium"
                  >
                    <Eye size={16} /> Ler
                  </a>
                  <a
                    href="/manual.pdf"
                    download="Manual_de_Cultura_Expert.pdf"
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-foreground/60 hover:bg-[color:var(--orange-premium)]/20 hover:text-[color:var(--orange-premium)] transition-colors shrink-0"
                    title="Baixar PDF"
                  >
                    <Download size={16} />
                  </a>
                </div>
              </div>

              {/* Placeholder */}
              <div className="flex items-center justify-center p-8 border border-dashed border-white/10 rounded-2xl">
                <p className="text-xs text-muted-foreground text-center">Os próximos documentos operacionais serão listados aqui assim que atualizados.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // Check persisted session
  useEffect(() => {
    const saved = sessionStorage.getItem("expert_user");
    if (saved) setLoggedIn(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (VALID_EMAILS.includes(email.trim().toLowerCase()) && password === DEFAULT_PASSWORD) {
      sessionStorage.setItem("expert_user", email);
      setLoggedIn(true);
      setError("");
    } else {
      setError("Credenciais inválidas. Verifique seu e-mail e senha.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("expert_user");
    setLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  if (loggedIn) {
    const savedEmail = sessionStorage.getItem("expert_user") || email;
    return <Dashboard userEmail={savedEmail} onLogout={handleLogout} />;
  }

  return (
    <PageShell flush>
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-background">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[color:var(--neon)]/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[color:var(--orange-premium)]/5 blur-[120px] rounded-full" />
        </div>

        <div className="w-full max-w-[430px]">
          {/* No logo — header already has it */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-medium tracking-tight">Área do Colaborador</h1>
            <p className="text-muted-foreground mt-2 text-sm">Acesse o painel restrito da equipe Expert.</p>
          </div>

          <div className="glass rounded-[2rem] p-8 md:p-10 relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs text-center animate-in fade-in">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 ml-1">E-mail Corporativo</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-[color:var(--neon)] transition-colors" size={18} />
                  <input
                    type="email"
                    required
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-[color:var(--neon)] outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 ml-1">Senha</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-[color:var(--neon)] transition-colors" size={18} />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-[color:var(--neon)] outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <a href="https://wa.me/5547992373196?text=Esqueci%20minha%20senha%20da%20%C3%A1rea%20do%20colaborador." target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-[color:var(--neon)] transition-colors">
                  Esqueci a senha
                </a>
              </div>

              <button type="submit" className="btn-primary w-full py-5 text-sm group">
                Entrar no Painel <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <p className="text-center mt-8 text-[10px] uppercase tracking-[0.25em] text-foreground/30">
            Acesso Restrito & Monitorado
          </p>
        </div>
      </div>
    </PageShell>
  );
}
