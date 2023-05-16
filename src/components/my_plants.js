/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useContext } from "react";
import Link from "next/link";

import { UserContext } from "@/context/user_context";
import { get_me_plants } from "@/axios/get_me_plants";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import BasicModal from "./Modals/basic_modal";
import AddPlant from "./Forms/add_plant_form";
import Weather from "./weather";

function MyPlants() {
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
      <Grid>
        <ImageList
          sx={{ maxWidth: 500, height: 450 }}
          // cols={3}
          // rowHeight={164}
        >
          {plantData.map((item) => (
            <Link
              href={`/plant/${item._id}`}
              key={item._id}
              item={item}
              style={{ color: "#333", textDecoration: "none" }}
            >
              <ImageListItem>
                <img
                  src={`${item.images[0].uri}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.images[0].uri}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
              <ImageListItemBar
                title={!item.common_name ? "No name given" : item.common_name}
                textDecoration="none"
                subtitle={
                  <em>
                    {!item.scientific_name
                      ? "scientific name"
                      : item.scientific_name}
                  </em>
                }
                position="below"
              />
            </Link>
          ))}
        </ImageList>
      </Grid>
      <Grid xs={12}>
        <Weather />
      </Grid>
    </Grid>
  );
}
export default MyPlants;
