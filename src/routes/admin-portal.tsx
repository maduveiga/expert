import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth";
import { useEffect } from "react";
import { TeamPortalPanel } from "@/components/admin/TeamPortalPanel";
import { ArrowLeft, Shield } from "lucide-react";

export const Route = createFileRoute("/admin-portal")({
  head: () => ({
    meta: [{ title: "Portal da Equipe — Master Admin" }],
  }),
  component: AdminPortalPage,
});

export function AdminPortalPage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "master") {
      navigate({ to: "/login" });
    }
  }, [user, navigate]);

  if (!user || user.role !== "master") return null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-[#0b1416]/95 backdrop-blur-xl flex items-center gap-4 px-5 py-3">
        <button
          onClick={() => navigate({ to: "/admin" })}
          className="flex items-center gap-2 text-xs text-white/40 hover:text-white transition-colors px-3 py-2 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5"
        >
          <ArrowLeft size={14} /> Voltar ao Admin
        </button>
        <div className="h-4 w-px bg-white/10" />
        <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">Portal da Equipe</span>
        <div className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5">
          <Shield size={13} className="text-[#00E5F1]" />
          <span className="text-[10px] text-white/40">Master Admin</span>
        </div>
      </header>

      {/* Full-page TeamPortalPanel */}
      <div className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
        <TeamPortalPanel />
      </div>
    </div>
  );
}
