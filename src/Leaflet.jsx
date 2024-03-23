import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import CustomDialog from "./CustomDialog";
import { LatLng } from "leaflet";
import { mapTilerApi } from "./constants";

import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import pinLibrary from "./pinInfo";

const makeIcon = (markup) => {
  return L.divIcon({
    className: "custom-icon",
    html: renderToStaticMarkup(markup),
    iconSize: [50, 50], // Adjust the icon size as needed
  });
};

const customIcon = L.divIcon({
  className: "custom-icon",
  html: renderToStaticMarkup(pinLibrary.Slippery.icon),
  iconSize: [50, 50], // Adjust the icon size as needed
});

function MapEvents({ setPins, pins }) {
  //console.log(pinLibrary);
  const [open, setOpen] = useState(false);
  const [currCoords, setCurrCoords] = useState({ lat: 0, lng: 0 });

  const pinFormSubmit = (e) => {
    setOpen(false);
    console.log(currCoords);
    //console.log(pins);
    const pushedPins = pins.concat({
      pinType: pinLibrary.Slippery,
      coordinates: [currCoords.lat, currCoords.lng],
      //TODO: Current time
      timePinned: 0,
    });
    //console.log(pushedPins);
    setPins(pushedPins);
  };

  const map = useMapEvents({
    click(e) {
      setCurrCoords(e.latlng);
      setOpen(true);
    },
  });

  map.setMaxBounds(map.getBounds());
  return (
    <CustomDialog
      pinFormSubmit={pinFormSubmit}
      setOpen={setOpen}
      open={open}
      currCoords={currCoords}
    />
  );
}

function Leaflet({ pins, setPins }) {
  const position = [60.186449, 24.828243];

  function addPin(coordinates, icon) {
    //console.log(coordinates);
    return (
      <Marker
        key={Math.random(0, 100)}
        icon={icon}
        position={coordinates}
      ></Marker>
    );
  }

  const bounds = [
    new L.LatLng(60.19173, 24.810995),
    new L.LatLng(60.176836, 24.848636),
  ];

  console.log(pins);
  return (
    <>
      <MapContainer
        center={position}
        maxBounds={bounds}
        zoom={15}
        class="full-height-map"
      >
        <TileLayer
          bounds={bounds}
          attribution="Olli Glorioso"
          maxZoom={20}
          minZoom={15}
          url={mapTilerApi}
        />
        {pins.map((pin) => addPin(pin.coordinates, makeIcon(pin.pinType.icon)))}
        <MapEvents setPins={setPins} pins={pins} />
      </MapContainer>
    </>
  );
}

export default Leaflet;
