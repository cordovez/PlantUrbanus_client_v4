import post_plant from "@/axios/post_plant";
import { Button } from "@mui/material";
import { useState, useContext } from "react";
import { UserContext } from "@/context/user_context";

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
    <>
      <input
        type="file"
        name="file"
        onChange={(e) => {
          setImageSelected(e.target.files[0]);
        }}
      />

      <div>
        <Button variant="contained" onClick={uploadImage}>
          Upload
        </Button>
      </div>
    </>
  );
}
