'use client';

import React, { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { User } from "@/modulos/users/userType";
import { logoutUser } from "@/modulos/users/userApi";
import { useProfile } from "@/modulos/users/useUser";

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (userData: User) => void;
    logout: () => Promise<void>;
    updateUser: (userData: User) => void;
    authenticated: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const { isLoading } = useProfile();
    const queryClient = useQueryClient();
    const router = useRouter();



    const login = (userData: User) => {
        setUser(userData);
        queryClient.invalidateQueries({ queryKey: ["profile"] });
    };

    const logout = async () => {
        try {
            await logoutUser();
            setUser(null);
            queryClient.clear();
            router.replace("/auth/signin");
        } catch {
            toast.error("Error al cerrar sesión");
        }
    };

    const updateUser = (userData: User) => {
        setUser(userData);
        queryClient.setQueryData(["profile"], userData);
    };

    const authenticated = !!user;

    return (
        <AuthContext.Provider
            value={{ user, isLoading, login, logout, updateUser, authenticated }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
};
