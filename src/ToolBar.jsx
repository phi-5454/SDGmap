import React, { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

function CustomToolbar({ onChange }) {
  // State to manage the visibility of the toolbar content
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFilteredHouseFlood, setIsFilteredHouseFlood] = useState(false);
  const [isFilteredStreetFlood, setIsFilteredStreetFlood] = useState(false);
  const [isFilteredWildAnimal, setIsFilteredWildAnimal] = useState(false);


  // Function to toggle the toolbar expansion state
  const toggleToolbar = () => {
    setIsExpanded(!isExpanded);
    forceAllFiltersOff();
    
  };

  const toggleFilterHouseFlood = () => {
   setIsFilteredHouseFlood(!isFilteredHouseFlood);
   
  }

  const toggleFilterStreetFlood = () => {
    setIsFilteredStreetFlood(!isFilteredStreetFlood);
  }

  const toggleFilterWildAnimal = () => {
    setIsFilteredWildAnimal(!isFilteredWildAnimal);
  }

  const forceAllFiltersOff = () => {
    setIsFilteredHouseFlood(false);
    setIsFilteredStreetFlood(false);
    setIsFilteredWildAnimal(false);
  }


  return (
    <Box sx={{ position: "fixed", width: 500, zIndex: 2 }}>
      <AppBar position="fixed">
        <Toolbar className={`toolbar ${isExpanded ? "expanded" : "collapsed"}`}>
          {/* Menu Button always visible */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              ml: 0.5
            }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => {
                toggleToolbar()
                onChange("")
              }} // Attach the toggle function to the menu button
            >
              <FontAwesomeIcon icon={fas.faFilter} />
            </IconButton>
          </Box>

          {isExpanded && (
            <>
              <Box>
                <IconButton
                  className="toolbar-icon"
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="cat"
                  onClick={() => {
                    if (isFilteredHouseFlood) {
                      onChange("")
                    }
                    else {
                      onChange("HouseFlood");
                    }
                    forceAllFiltersOff();
                    toggleFilterHouseFlood();
                  }}
                >
                  <FontAwesomeIcon className="toolbar-icon" icon={fas.faHouseFloodWater} color={`${isFilteredHouseFlood ? "black" : "white"}`} />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  className="toolbar-icon"
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="home"
                  onClick={() => {
                    if (isFilteredStreetFlood) {
                      onChange("")
                    }
                    else {
                      onChange("StreetFlood");
                    }
                    forceAllFiltersOff();
                    toggleFilterStreetFlood();
                  }}
                >
                  <FontAwesomeIcon className="toolbar-icon" icon={fas.faWater} color={`${isFilteredStreetFlood ? "black" : "white"}`} />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  className="toolbar-icon"
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="cat"
                  onClick={() => {
                    if (isFilteredWildAnimal) {
                      onChange("")
                    }
                    else {
                      onChange("WildAnimal");
                    }
                    forceAllFiltersOff();
                    toggleFilterWildAnimal();
                  }}
                >
                  <FontAwesomeIcon className="toolbar-icon" icon={fas.faHippo} color={`${isFilteredWildAnimal ? "black" : "white"}`} />
                </IconButton>
              </Box>
              
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CustomToolbar;
