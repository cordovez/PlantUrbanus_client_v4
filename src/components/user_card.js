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
    <Grid container spacing={2}>
      <Grid container xs={8}>
        <Grid>
          {data.avatar !== null ? (
            <Avatar
              src={data.avatar.uri}
              alt={data.username}
              sx={{ width: 80, height: 80 }}
            />
          ) : (
            <Avatar sx={{ bgcolor: deepPurple[500] }}>
              {data.username[0].toUpperCase()}
            </Avatar>
          )}
        </Grid>
        <Grid>
          <Typography variant="h2">{data.username}</Typography>
        </Grid>
      </Grid>
      <Grid>
        <BasicModal label="Add Plant" FormData={AddPlant} />
      </Grid>
    </Grid>
  );
}
export default UserCard;
