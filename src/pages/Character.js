import characters from "../json/characters.json";
import { useParams } from "react-router-dom";

export default function Character() {
  const { id } = useParams();
  const char = characters.find((el) => el.id === Number(id));

  return (
    <>
      {char && (
        <div className="character">
          <h1>Герой {char.name}</h1>
          <table>
            <tbody>
              {char.status && (
                <tr>
                  <td>Статус:</td>
                  <td>{char.status}</td>
                </tr>
              )}
              {char.species && (
                <tr>
                  <td>Вид:</td>
                  <td>{char.species}</td>
                </tr>
              )}
              {char.type && (
                <tr>
                  <td>Тип:</td>
                  <td>{char.type}</td>
                </tr>
              )}
              {char.gender && (
                <tr>
                  <td>Пол:</td>
                  <td>{char.gender}</td>
                </tr>
              )}
              {char.created && (
                <tr>
                  <td>Создан:</td>
                  <td>{new Date(char.created).toUTCString()}</td>
                </tr>
              )}
            </tbody>
          </table>
          {char.image && <img src={char.image} alt={char.name} />}
        </div>
      )}
      {!char && <h1>Несуществующий персонаж</h1>}
    </>
  );
}
