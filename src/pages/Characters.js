import { Link } from "react-router-dom";
import characters from "../json/characters.json";
import { useState } from "react";

export default function Characters() {
  const [chars, setChars] = useState(characters);
  const [sort, setSort] = useState(false);

  const sortByDate = (type) => {
    setSort((s) => !s);
    setChars((prevState) =>
      prevState.sort((a, b) =>
        type
          ? new Date(a.created) - new Date(b.created)
          : new Date(b.created) - new Date(a.created)
      )
    );
  };

  return (
    <>
      <div className="characters">
        <h1>Герои</h1>
        <button className="button" onClick={() => sortByDate(sort)}>
          Сортировать по дате {sort ? "(убывание)" : "(возрастание)"}
        </button>
        <ul>
          {chars.map((char) => (
            <li key={char.id}>
              <Link to={`/characters/${char.id}`}>{char.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
