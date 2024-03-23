import pinLibrary from "./pinInfo"

const mapTilerApi = "https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=o28q90KHszO8WjJEWBy1"


function getPinType (pinTypeStr) {
  switch (pinTypeStr) {
    case "StreetFlood":
      return pinLibrary.StreetFlood
    case "ExposedPower":
      return pinLibrary.ExposedPower
    case "HouseFlood":
      return pinLibrary.HouseFlood
    case "Slippery":
      return pinLibrary.Slippery
    default:
      return pinLibrary.Slippery
  }
}

export { mapTilerApi, getPinType }

