
'use client'

import "./header.css"
import Link from "next/link";
import silverSurferImage from "../../../public/silverS.jpg"
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/context/loginContext";
import { useEffect, useState } from "react";


type NavButton = {
	label: string;
	href: string;
	isActive: (pathname: string) => boolean
}

export default function Header() {
	const { isAuthenticated } = useAuth();
	const [mounted, setMounted] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const pathname = usePathname();
	
	const navButtons: NavButton[] = [	
        {
            label: "Home",
            href: "/",
            isActive: (p) => p === "/",
        },
        {
            label: "Blog",
            href: "/blog",
            isActive: (p) => p.startsWith("/blog"),
        },
        {
            label: "Projects",
            href: "/projects",
            isActive: (p) => p.startsWith("/projects"),
        },
        {
            label: "Contact",
            href: "/contact",
            isActive: (p) => p.startsWith("/contact"),
        },
        {
            label: isAuthenticated ? "Logout" : "Login",
            href: isAuthenticated ? "/logout" : "/login",
            isActive: (p) => isAuthenticated ? p.startsWith("/logout") : p.startsWith("/login"),
        },
	];

	

	const buttonElements = navButtons.map((btn) => {
	

		


		
		

		return (
			<Link
				key={btn.label}
				href={btn.href}
				className = {`navbar-button ${btn.isActive(pathname) ? " active": "" }`}
				onClick={() => setMenuOpen(false)}
				>
				{btn.label}
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
