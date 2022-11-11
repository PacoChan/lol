import ChampionCard from "./components/ChampionCard";
import "./App.css";
import { useEffect, useState } from "react";

async function getChampions() {
  const data = await fetch(
    "http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion.json"
  ).then((res) => res.json());
  const champions = Object.values(data.data).map((champion) => {
    return {
      id: champion.id,
      name: champion.name,
      title: champion.title,
      bio: champion.blurb,
      roles: champion.tags,
      info: champion.info,
      image:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" +
        champion.id +
        "_0.jpg",
    };
  });
  return champions;
}

function getRoles(champions = []) {
  const roles = new Set([]);
  champions.forEach((champion) => {
    champion.roles.forEach((role) => {
      roles.add(role);
    });
  });

  return Array.from(roles);
}

function App() {
  const [index, setIndex] = useState();
  const [champions, setChampions] = useState([]); //for server
  const [filteredChampions, setFilteredChampions] = useState([]); //UI,filter
  const [selectedRoles, setSelectedRoles] = useState([]);
  const currentChampion = filteredChampions[index];
  const roles = getRoles(champions);

  useEffect(() => {
    async function init() {
      const data = await getChampions();
      setChampions(data);
      setFilteredChampions(data);
    }
    init();
  }, []);

  return (
    <div className="App">
      <div className="intro">
        <div className="tittle">
          <h1>NO IDEA WHICH CHAMPION TO PICK?</h1>
          <p>
            With more than {champions.length} champions, you’ll find the perfect
            match for your playstyle. Master one, or master them all.
          </p>
          <button
            onClick={() => {
              if (selectedRoles.length > 0) {
                const filtered = champions.filter((champion) => {
                  for (let index = 0; index < champion.roles.length; index++) {
                    return selectedRoles.includes(champion.roles[index]);
                  }
                });
                setFilteredChampions(filtered);
                setIndex(Math.floor(Math.random() * filtered.length));
              } else {
                setFilteredChampions(champions);
                setIndex(Math.floor(Math.random() * champions.length));
              }
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
        {index == undefined ? (
          // overflow:"hidden"
          <div className="champions">
            {champions.map((champion) => (
              <img className="photo" src={champion.image} />
            ))}
          </div>
        ) : (
          <ChampionCard champion={currentChampion} />
        )}
        {
          //   {champions.map((champion) => (
          //     <getChampions
          //       champion={
          //         "https://ddragon.leagueoflegends.com/cdn/img/champion/loading/" +
          //         champion.id +
          //         "_0.jpg"
          //       }
          //     />
          //   ))}
        }
      </div>

      {/* TODO: Refencence, css: flex-wrap */}
      {/* {
        <div className="champions">
          {champions.map((champion) => (
            <ChampionCard champion={champion} key={champion.id} />
          ))}
        </div>
      } */}
    </div>
  );
}

export default App;
