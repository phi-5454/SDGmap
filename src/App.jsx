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
import axios from "axios";



function App() {

  const [pins, setPins] = useState([]);
  const [filteredPins, setFilteredPins] = useState([]);
  const [filter, setFilter] = useState("");
  const [showIcon, setShowIcon] = useState(true); 

  const handleFilter = (toolbarData) => {
    
    console.log("ToolbarData: ", toolbarData)
    
    setFilter(toolbarData);
   
    setTimeout(() => {
      console.log("Filter: ", filter)
    }, 1000);
  }

  useEffect(() => {
    axios.get("https://api.npoint.io/6702b7c729b99c15d863").then(
    (response) => {
      setPins(response?.data.pins)
      console.log(response?.data.pins)
      return response?.data.pins
    }).catch((error) => {
      console.log(error)
    }
  )}, []);
  
  useEffect(() => {
    const filteredPins = pins.filter(pin => pin.pinType.includes(filter));
    
    setFilteredPins(filteredPins);
    // Log the current filter for debugging
    setTimeout(() => {
      

      console.log("Filter: ", filter);
      console.log("Filtered Pins: ", filteredPins)
    }, 1000);
  }, [filter, pins]);


  useEffect(() => {
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
            <FontAwesomeIcon className="loading-screen" icon={faMapPin} bounce color="#FF5733"/>
            <h1 className="site-name">CityAlert</h1>
          </div>
        )}
        <animated.div className="fade-out" style={appProps}>
          <>
            <Leaflet pins={filteredPins} setPins={setPins} class="leaflet-container" />
            <CustomToolbar class='toolbar' onChange={handleFilter}/>
            <UsersPins class='pinbar'/>
          </>
        </animated.div>
      </div>
    </>
  );
}

export default App;
