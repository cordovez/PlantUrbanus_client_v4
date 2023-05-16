import axios from ".";

export async function get_sun_and_moon(lat, lon) {
  const date = new Date();
  const dateString =
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    date.getDate();

  // time offset
  const offsetInMinutes = date.getTimezoneOffset();
  const hours = Math.abs(Math.floor(offsetInMinutes / 60)); // Get absolute value and round down to get hours
  const minutes = Math.abs(offsetInMinutes % 60); // Get absolute value and get remainder to get minutes
  const sign = offsetInMinutes >= 0 ? "-" : "+"; // Determine if offset is positive or negative
  const offsetString = `${sign}${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  const request_params = {
    lat: lat,
    lon: lon,
    date: dateString,
    offset: offsetString,
  };

  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.get(
      "https://api.met.no/weatherapi/sunrise/2.0/.json",
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: request_params,
      }
    );
    if (response) {
      return response;
    }
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
}
