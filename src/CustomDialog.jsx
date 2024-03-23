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

const PinMenuItem = ( {pinType }) => {
  return (
    <div className="flex m-1 p-2 rounded-s border-3">
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
    setCategory(category);
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
        {(!category) ? "Category" : category}
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
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={Transition}
    >
      <DialogTitle
       variant="h4"
       style={{ textAlign: "center" }} 
      >Add pin</DialogTitle>

      <SimpleListMenu pinLibrary={pinLibrary}/>
      <DialogContent>
        {/* <BasicMenu category={category} setCategory={setCategory} /> */}
        <FormControl>
          <InputLabel htmlFor="my-input">Description</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            Describe the situation.
          </FormHelperText>
          <Button onClick={() => pinFormSubmit(category)}>Add</Button>
        </FormControl>
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;
