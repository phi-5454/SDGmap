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
  const [showTitle, setShowTitle] = useState(true);

  const titleProps = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 },
    config: { duration: 1000 },
    style: { color: 'red' },
    onRest: () => setShowTitle(false),
  });

  function getMiddlePointOfWindow() {
    return {
      x: window.innerWidth / 3,
      y: window.innerHeight / 3
    };
  }

  titleProps.fontSize = '100px';
  titleProps.backgroundColor = 'white';
  titleProps.height = 0;
  titleProps.width = 0;
  titleProps.backgroundColor = 'white';
  titleProps.position = 'absolute'; // Add this line
  titleProps.top = (getMiddlePointOfWindow().y); // Add this line
  titleProps.left = (getMiddlePointOfWindow().x); // Add this line
  titleProps.transform = 'translate(-50%, -50%)'; // Add this line

  const appProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000
  })

  return (
    <>
      <div>
        <animated.h1  style={titleProps}>Cityworkshop</animated.h1>
      </div>
        <animated.div style={appProps}>
          <>
            <Leaflet pins={pins} setPins={setPins} class="leaflet-container" />
            <CustomToolbar class='toolbar'/>
            <Leaflet pins={pins} setPins={setPins} class="leaflet-container" />
            <CustomToolbar class='toolbar'/>
            <UsersPins class='pinbar'/>
          </>
        </animated.div>
      
    </>
  );
}

export default App;

