import "./App.css";
import Leaflet from "./Leaflet";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


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
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2 }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit" 
          aria-label="menu"
        >
          <FontAwesomeIcon icon={fas.faCat} />
        </IconButton>
        <Typography variant="caption" sx={{ mt: -0.5 }}>Cat</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 2 }}>
        <IconButton
          size="large"
          edge="start"
          color="inherit" 
          aria-label="menu"
        >
          <FontAwesomeIcon icon={fas.faHouse} />
        </IconButton>
        <Typography variant="caption" sx={{ mt: -0.5 }}>Home</Typography>
      </Box>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        App Name
      </Typography>
    </Toolbar>
      </AppBar>
      </Box>
    </>
  );
}

export default App;