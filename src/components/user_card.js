import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import BasicModal from "./Modals/basic_modal";

function UserCard({ data }) {
  return (
    <Grid container spacing={2}>
      <Grid container xs={8}>
        <Grid>
          <Avatar
            src={data.avatar.uri}
            alt={data.username}
            sx={{ width: 80, height: 80 }}
          />
        </Grid>
        <Grid>
          <Typography variant="h2">{data.username}</Typography>
        </Grid>
      </Grid>
      <Grid>
        <BasicModal label="Add Plant" />
      </Grid>
    </Grid>
  );
}
export default UserCard;
