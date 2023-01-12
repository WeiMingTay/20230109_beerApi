import { useEffect, useState } from "react";

import Navbar from "../Components/Navbar/Navbar";

import "./../Components/BierDetail/BierDetail.css";

const BierRandom = () => {
	let [bier, setBier] = useState([]);

	let url = `https://ih-beers-api2.herokuapp.com/beers/random`;

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				setBier(data);
			});
	}, []);

	return (
		<section className="bierDetail">
			<div>
				<div>
					<img src={bier.image_url} alt="Bier Bild" />
				</div>
				<div>
					<h3>{bier.name}</h3>
					<p>{bier.tagline}</p>
					<div>
						<p className="spaceBetween">
							<span>First brewed</span>
							<span>{bier.first_brewed}</span>
						</p>
						<p className="spaceBetween">
							<span>Attenuation</span>
							<span>{bier.attenuation_level}</span>
						</p>
					</div>
					<p>{bier.description}</p>
					{/* 	<Link to="/">
						<i class="las la-angle-left"></i>
					</Link> */}
				</div>
			</div>
			<Navbar />
		</section>
	);
};

export default BierRandom;
