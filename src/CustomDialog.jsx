import { Dialog, DialogTitle, FormControl, InputLabel, Input, FormHelperText, Button, Typography } from '@mui/material';

function CustomDialog({ open, setOpen, currCoords, pinFormSubmit }) {
    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Add event</DialogTitle>
            <Typography variant="subtitle1">Latitude: {currCoords.lat.toFixed(2)}</Typography>
            <Typography>Longitude: {currCoords.lng.toFixed(2)}</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Event</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                <Button onClick={() => pinFormSubmit()}>Add</Button>
            </FormControl>
        </Dialog>
    )
}

export default CustomDialog