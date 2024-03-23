import "./App.css";
import Leaflet from "./Leaflet";
import { useState } from "react";

function App() {

  const [pins, setPins] = useState([
    {
      coordinates: [60.1699, 24.9384],
    }
  ])

  return (
    <>
      <Leaflet pins={pins} setPins={setPins} />
    </>
  );
}

export default App;
