import { Typography } from "@mui/material";

import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";

import BasicModal from "./Modals/basic_modal";
import UpdatePlant from "./Forms/update_plant";

function PlantFactSheet({ plant, plant_id }) {
  const lineStyles = {
    borderBottom: "1px solid lightgray",
    padding: ".5rem",
    marginBottom: "1rem",
  };

  return (
    <>
      <Paper
        square={true}
        elevation={2}
        sx={{ padding: "1rem", width: "100%" }}
      >
        <Typography sx={lineStyles} variant="body2">
          <span style={{ fontWeight: "bold" }}>Date of purchase: </span>
          <span> {plant.date_of_purchase}</span>
        </Typography>
        <Typography sx={lineStyles} variant="body2">
          <span style={{ fontWeight: "bold" }}>Price paid: </span>
          <span>€ {plant.price_paid}</span>
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
          <span> {plant.pest_treatment}</span>
        </Typography>

        <BasicModal
          label="Edit"
          ModalBody={UpdatePlant}
          data={plant}
          plant_id={plant_id}
          Icon={<EditIcon />}
        />
      </Paper>
    </>
  );
}
export default PlantFactSheet;
