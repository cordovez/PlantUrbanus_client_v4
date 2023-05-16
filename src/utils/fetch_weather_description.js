import keys from "../assets/images/weathericon/icon_keys.json";

export default function weatherDescription(weatherSymbol) {
  return keys[weatherSymbol].desc_en;
}
