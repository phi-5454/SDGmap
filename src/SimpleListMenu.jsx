import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Typography } from "@mui/material";

const options = [
  "Show some love to MUI",
  "Hide sensitive notification content",
  "Hide all notification content",
];

export default function SimpleListMenu({ pinLibrary, pinSetFunc }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    pinSetFunc(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: "background.paper" }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary={"Select alert type"}
            primaryTypographyProps={{ fontSize: "25px" }}
            style={{ textAlign: "center" }}
          />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {Object.entries(pinLibrary).map((option, index) => (
          <MenuItem
            key={option[1].name}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
            style={{ width: "200px" }}
          >
            <div className="flex rounded-s">
              {option[1].icon}
              <div className="p-2 text-l inline-block w-full text-center align-middle">
                {option[1].name}
              </div>
            </div>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
