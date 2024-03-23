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

const alertMessages = [
    "Watch out! There's a banana peel ahead.",
    "Caution: Low flying birds.",
    "Beware of the dog... it loves to play fetch.",
    "Warning: This area known for spontaneous dance-offs.",
    "Alert: You're entering a no-frown zone.",
    "Caution: High levels of optimism detected ahead.",
    "Warning: Uncontrollable laughter may occur.",
    "Beware: You're entering a cookie monster's territory.",
    "Alert: High chance of finding a four-leaf clover here.",
    "Warning: This area known for sudden bursts of creativity.",
    "Caution: Frequent UFO sightings reported.",
    "Beware: You're entering a dragon's lair.",
    "Alert: This area known for spontaneous sing-alongs.",
    "Warning: High probability of encountering a superhero.",
    "Caution: Time travel portal detected ahead.",
    "Beware: This area known for sudden outbreaks of fun.",
    "Alert: You're entering a unicorn's habitat.",
    "Warning: This area known for excessive high fives.",
    "Caution: Frequent rainbow sightings reported.",
    "Beware: You're entering a wizard's territory.",
    "Alert: High chance of finding a pot of gold here.",
    "Warning: This area known for sudden bursts of kindness.",
    "Caution: Alien landing site detected ahead.",
    "Beware: This area known for spontaneous dance parties.",
    "Alert: You're entering a fairy's domain.",
    "Warning: This area known for excessive joy.",
    "Caution: Frequent mermaid sightings reported.",
    "Beware: You're entering a gnome's territory.",
    "Alert: High chance of finding a magic lamp here.",
    "Warning: This area known for sudden outbreaks of peace.",
    "Caution: Ghost town detected ahead.",
    "Beware: This area known for spontaneous food fights.",
    "Alert: You're entering a leprechaun's territory.",
    "Warning: This area known for excessive friendliness.",
    "Caution: Frequent pirate sightings reported.",
    "Beware: You're entering a vampire's territory.",
    "Alert: High chance of finding a treasure chest here.",
    "Warning: This area known for sudden bursts of love.",
    "Caution: Zombie apocalypse site detected ahead.",
    "Beware: This area known for spontaneous pillow fights.",
    "Alert: You're entering a werewolf's territory.",
    "Warning: This area known for excessive happiness.",
    "Caution: Frequent fairy sightings reported.",
    "Beware: You're entering a witch's territory.",
    "Alert: High chance of finding a magic potion here.",
    "Warning: This area known for sudden outbreaks of joy.",
    "Caution: Haunted house detected ahead.",
    "Beware: This area known for spontaneous snowball fights.",
    "Alert: You're entering a troll's territory.",
    "Warning: This area known for excessive laughter."
  ];

export { mapTilerApi, getPinType, alertMessages }

