'use client'


import { PostProps } from "../types/postTypes";
import { useAuth } from "@/context/loginContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = PostProps & {
    onDelete?: (id:string) => void;
}

export default function Post({ post, onDelete} : Props){

    const router = useRouter();

    const handleReroute = () =>{
        router.push(`/blog/posts/${post.id}`)
    }

    const {isAuthenticated, token} = useAuth();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    


    return(
    <article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <small>By {post.author.name}</small>
            <button onClick={handleReroute}>See full post</button>
            {mounted && isAuthenticated && onDelete && (
                <button onClick={()=> onDelete(post.id)}>Delete Post</button>
            )}
    </article>
    )
}