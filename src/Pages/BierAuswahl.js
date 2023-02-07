import { useEffect, useState } from "react";

import BierKlein from "../Components/BierKlein/BierKlein";
import Navbar from "../Components/Navbar/Navbar";

import "./BierAuswahl.css";

const BierAuswahl = () => {
	let [bier, setBier] = useState([]);

	let url = "https://ih-beers-api2.herokuapp.com/beers";

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setBier(data);
			});
	}, []);

	return (
		<section className="bierAuswahl">
			{bier.map((e, index) => (
				<BierKlein
					key={index}
					id={e._id}
					image={e.image_url}
					name={e.name}
					slogan={e.tagline}
					hersteller={e.contributed_by}
					first_brewed={e.first_brewed}
				/>
			))}
			<Navbar />
		</section>
	);
};

export default BierAuswahl;
