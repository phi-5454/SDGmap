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
  const [isFiltered, setIsFiltered] = useState(false);


  // Function to toggle the toolbar expansion state
  const toggleToolbar = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleFilter = () => {
   setIsFiltered(!isFiltered);
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
              onClick={toggleToolbar} // Attach the toggle function to the menu button
            >
              <FontAwesomeIcon icon={fas.faBars} />
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
                    if (isFiltered) {
                      setIsFiltered(false);
                      onChange("")
                    }
                    else {
                      setIsFiltered(true);
                      onChange("HouseFlood");
                    }
                  }}
                >
                  <FontAwesomeIcon className="toolbar-icon" icon={fas.faHouseFloodWater} color={`${isFiltered ? "black" : "white"}`} />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  className="toolbar-icon"
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="home"
                >
                  <FontAwesomeIcon className="toolbar-icon" icon={fas.faHouse} />
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
