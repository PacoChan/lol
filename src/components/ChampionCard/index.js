import { champions } from "../../data/champions";
import "./ChampionCard.css";

function ChampionCard({ champion = champions[0] }) {
	return (
		<div>
			<img src={champion.image} alt={champion.name} />
			<h3>{champion.name}</h3>
		</div>
	);
}

export default ChampionCard;
