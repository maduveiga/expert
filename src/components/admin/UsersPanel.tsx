import { useState, useEffect } from "react";
import { Plus, Trash2, Edit3, Save, X, Shield, ToggleLeft, ToggleRight, Check } from "lucide-react";

const USERS_KEY = 'expert_users';

const DEFAULT_USERS = [
  { login: 'econt.j01@gmail.com', password: 'Expert@', active: true, name: 'João' },
  { login: 'contador.expert01@gmail.com', password: 'Expert@', active: true, name: 'Contador' },
  { login: 'atend.expert@gmail.com', password: 'Expert@', active: true, name: 'Atendimento' },
];

export function UsersPanel() {
  const [users, setUsers] = useState<any[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [form, setForm] = useState({ login: '', password: '', active: true, name: '' });
  const [savedMsg, setSavedMsg] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(USERS_KEY);
      if (saved) setUsers(JSON.parse(saved));
      else setUsers(DEFAULT_USERS);
    } catch {
      setUsers(DEFAULT_USERS);
    }
  }, []);

  const saveUsers = (newUsers: any[]) => {
    setUsers(newUsers);
    localStorage.setItem(USERS_KEY, JSON.stringify(newUsers));
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 2000);
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setForm(users[index]);
  };

  const handleDelete = (index: number) => {
    if (confirm("Tem certeza que deseja remover este usuário?")) {
      const newUsers = [...users];
      newUsers.splice(index, 1);
      saveUsers(newUsers);
    }
  };

  const handleToggleActive = (index: number) => {
    const newUsers = [...users];
    newUsers[index].active = !newUsers[index].active;
    saveUsers(newUsers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newUsers = [...users];
    if (editingIndex !== null) {
      newUsers[editingIndex] = form;
    } else {
      newUsers.push(form);
    }
    saveUsers(newUsers);
    setEditingIndex(null);
    setForm({ login: '', password: '', active: true, name: '' });
  };

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm uppercase tracking-widest text-[#00E5F1] font-medium">Gerenciamento de Usuários</h3>
          <p className="text-xs text-white/50 mt-1">Crie, edite e gerencie o acesso dos colaboradores ao portal.</p>
        </div>
        {!editingIndex && form.login === '' && (
          <button
            onClick={() => { setEditingIndex(null); setForm({ login: '', password: '', active: true, name: '' }); }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#00E5F1]/15 text-[#00E5F1] hover:bg-[#00E5F1]/25 transition-all"
          >
            <Plus size={14} /> Novo Usuário
          </button>
        )}
      </div>

      {(editingIndex !== null || form.login !== '' || form.name !== '') && (
        <form onSubmit={handleSubmit} className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={16} className="text-[#00E5F1]" />
            <h4 className="text-sm font-medium">{editingIndex !== null ? "Editar Usuário" : "Novo Usuário"}</h4>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase text-white/40">Nome de Exibição</label>
              <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-4 py-2 rounded-xl bg-white/[0.04] border border-white/8 focus:border-[#00E5F1]/40 outline-none text-sm" placeholder="Ex: João Silva" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase text-white/40">Login / E-mail</label>
              <input required type="text" value={form.login} onChange={e => setForm({...form, login: e.target.value})} className="w-full px-4 py-2 rounded-xl bg-white/[0.04] border border-white/8 focus:border-[#00E5F1]/40 outline-none text-sm" placeholder="exemplo@gmail.com" />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase text-white/40">Senha de Acesso</label>
              <input required type="text" value={form.password} onChange={e => setForm({...form, password: e.target.value})} className="w-full px-4 py-2 rounded-xl bg-white/[0.04] border border-white/8 focus:border-[#00E5F1]/40 outline-none text-sm" placeholder="Senha" />
            </div>
            <div className="space-y-1 flex flex-col justify-center">
              <label className="text-[10px] uppercase text-white/40 mb-2">Status da Conta</label>
              <button type="button" onClick={() => setForm({...form, active: !form.active})} className="flex items-center gap-2 text-sm text-white/80">
                {form.active ? <ToggleRight size={24} className="text-emerald-400" /> : <ToggleLeft size={24} className="text-white/30" />}
                {form.active ? "Ativo" : "Bloqueado"}
              </button>
            </div>
          </div>
          <div className="flex gap-3 justify-end pt-4 border-t border-white/5">
            <button type="button" onClick={() => { setEditingIndex(null); setForm({ login: '', password: '', active: true, name: '' }); }} className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs text-white/40 hover:text-white/80 hover:bg-white/5 transition-all">
              <X size={14} /> Cancelar
            </button>
            <button type="submit" className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-[#00E5F1]/20 text-[#00E5F1] hover:bg-[#00E5F1]/30 transition-all">
              <Save size={14} /> Salvar Usuário
            </button>
          </div>
        </form>
      )}

      {savedMsg && (
        <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-400/10 p-3 rounded-xl border border-emerald-400/20">
          <Check size={14} /> Alterações salvas com sucesso!
        </div>
      )}

      <div className="space-y-2">
        {users.map((u, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
               <span className="text-[#00E5F1] text-xs font-bold uppercase">{u.name?.charAt(0) || u.login.charAt(0)}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">{u.name || 'Sem nome'}</p>
              <p className="text-[10px] text-white/40 font-mono mt-0.5">{u.login}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-[10px] px-2 py-1 rounded-full border ${u.active ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                {u.active ? 'Ativo' : 'Inativo'}
              </span>
            </div>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button title={u.active ? "Bloquear" : "Ativar"} onClick={() => handleToggleActive(i)} className="p-2 rounded-xl hover:bg-white/10 text-white/40 hover:text-white transition-colors">
                {u.active ? <ToggleRight size={16} className="text-emerald-400" /> : <ToggleLeft size={16} />}
              </button>
              <button title="Editar" onClick={() => handleEdit(i)} className="p-2 rounded-xl hover:bg-white/10 text-white/40 hover:text-white transition-colors">
                <Edit3 size={16} />
              </button>
              <button title="Excluir" onClick={() => handleDelete(i)} className="p-2 rounded-xl hover:bg-white/10 text-white/40 hover:text-red-400 transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
        {users.length === 0 && <p className="text-xs text-white/30 p-4 text-center">Nenhum usuário cadastrado.</p>}
      </div>
    </div>
  );
}
