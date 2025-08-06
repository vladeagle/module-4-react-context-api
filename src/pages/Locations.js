import { Link } from "react-router-dom";
import locations from "../json/location.json";
import { useState } from "react";

export default function Locations() {
  const [locSt, setLocSt] = useState(locations);
  const [sort, setSort] = useState(false);

  const sortByDate = (type) => {
    setSort((s) => !s);
    setLocSt((prevState) =>
      prevState.sort((a, b) =>
        type
          ? new Date(a.created) - new Date(b.created)
          : new Date(b.created) - new Date(a.created)
      )
    );
  };

  return (
    <>
      <div className="locations">
        <h1>Локации</h1>
        <button className="button" onClick={() => sortByDate(sort)}>
          Сортировать по дате {sort ? "(убывание)" : "(возрастание)"}
        </button>
        <ul>
          {locSt.map((loc) => (
            <li key={loc.id}>
              <Link to={`/locations/${loc.id}`}>{loc.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
