import { Link } from "react-router-dom";
import "./BierKlein.css";
const BierKlein = (props) => {
	return (
		<article className="bierKlein">
			<div>
				<img src={props.image} alt={props.name} />
			</div>
			<div>
				<div>
					<h3>{props.name}</h3>
					<p>{props.slogan}</p>
				</div>
				{/* <p>{props.hersteller}</p> */}
				{/*  { <p>{props.menge}</p>} */}
				<p>
					Seit: <span>{props.first_brewed}</span>
				</p>
				<Link to={`/biere/${props.id}`} id={props.id}>Details</Link>
			</div>
		</article>
	);
};

export default BierKlein;
