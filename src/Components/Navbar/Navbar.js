import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
	return (
		<nav>
			<Link to="/"><img src="/assets/img/logo_beer.png" alt=""/></Link>
		</nav>
	);
};

export default Navbar;
