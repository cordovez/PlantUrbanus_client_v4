import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import BasicModal from "./Modals/basic_modal";
import RegisterForm from "./Forms/register_form";
import AddPlant from "./Forms/add_plant_form";
import { deepPurple } from "@mui/material/colors";

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
        {data.avatar !== null ? (
          <Avatar
            src={data.avatar.uri}
            alt={data.username}
            sx={{ width: 80, height: 80, marginRight: "20px" }}
          />
        ) : (
          <Avatar sx={{ bgcolor: deepPurple[500] }}>
            {data.username[0].toUpperCase()}
          </Avatar>
        )}
        <Grid>
          <Typography variant="h3">{data.username}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default UserCard;
