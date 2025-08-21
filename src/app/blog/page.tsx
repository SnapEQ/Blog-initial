'use client'

import { useRouter } from "next/navigation"

export default function Blog(){

    const router = useRouter();

    const handleReroute = () =>{
        router.push("/blog/posts")
    }


    return (
        <div className="blog-container">
            <h2>I am really glad that I can welcome you to my one and only official blog that I will be developing with time</h2>
            <button onClick={handleReroute}>Go to see posts</button>
        </div>
    )
}