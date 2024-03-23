import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useState } from 'react';
import CustomDialog from './CustomDialog';

function MapEvents() {
    const [open, setOpen] = useState(false)
    const [currCoords, setCurrCoords] = useState({ lat: 0, lng: 0 })
 
    const pinFormSubmit = (e) => {
        setOpen(false)
        console.log("submitted")
    }

    const map = useMapEvents({
        click(e) {
            console.log(e.latlng)
            setCurrCoords(e.latlng)
            setOpen(true)
        }
    })
    return (
        <CustomDialog pinFormSubmit={pinFormSubmit} setOpen={setOpen} open={open} currCoords={currCoords} />
    )
}

function Leaflet({ pins, setPins }) {
    const position = [60.186449, 24.828243]

    function addPin(coordinates) {
        return (
            <Marker key={Math.random(0,100)} position={coordinates}>
            </Marker>
        )
    }

    return (
        <>
            <MapContainer center={position} zoom={20} class="full-height-map">
                <TileLayer
                bounds={[[60.191730, 24.810995], [60.176836, 24.848636]]}
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