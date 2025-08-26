


//  TO DO
//  - CHANGE THE DATATYPE OF REPO AND OPTIMIZE

import { getFilteredRepos } from "../_service/githubApi";
import "./projects.css";

export default async function Projects(){
    
   const data = await getFilteredRepos("SnapEQ");
   
    
   console.log(data);
    return (
        <div className="projects-container">
            <div className="projects-wrapper">
                <ul className="projects-list">
                {data.map((repo) => (
                    <li key={repo.id} className="repo-bit">
                        <div className="name-wrapper">
                            <p className="repo-name">{repo.name}</p>
                        </div>
                        <div className="ref-wrapper">
                            <a href={repo.url} rel="noopener noreferrer">Go to repo</a>
                        </div> 
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}