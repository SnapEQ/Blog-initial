'use client'

import { createContext, ReactNode, useContext, useState } from 'react';

type AuthContextType = {
    token: string | null;
    login: (token: string, expiresIn: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children } : { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(
        typeof window !== "undefined" ? localStorage.getItem("token") : null
    );

    const login = (newToken: string, expiresIn: string) => {
        setToken(newToken);
        localStorage.setItem("token", newToken);
        localStorage.setItem("token_expiry", expiresIn);
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("token_expiry");
    };

    const isAuthenticated = !!token;

    return (
        <AuthContext.Provider value={{token, login, logout, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);
    if(!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
}
