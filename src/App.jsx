import "./App.css";
import "./Toolbar.css";
import "./UsersPins.css";
import Leaflet from "./Leaflet";
import { useState, useEffect } from "react";
import CustomToolbar from "./ToolBar";
import { pinsOnMap } from "./pinInfo";
import { useSpring, animated } from 'react-spring';
import UsersPins from "./UsersPins";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [pins, setPins] = useState(pinsOnMap);
  const [showIcon, setShowIcon] = useState(true); // State to control the visibility of the FontAwesomeIcon

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcon(false); // Hide the icon after 2 seconds
    }, 3000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const appProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 3000,
  });

  return (
    <>
      <div>
        {showIcon && (
          <div className="loading-screen-background">
            <FontAwesomeIcon className="loading-screen" icon={faMapPin} bounce color="#FF5733"/>
            <h1 className="site-name">CityWorkshop</h1>
          </div>
        )}
        <animated.div className="fade-out" style={appProps}>
          <>
            <Leaflet pins={pins} setPins={setPins} class="leaflet-container" />
            <CustomToolbar class='toolbar'/>
            <Leaflet pins={pins} setPins={setPins} class="leaflet-container" />
            <CustomToolbar class='toolbar'/>
            <UsersPins class='pinbar'/>
          </>
        </animated.div>
      </div>
    </>
  );
}

export default App;
