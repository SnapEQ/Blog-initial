import type { Route } from "./+types/landingPage";


export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function LandingPage() {
	return (
  <>
	<p>Hey</p>
  </>);
}
