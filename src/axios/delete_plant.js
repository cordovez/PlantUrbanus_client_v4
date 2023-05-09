import axios from ".";

export default async function delete_plant(id, token) {
  const tokenInfo = { headers: { Authorization: "Bearer " + token } };

  try {
    const response = await axios.delete(`/plants/delete/${id}`, tokenInfo);
    console.log(response);
  } catch (error) {
    console.log(error.response);
  }
}
