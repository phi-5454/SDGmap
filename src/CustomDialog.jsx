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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Category } from "./pinInfo";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function BasicMenu( { category } ) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Typography variant="subtitle1">
          {category == null ? "Category" : category}
        </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {Object.keys(Category).map((category) => (
          <MenuItem key={category} onClick={handleClose}>
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
      <DialogTitle>Add pin</DialogTitle>
      <DialogContent>
        <BasicMenu category={category} />
        {/* <Typography variant="subtitle1">
          Latitude: {currCoords.lat.toFixed(2)}
  </Typography> */}
        <Typography>Longitude: {currCoords.lng.toFixed(2)}</Typography>
        <FormControl>
          <InputLabel htmlFor="my-input">Description</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
          <Button onClick={() => pinFormSubmit()}>Add</Button>
        </FormControl>
        
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;

