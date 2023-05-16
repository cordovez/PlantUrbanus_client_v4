import { useEffect, useState, useContext } from "react";

import MyPlants from "@/components/my_plants";
import UserCard from "@/components/user_card";
import { UserContext } from "@/context/user_context";

import Grid from "@mui/material/Unstable_Grid2";

import { get_me } from "@/axios/get_me";

export default function Me() {
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
    <Grid container>
      <Grid xs={12}>
        <UserCard data={data} />
      </Grid>
      <Grid xs={12}>
        <MyPlants />
      </Grid>
    </Grid>
  );
}
