import axios from "@/axios";

export default async function update_me_axios(updateData, token) {
  const response = await axios.patch(`/users/me/update`, updateData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
