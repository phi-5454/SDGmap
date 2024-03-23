import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useState } from 'react';
import CustomDialog from './CustomDialog';
import { LatLng } from 'leaflet';
import { mapTilerApi } from './constants';

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

    map.setMaxBounds(map.getBounds())
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

    const bounds = [
        new L.LatLng(60.191730, 24.810995), 
        new L.LatLng(60.176836, 24.848636)
    ]

    return (
        <>
            <MapContainer center={position} maxBounds={bounds} zoom={15} class="full-height-map">
                <TileLayer
                    bounds={bounds}
                    attribution='Olli Glorioso'
                    maxZoom={20}
                    minZoom={15}
                    url={mapTilerApi}
                />
                {pins.map((pin) => addPin(pin.coordinates))}
                <MapEvents />
                
            </MapContainer>
        </>
    )
}

export default Leaflet