import { useParams } from "react-router-dom";
import episodes from "../json/episode.json";

export default function Episode() {
  const { id } = useParams();
  const episode = episodes.find((el) => el.id === Number(id));

  return (
    <>
      {episode && (
        <div className="episode">
          <h1>Эпизод {episode.name}</h1>
          <table>
            <tbody>
              {episode.air_date && (
                <tr>
                  <td>Дата показа:</td>
                  <td>{episode.air_date}</td>
                </tr>
              )}
              {episode.episode && (
                <tr>
                  <td>Номер:</td>
                  <td>{episode.episode}</td>
                </tr>
              )}
              {episode.created && (
                <tr>
                  <td>Создан:</td>
                  <td>{new Date(episode.created).toUTCString()}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
      {!episode && <h1>Несуществующий эпизод</h1>}
    </>
  );
}
