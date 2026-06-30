import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth";
import {
  Lock, User, ArrowRight, UserCheck, LayoutDashboard, FileText,
  Users, LogOut, ChevronRight, Download, Eye, EyeOff, X, Shield,
  Settings, Calendar, Gift, Megaphone, Activity, Link2, Pin, File as FileIcon,
  AlertTriangle, BookOpen, ExternalLink, Globe, Landmark
} from "lucide-react";
import { Calendar as CalendarUI } from "@/components/ui/calendar";

const EVENT_TYPES = [
  { id: "Evento", color: "bg-blue-500/10 text-blue-400" },
  { id: "Treinamento", color: "bg-emerald-500/10 text-emerald-400" },
  { id: "Reunião", color: "bg-amber-500/10 text-amber-400" },
  { id: "Prazo", color: "bg-red-500/10 text-red-400" },
  { id: "Comemorativo", color: "bg-pink-500/10 text-pink-400" },
];

const PRIORITIES = [
  { id: "Alta", color: "bg-red-500/10 text-red-400 border border-red-500/25" },
  { id: "Média", color: "bg-amber-500/10 text-amber-400 border border-amber-500/25" },
  { id: "Baixa", color: "bg-blue-400/10 text-blue-300 border border-blue-400/25" },
];

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [{ title: "Área do Colaborador — Expert Contabilidade" }],
  }),
  component: Page,
});

const quickLinks = [
  { icon: LayoutDashboard, label: "Painel Operacional", desc: "Visão geral das tarefas e demandas", color: "var(--neon)" },
  { icon: FileText, label: "Documentos Internos", desc: "Manuais, regras e procedimentos", color: "var(--orange-premium)", action: "docs" },
  { icon: Users, label: "Equipe Expert", desc: "Contatos e ramais internos", color: "var(--neon)" },
];

function CollaboratorDashboard({ userLogin, onLogout }: { userLogin: string; onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [portalItems, setPortalItems] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  const displayName = userLogin.split("@")[0].split(".").map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(" ") || "Colaborador";

  const PORTAL_PAGES = [
    { id: "Calendário", icon: Calendar },
    { id: "Aniversariantes", icon: Gift },
    { id: "Comunicados", icon: Megaphone },
    { id: "Mural de Notícias", icon: FileText },
    { id: "Atualizações", icon: Activity },
    { id: "Links Rápidos", icon: Link2 },
  ];

  useEffect(() => {
    const load = () => {
      try {
        const saved = localStorage.getItem('expert_team_portal');
        if (saved) {
          setPortalItems(JSON.parse(saved));
        } else {
          setPortalItems([]);
        }
      } catch {}
    };
    load();
    // Real-time sync: listen for localStorage changes from admin panel
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'expert_team_portal') load();
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, [activeTab]);

  const renderPortalPage = (pageName: string) => {
    const items = portalItems
      .filter(i => i.page === pageName && i.published)
      .sort((a, b) => {
        if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
        return (a.order || 0) - (b.order || 0);
      });

    if (pageName === "Calendário") {
      const monthItems = portalItems.filter(i => {
        if (i.page !== "Calendário" || !i.published || !i.date) return false;
        const d = new Date(i.date);
        return d.getMonth() === selectedDate?.getMonth() && d.getFullYear() === selectedDate?.getFullYear();
      }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      
      return (
        <div className="space-y-6 animate-in fade-in">
          <div>
            <h2 className="text-2xl font-display font-medium text-white mb-2">Calendário Corporativo</h2>
            <p className="text-white/50 text-xs">Acompanhe eventos, treinamentos, reuniões e prazos importantes.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {EVENT_TYPES.map(t => (
              <span key={t.id} className={`text-[10px] px-2.5 py-0.5 rounded-full ${t.color}`}>{t.id}</span>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4 rounded-3xl glass-soft p-6">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
                 <Calendar size={18} className="text-[color:var(--neon)]" />
                 <h4 className="text-sm font-medium">Eventos de {selectedDate?.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}</h4>
              </div>
              
              {monthItems.length === 0 ? (
                <div className="text-xs text-white/30 text-center py-10 border border-dashed border-white/5 rounded-2xl">
                  Nenhum evento agendado para este mês.
                </div>
              ) : monthItems.map(item => {
                const date = new Date(item.date);
                const evType = EVENT_TYPES.find(t => t.id === item.eventType) || EVENT_TYPES[0];
                return (
              <div key={item.id} className="flex gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition-colors relative">
                    <div className="w-14 h-14 rounded-2xl bg-[#F59B23]/15 flex flex-col items-center justify-center shrink-0 border border-[#F59B23]/40">
                      <span className="text-xl font-display font-bold text-[#F59B23] leading-none">{date.getDate()}</span>
                      <span className="text-[9px] uppercase text-[#F59B23]/80 font-medium tracking-wider">{date.toLocaleString('pt-BR', { month: 'short' })}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h5 className="font-semibold text-sm text-white">{item.title}</h5>
                        <span className={`text-[9px] px-2.5 py-0.5 rounded-full ${evType.color} font-medium`}>{evType.id}</span>
                      </div>
                      {item.content && <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">{item.content}</p>}
                      <p className="text-[10px] text-white/60 mt-2 font-medium bg-white/5 inline-block px-3 py-1 rounded-lg border border-white/10">
                        {date.toLocaleString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="space-y-4">
              <div className="rounded-3xl glass-soft p-5 w-full flex justify-center sticky top-24">
                <CalendarUI
                  mode="single"
                  selected={selectedDate}
                  onSelect={(d) => d && setSelectedDate(d)}
                  className="bg-transparent! text-white mx-auto [&_.rdp-day_button]:text-white [&_.rdp-cell]:p-1.5 [&_.rdp-caption_label]:font-medium [&_.rdp-caption_label]:capitalize [&_.rdp-button:hover]:bg-white/10 shadow-xl font-sans"
                />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (pageName === "Comunicados") {
      return (
        <div className="space-y-6 animate-in fade-in">
          <div>
            <h2 className="text-2xl font-display font-medium text-white mb-2">Comunicados Internos</h2>
            <p className="text-white/50 text-xs text-muted-foreground">Avisos importantes e atualizações da empresa.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="text-[10px] px-2.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/15">Prioridade Alta</span>
            <span className="text-[10px] px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/15">Prioridade Média</span>
            <span className="text-[10px] px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/15">Prioridade Baixa</span>
          </div>

          {items.length === 0 ? (
            <div className="glass-soft rounded-2xl p-8 text-center text-white/40">
              Nenhum comunicado disponível no momento.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {items.map(item => {
                const priorityColor = PRIORITIES.find(p => p.id === item.priority)?.color || "bg-white/5 text-white/60";
                return (
                  <div key={item.id} className="glass-soft p-6 rounded-2xl border border-white/5 flex flex-col justify-between h-full bg-white/[0.01]">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-red-400/10 flex items-center justify-center text-red-400 shrink-0">
                          <AlertTriangle size={15} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm text-white line-clamp-1">{item.title}</h3>
                          <div className="flex gap-1.5 mt-0.5">
                            {item.categoryTag && (
                              <span className="text-[8px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-white/5 text-white/50 border border-white/5">
                                {item.categoryTag}
                              </span>
                            )}
                            <span className={`text-[8px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded ${priorityColor}`}>
                              {item.priority || "Normal"}
                            </span>
                          </div>
                        </div>
                      </div>
                      {item.content && <p className="text-xs text-white/70 whitespace-pre-wrap leading-relaxed">{item.content}</p>}
                    </div>

                    <div className="border-t border-white/5 pt-3 mt-4 flex items-center justify-between text-[10px] text-white/30">
                      <span>{item.date ? new Date(item.date).toLocaleDateString('pt-BR') : ""}</span>
                      {item.fileData && (
                        <a href={item.fileData} download={item.fileName || "Anexo"} className="text-[color:var(--neon)] font-semibold hover:underline flex items-center gap-1">
                          <Download size={10} /> Anexo ({item.fileName?.slice(-8) || "Arquivo"})
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    if (pageName === "Links Rápidos") {
      const groups = items.reduce((acc: any, link: any) => {
        const grp = link.linkGroup || "Sites Governamentais";
        if (!acc[grp]) acc[grp] = [];
        acc[grp].push(link);
        return acc;
      }, {});

      return (
        <div className="space-y-6 animate-in fade-in">
          <div>
            <h2 className="text-2xl font-display font-medium text-white mb-2">Links Rápidos</h2>
            <p className="text-white/50 text-xs text-muted-foreground">Acesso rápido a sites e documentos importantes.</p>
          </div>

          {items.length === 0 ? (
            <div className="glass-soft rounded-2xl p-8 text-center text-white/40">
              Nenhum link configurado no momento.
            </div>
          ) : (
            <div className="space-y-6">
              {Object.keys(groups).map(groupName => {
                const isGov = groupName === "Sites Governamentais";
                const borderClass = isGov ? "border-blue-500/20 text-blue-400 bg-blue-500/10" : "border-emerald-500/20 text-emerald-400 bg-emerald-500/10";
                
                return (
                  <div key={groupName} className="space-y-3">
                    <div className={`px-4 py-2 border rounded-xl flex items-center gap-2 ${borderClass}`}>
                       <Link2 size={13} />
                       <span className="text-[10px] font-bold uppercase tracking-wider">{groupName}</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {groups[groupName].map((link: any) => (
                        <a 
                          key={link.id} 
                          href={link.linkUrl} 
                          target="_blank" 
                          rel="noreferrer"
                          className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/12 transition-all group"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isGov ? 'bg-blue-400/10 text-blue-400' : 'bg-emerald-400/10 text-emerald-400'}`}>
                            {isGov ? <Landmark size={14} /> : <BookOpen size={14} />}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold text-white/80 group-hover:text-white truncate">{link.title}</p>
                            <span className="text-[8px] text-white/30 flex items-center gap-0.5">
                              Link externo <ExternalLink size={6} />
                            </span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    if (pageName === "Aniversariantes") {
      return (
        <div className="space-y-6 animate-in fade-in">
          <div>
            <h2 className="text-2xl font-display font-medium text-white mb-2">Aniversariantes</h2>
            <p className="text-white/50 text-xs">Comemore as datas com nossa equipe.</p>
          </div>

          {items.length === 0 ? (
            <div className="glass-soft rounded-2xl p-8 text-center text-white/40">
              Nenhum aniversariante cadastrado.
            </div>
          ) : (
            <div className="grid sm:grid-cols-3 gap-4">
              {items.map(item => {
                const bdayDate = item.date ? new Date(item.date) : null;
                const matchesCurrentMonth = bdayDate ? bdayDate.getMonth() === new Date().getMonth() : false;
                return (
                  <div key={item.id} className={`p-5 rounded-2xl border transition-all flex items-center gap-4 ${matchesCurrentMonth ? 'bg-[color:var(--neon)]/5 border-[color:var(--neon)]/20 shadow-[0_0_15px_rgba(0,229,241,0.05)]' : 'bg-white/[0.01] border-white/5'}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${matchesCurrentMonth ? 'bg-[color:var(--neon)]/15 text-[color:var(--neon)]' : 'bg-white/5 text-white/50'}`}>
                      <Gift size={20} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-white truncate">{item.title}</p>
                      <p className="text-[10px] text-white/50 truncate">{item.content}</p>
                      {bdayDate && (
                        <p className="text-[10px] font-bold text-[color:var(--neon)] mt-1 uppercase tracking-wide">
                          Dia {bdayDate.getUTCDate().toString().padStart(2, '0')} de {bdayDate.toLocaleString('pt-BR', {month: 'long', timeZone: 'UTC'})}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    if (pageName === "Mural de Notícias") {
      return (
        <div className="space-y-6 animate-in fade-in">
          <div>
            <h2 className="text-2xl font-display font-medium text-white mb-2">Mural de Notícias</h2>
            <p className="text-white/50 text-xs">Fique por dentro das novidades corporativas da Expert.</p>
          </div>

          {items.length === 0 ? (
            <div className="glass-soft rounded-2xl p-8 text-center text-white/40">
              Nenhuma notícia cadastrada.
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className={`glass-soft p-6 rounded-2xl border bg-white/[0.01] ${item.pinned ? 'border-[color:var(--neon)]/20 shadow-[0_0_20px_rgba(0,229,241,0.05)]' : 'border-white/5'}`}>
                  {item.pinned && (
                    <div className="flex items-center gap-1.5 text-[8px] uppercase tracking-widest text-[color:var(--neon)] font-bold mb-2">
                      <Pin size={10} /> Destaque
                    </div>
                  )}
                  <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                  {item.content && <p className="text-xs text-white/70 whitespace-pre-wrap leading-relaxed mb-4">{item.content}</p>}
                  
                  {item.fileData && item.fileType?.includes('image') && (
                    <div className="rounded-xl overflow-hidden border border-white/5 max-h-[300px] mb-4 bg-black/40 flex items-center justify-center">
                      <img src={item.fileData} alt={item.title} className="w-full h-auto object-contain max-h-[300px]" />
                    </div>
                  )}

                  <div className="flex justify-between items-center text-[9px] text-white/30 border-t border-white/5 pt-3">
                    <span>Publicado em {item.date ? new Date(item.date).toLocaleDateString('pt-BR') : ""}</span>
                    {item.fileData && !item.fileType?.includes('image') && (
                      <a href={item.fileData} download={item.fileName || "Anexo"} className="text-[color:var(--neon)] hover:underline flex items-center gap-1 font-semibold">
                        <Download size={10} /> Baixar anexo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    if (pageName === "Atualizações") {
      return (
        <div className="space-y-6 animate-in fade-in">
          <div>
            <h2 className="text-2xl font-display font-medium text-white mb-2">Atualizações</h2>
            <p className="text-white/50 text-xs">Relatórios de alterações legislativas e sistema ERP.</p>
          </div>

          {items.length === 0 ? (
            <div className="glass-soft rounded-2xl p-8 text-center text-white/40">
              Nenhuma atualização registrada.
            </div>
          ) : (
            <div className="relative pl-6 border-l border-white/10 space-y-6 ml-2 py-2">
              {items.map(item => (
                <div key={item.id} className="relative space-y-2">
                  <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-[#00E5F1] ring-4 ring-[#00E5F1]/10 border border-[#0b1416]" />
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-xs text-white">{item.title}</h3>
                    <span className="text-[9px] text-white/30">{item.date ? new Date(item.date).toLocaleDateString('pt-BR') : ""}</span>
                  </div>
                  {item.content && (
                    <p className="text-xs text-white/60 leading-relaxed bg-[#0b1416]/40 p-4 rounded-xl border border-white/5">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-background relative flex">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-15%] right-[-5%] w-[45%] h-[45%] bg-[color:var(--neon)]/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] bg-[color:var(--orange-premium)]/5 blur-[120px] rounded-full" />
      </div>

      {/* Sidebar */}
      <aside className="w-64 glass-soft border-r border-white/5 shrink-0 flex flex-col z-10 hidden md:flex sticky top-0 h-screen">
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h1 className="text-lg font-display font-medium text-white tracking-tight leading-none">Portal da<br/><span className="text-[color:var(--neon)]">Equipe</span></h1>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-1">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
              activeTab === "dashboard" ? "bg-[color:var(--neon)]/15 text-[color:var(--neon)] border border-[color:var(--neon)]/20" : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
            }`}
          >
            <LayoutDashboard size={18} />
            <span>Início</span>
          </button>
          
          <div className="pt-4 pb-2 px-4 text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">Novas Seções</div>
          
          {PORTAL_PAGES.map(page => (
            <button
              key={page.id}
              onClick={() => setActiveTab(page.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                activeTab === page.id ? "bg-[color:var(--neon)]/15 text-[color:var(--neon)] border border-[color:var(--neon)]/20" : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              <page.icon size={18} />
              <span>{page.id}</span>
            </button>
          ))}
        </div>
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-[color:var(--neon)]/15 flex items-center justify-center shrink-0">
              <span className="text-[color:var(--neon)] font-display font-semibold text-xs">
                {displayName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-white truncate">{displayName}</p>
              <p className="text-[10px] text-white/40 truncate">{userLogin}</p>
            </div>
          </div>
          <button onClick={onLogout} className="w-full flex items-center gap-2 text-xs text-white/40 hover:text-red-400 hover:bg-red-400/10 transition-colors px-3 py-2 mt-2 rounded-xl">
            <LogOut size={14} /> Sair do Painel
          </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen relative z-10 w-full">
        {/* Mobile Nav */}
        <header className="md:hidden border-b border-white/5 glass sticky top-0 z-20">
          <div className="px-4 py-3 pb-0 flex overflow-x-auto gap-2 scrollbar-hide">
             <button onClick={() => setActiveTab("dashboard")} className={`whitespace-nowrap px-4 py-3 border-b-2 text-sm transition-colors ${activeTab === "dashboard" ? "border-[color:var(--neon)] text-[color:var(--neon)]" : "border-transparent text-white/50"}`}>
               Início
             </button>
             {PORTAL_PAGES.map(page => (
                <button key={page.id} onClick={() => setActiveTab(page.id)} className={`whitespace-nowrap px-4 py-3 border-b-2 text-sm transition-colors ${activeTab === page.id ? "border-[color:var(--neon)] text-[color:var(--neon)]" : "border-transparent text-white/50"}`}>
                  {page.id}
                </button>
             ))}
          </div>
        </header>

        <main className="flex-1 p-6 md:p-12 overflow-y-auto max-w-5xl mx-auto w-full">
          {activeTab === "dashboard" && (
            <div className="animate-in fade-in">
              <div className="glass rounded-3xl p-8 md:p-12 mb-10 relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-[color:var(--neon)]/10 blur-3xl rounded-full" />
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-[color:var(--neon)]/10 flex items-center justify-center">
                    <UserCheck className="text-[color:var(--neon)]" size={32} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.3em] text-[color:var(--orange-premium)] uppercase mb-1">Acesso confirmado</p>
                    <h1 className="text-2xl md:text-3xl font-display font-medium">Painel Expert</h1>
                  </div>
                </div>
                <p className="text-[13px] text-white/60 max-w-2xl leading-relaxed">
                  Seja bem-vindo(a) ao Portal da Equipe Expert.<br />
                  Navegue pelo menu lateral para acessar os comunicados, calendários e links úteis.
                </p>
              </div>

              <h2 className="text-sm uppercase tracking-[0.2em] text-foreground/40 mb-5">Ferramentas</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {quickLinks.map((l: any) => (
                  <button
                    key={l.label}
                    onClick={() => l.action ? setActiveModal(l.action) : null}
                    className="glass-soft rounded-2xl p-6 flex items-start gap-4 hover:border-[color:var(--neon)]/20 transition-all group text-left w-full h-full"
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: `color-mix(in oklab, ${l.color} 15%, transparent)` }}>
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

              <div className="rounded-2xl border border-[color:var(--orange-premium)]/15 bg-[color:var(--orange-premium)]/5 p-6 shadow-inner">
                <p className="text-sm text-[color:var(--orange-premium)] font-medium mb-1">Cultura Expert</p>
                <p className="text-xs text-foreground/70 italic leading-relaxed font-serif">
                  "É expressamente proibido viver sem sonhos, sem propósitos ou gratidão."
                </p>
              </div>
            </div>
          )}

          {PORTAL_PAGES.find(p => p.id === activeTab) && renderPortalPage(activeTab)}

        </main>
      </div>

      {activeModal === "docs" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="glass rounded-3xl w-full max-w-2xl max-h-[85vh] flex flex-col shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300">
            <div className="p-6 md:p-8 border-b border-white/5 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-display font-medium">Documentos Internos</h3>
                <p className="text-sm text-muted-foreground mt-1">Materiais de apoio, normas e procedimentos.</p>
              </div>
              <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors shrink-0">
                <X size={20} className="text-foreground/60" />
              </button>
            </div>
            <div className="p-6 md:p-8 overflow-y-auto flex-1 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl border border-[color:var(--orange-premium)]/20 bg-[color:var(--orange-premium)]/5 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-[color:var(--orange-premium)]/20 flex items-center justify-center shrink-0">
                  <FileText size={22} className="text-[color:var(--orange-premium)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-[color:var(--orange-premium)]">Manual de Cultura e Conduta</p>
                  <p className="text-xs text-muted-foreground mt-1">O documento obrigatório para todos. Acesse valores, visão, missão e regras.</p>
                </div>
                <div className="flex items-center gap-2 mt-4 sm:mt-0 w-full sm:w-auto">
                  <a href="/manual.pdf" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 h-10 rounded-xl bg-white/10 text-white hover:bg-[color:var(--orange-premium)]/20 hover:text-[color:var(--orange-premium)] transition-all text-xs font-medium border border-white/10">
                    <Eye size={16} /> Ler
                  </a>
                  <a href="/manual.pdf" download="Manual_de_Cultura_Expert.pdf" className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-white hover:bg-[color:var(--orange-premium)]/20 hover:text-[color:var(--orange-premium)] transition-all shrink-0 border border-white/10" title="Baixar PDF">
                    <Download size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MasterRedirect() {
  const navigate = useNavigate();
  useEffect(() => { navigate({ to: "/admin" }); }, [navigate]);
  return null;
}

export function Page() {
  const { user, isMaster, login, logout } = useAuth();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // Master redirect
  if (user?.role === "master") return <MasterRedirect />;

  // Collaborator dashboard
  if (user?.role === "collaborator") {
    return <CollaboratorDashboard userLogin={user.login} onLogout={logout} />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = login(loginId.trim(), password);
    if (!result.success) {
      setError(result.error ?? "Credenciais inválidas.");
    } else {
      setError("");
    }
  };

  return (
    <PageShell flush>
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-background">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[color:var(--neon)]/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[color:var(--orange-premium)]/5 blur-[120px] rounded-full" />
        </div>

        <div className="w-full max-w-[430px]">
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
                <label className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 ml-1">Login / E-mail</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-[color:var(--neon)] transition-colors" size={18} />
                  <input
                    type="text"
                    required
                    placeholder="seu@email.com ou ID de acesso"
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    className="w-full pl-12 pr-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-[color:var(--neon)] outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 ml-1">Senha</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-[color:var(--neon)] transition-colors" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-[color:var(--neon)] outline-none transition-all text-sm"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/30 hover:text-foreground/70 transition-colors">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <a
                  href="https://wa.me/5547992373196?text=Esqueci%20minha%20senha%20da%20%C3%A1rea%20do%20colaborador."
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-[color:var(--neon)] transition-colors"
                >
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
