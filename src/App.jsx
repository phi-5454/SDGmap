import { Toolbar } from "@mui/material";
import "./App.css";
import Leaflet from "./Leaflet";
import { useState } from "react";
import CustomToolbar from "./ToolBar";
import { pinsOnMap } from "./pinInfo";

function App() {
  const [pins, setPins] = useState(pinsOnMap);

  return (
    <>
      <Leaflet pins={pins} setPins={setPins} class="leaflet-container" />
      <CustomToolbar />
    </>
  );
}

export default App;

