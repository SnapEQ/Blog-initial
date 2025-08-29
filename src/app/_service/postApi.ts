export async function getPosts() {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BASE_URL + "/blogapi/v1/posts",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			}
		);
		if (!res.ok) throw new Error("Failed to fetch posts");
		return await res.json();
	} catch (error) {
		throw new Error("Failed to fetch posts");
	}
}

export async function getPostById(id: string) {
	try {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BASE_URL + "/blogapi/v1/posts/" + id,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				credentials: "include",
			}
		);
		if (!res.ok) throw new Error("Failed to fetch post");
		return await res.json();
	} catch (error) {
		throw new Error("Failed to fetch post");
	}
}

export async function deletePostById(
	id: string,
	token: string | null
): Promise<void> {
	fetch(process.env.NEXT_PUBLIC_BASE_URL + "/blogapi/v1/posts/" + id, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		credentials: "include",
	});
}

export async function loginApi(email: string, password: string) {
		const res = await fetch(
			process.env.NEXT_PUBLIC_BASE_URL + "/blogapi/v1/auth/login",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify({ email, password }),
			}
		);
		if (res.status === 401) throw new Error("Invalid Credentials");
		return await res.json();

}

export async function createPost(
	title: string,
	content: string,
	status: string,
	token: string | null
) {
	const res = await fetch(
		process.env.NEXT_PUBLIC_BASE_URL + "/blogapi/v1/posts",
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			credentials: "include",
			body: JSON.stringify({ title, content, status }),
		}
	);
	if (!res.ok) throw new Error("Invalid post request");
	return await res.json();
}
