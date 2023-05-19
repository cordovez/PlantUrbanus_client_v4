import Link from "next/link";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";

import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";

import BasicModal from "../../components/Modals/basic_modal";
import Button from "@mui/material/Button";
import { UserContext } from "@/context/user_context";
import { get_me } from "@/axios/get_me";
import RootLayout from "../layout";

export default function Me() {
  const contextData = useContext(UserContext);
  const token = contextData[0];

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const findUser = async () => {
      const response = await get_me(token);
      if (response) {
        setUser(response.data);
      }
      setLoading(false);
    };
    findUser();
  }, [token]);

  const lineStyles = {
    borderBottom: "1px solid lightgray",
    padding: ".5rem",
    marginBottom: "1rem",
  };
  if (loading) return " ... loading ...";
  if (user) {
    const date = user.date_of_purchase;
    return (
      <Grid container marginBottom={"30px"}>
        <Grid zIndex={1} xs={12} marginBottom={"10px"}>
          <Link href="/user/dashboard">
            <Button variant="outlined" sx={{ bgcolor: "white" }}>
              Back to dashboard
            </Button>
          </Link>
        </Grid>
        <Grid container xs={12}>
          <Grid xs={12} sm={4}>
            <Image
              src={user.avatar.uri}
              width={250}
              height={250}
              placeholder={user.avatar.uri}
              alt={user.username}
              style={{ objectFit: "cover" }}
            ></Image>
          </Grid>
          <Grid
            //   container
            xs={12}
            sm={8}
            //   display={"flex"}
            //   flexDirection={"column"}
            //   flex={1}
          >
            <Paper square={true} elevation={2} sx={{ padding: "1rem" }}>
              <Typography sx={lineStyles} variant="body2">
                <span style={{ fontWeight: "bold" }}>Username: </span>
                <span> {user.username}</span>
              </Typography>
              <Typography sx={lineStyles} variant="body2">
                <span style={{ fontWeight: "bold" }}>Name: </span>
                <span> {user.first_name}</span>
              </Typography>
              <Typography sx={lineStyles} variant="body2">
                <span style={{ fontWeight: "bold" }}>Last name: </span>
                <span>€ {user.last_name}</span>
              </Typography>
              <Typography sx={lineStyles} variant="body2">
                <span style={{ fontWeight: "bold" }}>Email: </span>
                <span> {user.email}</span>
              </Typography>
              <Typography sx={lineStyles} variant="body2">
                <span style={{ fontWeight: "bold" }}>Member since: </span>
                <span> {user.created_at}</span>
              </Typography>
              <Typography sx={lineStyles} variant="body2">
                <span style={{ fontWeight: "bold" }}>Number of plants: </span>
                <span> {user.plants.length}</span>
              </Typography>
              <BasicModal
                label="Edit"
                // ModalBody={UpdatePlant}
                data={user}
                // plant_id={plant_id}
                Icon={<EditIcon />}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
Me.PageLayout = RootLayout;
