import "./App.css";
import Leaflet from "./Leaflet";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [pins, setPins] = useState([
    {
      coordinates: [60.1699, 24.9384],
    },
  ]);

  return (
    <>
      <Leaflet pins={pins} setPins={setPins} />
      <FontAwesomeIcon icon={fas.faHouse} />
    </>
  );
}

export default App;
