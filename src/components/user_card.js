import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import BasicModal from "./Modals/basic_modal";
import RegisterForm from "./Forms/register_form";
import AddPlant from "./Forms/add_plant_form";
import { deepPurple } from "@mui/material/colors";
import MainAvatar from "./globals/MainAvatar";
import Link from "next/link";

function UserCard({ data }) {
  return (
    <Grid
      container
      justifyContent={"center"}
      xs={12}
      sx={{}}
      // marginBottom={"10px"}
      marginTop={"20px"}
    >
      <Grid
        container
        justifyContent={"flex-start"}
        alignItems={"center"}
        xs={12}
      >
        <Link href="/user/me">
          <MainAvatar data={data} />
        </Link>
        <Typography variant="h3" marginLeft={"20px"}>
          {data.username}
        </Typography>
      </Grid>
    </Grid>
  );
}
export default UserCard;
