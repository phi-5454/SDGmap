import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import CustomDialog from "./CustomDialog";
import { LatLng } from "leaflet";
import { mapTilerApi } from "./constants";
import { Category } from "./pinInfo";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import pinLibrary from "./pinInfo";

const customIcon = L.divIcon({
  className: "custom-icon",
  html: renderToStaticMarkup(pinLibrary.Slippery.icon),
  iconSize: [50, 50], // Adjust the icon size as needed
});

const makeIcon = (markup) => {
  return L.divIcon({
    className: "custom-icon",
    html: renderToStaticMarkup(markup),
    iconSize: [50, 50], // Adjust the icon size as needed
  });
};

function MapEvents({ setPins, pins }) {
  const [open, setOpen] = useState(false);
  const [currCoords, setCurrCoords] = useState({ lat: 0, lng: 0 });

  const pinFormSubmit = (category) => {
    setOpen(false);
    const newPinType = (() => {
      if (category === Category.Hazard) {
        return pinLibrary.StreetFlood;
      } else if (category === Category.Decay) {
        return pinLibrary.HouseFlood;
      } else if (category === Category.Decay) {
        return pinLibrary.Slippery;
      } else if (category === Category.Suggestion) {
        return pinLibrary.ExposedPower;
      } else if (category === Category.Other) {
        return pinLibrary.ExposedPower;
      } else {
        return pinLibrary.StreetFlood;
      }
    })();

    console.log(newPinType)
    const pushedPins = pins.concat({
      pinType: newPinType,
      coordinates: [currCoords.lat, currCoords.lng],
      timePinned: 0,
    });
    setPins(pushedPins);
  };

  const map = useMapEvents({
    click(e) {
      setCurrCoords(e.latlng);
      setOpen(true);
    },
  });

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

  function addPin(pin, icon) {

    let coordinates = pin.coordinates
    let category = pin.pinType.category
    let name = pin.pinType.name 
    let comment = pin.comment

    const [comments, setComments] = useState([comment])
    const [newComment, setNewComment] = useState("")

    const handleNewCommentChange = (e) => setNewComment(e.target.value)
    const addNewComment = () => {
      if (newComment.trim()) {
        setComments([...comments, newComment.trim()])
        setNewComment("")
      }
    }

    return (
      <Marker
        key={coordinates[0] + coordinates[1]}
        icon={icon}
        position={coordinates}
        riseOnHover
        draggable={false}
      >
      <Popup>
        <div>
          <strong>Category:</strong> {category}
          <br />
          <strong>Description:</strong> {name}
          <br />
          <strong>Comment:</strong> {comment}
          <br />
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <textarea
            value={newComment}
            onChange={handleNewCommentChange}
            placeholder="Add a comment"
          />
          <button onClick={addNewComment}>Add Comment</button>
        </div>
      </Popup>
      </Marker>
    );
  }

  const bounds = [
    new L.LatLng(60.261997, 24.571249),
    new L.LatLng(60.080936, 25.191078),
  ];

  return (
    <>
      <MapContainer
        center={position}
        zoom={15}
        maxBounds={bounds}
        dragging={true}
        class="full-height-map"
      >
        <TileLayer
          attribution="Olli Glorioso"
          url={mapTilerApi}
          maxBounds={bounds}
          maxZoom={18}
          minZoom={14}
        />
        {pins.map((pin) => addPin(pin, makeIcon(pin.pinType.icon)))}
        <MapEvents setPins={setPins} pins={pins} />
      </MapContainer>
    </>
  );
}

export default Leaflet;
