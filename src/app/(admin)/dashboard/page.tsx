'use client'

import { useAuth } from "@/context/loginContext";
import { redirect } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import "./dashboard.css"
import { createPost } from "@/app/_service/postApi";

export default function Dashboard() {
	const [title, setTitle] = useState<string>("");
	const [content, setContent] = useState<string>("");
	const [status, setStatus] = useState<string>("");
	const { isAuthenticated } = useAuth();
    const [error, setError] = useState("");
    const [token, setToken] = useState<string | null>('');

	useLayoutEffect(() => {
		const isAuth = isAuthenticated;
		if (!isAuth) {
			redirect("/");
		}
	}, []);

    useEffect(()=> {
        setToken(localStorage.getItem('token'));
    }, [])

	const clearForm  = () => {
		setTitle("");
		setContent("");
		setStatus("");
	}


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try{
            console.log(status);
            const res = await createPost(title, content, status, token);
            console.log(res);
			clearForm();

        } catch (err: any){
            setError(err.message || 'Post creation failed');
        }
        

        

    }

	return (
		<div className='dashboard-layout'>
			<div className='dashboard-container'>
				<div className='dashboard-create-post'>
					<div className='dashboard-create-post-form'>
						<form className='create-post-form' onSubmit={handleSubmit}>
							<input
								type="text"
								placeholder="Title"
								value={title}
								onChange={e => setTitle(e.target.value)}
								required
								className='create-post-form-title'
							/>
							<input
								type='text'
								placeholder='Content'
								value={content}
								onChange={e => setContent(e.target.value)}
								required
								className='create-post-form-content'
							/>
							<input 
                            type='radio' 
                            name='status' 
                            value='DRAFT' 
							checked = {status === 'DRAFT'}
                            onChange={e => setStatus(e.target.value)}/> DRAFT
							<input 
                            type='radio' 
                            name='status' 
                            value='PUBLISHED'
							checked = {status === 'PUBLISHED'} 
							required
                            onChange={e => setStatus(e.target.value)}/> PUBLISHED
                            <button type="submit">
                                Create post
                            </button>
                            {error && <p style={{ color: "red" }}>{error}</p>}
						</form>
					</div>
				</div>
			</div>
            <div className="dashboard-container">
                
            </div>
		</div>
	);
}
