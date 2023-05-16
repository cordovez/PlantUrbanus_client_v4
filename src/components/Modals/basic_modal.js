import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddPlant from "../Forms/add_plant_form";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import Grid from "@mui/material/Unstable_Grid2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  border: "1px solid #666",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  children,
  label,
  FormData,
  data,
  plant_id,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} startIcon={<AddAPhotoIcon />}>
        {label}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* FormData is a misnomer: here it means just FormComponent */}
          <FormData
            setOpen={setOpen}
            dbData={data}
            plant_id={plant_id}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </>
  );
}
