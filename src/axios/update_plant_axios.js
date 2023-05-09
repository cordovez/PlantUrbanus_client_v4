import { useState, useContext } from "react";
import axios from "@/axios";
import { UserContext } from "@/context/user_context";

export default async function update_plant_axios(plant_id, updateData, token) {
  const response = await axios.patch(`/plants/update/${plant_id}`, updateData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
}
