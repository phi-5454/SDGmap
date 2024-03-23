import React, { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

function UsersPins() {
    // State to manage the visibility of the toolbar content
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle the toolbar expansion state
    const toggleToolbar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
      <Box sx={{ position: "fixed", width: 500, zIndex: 2 }}>
        <AppBar position="fixed">
          <Toolbar className={`pinbar ${isExpanded ? 'expanded' : 'collapsed'}`}>
            {/* Menu Button always visible */}
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', ml: 1 }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleToolbar} // Attach the toggle function to the menu button
                >
                    <FontAwesomeIcon icon={fas.faMapPin} />
                </IconButton>
            </Box>
            
            {isExpanded && (
              <>
                <Box>
                    <IconButton
                        className="pinbar-icon"
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="cat"
                    >
                        <FontAwesomeIcon icon={fas.faCat} />
                    </IconButton>
                </Box>
                <Box>
                  <IconButton
                      className="pinbar-icon"
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="home"
                  >
                      <FontAwesomeIcon icon={fas.faHouse} />
                  </IconButton>
                </Box>
                <Typography className='pinbar-icon' variant="h6" component="div">
                    My pins
                </Typography>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default UsersPins;
