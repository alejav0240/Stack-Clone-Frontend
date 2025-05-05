import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
    user: { id: number; username: string; email: string } | null;
    isAuthenticated: boolean;
    setUser: (user: { id: number; username: string; email: string }) => void;
    clearUser: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            setUser: (user) => set({ user, isAuthenticated: true }),
            clearUser: () => set({ user: null, isAuthenticated: false }),
        }),
        {
            name: 'auth-storage', // Guarda en localStorage automáticamente
        }
    )
);
