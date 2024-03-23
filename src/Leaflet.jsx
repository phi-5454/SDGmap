import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';

function MapEvents() {
    const [open, setOpen] = useState(false)
    const [currCoords, setCurrCoords] = useState({ lat: 0, lng: 0 })
 
    const map = useMapEvents({
        click(e) {
            console.log(e.latlng)
            setCurrCoords(e.latlng)
            setOpen(true)
        }
    })
    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Coordinates</DialogTitle>
            <p>{currCoords.lat}</p>
            <p>{currCoords.lng}</p>
        </Dialog>
    )
}

function Leaflet({ pins, setPins }) {
    
    
    const position = [60.1699, 24.9384]

    function addPin(coordinates) {
        return (
            <Marker key={Math.random(0,100)} position={coordinates}>
            </Marker>
        )
    }

    return (
        <>
            <MapContainer center={position} zoom={20} style={{ height: "90vh" }}>
                <TileLayer
                attribution='Olli Glorioso'
                url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=o28q90KHszO8WjJEWBy1"
                />
                {pins.map((pin) => addPin(pin.coordinates))}
                <MapEvents />
                
            </MapContainer>
        </>
    )
}

export default Leaflet