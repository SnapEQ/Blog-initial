
import { getFilteredRepos } from "../_service/githubApi";
import "./projects.css";
import Image from "next/image";
import star from "../../../public/star.svg"

export default async function Projects(){
    
   const data = await getFilteredRepos("SnapEQ");
   
    
   console.log(data);
    return (
        <div className="projects-container">
            <div className="projects-wrapper">
                <ul className="projects-list">
                {data.map((repo) => (
                    <li key={repo.id} className="repo-bit">
                        <div className="star-wrapper">
                            <Image  src={star} alt="github star icon" className="star"/>
                            <p className="stargazers-count">{repo.stars}</p>
                        </div>
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