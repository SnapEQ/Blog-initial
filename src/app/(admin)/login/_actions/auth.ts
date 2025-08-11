export async function loginApi(email: string, password: string){
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/blogapi/v1/auth/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({email, password})
    });
    if(!res.ok) throw new Error('Invalid Credentials');
    return await res.json();
}