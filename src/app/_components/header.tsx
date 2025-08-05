
'use client'

import "./header.css"
import Link from "next/link";
import silverSurferImage from "../../../public/silverS.jpg"
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
	const buttons: string[] = ["Home", "Blog", "Projects", "Contact", "Login"];

    const pathname = usePathname();

	const buttonElements = buttons.map((btn: string) => {
		const path = btn.toLowerCase() === "home" ? "/" : `/${btn.toLowerCase()}`;

		return (
			<Link
				key={btn}
				href={path}
				className = {`navbar-button ${pathname === path ? 'active' : ''}`}>
				{btn}
			</Link>
		);
	});

	return (
		<>
			<div className='header'>
				<div className='top-banner'>Hello</div>
				<div className='navbar'>
					<div className='logo'>
						<Image src={silverSurferImage} alt='silversurfer image' />
						<p>SnapEQ</p>
					</div>
					<div className='buttons-container'>
						{buttonElements}
					</div>
				</div>
			</div>
		</>
	);
}
