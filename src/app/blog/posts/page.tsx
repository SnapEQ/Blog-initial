

import { getPosts } from "../../_service/postApi";
import { PostType } from "./types/postTypes";
import PostList from "./components/postsList";

export default async function PostPage() {
	const posts: PostType[] = await getPosts();
	
	console.log(posts);

	return <PostList initialPosts={posts}/>
}
