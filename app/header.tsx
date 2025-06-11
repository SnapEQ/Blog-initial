import { NavLink } from "react-router";
import clsx from "clsx";
import "./header.css";
import silverSurferImage from "./assets/silverS.jpg"

export default function Header() {
	const buttons: string[] = ["Home", "Articles", "Projects", "Contact"];

	const buttonElements = buttons.map((btn: string) => {
		const path = btn.toLowerCase() === "home" ? "/" : `/${btn.toLowerCase()}`;

		return (
			<NavLink
				key={btn}
				to={path}
				className={({ isActive }) =>
					clsx("navbar-button", { active: isActive })
				}>
				{btn}
			</NavLink>
		);
	});

	return (
		<>
			<div className='header'>
				<div className='top-banner'>Hello</div>
				<div className='navbar'>
					<div className='logo'>
						<img src={silverSurferImage} alt='silversurfer image' />
						<p>SnapEQ</p>
					</div>
					<div className='buttons-container'>{buttonElements}</div>
				</div>
			</div>
		</>
	);
}
