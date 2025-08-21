'use client'

import { useRouter } from "next/navigation"
import './blog.css'

export default function Blog(){

    const router = useRouter();

    const handleReroute = () =>{
        router.push("/blog/posts")
    }


    return (
        <div className="blog-container">
            <div className="title-container">
                <h2 className="title">
                    I am really glad that I can welcome you to my one and only official blog that I will be developing with time
                </h2>
            </div>
            <div className="button-container">
                <button className="see-posts-button" onClick={handleReroute}>
                    Go to see posts
                </button>
            </div>
        </div>
    )
}