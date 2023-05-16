import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Typography from "@mui/material/Typography";

import axios from "@/axios";
import { useRouter } from "next/router";
import Link from "next/link";

import { UserContext } from "@/context/user_context";
import { useContext, useEffect, useState } from "react";

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
    <Grid container flexDirection={"column"}>
      <Grid xs={12}>
        <Typography variant="overline" display="block" gutterBottom>
          <Link href="/me">Back to my plants</Link>
        </Typography>
      </Grid>
      <Grid container>
        <Grid sm={6}>
          <PlantCard plant={plantData} id={plant_id} token={token} />
        </Grid>
        <Grid sm={6}>
          <PlantFactSheet plant={plantData} plant_id={plant_id} />
        </Grid>
      </Grid>
    </Grid>
  );
}
{
  /* 
      <Grid container>
        <Grid sm={6}>
          <PlantCard plant={plantData} id={plant_id} token={token} />
        </Grid>
        <Grid xs={12} sm={6}>
          <PlantFactSheet plant={plantData} plant_id={plant_id} />
        </Grid>
      </Grid> */
}
