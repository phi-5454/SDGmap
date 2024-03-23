import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { renderToStaticMarkup } from "react-dom/server";
import L from "leaflet";

export const Category = {
  Hazard: "Hazard",
  Damage: "Damage",
  Decay: "Decay",
  Suggestion: "Suggestion",
  Other: "Other",
};

const itemFactory = (faIcon) => {
  return (
    <div className="icon-container bg-stone-700 w-full rounded-xl drop-shadow">
      <div className="icon-text text-2xl text-center p-2  text-stone-200">
        <FontAwesomeIcon icon={faIcon} />
      </div>
    </div>
  );
};

const pinLibrary = {
  StreetFlood: {
    key: 0,
    category: Category.Damage,
    name: "Flooded street",
    lifetime: -1,
    icon: itemFactory(fas.faWater),
  },
  HouseFlood: {
    key: 0,
    category: Category.Damage,
    name: "Flooded house",
    lifetime: -1,
    icon: itemFactory(fas.faHouseFloodWater),
  },
  Slippery: {
    key: 1,
    category: Category.Hazard,
    name: "Slippery street",
    lifetime: -1,
    icon: itemFactory(fas.faBoltLightning),
  },
  ExposedPower: {
    key: 2,
    category: Category.Hazard,
    name: "Exposed powerline",
    lifetime: -1,
    icon: itemFactory(fas.faPersonFalling),
  },
};

const pinsOnMap = [
  {
    pinType: pinLibrary.Slippery,
    coordinates: [60.186449, 24.828243],
    timePinned: 0,
    comment: "Slipped here and fell. Watch out.",
  },
  {
    pinType: pinLibrary.ExposedPower,
    coordinates: [60.185449, 24.827243],
    timePinned: 1,
    comment: "Dangerous-looking power cable. Hope no floods are nearby!",
  },
  {
    pinType: pinLibrary.StreetFlood,
    coordinates: [60.18303034581267, 24.8241662979126],
    timePinned: 1,
    comment: "Couldn't drive through here.",
  },
  {
    pinType: pinLibrary.StreetFlood,
    coordinates: [60.18569880541803, 24.83596801757813],
    timePinned: 1,
    comment: "",
  },
  {
    pinType: pinLibrary.HouseFlood,
    coordinates: [60.190586860862716, 24.831547737121586],
    timePinned: 1,
    comment: "The basement of this house is flooded",
  },
];

export const getPinsOnMap = () => pinsOnMap;

const createPinData = () => {
  return {
    urgent: false,
  };
};

// Factory method for pin objects.
const pinObject = (props) => {
  const Pin = {
    StreetFlood: {},
  };

  const exPin = {
    name: "SomePin",
    category: Category.Other,
    postition: [60.0, 60.0],
    lifetime: 55000,
  };

  const exPinInst = {
    pinType: exPin,
    recordTime: 0,
    freeInfo: "Some user-specified info",
  };
};

const getPinInfo = () => {};

const savePinInfo = (pin) => {};

export { pinsOnMap };
export default pinLibrary;
