import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { useState, useEffect, useRef } from "react";
import {
  Settings, Palette, Type, Layout, Globe, Shield, LogOut,
  Save, Eye, RotateCcw, ChevronRight, Plus, Trash2, Edit3,
  Check, X, Monitor, Smartphone, Tablet, Home, FileText,
  Image, Link2, ToggleLeft, Code, Bell, Star, ArrowLeft,
  Menu, Layers, RefreshCw, Download, Upload, HelpCircle,
  AlertCircle, Info, ChevronDown, Users
} from "lucide-react";

import { UsersPanel } from "@/components/admin/UsersPanel";
import { TeamPortalPanel } from "@/components/admin/TeamPortalPanel";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Painel Master — Expert Contabilidade" }],
  }),
  component: AdminPage,
});

// ============================================================
// DEFAULT SITE CONFIG (editable)
// ============================================================
const DEFAULT_CONFIG = {
  // Palette
  colorNeon: "#00E5F1",
  colorOrange: "#F59B23",
  colorBg: "#0b1416",
  colorPetrol: "#113A42",

  // Hero Section
  heroTagline: "Inteligência contábil em Araquari",
  heroTitle: "Sua empresa merece mais do que uma contabilidade tradicional.",
  heroSubtitle:
    "A Expert Contabilidade une estratégia, tecnologia e atendimento próximo para ajudar empresas e empresários a crescerem com segurança.",
  heroCta1: "Atendimento pelo WhatsApp",
  heroCta1Url: "https://wa.me/5547992373196?text=Olá! Quero atendimento pelo WhatsApp da Expert Contabilidade.",
  heroCta2: "Abrir meu CNPJ",
  heroCta2Url: "https://wa.me/5547992373196?text=Olá! Quero abrir meu CNPJ com a Expert Contabilidade.",

  // About Section
  aboutTitle: "Uma contabilidade humana, próxima e estratégica.",
  aboutText:
    "Desde 2021, a Expert Contabilidade nasceu do propósito de transformar a relação entre empresários e contadores. Unimos tecnologia, atendimento personalizado e visão estratégica para entregar muito mais do que números.",

  // CTA Section
  ctaTitle: "Pronto para uma contabilidade à altura da sua ambição?",
  ctaSubtitle:
    "Fale diretamente com nossa equipe pelo WhatsApp e descubra como organizar, otimizar e expandir a sua operação agora.",

  // Footer / Contact
  whatsappNumber: "5547992373196",
  footerAddress: "Araquari, SC — Brasil",
  footerEmail: "contador@experconta.com.br",
  footerCopyright: "© 2025 Expert Contabilidade. Todos os direitos reservados.",

  // Global
  siteName: "Expert Contabilidade",
  siteTagline: "Estratégia, tecnologia e atendimento próximo",
  googleRating: "5.0",

  // Culture quote
  cultureQuote: "É expressamente proibido viver sem sonhos, sem propósitos ou gratidão.",
};

type ConfigKey = keyof typeof DEFAULT_CONFIG;

// ============================================================
// Types
// ============================================================
type NavItem = {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  section: string;
};

const navItems: NavItem[] = [
  { id: "team_portal", icon: Layout, label: "Portal da Equipe", section: "design" },
  { id: "palette", icon: Palette, label: "Paleta de Cores", section: "design" },
  { id: "hero", icon: Home, label: "Hero / Capa", section: "content" },
  { id: "about", icon: FileText, label: "Sobre / Quem Somos", section: "content" },
  { id: "cta", icon: Bell, label: "Call-to-Action", section: "content" },
  { id: "contact", icon: Globe, label: "Contato e Links", section: "content" },
  { id: "global", icon: Settings, label: "Configurações Globais", section: "system" },
  { id: "pages", icon: Layers, label: "Páginas", section: "system" },
  { id: "users", icon: Users, label: "Usuários", section: "system" },
];

// ============================================================
// Sub-components
// ============================================================
function ColorField({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all group">
      <div className="relative">
        <div
          className="w-12 h-12 rounded-xl border-2 border-white/10 cursor-pointer shadow-lg transition-transform hover:scale-105"
          style={{ background: value }}
        />
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-xl"
        />
      </div>
      <div className="flex-1">
        <p className="text-xs uppercase tracking-widest text-white/40 mb-1">{label}</p>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-transparent text-sm font-mono text-white/80 outline-none w-full"
        />
      </div>
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  multiline,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  hint?: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-[10px] uppercase tracking-[0.2em] text-white/40">{label}</label>
        {hint && <span className="text-[10px] text-white/20">{hint}</span>}
      </div>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/8 focus:border-[#00E5F1]/40 outline-none transition-all text-sm resize-none text-white/90 placeholder-white/20"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/8 focus:border-[#00E5F1]/40 outline-none transition-all text-sm text-white/90 placeholder-white/20"
        />
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xs uppercase tracking-[0.25em] text-[#00E5F1]/60 font-medium">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function SectionDivider() {
  return <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6" />;
}

// ============================================================
// Panels
// ============================================================
function PalettePanel({
  config,
  onChange,
}: {
  config: typeof DEFAULT_CONFIG;
  onChange: (key: ConfigKey, value: string) => void;
}) {
  return (
    <div className="space-y-6">
      <Section title="Cores da Marca">
        <ColorField
          label="Neon / Primária (Destaque Principal)"
          value={config.colorNeon}
          onChange={(v) => onChange("colorNeon", v)}
        />
        <ColorField
          label="Laranja Premium (Detalhes e Ênfase)"
          value={config.colorOrange}
          onChange={(v) => onChange("colorOrange", v)}
        />
        <ColorField
          label="Petrol (Tons Escuros de Fundo)"
          value={config.colorPetrol}
          onChange={(v) => onChange("colorPetrol", v)}
        />
        <ColorField
          label="Background Principal"
          value={config.colorBg}
          onChange={(v) => onChange("colorBg", v)}
        />
      </Section>
      <div className="rounded-2xl border border-white/5 p-5 bg-[#00E5F1]/5">
        <p className="text-xs text-white/50 mb-3 uppercase tracking-widest">Prévia das Cores</p>
        <div className="flex gap-3 flex-wrap">
          {[
            { label: "Neon", bg: config.colorNeon },
            { label: "Laranja", bg: config.colorOrange },
            { label: "Petrol", bg: config.colorPetrol },
            { label: "BG", bg: config.colorBg },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full border border-white/10" style={{ background: c.bg }} />
              <span className="text-[10px] text-white/40">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroPanel({
  config,
  onChange,
}: {
  config: typeof DEFAULT_CONFIG;
  onChange: (key: ConfigKey, value: string) => void;
}) {
  return (
    <div className="space-y-5">
      <Section title="Texto de Destaque (Hero)">
        <TextField
          label="Eyebrow / Tag Superior"
          value={config.heroTagline}
          onChange={(v) => onChange("heroTagline", v)}
          hint="Frase pequena acima do título"
        />
        <TextField
          label="Título Principal"
          value={config.heroTitle}
          onChange={(v) => onChange("heroTitle", v)}
          multiline
        />
        <TextField
          label="Subtítulo / Descrição"
          value={config.heroSubtitle}
          onChange={(v) => onChange("heroSubtitle", v)}
          multiline
        />
      </Section>
      <SectionDivider />
      <Section title="Botões de Ação (CTAs)">
        <TextField
          label="CTA Primário — Texto"
          value={config.heroCta1}
          onChange={(v) => onChange("heroCta1", v)}
        />
        <TextField
          label="CTA Primário — URL"
          value={config.heroCta1Url}
          onChange={(v) => onChange("heroCta1Url", v)}
          hint="Link completo"
        />
        <TextField
          label="CTA Secundário — Texto"
          value={config.heroCta2}
          onChange={(v) => onChange("heroCta2", v)}
        />
        <TextField
          label="CTA Secundário — URL"
          value={config.heroCta2Url}
          onChange={(v) => onChange("heroCta2Url", v)}
          hint="Link completo"
        />
      </Section>
    </div>
  );
}

function AboutPanel({
  config,
  onChange,
}: {
  config: typeof DEFAULT_CONFIG;
  onChange: (key: ConfigKey, value: string) => void;
}) {
  return (
    <div className="space-y-5">
      <Section title="Seção Sobre / Quem Somos">
        <TextField
          label="Título"
          value={config.aboutTitle}
          onChange={(v) => onChange("aboutTitle", v)}
        />
        <TextField
          label="Texto Descritivo"
          value={config.aboutText}
          onChange={(v) => onChange("aboutText", v)}
          multiline
        />
      </Section>
      <SectionDivider />
      <Section title="Frase Cultural">
        <TextField
          label="Citação / Lema (Área do Colaborador)"
          value={config.cultureQuote}
          onChange={(v) => onChange("cultureQuote", v)}
          multiline
          hint="Aparece no rodapé do painel de colaboradores"
        />
      </Section>
    </div>
  );
}

function CtaPanel({
  config,
  onChange,
}: {
  config: typeof DEFAULT_CONFIG;
  onChange: (key: ConfigKey, value: string) => void;
}) {
  return (
    <div className="space-y-5">
      <Section title="Seção de Chamada Final (CTA)">
        <TextField
          label="Título da Seção CTA"
          value={config.ctaTitle}
          onChange={(v) => onChange("ctaTitle", v)}
          multiline
        />
        <TextField
          label="Subtítulo / Descrição"
          value={config.ctaSubtitle}
          onChange={(v) => onChange("ctaSubtitle", v)}
          multiline
        />
      </Section>
      <SectionDivider />
      <Section title="Avaliação Google">
        <TextField
          label="Nota Google (ex: 5.0)"
          value={config.googleRating}
          onChange={(v) => onChange("googleRating", v)}
        />
      </Section>
    </div>
  );
}

function ContactPanel({
  config,
  onChange,
}: {
  config: typeof DEFAULT_CONFIG;
  onChange: (key: ConfigKey, value: string) => void;
}) {
  return (
    <div className="space-y-5">
      <Section title="WhatsApp e Contato">
        <TextField
          label="Número WhatsApp (somente dígitos, com DDI)"
          value={config.whatsappNumber}
          onChange={(v) => onChange("whatsappNumber", v)}
          hint="Ex: 5547992373196"
        />
        <TextField
          label="Endereço (Rodapé)"
          value={config.footerAddress}
          onChange={(v) => onChange("footerAddress", v)}
        />
        <TextField
          label="E-mail de Contato"
          value={config.footerEmail}
          onChange={(v) => onChange("footerEmail", v)}
        />
      </Section>
      <SectionDivider />
      <Section title="Rodapé">
        <TextField
          label="Texto de Copyright"
          value={config.footerCopyright}
          onChange={(v) => onChange("footerCopyright", v)}
        />
      </Section>
    </div>
  );
}

function GlobalPanel({
  config,
  onChange,
}: {
  config: typeof DEFAULT_CONFIG;
  onChange: (key: ConfigKey, value: string) => void;
}) {
  return (
    <div className="space-y-5">
      <Section title="Identidade do Site">
        <TextField
          label="Nome do Site"
          value={config.siteName}
          onChange={(v) => onChange("siteName", v)}
        />
        <TextField
          label="Tagline Global"
          value={config.siteTagline}
          onChange={(v) => onChange("siteTagline", v)}
        />
      </Section>
    </div>
  );
}

const PAGES = [
  { path: "/", label: "Home", icon: Home },
  { path: "/mais-que-contabilidade", label: "Mais que Contabilidade", icon: FileText },
  { path: "/solucoes", label: "Soluções", icon: Layers },
  { path: "/crescimento", label: "Crescimento", icon: Star },
  { path: "/suporte-mei", label: "Suporte MEI", icon: Shield },
  { path: "/irpf", label: "IRPF", icon: FileText },
  { path: "/conteudos", label: "Conteúdos", icon: FileText },
  { path: "/talentos", label: "Talentos", icon: FileText },
  { path: "/contato", label: "Contato", icon: Globe },
  { path: "/login", label: "Área do Colaborador", icon: Shield },
];

function PagesPanel() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-[#00E5F1]/10 bg-[#00E5F1]/5 p-4 flex gap-3">
        <Info size={16} className="text-[#00E5F1] shrink-0 mt-0.5" />
        <p className="text-xs text-white/60 leading-relaxed">
          Gerencie as páginas disponíveis no site. Em versões futuras será possível criar, ocultar e reordenar páginas. Por enquanto, visualize as rotas ativas.
        </p>
      </div>
      <div className="space-y-2">
        {PAGES.map((p) => (
          <div
            key={p.path}
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#00E5F1]/10 flex items-center justify-center">
              <p.icon size={16} className="text-[#00E5F1]" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{p.label}</p>
              <p className="text-[10px] text-white/30 font-mono">{p.path}</p>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Ativa
              </span>
              <a
                href={p.path}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl hover:bg-white/5 text-white/30 hover:text-[#00E5F1] transition-colors"
                title="Visualizar"
              >
                <Eye size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Main Page
// ============================================================
export function AdminPage() {
  const { user, isMaster, logout } = useAuth();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("palette");
  const [config, setConfig] = useState<typeof DEFAULT_CONFIG>(() => {
    try {
      const saved = localStorage.getItem("expert_site_config");
      return saved ? { ...DEFAULT_CONFIG, ...JSON.parse(saved) } : DEFAULT_CONFIG;
    } catch {
      return DEFAULT_CONFIG;
    }
  });
  const [saved, setSaved] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");

  // Redirect if not master
  useEffect(() => {
    if (!isMaster) {
      navigate({ to: "/login" });
    }
  }, [isMaster, navigate]);

  const handleChange = (key: ConfigKey, value: string) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    localStorage.setItem("expert_site_config", JSON.stringify(config));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    // Apply CSS vars live
    applyCssVars(config);
  };

  const handleReset = () => {
    if (confirm("Restaurar todas as configurações para os valores padrão?")) {
      setConfig(DEFAULT_CONFIG);
      localStorage.removeItem("expert_site_config");
      applyCssVars(DEFAULT_CONFIG);
    }
  };

  // Apply config to CSS variables globally
  function applyCssVars(cfg: typeof DEFAULT_CONFIG) {
    const root = document.documentElement;
    root.style.setProperty("--neon", cfg.colorNeon);
    root.style.setProperty("--orange-premium", cfg.colorOrange);
    root.style.setProperty("--petrol", cfg.colorPetrol);
    root.style.setProperty("--background", cfg.colorBg);
  }

  if (!isMaster) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b1416]">
        <div className="text-center">
          <Shield size={40} className="text-red-400 mx-auto mb-4" />
          <p className="text-white/60">Acesso restrito ao administrador master.</p>
        </div>
      </div>
    );
  }

  const activeNav = navItems.find((n) => n.id === activeSection);

  const groupedNav = [
    { groupLabel: "Design", items: navItems.filter((n) => n.section === "design") },
    { groupLabel: "Conteúdo", items: navItems.filter((n) => n.section === "content") },
    { groupLabel: "Sistema", items: navItems.filter((n) => n.section === "system") },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#080e10] text-white" style={{ fontFamily: "'General Sans', 'Inter', system-ui, sans-serif" }}>
      {/* ========== TOP BAR ========== */}
      <header className="h-14 border-b border-white/5 flex items-center justify-between px-4 md:px-6 shrink-0 z-30 sticky top-0"
        style={{ background: "color-mix(in oklab, #080e10 80%, transparent)", backdropFilter: "blur(16px)" }}>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            className="p-2 rounded-xl hover:bg-white/5 text-white/40 hover:text-white transition-colors md:hidden"
          >
            <Menu size={18} />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#00E5F1]/15 flex items-center justify-center">
              <Shield size={14} className="text-[#00E5F1]" />
            </div>
            <span className="font-medium text-sm tracking-tight">Painel Master</span>
            <span className="hidden sm:inline text-white/20 mx-1">·</span>
            <span className="hidden sm:inline text-xs text-white/30">Expert Contabilidade</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Live Preview Device */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-xl p-1 border border-white/5">
            {([["desktop", Monitor], ["tablet", Tablet], ["mobile", Smartphone]] as const).map(([d, Icon]) => (
              <button
                key={d}
                onClick={() => setPreviewDevice(d)}
                className={`p-1.5 rounded-lg transition-all ${previewDevice === d ? "bg-[#00E5F1]/20 text-[#00E5F1]" : "text-white/30 hover:text-white/60"}`}
              >
                <Icon size={15} />
              </button>
            ))}
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs text-white/40 hover:text-white/70 hover:bg-white/5 transition-all border border-white/5"
          >
            <RotateCcw size={13} /> Restaurar
          </button>

          <button
            onClick={handleSave}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
              saved
                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                : "bg-[#00E5F1]/15 text-[#00E5F1] border-[#00E5F1]/25 hover:bg-[#00E5F1]/25"
            }`}
          >
            {saved ? <Check size={13} /> : <Save size={13} />}
            {saved ? "Salvo!" : "Salvar"}
          </button>

          <button
            onClick={() => { logout(); navigate({ to: "/login" }); }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs text-white/30 hover:text-red-400 hover:bg-red-500/10 transition-all border border-white/5"
          >
            <LogOut size={13} /> Sair
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* ========== SIDEBAR ========== */}
        <aside
          className={`${sidebarOpen ? "w-64" : "w-0"} md:w-64 shrink-0 border-r border-white/5 flex flex-col overflow-hidden transition-all duration-300`}
          style={{ background: "color-mix(in oklab, #0b1416 90%, transparent)" }}
        >
          <div className="flex-1 overflow-y-auto py-5 px-3 space-y-6">
            {groupedNav.map((group) => (
              <div key={group.groupLabel}>
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/25 px-3 mb-2">{group.groupLabel}</p>
                <div className="space-y-0.5">
                  {group.items.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          if (item.id === "team_portal") {
                            navigate({ to: "/admin-portal" });
                          } else {
                            setActiveSection(item.id);
                            setSidebarOpen(false);
                          }
                        }}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
                          isActive
                            ? "bg-[#00E5F1]/12 text-[#00E5F1] border border-[#00E5F1]/15"
                            : "text-white/50 hover:text-white/80 hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <item.icon size={16} />
                        <span className="flex-1 text-left">{item.label}</span>
                        {isActive && <ChevronRight size={12} className="shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-white/5">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03]">
              <div className="w-8 h-8 rounded-full bg-[#00E5F1]/15 flex items-center justify-center">
                <Shield size={14} className="text-[#00E5F1]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-medium leading-tight">Master Admin</p>
                <p className="text-[10px] text-white/30 truncate">{user?.login}</p>
              </div>
            </div>
          </div>
        </aside>

        {/* ========== MAIN CONTENT ========== */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto py-8 px-4 md:px-8">
            {/* Section Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                {activeNav && (
                  <div className="w-9 h-9 rounded-xl bg-[#00E5F1]/10 flex items-center justify-center">
                    <activeNav.icon size={18} className="text-[#00E5F1]" />
                  </div>
                )}
                <div>
                  <h1 className="text-xl font-medium tracking-tight">{activeNav?.label ?? "Editor"}</h1>
                  <p className="text-xs text-white/30 mt-0.5">Editar conteúdo e configurações</p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-[#00E5F1]/20 via-transparent to-transparent mt-4" />
            </div>

            {/* Panels */}
            <div className="animate-in fade-in-0 slide-in-from-bottom-2 duration-300" key={activeSection}>
              {activeSection === "palette" && <PalettePanel config={config} onChange={handleChange} />}
              {activeSection === "hero" && <HeroPanel config={config} onChange={handleChange} />}
              {activeSection === "about" && <AboutPanel config={config} onChange={handleChange} />}
              {activeSection === "cta" && <CtaPanel config={config} onChange={handleChange} />}
              {activeSection === "contact" && <ContactPanel config={config} onChange={handleChange} />}
              {activeSection === "global" && <GlobalPanel config={config} onChange={handleChange} />}
              {activeSection === "pages" && <PagesPanel />}
              {activeSection === "users" && <UsersPanel />}
            </div>

            {/* Bottom Save Bar */}
            {(activeSection !== "pages" && activeSection !== "users") && (
              <div className="mt-10 flex items-center justify-between p-5 rounded-2xl border border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-2 text-xs text-white/30">
                  <AlertCircle size={14} />
                  <span>As alterações são salvas localmente e aplicadas ao site.</span>
                </div>
                <button
                  onClick={handleSave}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    saved
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-[#00E5F1]/12 text-[#00E5F1] border border-[#00E5F1]/25 hover:bg-[#00E5F1]/20"
                  }`}
                >
                  {saved ? <Check size={15} /> : <Save size={15} />}
                  {saved ? "Alterações salvas!" : "Salvar alterações"}
                </button>
              </div>
            )}
          </div>
        </main>

        {/* ========== LIVE PREVIEW ========== */}
        <aside className="hidden xl:flex w-[380px] shrink-0 border-l border-white/5 flex-col">
          <div className="p-4 border-b border-white/5 flex items-center justify-between">
            <p className="text-xs uppercase tracking-widest text-white/30">Prévia ao Vivo</p>
            <div className="flex items-center gap-1 bg-white/5 rounded-lg p-0.5">
              {([["desktop", Monitor], ["tablet", Tablet], ["mobile", Smartphone]] as const).map(([d, Icon]) => (
                <button
                  key={d}
                  onClick={() => setPreviewDevice(d)}
                  className={`p-1.5 rounded-md transition-all ${previewDevice === d ? "bg-[#00E5F1]/20 text-[#00E5F1]" : "text-white/30 hover:text-white/60"}`}
                >
                  <Icon size={13} />
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex items-start justify-center p-4 bg-[#060b0d]">
            <div
              className="rounded-xl overflow-hidden border border-white/5 transition-all duration-300 shadow-2xl"
              style={{
                width: previewDevice === "mobile" ? "375px" : previewDevice === "tablet" ? "100%" : "100%",
                maxWidth: "100%",
                minHeight: "400px",
                background: config.colorBg,
              }}
            >
              {/* Mini Preview */}
              <div style={{ transform: "scale(0.6)", transformOrigin: "top left", width: "166.67%", pointerEvents: "none" }}>
                <div style={{ padding: "24px", minHeight: "600px" }}>
                  {/* Mini Hero */}
                  <div style={{ background: `linear-gradient(135deg, ${config.colorPetrol}80, ${config.colorBg})`, borderRadius: "16px", padding: "32px", marginBottom: "24px" }}>
                    <div style={{ fontSize: "10px", color: config.colorNeon, marginBottom: "8px", letterSpacing: "0.2em", textTransform: "uppercase" }}>{config.heroTagline}</div>
                    <div style={{ fontSize: "22px", fontWeight: 600, color: "#fff", marginBottom: "12px", lineHeight: 1.2 }}>{config.heroTitle}</div>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", marginBottom: "20px", lineHeight: 1.5 }}>{config.heroSubtitle.slice(0, 120)}...</div>
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: "6px",
                      padding: "8px 18px", borderRadius: "999px",
                      background: config.colorNeon, color: "#0b1416", fontSize: "11px", fontWeight: 700
                    }}>
                      {config.heroCta1}
                    </div>
                  </div>

                  {/* Mini Palette Preview */}
                  <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
                    {[config.colorNeon, config.colorOrange, config.colorPetrol].map((c, i) => (
                      <div key={i} style={{ width: "40px", height: "40px", borderRadius: "10px", background: c }} />
                    ))}
                  </div>

                  {/* Mini Content preview */}
                  <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "12px", padding: "20px", marginBottom: "12px" }}>
                    <div style={{ fontSize: "8px", color: config.colorNeon, marginBottom: "6px", letterSpacing: "0.2em" }}>QUEM SOMOS</div>
                    <div style={{ fontSize: "15px", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>{config.aboutTitle}</div>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{config.aboutText.slice(0, 150)}...</div>
                  </div>

                  <div style={{ background: `linear-gradient(135deg, ${config.colorNeon}15, ${config.colorOrange}10)`, borderRadius: "12px", padding: "20px" }}>
                    <div style={{ fontSize: "15px", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>{config.ctaTitle}</div>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{config.ctaSubtitle.slice(0, 100)}...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 border-t border-white/5 text-center">
            <p className="text-[10px] text-white/20">Prévia representativa • Salve para aplicar ao site</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
