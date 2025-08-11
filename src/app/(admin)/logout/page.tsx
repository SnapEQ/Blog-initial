'use client'

import { useAuth } from "@/context/loginContext"
import { useRouter } from "next/navigation";

export default function LogoutPage(){

    const { logout, isAuthenticated } = useAuth();
    const router = useRouter();

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