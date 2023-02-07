import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
	return (
		<section className="home">
			<Link to="/biere">
				<div>
					<img src="assets/img/christin-hume-08tX2fsuSLg-unsplash.png" />
				</div>
				<div>
					<h2>Bierauswahl</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
						eleifend vitae varius venenatis.{" "}
					</p>
				</div>
			</Link>
			<Link to="/random">
				<div>
					<img src="assets/img/proriat-hospitality-flENqflm6xU-unsplash.png" />
				</div>
				<div>
					<h2>Zufallsauswahl</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a,
						eleifend vitae varius venenatis.{" "}
					</p>
				</div>
			</Link>
		</section>
	);
};

export default Home;
