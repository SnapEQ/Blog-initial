


//  TO DO
//  - CHANGE THE DATATYPE OF REPO AND OPTIMIZE

import { getFilteredRepos } from "../_service/githubApi";

export default async function Projects(){
    
   const data = await getFilteredRepos("SnapEQ");
   
    
   console.log(data);
    return (
    <div>
        <ul>
            {data.map((repo) => (
                <li key={repo.id}>
                    {repo.name}
                    <br />
                    <a href={repo.url} rel="noopener noreferrer">Go to repo</a>
                </li>
                
            ))}
        </ul>

    </div>)
}