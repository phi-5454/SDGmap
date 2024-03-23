import "./App.css";
import "./Toolbar.css";
import "./UsersPins.css";
import Leaflet from "./Leaflet";
import { useState } from "react";
import CustomToolbar from "./ToolBar";
import { pinsOnMap } from "./pinInfo";
import { useSpring, animated } from 'react-spring';

import UsersPins from "./UsersPins";

function App() {
  const [pins, setPins] = useState(pinsOnMap);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000
  })

  return (
    <>
      <Leaflet pins={pins} setPins={setPins} class="leaflet-container" />
      <CustomToolbar class='toolbar'/>
    </>
  );
}

export default App;

