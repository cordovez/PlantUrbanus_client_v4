import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import axios from "@/axios";
import { useRouter } from "next/router";
import Link from "next/link";

import { UserContext } from "@/context/user_context";
import { useContext, useEffect, useState } from "react";

import RootLayout from "../layout";
import { get_plant } from "@/axios/get_plant";
import PlantCard from "@/components/plant_card";
import PlantFactSheet from "@/components/fact_sheet";

export default function Plant() {
  const contextData = useContext(UserContext);
  const token = contextData[0];
  const router = useRouter();
  const plant_id = router.query.id;

  const [plantData, setPlantData] = useState({});
  const [loading, setLoading] = useState(true);

  // const plant = get_plant(plant_id, token);
  useEffect(() => {
    setLoading(true);
    async function plantData() {
      try {
        const response = await get_plant(plant_id, token);
        setPlantData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    plantData();
  }, [plant_id, token]);

  if (loading) {
    return <p>... Loading ...</p>;
  }

  return (
    <Grid
      container
      flexDirection={"column"}
      alignSelf={"center"}
      height={"1000px"}
      padding={"0 10px"}
      marginTop={"10px"}
    >
      <Grid xs={12}>
        <Typography variant="overline" display="block" gutterBottom>
          <Link href="/user/dashboard">
            <Button variant="outlined" sx={{ bgcolor: "white" }}>
              Back to dashboard
            </Button>
          </Link>
        </Typography>
      </Grid>

      <Grid
        container
        justifyContent={"flex-start"}
        // height={"100vh"}
        marginBottom={"50px"}
      >
        <Grid sm={4} xs={12}>
          <PlantCard plant={plantData} id={plant_id} token={token} />
        </Grid>

        <Grid sm={8} xs={12} marginTop={"2px"}>
          <PlantFactSheet plant={plantData} plant_id={plant_id} />
        </Grid>
      </Grid>
    </Grid>
  );
}
Plant.PageLayout = RootLayout;
