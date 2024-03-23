import "./App.css";
import Leaflet from "./Leaflet";
import { useState } from "react";
import CustomToolbar from "./ToolBar";
import { pinsOnMap } from "./pinInfo";
import { useSpring, animated } from 'react-spring';


function App() {
  const [pins, setPins] = useState(pinsOnMap);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000
  })

  return (
    <animated.div style={props}>
      <>
        <Leaflet pins={pins} setPins={setPins} class="leaflet-container" />
        <CustomToolbar class='toolbar'/>
      </>
    </animated.div>
  );
}

export default App;

