import Axios from "axios";
import axios from ".";
import Router from "next/router";

export default async function post_plant(formData, token) {
  try {
    const response = await Axios.post(
      "https://api.cloudinary.com/v1_1/cordovez/image/upload",
      formData
    );
    // console.log(response.data.public_id, response.data.url);
    if (response) {
      send_to_server(response.data.public_id, response.data.url, token);
    }
    Router.reload();
  } catch (error) {
    console.log(error.response.data);
  }
}

function send_to_server(public_id, url, token) {
  const query_params = { public_id, url };
  axios
    .post("users/me/add-plant", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: query_params,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
}
