'use client'


import { PostProps } from "../types/postTypes";
import { useAuth } from "@/context/loginContext";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";



type Props = PostProps & {
    onDelete?: (id:string) => void;
}

export default function Post({ post, onDelete} : Props){

    const router = useRouter();
    const pathname : string = usePathname();

    const handleReroute = () =>{
        router.push(`/blog/posts/${post.id}`)
    }

    const {isAuthenticated, token} = useAuth();
    const [mounted, setMounted] = useState(false);
    const [isSingle, setIsSingle] = useState(false);

    useEffect(() => {
        setMounted(true);
        if(pathname.includes(post.id)){
            setIsSingle(true);
        }
        } , []);



    return(
    <div className="post">
        <div className="post-wrapper">
            <div className="title-author-wrapper">
                <div className="title-container">
                    <h1 className="title">{post.title}</h1>
                </div>

                <div className="author-container">
                    <h2 className="author-name">By {post.author.name}</h2> 
                </div>
            </div>
            

            <div className="content-container">
                <p className="content">{post.content}</p>
            </div>

            

            <div className="button-container">
                { !isSingle && <button onClick={handleReroute}>See full post</button>}
                {mounted && isAuthenticated && onDelete && (
                    <button onClick={()=> onDelete(post.id)}>Delete Post</button>
                )}
            </div>
        </div>
    </div>
    )
}