
import type { Route } from "./+types/article";
import "./article.css";
import type { ArticleLoaderData } from "~/types/article_types";

export async function loader({ params }: Route.LoaderArgs) {
	const articleId = params.articleId;

	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${articleId}`
	);

	const article = await res.json();


	return article;
}

export async function action() {}




export default function Article({ loaderData }: ArticleLoaderData) {



	return (
		<>
			<div className='article'>
				<p>Id: {loaderData.id}</p>
				<p>Title: {loaderData.title}</p>
			</div>
		</>
	);
}
