import type { ArticlesProps } from "~/types/article_types";
import type { Route } from "./+types";
import { Link } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
	
		const res = await fetch("https://jsonplaceholder.typicode.com/posts");
		const articles = await res.json();

		return articles;
	
}

export async function action() {}

export default function List({ loaderData }: ArticlesProps) {
	const articlesComponents = loaderData.map(article => {
		return (
			<div className='article'>
				<h1 className='article-id'>{article.id}</h1>
				<h2 className='article-title'>{article.title}</h2>
				<Link to={article.id.toString()}>Click here</Link>
			</div>
		);
	});

	return <>{articlesComponents}</>;
}

export function ErrorBoundary({error} : {error: Error}){
    return(
        <div className="error">
            <h2>Something went wrong when loading articles.</h2>
            <pre>{error.message}</pre>
        </div>
    )
}