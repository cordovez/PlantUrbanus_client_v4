import axios from ".";

export default async function post_generic_avatar(token, username) {
  params: {
    path: "https://api.multiavatar.com/" + username + ".png";
  }

  try {
    const response = await axios.post("users/me/add-avatar", null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: params,
    });
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error.response);
  }
}
