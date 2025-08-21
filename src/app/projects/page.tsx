


//  TO DO
//  - CHANGE THE DATATYPE OF REPO AND OPTIMIZE

import { getFilteredRepos } from "../_service/githubApi";
import "./projects.css";

export default async function Projects(){
    
   const data = await getFilteredRepos("SnapEQ");
   
    
   console.log(data);
    return (
    <div>
        <div className="projects-container">
            <ul className="projects-list">
                {data.map((repo) => (
                    <li key={repo.id} className="repo-bit">
                        <p className="repo-name">{repo.name}</p>
                        <a href={repo.url} rel="noopener noreferrer">Go to repo</a>
                    </li>
                
                ))}
            </ul>
        </div>
    </div>)
}