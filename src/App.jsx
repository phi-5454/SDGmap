import "./App.css";
import Leaflet from "./Leaflet";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';



function App() {
  const [pins, setPins] = useState([
    {
      coordinates: [60.1699, 24.9384],
    },
  ]);

  return (
    <>
      <Leaflet pins={pins} setPins={setPins} />
     
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="white"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <FontAwesomeIcon icon={fas.faHouse} />
          </IconButton>
        </Toolbar>
      </AppBar>
      </Box>
    </>
  );
}

export default App;