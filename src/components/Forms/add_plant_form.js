/* eslint-disable @next/next/no-img-element */
import post_plant from "@/axios/post_plant";
import { Button } from "@mui/material";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "@/context/user_context";
import Grid from "@mui/material/Unstable_Grid2";

export default function AddPlant({ setOpen, handleClose }) {
  const [token] = useContext(UserContext);
  const [fileData, setFileData] = useState("");

  const [preview, setPreview] = useState("hidden");

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", fileData);
    formData.append("upload_preset", "PlantUrbanus");

    post_plant(formData, token);
    setOpen(false);
  };

  const previewImage = (event) => {
    const imageFiles = event.target.files;

    const imageFilesLength = imageFiles.length;
    if (imageFilesLength > 0) {
      const imageSrc = URL.createObjectURL(imageFiles[0]);

      const imagePreviewElement = document.querySelector(
        "#preview-selected-image"
      );

      imagePreviewElement.src = imageSrc;
      imagePreviewElement.style.display = "block";
    }
  };

  return (
    <>
      <Grid
        container
        spacing={5}
        justifyContent={"center"}
        sx={{ width: "70%" }}
      >
        <Grid container>
          <img
            id="preview-selected-image"
            style={{ visibility: preview, maxWidth: "90%" }}
            alt="selected plant image"
          />
        </Grid>

        <Grid>
          <label htmlFor="image_upload" className="custom_image_upload">
            <input
              type="file"
              name="file"
              id="image_upload"
              accept=".jpg, .jpeg, .png, .webp"
              onChange={(e) => {
                previewImage(e);
                setFileData(e.target.files[0]);
                setPreview("visible");
              }}
            />
          </label>
        </Grid>

        <Grid container justifyContent={"space-between"}>
          <Grid>
            <Button variant="contained" onClick={uploadImage}>
              Upload
            </Button>
          </Grid>
          <Grid>
            <Button onClick={handleClose}>Cancel</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
