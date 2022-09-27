import { champions } from "../../data/champions";
import "./ChampionCard.css";

function ChampionCard({ champion = champions[0] }) {
	return (
		<div className="championCard container">
			<img src={champion.image} alt={champion.name} />
			<h3 className="title">{champion.name}</h3>
		</div>
	);
}

export default ChampionCard;
