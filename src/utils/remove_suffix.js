export default function remove_suffix(inputString) {
  const suffixRegex = /_(day|night|polartwilight)$/;
  const outputString = inputString.replace(suffixRegex, "");
  return outputString;
}
