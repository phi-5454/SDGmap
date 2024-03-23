import "./App.css";
import "./Toolbar.css";
import "./UsersPins.css";
import Leaflet from "./Leaflet";
import { useState, useEffect } from "react";
import CustomToolbar from "./ToolBar";
import { pinsOnMap } from "./pinInfo";
import { useSpring, animated } from "react-spring";
import UsersPins from "./UsersPins";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function App() {
  const [pins, setPins] = useState([]);
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.npoint.io/6702b7c729b99c15d863")
      .then((response) => {
        setPins(response?.data.pins);
        return response?.data.pins;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get("https://api.npoint.io/6702b7c729b99c15d863").then((response) => {
      setPins(response.data.pins);
      return response.data.pins;
    });
    const timer = setTimeout(() => {
      setShowIcon(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const appProps = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2000,
  });

  return (
    <>
      <div>
        {showIcon && (
          <div className="loading-screen-background">
            <FontAwesomeIcon
              className="loading-screen"
              icon={faMapPin}
              bounce
              color="#FF5733"
            />
            <h1 className="site-name">CityAlert</h1>
          </div>
        )}
        <animated.div className="fade-out" style={appProps}>
          <>
            <Leaflet pins={pins} setPins={setPins} class="leaflet-container" />
            <CustomToolbar class="toolbar" />
          </>
        </animated.div>
      </div>
    </>
  );
}

export default App;
