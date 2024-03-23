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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function CustomDialog({ open, setOpen, currCoords, pinFormSubmit }) {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      TransitionComponent={Transition}
    >
      <DialogTitle>Add pin</DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1">
          Latitude: {currCoords.lat.toFixed(2)}
        </Typography>
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

