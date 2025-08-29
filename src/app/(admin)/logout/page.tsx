'use client'

import { useAuth } from "@/context/loginContext"
import { redirect, useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export default function LogoutPage(){

    const { logout, isAuthenticated } = useAuth();
    const router = useRouter();

    useLayoutEffect(() => {
            const isAuth = isAuthenticated
            if (!isAuth){
                redirect("/")
            }
        }, [])

    const handleLogout = () => {
        logout();
        router.push("/");
    }

    return (
        <div className="logout-container">
            <button onClick={handleLogout} >Logout</button>
        </div>
    )
}