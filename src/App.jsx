import "./App.css";
import Leaflet from "./Leaflet";
import { useState } from "react";
import CustomToolbar from "./ToolBar"

function App() {
  const [pins, setPins] = useState([
    {
      coordinates: [60.186449, 24.828243],
    },
  ]);

  return (
    <>
      <Leaflet pins={pins} setPins={setPins} class="leaflet-container" />
      <CustomToolbar class='toolbar'/>
    </>
  );
}

export default App;