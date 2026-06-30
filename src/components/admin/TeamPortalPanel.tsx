import { useState, useEffect } from "react";
import { Plus, Trash2, Edit3, Save, X, Layout, Eye, EyeOff, Pin, File as FileIcon, Link as LinkIcon, Image as ImageIcon, Check, Upload, Calendar as CalendarIcon, Gift, Megaphone, Activity, FileText } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PORTAL_KEY = 'expert_team_portal';
const PORTAL_PAGES = [
  "Calendário",
  "Aniversariantes",
  "Comunicados",
  "Mural de Notícias",
  "Atualizações",
  "Links Rápidos"
];

const EVENT_TYPES = [
  { id: "Evento", color: "bg-blue-500/10 text-blue-400" },
  { id: "Treinamento", color: "bg-emerald-500/10 text-emerald-400" },
  { id: "Reunião", color: "bg-amber-500/10 text-amber-400" },
  { id: "Prazo", color: "bg-red-500/10 text-red-400" },
  { id: "Comemorativo", color: "bg-pink-500/10 text-pink-400" },
];

const PRIORITIES = [
  { id: "Alta", color: "bg-red-500/10 text-red-400 border border-red-500/20" },
  { id: "Média", color: "bg-amber-500/10 text-amber-400 border border-amber-500/20" },
  { id: "Baixa", color: "bg-[#00E5F1]/10 text-[#00E5F1] border border-[#00E5F1]/20" },
];

const DEFAULT_PORTAL_ITEMS = [
  // Calendário (Junho 2026 events matching images)
  {
    id: "cal-1",
    page: "Calendário",
    title: "Dia do Contador",
    content: "Celebração do dia do contador",
    eventType: "Comemorativo",
    date: "2026-06-12T09:00:00.000Z",
    published: true,
    pinned: false,
    order: 0
  },
  {
    id: "cal-2",
    page: "Calendário",
    title: "Workshop Tributário",
    content: "Workshop sobre reforma tributária",
    eventType: "Treinamento",
    date: "2026-06-05T14:30:00.000Z",
    published: true,
    pinned: false,
    order: 0
  },
  {
    id: "cal-3",
    page: "Calendário",
    title: "Confraternização Junina",
    content: "Festa junina da empresa",
    eventType: "Evento",
    date: "2026-06-20T18:00:00.000Z",
    published: true,
    pinned: false,
    order: 0
  },
  // Comunicados Internos (matching image elements)
  {
    id: "com-1",
    page: "Comunicados",
    title: "Novo Sistema de Ponto Eletrônico",
    content: "A partir de 01/06, utilizaremos o novo sistema de ponto eletrônico. Todos devem realizar o cadastro biométrico até 30/05.",
    categoryTag: "Administrativo",
    priority: "Alta",
    date: "2026-05-25T10:00:00.000Z",
    published: true,
    pinned: false,
    order: 0
  },
  {
    id: "com-2",
    page: "Comunicados",
    title: "Prazo IRPF 2026",
    content: "Lembrete: prazo final para entrega do IRPF 2026 é 31/05. Orientem os clientes.",
    categoryTag: "Fiscal",
    priority: "Alta",
    date: "2026-05-22T10:00:00.000Z",
    published: true,
    pinned: false,
    order: 0
  },
  {
    id: "com-3",
    page: "Comunicados",
    title: "Treinamento SPED Contábil",
    content: "Treinamento obrigatório sobre as novas regras do SPED Contábil. Inscrições abertas no RH.",
    categoryTag: "Treinamento",
    priority: "Média",
    date: "2026-05-24T10:00:00.000Z",
    published: true,
    pinned: false,
    order: 0
  },
  {
    id: "com-4",
    page: "Comunicados",
    title: "Atualização de Benefícios",
    content: "Novos convênios médicos e odontológicos disponíveis. Consulte o RH para mais informações.",
    categoryTag: "RH",
    priority: "Baixa",
    date: "2026-05-23T10:00:00.000Z",
    published: true,
    pinned: false,
    order: 0
  },
  // Links Rápidos (matching image elements)
  {
    id: "link-1",
    page: "Links Rápidos",
    title: "Receita Federal",
    linkUrl: "https://www.gov.br/receitafederal",
    linkGroup: "Sites Governamentais",
    published: true,
    pinned: false,
    order: 0
  },
  {
    id: "link-2",
    page: "Links Rápidos",
    title: "SPED",
    linkUrl: "http://sped.rfb.gov.br/",
    linkGroup: "Sites Governamentais",
    published: true,
    pinned: false,
    order: 1
  },
  {
    id: "link-3",
    page: "Links Rápidos",
    title: "eSocial",
    linkUrl: "https://www.gov.br/esocial",
    linkGroup: "Sites Governamentais",
    published: true,
    pinned: false,
    order: 2
  },
  {
    id: "link-4",
    page: "Links Rápidos",
    title: "Portal e-CAC",
    linkUrl: "https://cav.receita.fazenda.gov.br/",
    linkGroup: "Sites Governamentais",
    published: true,
    pinned: false,
    order: 3
  },
  {
    id: "link-5",
    page: "Links Rápidos",
    title: "CFC",
    linkUrl: "https://cfc.org.br/",
    linkGroup: "Notícias Contábeis",
    published: true,
    pinned: false,
    order: 0
  },
  {
    id: "link-6",
    page: "Links Rápidos",
    title: "CRC",
    linkUrl: "https://www.crcsc.org.br/",
    linkGroup: "Notícias Contábeis",
    published: true,
    pinned: false,
    order: 1
  },
  // Aniversariantes (seeded data)
  {
    id: "aniv-1",
    page: "Aniversariantes",
    title: "Ana Souza",
    content: "Departamento Contábil",
    date: "2026-06-05T00:00:00.000Z",
    published: true,
    pinned: false,
    order: 0
  },
  {
    id: "aniv-2",
    page: "Aniversariantes",
    title: "Carlos Lima",
    content: "Departamento Fiscal",
    date: "2026-06-12T00:00:00.000Z",
    published: true,
    pinned: false,
    order: 0
  },
  {
    id: "aniv-3",
    page: "Aniversariantes",
    title: "Fernanda Santos",
    content: "Recursos Humanos",
    date: "2026-06-22T00:00:00.000Z",
    published: true,
    pinned: false,
    order: 0
  },
  // Mural de Notícias (seeded data)
  {
    id: "mural-1",
    page: "Mural de Notícias",
    title: "Atingimos a meta de IRPF 2026!",
    content: "Parabéns a toda a equipe pela dedicação nas entregas das declarações de Imposto de Renda deste ano. Conseguimos cobrir 100% dos clientes sem atrasos!",
    date: "2026-06-01T09:00:00.000Z",
    published: true,
    pinned: true,
    order: 0
  },
  {
    id: "mural-2",
    page: "Mural de Notícias",
    title: "Expert Contabilidade inaugura expansão da sede",
    content: "Novo espaço corporativo integrado com salas de reunião tecnológicas e área gourmet para relaxamento da equipe.",
    date: "2026-06-15T10:00:00.000Z",
    published: true,
    pinned: false,
    order: 1
  },
  // Atualizações (seeded data)
  {
    id: "att-1",
    page: "Atualizações",
    title: "Atualização de Alíquotas de ISS Araquari",
    content: "Fiquem atentos às novas especificações eletrônicas do portal tributário municipal para corretagem social.",
    date: "2026-06-10T12:00:00.000Z",
    published: true,
    pinned: false,
    order: 0
  }
];

export function TeamPortalPanel() {
  const [items, setItems] = useState<any[]>([]);
  const [activePage, setActivePage] = useState(PORTAL_PAGES[0]);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [form, setForm] = useState<any>({ 
    id: '', page: PORTAL_PAGES[0], title: '', content: '', 
    fileData: null, fileName: '', fileType: '',
    linkUrl: '', order: 0, 
    published: true, pinned: false, date: new Date().toISOString(), 
    eventType: "Evento", priority: "Média", categoryTag: "", linkGroup: "Sites Governamentais"
  });
  const [savedMsg, setSavedMsg] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    try {
      const saved = localStorage.getItem(PORTAL_KEY);
      if (saved && JSON.parse(saved).length > 0) {
        setItems(JSON.parse(saved));
      } else {
        setItems(DEFAULT_PORTAL_ITEMS);
        localStorage.setItem(PORTAL_KEY, JSON.stringify(DEFAULT_PORTAL_ITEMS));
      }
    } catch {
      setItems(DEFAULT_PORTAL_ITEMS);
    }
  }, []);

  const saveItems = (newItems: any[]) => {
    setItems(newItems);
    localStorage.setItem(PORTAL_KEY, JSON.stringify(newItems));
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 2000);
  };

  const handleEdit = (item: any) => {
    setEditingId(item.id);
    setForm({
      ...item,
      eventType: item.eventType || "Evento",
      priority: item.priority || "Média",
      categoryTag: item.categoryTag || "",
      linkGroup: item.linkGroup || "Sites Governamentais"
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Remover este conteúdo?")) {
      saveItems(items.filter(i => i.id !== id));
    }
  };

  const handleTogglePublish = (id: string) => {
    saveItems(items.map(i => i.id === id ? { ...i, published: !i.published } : i));
  };

  const handleTogglePin = (id: string) => {
    saveItems(items.map(i => i.id === id ? { ...i, pinned: !i.pinned } : i));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setForm({ ...form, fileData: event.target?.result as string, fileName: file.name, fileType: file.type });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newItems = [...items];
    const dataToSave = { ...form, date: form.date || new Date().toISOString() };
    if (editingId) {
      newItems = newItems.map(i => i.id === editingId ? dataToSave : i);
    } else {
      newItems.push({ ...dataToSave, id: Date.now().toString() });
    }
    saveItems(newItems);
    setEditingId(null);
    resetForm(activePage);
  };

  const resetForm = (pageName: string) => {
    setForm({
      id: '', page: pageName, title: '', content: '', 
      fileData: null, fileName: '', fileType: '', linkUrl: '', order: 0, 
      published: true, pinned: false, date: new Date().toISOString(), 
      eventType: "Evento", priority: "Média", categoryTag: "", linkGroup: "Sites Governamentais"
    });
  };

  const filteredItems = items
    .filter(i => i.page === activePage)
    .sort((a, b) => {
      if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
      return (a.order || 0) - (b.order || 0);
    });

  const renderCalendarView = () => {
    const monthItems = filteredItems.filter(i => {
      if (!i.date) return false;
      const d = new Date(i.date);
      return d.getMonth() === selectedDate?.getMonth() && d.getFullYear() === selectedDate?.getFullYear();
    }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    return (
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4 rounded-2xl bg-white/[0.02] border border-white/5 p-6">
          <div className="flex items-center justify-between mb-4">
             <h4 className="text-xs font-semibold uppercase tracking-wider text-[#00E5F1]">
               Eventos de {selectedDate?.toLocaleString('pt-BR', { month: 'long', year: 'numeric' })}
             </h4>
          </div>
          {monthItems.length === 0 ? (
            <div className="text-xs text-white/30 text-center py-8">Nenhum evento neste mês.</div>
          ) : monthItems.map(i => {
            const date = new Date(i.date);
            const evType = EVENT_TYPES.find(t => t.id === i.eventType) || EVENT_TYPES[0];
            return (
              <div key={i.id} className="flex gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors relative group">
                <div className="w-14 h-14 rounded-xl bg-[#00E5F1]/10 flex flex-col items-center justify-center shrink-0 border border-[#00E5F1]/20">
                  <span className="text-lg font-bold text-[#00E5F1] leading-none">{date.getDate()}</span>
                  <span className="text-[10px] uppercase text-[#00E5F1]/60 font-medium">{date.toLocaleString('pt-BR', { month: 'short' })}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="font-semibold text-sm text-white">{i.title}</h5>
                    <span className={`text-[9px] px-2 py-0.5 rounded-full ${evType.color}`}>{evType.id}</span>
                  </div>
                  {i.content && <p className="text-xs text-white/60 line-clamp-2 mb-1">{i.content}</p>}
                  <p className="text-[10px] text-white/30">{date.toLocaleString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
                </div>
                <div className="absolute right-4 top-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-[#080e10]/80 p-0.5 rounded-lg border border-white/5">
                  <button title={i.published ? "Ocultar" : "Publicar"} onClick={() => handleTogglePublish(i.id)} className="p-1 rounded hover:bg-white/5 text-white/40 hover:text-white transition-colors">
                    {i.published ? <Eye size={12} /> : <EyeOff size={12} />}
                  </button>
                  <button title="Editar" onClick={() => handleEdit(i)} className="p-1 rounded hover:bg-white/5 text-white/40 hover:text-[#00E5F1] transition-colors">
                    <Edit3 size={12} />
                  </button>
                  <button title="Excluir" onClick={() => handleDelete(i.id)} className="p-1 rounded hover:bg-white/5 text-white/40 hover:text-red-400 transition-colors">
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 flex justify-center">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={(d) => d && setSelectedDate(d)}
              className="bg-transparent text-white mx-auto [&_.rdp-day_button]:text-white [&_.rdp-cell]:p-1 [&_.rdp-caption_label]:font-medium [&_.rdp-button:hover]:bg-white/10 font-sans"
            />
          </div>
          <p className="text-[10px] text-white/40 text-center px-4">Selecione uma data no mini calendário acima para filtrar os eventos.</p>
        </div>
      </div>
    );
  };

  const getPageIcon = (page: string) => {
    switch (page) {
      case "Calendário": return CalendarIcon;
      case "Aniversariantes": return Gift;
      case "Comunicados": return Megaphone;
      case "Mural de Notícias": return FileText;
      case "Atualizações": return Activity;
      case "Links Rápidos": return LinkIcon;
      default: return Layout;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in pb-10">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#00E5F1]/10 flex items-center justify-center">
          <Layout size={20} className="text-[#00E5F1]" />
        </div>
        <div>
          <h1 className="text-xl font-medium tracking-tight text-white">Portal da Equipe</h1>
          <p className="text-xs text-white/40 mt-0.5">Gerencie os conteúdos e configurações do painel administrativo</p>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-[#00E5F1]/20 via-transparent to-transparent mb-6" />

      <div className="flex flex-col xl:flex-row gap-8 items-start">
        {/* Inner sub-sidebar */}
        <div className="w-full xl:w-[260px] shrink-0 flex flex-col gap-2 bg-white/[0.01] border border-white/5 p-5 rounded-3xl">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/30 px-2 mb-2 font-semibold">Tópicos Administrativos</p>
          {PORTAL_PAGES.map(p => {
            const Icon = getPageIcon(p);
            const isActive = activePage === p;
            return (
              <button 
                key={p} 
                onClick={() => {
                  setActivePage(p);
                  setEditingId(null);
                  resetForm(p);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[13px] font-semibold tracking-wide transition-all border ${
                  isActive 
                    ? "bg-[#00E5F1]/10 text-[#00E5F1] border-[#00E5F1]/20 shadow-[0_0_15px_rgba(0,229,241,0.05)]" 
                    : "border-transparent text-white/40 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Icon size={16} className={`shrink-0 ${isActive ? "text-[#00E5F1]" : "text-white/40"}`} />
                  <span className="truncate">{p}</span>
                </div>
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#00E5F1] shrink-0 ml-2" />}
              </button>
            )
          })}
        </div>

        {/* Editing & Listing main box */}
        <div className="flex-1 min-w-0 space-y-6 w-full">
          <div className="flex flex-wrap items-center justify-between gap-4 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
            <div>
              <h4 className="text-sm font-semibold text-white">{activePage}</h4>
              <p className="text-[10px] text-white/40">Visualização e edição de itens da seção</p>
            </div>
            
            {!editingId && form.title === undefined && (
              <button
                onClick={() => setForm({ 
                  id: '', 
                  page: activePage, 
                  title: '', 
                  content: '', 
                  fileData: null, 
                  fileName: '', 
                  fileType: '', 
                  linkUrl: '', 
                  order: 0, 
                  published: true, 
                  pinned: false, 
                  date: new Date().toISOString(), 
                  eventType: "Evento",
                  priority: "Média",
                  categoryTag: activePage === "Comunicados" ? "Administrativo" : "",
                  linkGroup: activePage === "Links Rápidos" ? "Sites Governamentais" : ""
                })}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#00E5F1]/15 text-[#00E5F1] hover:bg-[#00E5F1]/25 border border-[#00E5F1]/20 transition-all cursor-pointer"
              >
                <Plus size={14} /> Novo Item
              </button>
            )}
          </div>

          {/* Form */}
          {form.title !== undefined && (
            <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-5 animate-in slide-in-from-top-2">
              <div className="flex items-center gap-2 border-b border-white/5 pb-3">
                <Layout size={16} className="text-[#00E5F1]" />
                <h4 className="font-semibold text-xs uppercase tracking-wider text-white">{editingId ? "Editar Item" : "Novo Item"}</h4>
              </div>
              
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] uppercase tracking-widest text-[#00E5F1] font-semibold">
                      {activePage === "Links Rápidos" ? "Nome do Portal / Botão" : activePage === "Aniversariantes" ? "Nome do Colaborador" : "Título"}
                    </label>
                    <input required type="text" value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#00E5F1]/50 outline-none text-xs transition-colors text-white" placeholder="Ex: Digite o nome ou título principal" />
                  </div>
                  
                  {activePage !== "Links Rápidos" && (
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-widest text-white/50 font-semibold">
                        {activePage === "Aniversariantes" ? "Departamento / Setor" : "Descrição / Texto Livre"}
                      </label>
                      <textarea value={form.content} onChange={e => setForm({...form, content: e.target.value})} rows={3} className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#00E5F1]/50 outline-none text-xs resize-none transition-colors text-white" placeholder="Mensagem ou informações adicionais" />
                    </div>
                  )}

                  {activePage === "Links Rápidos" && (
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-widest text-white/50 flex items-center gap-1 font-semibold"><LinkIcon size={11}/> Link / URL Redirecionamento</label>
                      <input type="url" required value={form.linkUrl} onChange={e => setForm({...form, linkUrl: e.target.value})} className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-[#00E5F1]/50 outline-none text-xs text-white" placeholder="https://exemplo.com.br" />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {/* Contextual form fields based on type */}
                  {activePage === "Calendário" && (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <div className="space-y-1.5">
                        <label className="text-[9px] uppercase tracking-widest text-white/50 font-semibold">Data do Evento</label>
                        <input type="datetime-local" value={form.date ? form.date.slice(0, 16) : ""} onChange={e => setForm({...form, date: new Date(e.target.value).toISOString()})} className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/10 outline-none text-xs sm:text-sm text-white [color-scheme:dark]" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[9px] uppercase tracking-widest text-white/50 font-semibold">Categoria / Tipo</label>
                        <Select value={form.eventType} onValueChange={v => setForm({...form, eventType: v})}>
                          <SelectTrigger className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/10 outline-none text-sm text-white [&>span]:truncate">
                            <SelectValue placeholder="Selecione categoria" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0b1416] border-white/10 text-white min-w-[8rem]">
                            {EVENT_TYPES.map(t => (
                              <SelectItem key={t.id} value={t.id} className="text-xs cursor-pointer focus:bg-[#F59B23] focus:text-black focus:font-semibold">
                                {t.id}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {activePage === "Aniversariantes" && (
                    <div className="space-y-1.5 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <label className="text-[9px] uppercase tracking-widest text-white/50 font-semibold">Mês e Dia do Aniversário</label>
                      <input type="date" value={form.date ? form.date.slice(0, 10) : ""} onChange={e => setForm({...form, date: new Date(e.target.value + "T12:00:00.000Z").toISOString()})} className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/10 outline-none text-sm text-white [color-scheme:dark] max-w-xs" />
                    </div>
                  )}

                  {activePage === "Comunicados" && (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                      <div className="space-y-1.5">
                        <label className="text-[9px] uppercase tracking-widest text-white/50 font-semibold">Prioridade</label>
                        <Select value={form.priority} onValueChange={v => setForm({...form, priority: v})}>
                          <SelectTrigger className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/10 outline-none text-sm text-white">
                            <SelectValue placeholder="Selecione" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0b1416] border-white/10 text-white min-w-[8rem]">
                            {PRIORITIES.map(p => (
                              <SelectItem key={p.id} value={p.id} className="text-xs cursor-pointer focus:bg-[#F59B23] focus:text-black focus:font-semibold">
                                {p.id}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[9px] uppercase tracking-widest text-white/50 font-semibold">Área / Tag (Ex: Fiscal, RH)</label>
                        <input type="text" value={form.categoryTag} onChange={e => setForm({...form, categoryTag: e.target.value})} className="w-full px-4 py-2.5 rounded-xl bg-black/30 border border-white/10 outline-none text-sm text-white" placeholder="Ex: Societário" />
                      </div>
                    </div>
                  )}

                  {activePage === "Links Rápidos" && (
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-widest text-white/50 font-semibold">Grupo do Link</label>
                      <Select value={form.linkGroup} onValueChange={v => setForm({...form, linkGroup: v})}>
                        <SelectTrigger className="w-full px-3 py-3 rounded-xl bg-[#080e10]/80 border border-white/10 outline-none text-xs text-white">
                          <SelectValue placeholder="Selecione o grupo" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0b1416] border-white/10 text-white">
                          <SelectItem value="Sites Governamentais" className="text-xs cursor-pointer focus:bg-[#F59B23] focus:text-black focus:font-semibold">Sites Governamentais</SelectItem>
                          <SelectItem value="Notícias Contábeis" className="text-xs cursor-pointer focus:bg-[#F59B23] focus:text-black focus:font-semibold">Notícias Contábeis</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Attachment selector */}
                  {activePage !== "Links Rápidos" && activePage !== "Aniversariantes" && (
                    <div className="space-y-1.5">
                      <label className="text-[9px] uppercase tracking-widest text-white/50 font-semibold">Anexo (Documento ou Imagem para Comunicados/Notícias)</label>
                      <div className="relative overflow-hidden w-full px-4 py-3 rounded-xl border border-dashed border-white/10 bg-white/[0.01] hover:bg-white/[0.03] cursor-pointer transition-colors flex flex-col items-center justify-center gap-1.5">
                        <Upload size={16} className="text-[#00E5F1]" />
                        <span className="text-[10px] text-white/50 truncate max-w-full">
                          {form.fileName ? form.fileName : "Clique para anexar arquivo..."}
                        </span>
                        <input type="file" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" accept="image/*,.pdf,.doc,.docx" />
                      </div>
                      {form.fileData && (
                        <div className="flex items-center justify-between text-[10px] text-emerald-400 font-semibold mt-1">
                          <span>Salvo temporariamente (Local)</span>
                          <button type="button" onClick={() => setForm({...form, fileData: null, fileName: '', fileType: ''})} className="hover:text-red-400 transition-colors uppercase text-[9px] tracking-wider">Remover</button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-5">
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-xs text-white/50 cursor-pointer hover:text-white select-none">
                    <input type="checkbox" checked={form.published} onChange={e => setForm({...form, published: e.target.checked})} className="rounded bg-white/15 border-none w-4 h-4 accent-[#00E5F1]" /> Publicado
                  </label>
                  {(activePage === "Comunicados" || activePage === "Mural de Notícias" || activePage === "Atualizações") && (
                    <label className="flex items-center gap-2 text-xs text-white/50 cursor-pointer hover:text-white select-none">
                      <input type="checkbox" checked={form.pinned} onChange={e => setForm({...form, pinned: e.target.checked})} className="rounded bg-white/15 border-none w-4 h-4 accent-[#00E5F1]" /> Fixar
                    </label>
                  )}
                  {activePage !== "Calendário" && (
                    <div className="flex items-center gap-2 ml-2">
                      <span className="text-[9px] uppercase tracking-widest text-white/30 font-semibold">Ordem</span>
                      <input type="number" value={form.order} onChange={e => setForm({...form, order: Number(e.target.value)})} className="w-14 px-2 py-1 rounded bg-[#080e10] border border-white/10 outline-none text-xs text-center text-white" />
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <button type="button" onClick={() => setForm({ id: undefined, page: activePage })} className="px-4 py-2 rounded-xl text-xs font-semibold text-white/50 hover:bg-white/5 transition-all">
                    Cancelar
                  </button>
                  <button type="submit" className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-[#00E5F1] text-black shadow-[0_0_15px_rgba(0,229,241,0.2)] hover:scale-102 transition-all cursor-pointer">
                    <Save size={14} /> {editingId ? "Atualizar" : "Criar Item"}
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* Success Dialog */}
          {savedMsg && (
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-400/5 p-4 rounded-xl border border-emerald-400/10 font-semibold">
              <Check size={14} /> Modificações salvas com sucesso!
            </div>
          )}

          {/* Calendar view or Item List */}
          {activePage === "Calendário" ? renderCalendarView() : (
            <div className="space-y-3">
              {filteredItems.map((i) => {
                const priorityData = PRIORITIES.find(p => p.id === i.priority);
                return (
                  <div key={i.id} className={`flex items-start gap-4 p-5 rounded-2xl border transition-all ${i.pinned ? 'bg-[#00E5F1]/5 border-[#00E5F1]/10' : 'bg-white/[0.01] border-white/5 hover:border-white/10'} ${!i.published && 'opacity-40'}`}>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        {i.pinned && <Pin size={12} className="text-[#00E5F1]" />}
                        <h4 className="text-sm font-semibold text-white truncate">{i.title}</h4>
                        {i.categoryTag && <span className="text-[9px] uppercase px-2 py-0.5 rounded bg-white/5 text-white/60 font-medium">{i.categoryTag}</span>}
                        {priorityData && <span className={`text-[9px] px-2 py-0.5 rounded ${priorityData.color}`}>{priorityData.id}</span>}
                        {i.linkGroup && <span className={`text-[9px] px-2 py-0.5 rounded ${i.linkGroup === "Sites Governamentais" ? "bg-blue-500/10 text-blue-400" : "bg-emerald-500/10 text-emerald-400"}`}>{i.linkGroup}</span>}
                        {!i.published && <span className="text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-white/5 text-white/30 font-semibold">Oculto</span>}
                      </div>
                      
                      {i.content && <p className="text-xs text-white/50 mb-3 whitespace-pre-wrap leading-relaxed">{i.content}</p>}
                      {i.linkUrl && <p className="text-[10px] text-[#00E5F1]/70 font-mono mb-3 truncate hover:underline">{i.linkUrl}</p>}
                      
                      {/* Attachments preview */}
                      <div className="flex gap-2">
                        {i.fileName && i.fileType?.includes('pdf') && <span className="flex items-center gap-1.5 text-[9px] text-[#00E5F1] px-2 py-1 rounded bg-[#00E5F1]/5 font-semibold"><FileIcon size={10}/> {i.fileName}</span>}
                        {i.fileName && i.fileType?.includes('image') && <span className="flex items-center gap-1.5 text-[9px] text-emerald-400 px-2 py-1 rounded bg-emerald-400/5 font-semibold"><ImageIcon size={10}/> {i.fileName}</span>}
                        {i.linkUrl && <span className="flex items-center gap-1.5 text-[9px] text-orange-400 px-2 py-1 rounded bg-orange-400/5 font-semibold"><LinkIcon size={10}/> Link de Redirecionamento</span>}
                      </div>

                      {i.date && activePage === "Aniversariantes" && (
                        <p className="text-[10px] text-white/30 mt-2 font-medium">Data: {new Date(i.date).toLocaleDateString('pt-BR', {day: 'numeric', month: 'long', timeZone: 'UTC'})}</p>
                      )}
                    </div>
                    
                    <div className="flex flex-col gap-1 shrink-0">
                      <div className="flex items-center gap-1 bg-[#080e10] p-1 rounded-lg border border-white/5">
                        <button title={i.published ? "Ocultar" : "Publicar"} onClick={() => handleTogglePublish(i.id)} className="p-1.5 rounded hover:bg-white/5 text-white/40 hover:text-white transition-colors">
                          {i.published ? <Eye size={12} /> : <EyeOff size={12} />}
                        </button>
                        <button title="Editar" onClick={() => handleEdit(i)} className="p-1.5 rounded hover:bg-white/5 text-white/40 hover:text-[#00E5F1] transition-colors">
                          <Edit3 size={12} />
                        </button>
                        <button title="Excluir" onClick={() => handleDelete(i.id)} className="p-1.5 rounded hover:bg-white/5 text-white/40 hover:text-red-400 transition-colors">
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              {filteredItems.length === 0 && (
                <p className="text-xs text-white/20 p-10 text-center border border-dashed border-white/5 rounded-2xl bg-white/[0.01]">
                  Nenhum item adicionado à seção <span className="text-[#00E5F1]">{activePage}</span>.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
