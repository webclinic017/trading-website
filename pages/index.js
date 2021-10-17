import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import logo from "../assets/brand-logo.png";
import angelLogo from "../assets/ANGEL.png";
import fyersLogo from "../assets/FYERS.png";
import zerodhaLogo from "../assets/ZERODHA.png";
import twitterLogo from "../assets/twitter.png";
import youtubeLogo from "../assets/youtube.png";
export default function Home() {
	return (
		<div>
			<nav>
				<div>
					<Image src={logo} alt="trinkerr-logo" />
				</div>
				<ul>
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
			<div>
				<div>
					<p>Welcome to the future of investing</p>
					<h1>
						<div>India’s First </div>
						<br />
						Social Trading Platform
					</h1>
					<div>
						New to trading? No idea where to invest? Find the top traders,
						observe their movements in the market and invest the smart way to
						make your money grow.
					</div>
					<div>
						<span>+91</span>
						<input type="number" />
						<button>Get Started</button>
					</div>
					<div>
						<p>Supported Brokers</p>
						<div>
							<Image src={angelLogo} alt="angel-logo" />
							<Image src={fyersLogo} alt="fyers-logo" />
							<Image src={zerodhaLogo} alt="zerodha-logo" />
						</div>
					</div>
				</div>
			</div>
			<footer>
				<div>
					<Image src={logo} alt="trinkerr-logo" />
				</div>
				<div>
					<div>
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
					<div>
						<p>Social</p>
						<Image src={twitterLogo} alt="twitter" />
						<Image src={youtubeLogo} alt="youtube" />
					</div>
				</div>
			</footer>
		</div>
	);
}
