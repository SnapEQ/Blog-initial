

import { deletePostById, getPostById, getPosts } from "../../../_service/postApi";
import Post from "../components/post";
import { PostType } from "../types/postTypes";

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
	const { slug } = params;
	const post = await getPostById(slug);

	return <Post key={post.id} post={post} />;
}
