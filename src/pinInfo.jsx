import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

export const Category = {
  Hazard: "Hazard",
  Damage: "Damage",
  Decay: "Decay",
  Suggestion: "Suggestion",
  Other: "Other",
};

const itemFactory = (faIcon) => {
  return (
    <div className="icon-container bg-stone-700 w-full rounded-xl drop-shadow flex justify-center items-center ">
      <div className="icon-text text-2xl text-center p-1 text-stone-200">
        <FontAwesomeIcon
          className="mx-auto my-auto content-center"
          icon={faIcon}
        />
      </div>
    </div>
  );
};

const pinLibrary = {
  StreetFlood: {
    key: -1,
    category: Category.Damage,
    name: "Flooded street",
    lifetime: -1,
    icon: itemFactory(fas.faWater),
  },
  ExposedSewage: {
    key: 0,
    category: Category.Damage,
    name: "Exposed sewage",
    lifetime: -1,
    icon: itemFactory(fas.faDisease),
  },
  CollapsedBuilding: {
    key: 0,
    category: Category.Damage,
    name: "Collapsed building",
    lifetime: -1,
    icon: itemFactory(fas.faBurst),
  },
  HouseFlood: {
    key: 1,
    category: Category.Damage,
    name: "Flooded house",
    lifetime: -1,
    icon: itemFactory(fas.faHouseFloodWater),
  },
  Slippery: {
    key: 2,
    category: Category.Hazard,
    name: "Slippery street",
    lifetime: -1,
    icon: itemFactory(fas.faPersonFalling),
  },
  ExposedPower: {
    key: 3,
    category: Category.Hazard,
    name: "Exposed powerline",
    lifetime: -1,
    icon: itemFactory(fas.faBoltLightning),
  },
  Pothole: {
    key: 4,
    category: Category.Decay,
    name: "Pothole",
    lifetime: -1,
    icon: itemFactory(fas.faHeartCrack),
  },
  WildAnimal: {
    key: 5,
    category: Category.Hazard,
    name: "Wild animal",
    lifetime: -1,
    icon: itemFactory(fas.faHippo),
  },
  DelerictBuilding: {
    key: 6,
    category: Category.Decay,
    name: "Delerict building",
    lifetime: -1,
    icon: itemFactory(fas.faHouseCrack),
  },
  CarAccident: {
    key: 7,
    category: Category.Decay,
    name: "Car accident",
    lifetime: -1,
    icon: itemFactory(fas.faCarBurst),
  },
  RoadBarrier: {
    key: 7,
    category: Category.Hazard,
    name: "Road barrier",
    lifetime: -1,
    icon: itemFactory(fas.faRoadBarrier),
  },
};

const pinsOnMap = [
  {
    pinType: pinLibrary.Slippery,
    coordinates: [60.186449, 24.828243],
    timePinned: 0,
    userComments: [{ text: "Slipped here and fell. Watch out.", time: "12-12-2020"}]
  },
  {
    pinType: pinLibrary.ExposedPower,
    coordinates: [60.185449, 24.827243],
    timePinned: 1,
    userComments: [{ text: "Dangerous-looking power cable. Hope no floods are nearby!", time: "12-12-2012"}]
  },
  {
    pinType: pinLibrary.StreetFlood,
    coordinates: [60.18303034581267, 24.8241662979126],
    timePinned: 1,
    userComments: [{text: "Couldn't drive through here.", time: "21-12-2023"}]
  },
  {
    pinType: pinLibrary.StreetFlood,
    coordinates: [60.18569880541803, 24.83596801757813],
    timePinned: 1,
    userComments: [{text: "daffdsds", time: "21-05-2023"}]
  },
  {
    pinType: pinLibrary.HouseFlood,
    coordinates: [60.190586860862716, 24.831547737121586],
    timePinned: 1,
    userComments: [{ text: "The basement of this house is flooded", time: "23-04-2024"}]   
  }
];


export const getPinsOnMap = () => pinsOnMap;

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
