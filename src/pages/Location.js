import { useParams } from "react-router-dom";
import locations from "../json/location.json";

export default function Location() {
  const { id } = useParams();
  const location = locations.find((el) => el.id === Number(id));

  return (
    <>
      {location && (
        <div className="location">
          <h1>Локация {location.name}</h1>
          <table>
            <tbody>
              {location.type && (
                <tr>
                  <td>Тип:</td>
                  <td>{location.type}</td>
                </tr>
              )}
              {location.dimension && (
                <tr>
                  <td>Измерение:</td>
                  <td>{location.dimension}</td>
                </tr>
              )}
              {location.created && (
                <tr>
                  <td>Создана:</td>
                  <td>{new Date(location.created).toUTCString()}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
      {!location && <h1>Несуществующая локация</h1>}
    </>
  );
}
