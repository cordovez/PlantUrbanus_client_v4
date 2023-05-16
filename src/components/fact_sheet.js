import { FontWeight } from "@cloudinary/url-gen/qualifiers";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import BasicModal from "./Modals/basic_modal";
import UpdatePlant from "./Forms/update_plant";

function PlantFactSheet({ plant, plant_id }) {
  const lineStyles = {
    borderBottom: "1px solid lightgray",
    padding: ".5rem",
    marginBottom: "1rem",
  };

  //   console.log(plant);
  return (
    <>
      <Grid container>
        <Grid>
          <Paper
            square={true}
            elevation={2}
            sx={{ margin: "1rem", padding: "1rem" }}
          >
            <Typography sx={lineStyles} variant="body2">
              <span style={{ fontWeight: "bold" }}>Date of purchase: </span>
              <span> {plant.date_of_purchase}</span>
            </Typography>
            <Typography sx={lineStyles} variant="body2">
              <span style={{ fontWeight: "bold" }}>Price paid: </span>
              <span> {plant.price_paid}</span>
            </Typography>
            <Typography sx={lineStyles} variant="body2">
              <span style={{ fontWeight: "bold" }}>Purchased at: </span>
              <span> {plant.purchased_at}</span>
            </Typography>
            <Typography sx={lineStyles} variant="body2">
              <span style={{ fontWeight: "bold" }}>Substrate: </span>
              <span> {plant.substrate}</span>
            </Typography>
            <Typography sx={lineStyles} variant="body2">
              <span style={{ fontWeight: "bold" }}>Fertiliser: </span>
              <span> {plant.nutrients}</span>
            </Typography>
            <Typography sx={lineStyles} variant="body2">
              <span style={{ fontWeight: "bold" }}>Pesticides: </span>
              <span> € {plant.pest_treatment}</span>
            </Typography>

            <BasicModal
              label="Edit"
              FormData={UpdatePlant}
              data={plant}
              plant_id={plant_id}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
export default PlantFactSheet;
