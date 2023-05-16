import post_plant from "@/axios/post_plant";
import { Button } from "@mui/material";
import { useState, useContext } from "react";
import { UserContext } from "@/context/user_context";
import Grid from "@mui/material/Unstable_Grid2";

export default function AddPlant({ setOpen }) {
  const [token] = useContext(UserContext);
  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "PlantUrbanus");

    post_plant(formData, token);
    setOpen(false);
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid>
        <input
          type="file"
          name="file"
          onChange={(e) => {
            setImageSelected(e.target.files[0]);
          }}
        />
      </Grid>

      <Grid>
        <Button variant="contained" onClick={uploadImage}>
          Upload
        </Button>
      </Grid>
    </Grid>
  );
}
