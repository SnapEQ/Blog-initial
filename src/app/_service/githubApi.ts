interface Repo {
    id: string;
    name: string;
    url: string;
    description: string | null;
    stars: number;
}

interface GitHubRepoResponse {
    id: string;
    name: string;
    html_url: string;
    descritpion: string | null;
    stargazers_count: number
}


 async function getRepos(username:string): Promise<GitHubRepoResponse[]>{
    try {
        const res = await 
        fetch(`https://api.github.com/users/${username}/repos`);
        if(!res.ok) throw new Error("Unable to fetch repos");
        return await res.json();
    } catch (error){
        throw new Error("Unable to fetch repos")
    }
}

function filterRepos(repos: GitHubRepoResponse[]) : Repo[]{
    return repos.map(repo => ({
        id: repo.id,
        name: repo.name,
        url: repo.html_url,
        description: repo.descritpion,
        stars: repo.stargazers_count,
    }));
}

export async function getFilteredRepos(username : string): Promise<Repo[]>{
    const repos = await getRepos(username);
    return filterRepos(repos);
}