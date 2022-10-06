import ChampionCard from "./components/ChampionCard";
import "./App.css";
import { champions } from "./data/champions";

function App() {
  return (
    <div className="App">
      <div>
        {champions.map((champion) => (
          <ChampionCard champion={champion} key={champion.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
