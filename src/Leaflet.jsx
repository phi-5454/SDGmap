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
import { getPinType, alertMessages, mapTilerApi } from "./constants";
import { Category } from "./pinInfo";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import pinLibrary from "./pinInfo";
import axios from "axios";
import { comment } from "postcss";


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

  const pinFormSubmit = async (category, comment, pinIndex) => {
    setOpen(false);

    const pinTypes = Object.keys(pinLibrary);
    const randomPinType = pinTypes[Math.floor(Math.random() * pinTypes.length)];
    const pushedPins = pins.concat({
      pinType: pinTypes[pinIndex],
      coordinates: [currCoords.lat, currCoords.lng],
      timePinned: 0,
      comment,
    });

    await axios.post("https://api.npoint.io/6702b7c729b99c15d863", {
      pins: pushedPins,
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

function AddPin({pin, pins, icon}) {

  let coordinates = pin.coordinates
  let category = getPinType(pin.pinType).category
  let name = getPinType(pin.pinType).name 
  let textVar = ""
  let timeVar = ""
  
  if (pin.comment){
    textVar = pin.comment
  }

  if (pin.time) {
    timeVar = pin.time;
  }

  const commentObj = {
    text: textVar,
    time: timeVar,
  };

  console.log(pin)

  const [comments, setComments] = useState([...pin.userComments])
  const [newComment, setNewComment] = useState([])

  const handleNewCommentChange = (e) => setNewComment(e.target.value)
  const addNewComment = async () => {
    if (newComment.trim()) {
      const commentObj = {
        text: newComment.trim(),
        time: new Date().toDateString(),
      };

      console.log(pin.userComments.concat(commentObj))

      pin.userComments = pin.userComments.concat(commentObj)
      const newPins = pins.map((p) => p.coordinates === coordinates ? pin : p)

      await axios.post("https://api.npoint.io/6702b7c729b99c15d863", { pins: newPins })

      setComments([...comments, commentObj])
      setNewComment("")
    }
  };

  return (
    <Marker
      key={coordinates[0] + coordinates[1]}
      icon={icon}
      position={coordinates}
      draggable={false}
    >
      <Popup>
        <div>
          <strong>Category:</strong> {category}
          <br />
          <strong>Description:</strong> {name}
          <br />
          <strong>--------------------------------------------------------------------</strong>
          <strong>Comments:</strong>
          <ul>
            {comments.map((commentObj, index) => (
              <li key={index}>
                {commentObj.time}: {commentObj.text}
              </li>
            ))}
          </ul>
          <textarea
            value={newComment}
            onChange={handleNewCommentChange}
            placeholder="Add a comment"
          />
          <br/>
          <button onClick={addNewComment}>Send</button>
        </div>
      </Popup>
    </Marker>
  );
}

function Leaflet({ pins, setPins }) {
  const position = [60.186449, 24.828243];


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
        {pins.map((pin, index) => (
          <AddPin
            key={index}
            pin={pin}
            icon={makeIcon(getPinType(pin.pinType).icon)}
          />
        ))}
        <MapEvents setPins={setPins} pins={pins} />
      </MapContainer>
    </>
  );
}

export default Leaflet;
