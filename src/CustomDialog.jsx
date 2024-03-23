import {
  Dialog,
  DialogTitle,
  FormControl,
  Slide,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Typography,
  DialogContent,
} from "@mui/material";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import pinLibrary, { Category } from "./pinInfo";
import { getPinType } from "./constants";
import SimpleListMenu from "./SimpleListMenu";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PinMenuItem = ({ pinType }) => {
  return (
    <div className="flex p-2 border-stone-700 border-2 rounded-lg ">
      {pinType.icon}
      <div className="p-2 text-l inline-block w-full text-center align-middle">
        {pinType.name}
      </div>
    </div>
  );
};

function BasicMenu({ category, setCategory }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (category) => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {!category ? "Category" : category}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {Object.keys(Category).map((category) => (
          <MenuItem key={category} onClick={() => handleClose(category)}>
            {category.toString()}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

function CustomDialog({ open, setOpen, currCoords, pinFormSubmit }) {
  const [category, setCategory] = React.useState(null);
  const [pinTypeIndex, setPinIndex] = React.useState(0);
  const [textValue, setTextValue] = React.useState("");

  const pinArr = Object.entries(pinLibrary).map((option, index) => {
    return [option[1].icon, option[1].name];
  });

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      TransitionComponent={Transition}
    >
      <DialogTitle variant="h4" style={{ textAlign: "center" }}>
        Add pin
      </DialogTitle>
      <div className="flex rounded-s">
        {pinArr[pinTypeIndex][0]}
        <div className="p-2 text-l inline-block w-full text-center align-middle">
          {pinArr[pinTypeIndex][1]}
        </div>
      </div>
      <SimpleListMenu pinLibrary={pinLibrary} pinSetFunc={setPinIndex} />
      <DialogContent>
        {/* <Typography variant="subtitle1">
          Latitude: {currCoords.lat.toFixed(2)}
        </Typography> 
        <Typography>Longitude: {currCoords.lng.toFixed(2)}</Typography>*/}
        <FormControl>
          <InputLabel htmlFor="my-input">Description</InputLabel>
          <Input
            id="my-input"
            aria-describedby="my-helper-text"
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          <FormHelperText id="my-helper-text">
            Describe the situation.
          </FormHelperText>
          <Button
            onClick={() => {
              pinFormSubmit(category, textValue, pinTypeIndex);
              setTextValue("");
            }}
          >
            Add
          </Button>
        </FormControl>
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;
