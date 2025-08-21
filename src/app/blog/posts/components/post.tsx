'use client'


import { PostProps } from "../types/postTypes";
import { useAuth } from "@/context/loginContext";
import { deletePostById } from "@/app/_service/postApi";
import { useEffect, useState } from "react";


type Props = PostProps & {
    onDelete?: (id:string) => void;
}

export default function Post({ post, onDelete} : Props){

    const {isAuthenticated, token} = useAuth();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    

    const handleDeletePost = (id: string) => {
        deletePostById(id, token);
    }

    return(
    <article>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <small>By {post.author.name}</small>
            
            {mounted && isAuthenticated && onDelete && (
                <button onClick={()=> onDelete(post.id)}>Delete Post</button>
            )}
    </article>
    )
}