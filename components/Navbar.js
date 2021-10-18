import Image from "next/image";
import Link from "next/link";
import logo from "../assets/brand-logo.png";
import navIcon from "../assets/nav.png";
import { useState } from "react";
export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<nav className="navbar">
			<div className="nav-icon-wrapper">
				<button
					className="menu-button"
					onClick={() => setIsMenuOpen((prev) => !prev)}
				>
					<Image src={navIcon} alt="open-menu" />
				</button>
				<Image src={logo} alt="trinkerr-logo" />
			</div>
			<ul className={isMenuOpen ? "menu openflex" : " menu"}>
				<li>
					<Link href="#">FAQ</Link>
				</li>
				<li>
					<Link href="#">For Investors</Link>
				</li>
				<li>
					<Link href="#">Sign in</Link>
				</li>
			</ul>
		</nav>
	);
}
