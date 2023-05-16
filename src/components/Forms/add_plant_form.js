import post_plant from "@/axios/post_plant";
import { Button } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "@/context/user_context";
import Grid from "@mui/material/Unstable_Grid2";

export default function AddPlant({ setOpen }) {
  const [token] = useContext(UserContext);
  const [imageSelected, setImageSelected] = useState("");

  // Working with the default HTM input button
  let input;
  if (input) {
    input.addEventListener("change", updateImageDisplay);
  }
  useEffect(() => {
    input = document.querySelector("input");
    input.style.opacity = 0;
  });

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "PlantUrbanus");

    post_plant(formData, token);
    setOpen(false);
  };
  return (
    <Grid container>
      <Grid
        xs={12}
        container
        spacing={-2}
        justifyContent={"center"}
        sx={{ bgcolor: "pink" }}
      >
        <input
          type="file"
          name="file"
          id="image_upload"
          accept=".jpg, .jpeg, .png, .webp"
          onChange={(e) => {
            setImageSelected(e.target.files[0]);
          }}
        />
      </Grid>
      <Grid
        container
        spacing={-2}
        className="preview"
        xs={12}
        justifyContent={"center"}
      >
        <div className="preview"></div>
      </Grid>

      <Grid xs={12} container justifyContent={"center"}>
        <Button variant="contained" onClick={uploadImage}>
          Upload
        </Button>
      </Grid>
    </Grid>
  );
}
