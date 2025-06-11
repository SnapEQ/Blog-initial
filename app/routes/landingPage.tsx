import { NavLink } from "react-router";
import type { Route } from "./+types/landingPage";
import "./landingPage.css";
import Typewriter from "typewriter-effect";


export function meta({}: Route.MetaArgs) {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function LandingPage() {
	return (
		<>
			<div className='content-container'>
				<div className='content-tile'>
					<div className='content-intro-container'>
						<div className='intro'>
							<p>Your Knowledge About Me Begins Here</p>
							<div className='intro-title'>
								<p className='big-text'>Official SnapEQ's blog</p>
								<p className='small-text'>
									Dive into the world of my coding journey and see what my
									current struggles are.
								</p>
							</div>
						</div>
					</div>
					<div className='content-anim-container'>
						<a>
							<Typewriter
								options={{
									strings: ["</>"],
									autoStart: true,
									loop: true,
									deleteSpeed: 400,
									delay: 200,
								}}
							/>
						</a>
					</div>
				</div>
				<div className='content-tiles'>
					<div className='tile-about-me'>
						<div className='about-me-text-container'>
							<p className='about-me-title'>About me</p>
							<p className='about-me-desc'>
								I am a 18 year old student who aspires to be a software engineer
								someday. I am currently learning in a full stack manner
								including React and Spring Boot in future.
							</p>
						</div>
						<div className='about-me-ref-container'></div>
					</div>
					<div className='tile-resources'>
						<div className='resources-text-container'>
							<p className='resources-title'>Resources</p>
							<p className='resources-desc'>
								Feel free to check out my current and past projects as well as
								my articles!
							</p>
						</div>
						<div className='resources-ref-container'>
							<NavLink
								to={"/projects"}
								className="proj-button">
								Projects
								<img src='../app/assets/arrow.svg' className="arrow"></img>
							</NavLink>
							<NavLink
								to={"/articles"}
								className="articles-button">
								Articles
								<img src='../app/assets/arrow.svg' className="arrow"></img>
							</NavLink>
						</div>
					</div>
				</div>
			</div>

		</>
	);
}
