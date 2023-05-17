/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useContext } from "react";
import Link from "next/link";

import { UserContext } from "@/context/user_context";
import { get_me_plants } from "@/axios/get_me_plants";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import BasicModal from "./Modals/basic_modal";
import AddPlant from "./Forms/add_plant_form";
import Weather from "./weather";
import { Typography } from "@mui/material";

function NoPlants() {
  const contextData = useContext(UserContext);
  const token = contextData[0];
  const [plantData, setPlantData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const findPlants = async () => {
      const response = await get_me_plants(token);
      if (response) {
        setPlantData(response.data);
      }
      setLoading(false);
    };
    findPlants();
  }, [token]);

  if (loading) return <p>Loading...</p>;
  if (!plantData) return <p>No plant data</p>;
  return (
    <Grid container justifyContent={"center"}>
      <Grid xs={12}>
        <BasicModal label="Add Plant" FormData={AddPlant} />
      </Grid>
      <Box
        maxWidth={"500px"}
        maxHeight={"500px"}
        bgcolor={"#ededed"}
        borderRadius={"8px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        padding={"100px"}
      >
        <Typography variant="body1">You have no plants yet 😭</Typography>
      </Box>
      <Grid xs={12}>
        <Weather />
      </Grid>
    </Grid>
  );
}
export default NoPlants;
