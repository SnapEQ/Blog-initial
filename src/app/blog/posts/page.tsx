

import { getPosts } from "../../_service/postApi";
import { PostType } from "./types/postTypes";
import PostList from "./components/postsList";
import "./posts.css";

export default async function PostPage() {
	const posts: PostType[] = await getPosts();
	

	return (
	<div className="posts-container">
		<PostList initialPosts={posts}/>
	</div>
	);
}
