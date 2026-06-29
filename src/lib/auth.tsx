import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type UserRole = 'master' | 'collaborator' | null;

interface AuthUser {
  login: string;
  role: UserRole;
}

interface AuthContextType {
  user: AuthUser | null;
  isMaster: boolean;
  login: (loginId: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
}

const MASTER_LOGIN = '4799460428';
const MASTER_PASSWORD = 'Expert@';

const DEFAULT_USERS = [
  { login: 'econt.j01@gmail.com', password: 'Expert@', active: true, name: 'João' },
  { login: 'contador.expert01@gmail.com', password: 'Expert@', active: true, name: 'Contador' },
  { login: 'atend.expert@gmail.com', password: 'Expert@', active: true, name: 'Atendimento' },
];

const SESSION_KEY = 'expert_auth_v2';
const USERS_KEY = 'expert_users';

const AuthContext = createContext<AuthContextType | null>(null);

function getSavedUsers() {
  try {
    const saved = localStorage.getItem(USERS_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_USERS;
  } catch {
    return DEFAULT_USERS;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) {
      try { setUser(JSON.parse(saved)); } catch {}
    }
  }, []);

  const login = useCallback((loginId: string, password: string): { success: boolean; error?: string } => {
    // Master login
    if (loginId === MASTER_LOGIN && password === MASTER_PASSWORD) {
      const authUser: AuthUser = { login: MASTER_LOGIN, role: 'master' };
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(authUser));
      setUser(authUser);
      return { success: true };
    }
    
    // Collaborator login (dynamic via localStorage)
    const users = getSavedUsers();
    const foundUser = users.find((u: any) => u.login.toLowerCase() === loginId.trim().toLowerCase());
    
    if (foundUser) {
      if (!foundUser.active) {
        return { success: false, error: 'Usuário inativo. Contate o administrador.' };
      }
      if (foundUser.password === password) {
        const authUser: AuthUser = { login: foundUser.login, role: 'collaborator' };
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(authUser));
        setUser(authUser);
        return { success: true };
      }
    }
    return { success: false, error: 'Credenciais inválidas. Verifique seu login e senha.' };
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isMaster: user?.role === 'master', login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
