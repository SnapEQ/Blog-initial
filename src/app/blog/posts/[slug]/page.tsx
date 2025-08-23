

import { getPostById, getPosts } from "../../../_service/postApi";
import Post from "../components/post";
import { PostType } from "../types/postTypes";

import "../../posts/posts.css";

export async function generateStaticParams() {
	const posts: PostType[] = await getPosts();
	return posts.map(post => ({
		slug: post.id,
	}));
}


export default async function BlogPostPage({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = await params;
	const post = await getPostById(slug);

	return (
	<div className="single-post-container">
		<Post key={post.id} post={post} />
	</div>
	);
	
}
