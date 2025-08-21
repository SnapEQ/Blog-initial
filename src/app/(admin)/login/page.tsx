'use client'

import { useState } from "react";
import "./login.css"
import { useAuth } from "@/context/loginContext";
import { useRouter } from "next/navigation";
import { loginApi } from "@/app/_service/postApi";


export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
    const { login, isAuthenticated } = useAuth();


    

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const data = await loginApi(email, password);
            login(data.token, data.expiresIn);
            console.log(data.token, data.expiresIn);
            router.push('/');
        } catch (err: any){
            setError(err.message || 'Login failed');
        }

    }


    
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    className="login-form-email"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="login-form-password"
                />
                <button type="submit">Login</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </form>
        </div>
    )
}