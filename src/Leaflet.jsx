import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import pinLibrary from "./pinInfo";

function Leaflet({ pins, setPins }) {
  console.log(pinLibrary);
  const position = [60.1699, 24.9384];
  const customIcon = L.divIcon({
    className: "custom-icon",
    html: renderToStaticMarkup(pinLibrary[0].icon),
    iconSize: [30, 30], // Adjust the icon size as needed
  });

  function addPin(coordinates, icon) {
    return <Marker position={coordinates} icon={icon}></Marker>;
  }

  return (
    <>
      <MapContainer center={position} zoom={20} style={{ height: "90vh" }}>
        <TileLayer
          //attribution="Olli Glorioso"
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=o28q90KHszO8WjJEWBy1"
        />
        {pins.map((pin) => addPin(pin.coordinates, customIcon))}
      </MapContainer>
    </>
  );
}

export default Leaflet;

