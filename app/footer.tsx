import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./footer.css";
import { NavLink } from "react-router";

export default function Footer() {
	const year: number = new Date().getFullYear();

	return (
		<footer className='footer'>
			<div className='container'>
				<div className='icon-container'>
					<a href='https://github.com/SnapEQ'  target="_blank" rel="noopener noreferrer">
						<AiFillGithub className='icon' />
					</a>

					<a href='https://x.com/SnapE67365208 ' target="_blank" rel="noopener noreferrer">
						<FaXTwitter className='icon' />
					</a>
				</div>
				<div className='text-container'>
					<div className='text'>
						<NavLink to={"/"} className='footer-button'>
							Home
						</NavLink>
					</div>
					<div className='text'>
						<NavLink to={"/projects"} className='footer-button'>
							Projects
						</NavLink>
					</div>
					<div className='text'>
						<NavLink to={"/articles"} className='footer-button'>
							Articles
						</NavLink>
					</div>
					<div className='text'>
						<NavLink to={"/articles"} className='footer-button'>
							Contact
						</NavLink>
					</div>
				</div>
			</div>
			<div className='copy-container'>
				<div className='copy-text-container'>
					<p>
						Copyright©{year}; Designed by <b>SnapEQ</b>
					</p>
				</div>
			</div>
		</footer>
	);
}
