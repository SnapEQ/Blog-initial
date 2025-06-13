
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
				<h1>Id: {loaderData.id}</h1>
				<h2>Title: {loaderData.title}</h2>
				<p>Body: {loaderData.body}</p>
			</div>
		</>
	);
}


export function ErrorBoundary({error} : {error: Error}){
    return(
        <div className="error">
            <h2>Something went wrong when loading this article.</h2>
            <pre>{error.message}</pre>
        </div>
    )
}