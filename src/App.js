import ChampionCard from "./components/ChampionCard";
import "./App.css";
import { champions } from "./data/champions";
import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const currentChampion = champions[index];
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

      <button
        onClick={() => {
          setIndex(Math.floor(Math.random() * champions.length));
        }}
      >
        Random Champion
      </button>

      <ChampionCard champion={currentChampion} />

      {/* <div className="champions">
        {champions.map((champion) => (
          <ChampionCard champion={champion} key={champion.id} />
        ))}
      </div> */}
    </div>
  );
}

export default App;
