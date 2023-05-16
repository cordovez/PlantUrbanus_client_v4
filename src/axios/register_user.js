import axios from "@/axios";

export default async function registerUser(data, token) {
  try {
    const response = await axios.post(`/users/create/`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error.response.data);
  }
}
