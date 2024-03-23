import { MapContainer, TileLayer, useMap } from 'react-leaflet'

import "leaflet/dist/leaflet.css";

function Leaflet() {

    const position = [51.505, -0.09]

    return (
        <>
            <MapContainer center={position} zoom={20} style={{ height: "90vh" }}>
            <TileLayer
            attribution='Olli Glorioso'
            url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=o28q90KHszO8WjJEWBy1"
            />
            </MapContainer>
        </>
    )
}

export default Leaflet