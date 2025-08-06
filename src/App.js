import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Location from "./pages/Location";
import Episode from "./pages/Episode";
import { AuthProvider } from "./contexts/AuthProvider";
import { AuthStatus } from "./components/AuthStatus";
import { SignIn } from "./components/SignIn";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <div className="app__header">
          <div className="header__container">
            <ul className="header__menu">
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/characters">Герои</Link>
              </li>
              <li>
                <Link to="/locations">Локации</Link>
              </li>
              <li>
                <Link to="/episodes">Эпизоды</Link>
              </li>
            </ul>
            <div className="header__user">
              <AuthStatus />
            </div>
          </div>
        </div>
        <div className="app__container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/login"
              element={<SignIn />}
            ></Route>
            <Route path="/characters">
              <Route
                index
                element={
                  <PrivateRoute>
                    <Characters />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/characters/:id"
                element={
                  <PrivateRoute>
                    <Character />
                  </PrivateRoute>
                }
              ></Route>
            </Route>
            <Route path="/locations">
              <Route
                index
                element={
                  <PrivateRoute>
                    <Locations />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/locations/:id"
                element={
                  <PrivateRoute>
                    <Location />
                  </PrivateRoute>
                }
              ></Route>
            </Route>
            <Route path="/episodes">
              <Route
                index
                element={
                  <PrivateRoute>
                    <Episodes />
                  </PrivateRoute>
                }
              ></Route>
              <Route
                path="/episodes/:id"
                element={
                  <PrivateRoute>
                    <Episode />
                  </PrivateRoute>
                }
              ></Route>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
