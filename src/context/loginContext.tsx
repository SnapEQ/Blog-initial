'use client'

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type AuthContextType = {
    token: string | null;
    login: (token: string, expiresIn: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


function isTokenExpired(token: string | null): boolean {
    if(!token) return true;
    try{
        // JWT format: header.payload.signature
        const payload = JSON.parse(atob(token.split('.')[1]));
        if(!payload.exp) return true;
        return Date.now() >= payload.exp * 1000;
    } catch {
        return true;
    }
}

export function AuthProvider({ children } : { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(
        typeof window !== "undefined" ? localStorage.getItem("token") : null
    );


    useEffect(() => {
        if(token && isTokenExpired(token)){
            logout();
        }
    }, [token]);


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
