'use client'

import { useState, useTransition } from "react";
import { PostType } from "../types/postTypes"
import { useAuth } from "@/context/loginContext";
import { useRouter } from "next/navigation";
import { deletePostById } from "@/app/_service/postApi";
import Post from "./post";

type Props = {
    initialPosts: PostType[];
};

export default function PostList({initialPosts}: Props){
    const [posts, setPosts] = useState<PostType[]>(initialPosts);
    const [isPending, startTransition] = useTransition();
    const { token} = useAuth();
    const router = useRouter();


    async function handleDelete(id: string){
        const prev = posts;
        setPosts(prev => prev.filter(p => p.id !== id));


        try{
            await deletePostById(id, token);
            // router.refresh();    // <- triggers server re-render
        } catch (err){
            // Rollback on failure
            setPosts(prev);
            console.error(err);

        }
    }

    return (
        <>
        {posts.map(post => (
            <Post 
                key={post.id}
                post = {post}
                onDelete = {handleDelete}
            />
        ))}
        {isPending && <p>Updating...</p>}
        </>
    )
}