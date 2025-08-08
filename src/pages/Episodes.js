import { Link } from "react-router-dom";
import episodes from "../json/episode.json";
import { useState } from "react";

export default function Episodes() {
  const [episodesSt, setEpisodesSt] = useState(episodes);
  const [sort, setSort] = useState(false);

  const sortByDate = (type) => {
    setSort((s) => !s);
    setEpisodesSt((prevState) =>
      prevState.sort((a, b) =>
        type
          ? new Date(a.created) - new Date(b.created)
          : new Date(b.created) - new Date(a.created)
      )
    );
  };

  return (
    <>
      <div className="episodes">
        <h1>Эпизоды</h1>
        <button className="button" onClick={() => sortByDate(sort)}>
          Сортировать по дате {sort ? "(убывание)" : "(возрастание)"}
        </button>
        <ul>
          {episodesSt.map((episode) => (
            <li key={episode.id}>
              <Link to={`/episodes/${episode.id}`}>{episode.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
