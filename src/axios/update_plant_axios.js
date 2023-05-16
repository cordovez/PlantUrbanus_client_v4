import axios from "@/axios";

export default async function update_plant_axios(plant_id, updateData, token) {
  const response = await axios.patch(`/plants/update/${plant_id}`, updateData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
