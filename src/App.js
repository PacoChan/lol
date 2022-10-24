import ChampionCard from "./components/ChampionCard";
import "./App.css";
import { champions, getRoles } from "./data/champions";
import { useEffect, useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const [champs, setChamps] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const currentChampion = champs[index];
  const roles = getRoles();

  useEffect(() => {
    const filteredChampions = champions.filter((champion) => {
      for (let index = 0; index < champion.roles.length; index++) {
        return selectedRoles.includes(champion.roles[index]);
      }
    });

    setChamps(filteredChampions);
  }, [selectedRoles]);

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
      {selectedRoles}
      <div className="filterRoles">
        {roles.map((role, index) => {
          return (
            <span key={role}>
              <input
                type={"checkbox"}
                onChange={() => {
                  if (selectedRoles.includes(role)) {
                    setSelectedRoles(selectedRoles.filter((r) => r !== role));
                  } else {
                    setSelectedRoles([...selectedRoles, role]);
                  }
                }}
              />
              {role}
            </span>
          );
        })}
      </div>
      <button
        onClick={() => {
          setIndex(Math.floor(Math.random() * champs.length));
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
