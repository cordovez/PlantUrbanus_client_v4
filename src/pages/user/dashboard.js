import { useEffect, useState, useContext } from "react";
import RootLayout from "../layout";

import MyPlants from "@/components/my_plants";
import UserCard from "@/components/user_card";
import { UserContext } from "@/context/user_context";

import Grid from "@mui/material/Unstable_Grid2";

import { get_me } from "@/axios/get_me";
import NoPlants from "@/components/no_plants";

export default function Dashboard() {
  const contextData = useContext(UserContext);
  const token = contextData[0];

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const findUser = async () => {
      const response = await get_me(token);
      if (response) {
        setData(response.data);
      }
      setLoading(false);
    };
    findUser();
  }, [token]);
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>Please log in</p>;
  return (
    <Grid
      container
      maxWidth={600}
      justifyContent={"center"}
      alignSelf={"center"}
      margin={"0 auto"}
      // height={"100%"}
    >
      <Grid xs={12} marginBottom={"10px"}>
        <UserCard data={data} />
      </Grid>
      <Grid>{data.plants.length === 0 ? <NoPlants /> : <MyPlants />}</Grid>
    </Grid>
  );
}
Dashboard.PageLayout = RootLayout;
