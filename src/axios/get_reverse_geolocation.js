import axios from ".";

export async function get_reverse_geolocation(lat, lon) {
  const request_params = {
    latitude: lat,
    longitude: lon,
  };

  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await axios.get(
      "https://api.bigdatacloud.net/data/reverse-geocode-client",
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: request_params,
      }
    );
    return response;
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
