import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Category = {
  Hazard: "Hazard",
  Other: "Other",
};

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

const newPin = () => {
  return {
    urgent: false,
  };
};

const getPinInfo = () => {};

const savePinInfo = (pin) => {};

export default { getPinInfo, savePinInfo };
