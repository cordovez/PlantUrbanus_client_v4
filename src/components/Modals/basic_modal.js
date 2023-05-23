import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Grid from "@mui/material/Unstable_Grid2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "1px solid #666",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({
  children,
  props,
  label,
  ModalBody,
  data,
  plant_id,
  user_id,
  Icon,
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid container justifyContent={"space-between"}>
        <Button onClick={handleOpen} startIcon={Icon}>
          {label}
        </Button>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-plant-photo-upload"
        aria-describedby="modal-plant-photo-upload"
      >
        <Box sx={style} display={"flex"} justifyContent={"center"}>
          {/* FormData is a misnomer: here it means just FormComponent */}

          <ModalBody
            setOpen={setOpen}
            dbData={data}
            plant_id={plant_id}
            handleClose={handleClose}
            {...props}
          />
        </Box>
      </Modal>
    </>
  );
}
