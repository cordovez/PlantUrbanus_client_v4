import axios from ".";

export default async function post_login(data) {
  const formData = {
    username: data.username,
    password: data.password,
  };
  try {
    const response = await axios.post("/token", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.log("error response: ", error.response);
  }
}
