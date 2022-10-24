import { champions } from "../../data/champions";
import RatingBar from "../RatingBar";
import "./ChampionCard.css";

function ChampionCard({ champion = champions[0] }) {
  return (
    <div className=" championCardList">
      <div className="championCard container">
        <img src={champion.image} alt={champion.name} />
        <h3 className="title">{champion.name}</h3>
      </div>

      <div className="randomChampion">
        <h1>{champion.title}</h1>
        <h2>{champion.name}</h2>
        <h3>{champion.bio}</h3>
        <div style={{ display: "flex" }}>
          {champion.roles.map((role) => {
            return (
              <div key={role} className="role">
                {role}
              </div>
            );
          })}
        </div>
        <RatingBar title="Atteck" value={champion.info.attack} />
        <RatingBar title="Defense" value={champion.info.defense} />
        <RatingBar title="Difficulty" value={champion.info.difficulty} />
        <RatingBar title="Magic" value={champion.info.magic} />
      </div>
    </div>
  );
}

export default ChampionCard;
