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
        <h1>NO IDEA WHICH CHAMPION TO PICK?</h1>
        <p>
          With more than 140 champions, you’ll find the perfect match for your
          playstyle. Master one, or master them all.
        </p>

        {selectedRoles}
        <button
          onClick={() => {
            setIndex(Math.floor(Math.random() * champs.length));
          }}
        >
          FIND ONE
        </button>
      </div>
      <div className="filterRoles">
        {roles.map((role, index) => {
          return (
            <div key={role}>
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
            </div>
          );
        })}
      </div>

      <div className="appChampSty">
        <ChampionCard champion={currentChampion} />
      </div>

      {/* <div className="champions">
        {champions.map((champion) => (
          <ChampionCard champion={champion} key={champion.id} />
        ))}
      </div> */}
    </div>
  );
}

export default App;
