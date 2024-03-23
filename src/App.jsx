import "./App.css";
import "./Toolbar.css";
import "./UsersPins.css";
import Leaflet from "./Leaflet";
import { useState } from "react";
import CustomToolbar from "./ToolBar";
import { pinsOnMap } from "./pinInfo";
import UsersPins from "./UsersPins";

function App() {
  const [pins, setPins] = useState(pinsOnMap);

  return (
    <>
      <Leaflet pins={pins} setPins={setPins} class="leaflet-container" />
      <CustomToolbar />
      <UsersPins/>

    </>
  );
}

export default App;

