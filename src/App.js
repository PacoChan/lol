import ChampionCard from "./components/ChampionCard";
import "./App.css";
import { champions, getRoles } from "./data/champions";
import { useEffect, useState } from "react";

function App() {
  const [index, setIndex] = useState();
  const [champs, setChamps] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const currentChampion = champs[index];
  const roles = getRoles();

  useEffect(() => {
    if (selectedRoles.length > 0) {
      const filteredChampions = champions.filter((champion) => {
        for (let index = 0; index < champion.roles.length; index++) {
          return selectedRoles.includes(champion.roles[index]);
        }
      });
      setChamps(filteredChampions);
    } else {
      setChamps(champions);
    }
  }, [selectedRoles]);

  return (
    <div className="App">
      <div className="intro">
        <div className="tittle">
          <h1>NO IDEA WHICH CHAMPION TO PICK?</h1>
          <p>
            With more than 140 champions, you’ll find the perfect match for your playstyle. Master
            one, or master them all.
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
      </div>
      <div className="appChampSty">
        {index == undefined ? <div>sss</div> : <ChampionCard champion={currentChampion} />}
        {/* <ChampionCard champion={currentChampion} /> */}
      </div>

      {/* TODO: Refencence, css: flex-wrap */}
      {/* <div className="champions">
        {champions.map((champion) => (
          <ChampionCard champion={champion} key={champion.id} />
        ))}
      </div> */}
    </div>
  );
}

export default App;
