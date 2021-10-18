import Image from "next/image";
import Link from "next/link";
import logo from "../assets/brand-logo.png";
import twitterLogo from "../assets/twitter.png";
import youtubeLogo from "../assets/youtube.png";
export function Footer() {
	return (
		<footer className="footer">
			<div className="logo-container">
				<Image src={logo} alt="trinkerr-logo" />
			</div>
			<div className="footer-menu">
				<div className="footer-menu-left">
					<div>
						<b>Company</b>
						<ul>
							<li>
								<Link href="#">Support</Link>
							</li>
							<li>
								<Link href="#">Terms of Service</Link>
							</li>
							<li>
								<Link href="#">Privacy Policy</Link>
							</li>
							<li>
								<Link href="#">Disclosures</Link>
							</li>
							<li>
								<Link href="#">About us</Link>
							</li>
							<li>
								<Link href="#">Contact us</Link>
							</li>
							<li>
								<Link href="#">Careers</Link>
							</li>
						</ul>
					</div>
					<div>
						<b>Resources</b>
						<ul>
							<li>
								<Link href="#">Newsletter</Link>
							</li>
							<li>
								<Link href="#">Podcast</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-menu-right">
					<b>Social</b>
					<div>
						<i>
							<Image src={twitterLogo} alt="twitter" />
						</i>
						<i>
							<Image src={youtubeLogo} alt="youtube" />
						</i>
					</div>
				</div>
			</div>
		</footer>
	);
}
