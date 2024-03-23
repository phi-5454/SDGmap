import "./App.css";
import Leaflet from "./Leaflet";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={fas.faHouse} />;

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <Leaflet />
      <FontAwesomeIcon icon={fas.faHouse} />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
