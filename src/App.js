import ChampionCard from "./components/ChampionCard";
import "./App.css";
import { champions } from "./data/champions";

function App() {
  return (
    <div className="App">
      <div className="tittle">
        <h1>CHOOSE YOUR</h1>
        <h2>CHAMPION</h2>
        <p>
          With more than 140 champions, you’ll find the perfect match for your
          playstyle. Master one, or master them all.
        </p>
      </div>
      <div className="champions">
        {champions.map((champion) => (
          <ChampionCard champion={champion} key={champion.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
