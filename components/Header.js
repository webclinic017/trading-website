import Image from "next/image";
import angelLogo from "../assets/ANGEL.png";
import fyersLogo from "../assets/FYERS.png";
import zerodhaLogo from "../assets/ZERODHA.png";
export function Header() {
	return (
		<header className="header">
			<div className="header-container">
				<p className="text-welcome">Welcome to the future of investing</p>
				<h1 className="text-header">
					<span>India’s First </span>
					<br />
					Social Trading Platform
				</h1>
				<p className="text-description">
					New to trading? No idea where to invest? Find the top traders, <br />
					observe their movements in the market and invest the smart way to{" "}
					<br />
					make your money grow.
				</p>
				<div className="input-group">
					<p>+91</p>
					<input type="text" />
					<button>Get Started</button>
				</div>
				<div className="brokers-container">
					<p>Supported Brokers</p>
					<div>
						<Image src={zerodhaLogo} alt="zerodha-logo" width={"100%"} />
						<span />
						<Image src={fyersLogo} alt="fyers-logo" width={"100%"} />
						<span />
						<Image src={angelLogo} alt="angel-logo" width={"100%"} />
					</div>
				</div>
			</div>
		</header>
	);
}
