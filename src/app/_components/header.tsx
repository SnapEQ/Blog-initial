
'use client'

import "./header.css"
import Link from "next/link";
import silverSurferImage from "../../../public/silverS.jpg"
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/context/loginContext";
import { useEffect, useState } from "react";

export default function Header() {
	const { isAuthenticated } = useAuth();
	const [mounted, setMounted] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

	const buttons: string[] = isAuthenticated
        ? ["Home", "Blog", "Projects", "Contact", "Logout"]
        : ["Home", "Blog", "Projects", "Contact", "Login"];
    const pathname = usePathname();
	console.log(pathname);
		

	

	const buttonElements = buttons.map((btn: string) => {
	

		const path = btn.toLowerCase() === "home" ? "/" : `/${btn.toLowerCase()}`;
		console.log(path);


		
		
		const containsPath = pathname === path; 

		return (
			<Link
				key={btn}
				href={path}
				className = {`navbar-button ${containsPath  ? 'active' : ''}`}
				onClick={() => setMenuOpen(false)}
				>
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


					{/* Hamburger for mobile */ }
					<div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
						<span></span>
						<span></span>
						<span></span>
					</div>

					{/* Desktop menu */}

					<div className='buttons-container'>
						{mounted && buttonElements}
					</div>

					{/* Mobile dropdown menu */}

					{menuOpen && (
						<div className="dropdown-menu">
							{buttonElements}
						</div>
					)}

				</div>
			</div>
		</>
	);
}
