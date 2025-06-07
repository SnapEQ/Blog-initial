import type { Route } from "./+types/article";

export async function loader({ params }: Route.LoaderArgs) {
	const articleId = params.articleId;

	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${articleId}`
	);

	return await res.json();
}

export async function action() {}

export default function Article({ loaderData }: Route.ComponentProps) {
	return (
		<>
			<div className='article'>
				<p>Title {loaderData.title}</p>
			</div>
		</>
	);
}
