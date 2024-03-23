import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

const Category = {
  Hazard: "Hazard",
  Damage: "Damage",
  Decay: "Decay",
  Suggestion: "Suggestion",
  Other: "Other",
};

const pinLibrary = [
  {
    key: 0,
    name: "Flooded street",
    category: Category.Damage,
    icon: (
      <div className="icon-container">
        <div className="icon-text bg-red-600 border-white border-2 text-blue-200">
          AAA
        </div>
        <FontAwesomeIcon icon={fas.faHouse} />
      </div>
    ),
  },
];

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

//export default { getPinInfo, savePinInfo, pinLibrary };
export default pinLibrary;
