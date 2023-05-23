import { useState, useContext } from "react";
import axios from "@/axios";
import { UserContext } from "@/context/user_context";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Unstable_Grid2";

import update_me_axios from "@/axios/update_me_axios";

export default function UpdateMe({ dbData, handleClose }) {
  const router = useRouter();
  const [token] = useContext(UserContext);
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(value);
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  function compareInputs(newValues, dbValues) {
    let updated = {};
    for (const [key, value] of Object.entries(newValues)) {
      if (dbValues[key] !== value && dbValues[key] !== "undefined") {
        updated[key] = value;
      }
    }
    console.log("from inside compare: ", updated);
    return updated;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    pass;
    // const newInputs = {
    //   username: data.username,
    //   firstName: data.first_name,
    //   lastName: data.last_name,
    //   email: data.email,
    // };

    // const updateData = compareInputs(newInputs, dbData);
    // // console.log("newIputs: ", newInputs);
    // // console.log("updatedData: ", updateData);
    // // console.log(data);

    // try {
    //   await update_me_axios(updateData, token);
    //   handleClose();
    //   router.reload(window.location.pathname);
    // } catch (err) {
    //   console.log(err);
    //   if (err.response.status === 422) {
    //     const details = err.response.data.detail;
    //     details.map((detail) =>
    //       console.log(detail.loc, detail.msg, detail.type)
    //     );
    //   } else {
    //     console.log(err.response);
    //   }
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="username"
        // value={data.common_name}
        label="User name"
        size="small"
        placeholder={dbData.username}
        fullWidth
        onChange={handleChange}
        sx={{ paddingBottom: "1rem" }}
      />
      <TextField
        name="firstName"
        label="First name"
        size="small"
        placeholder={dbData.first_name}
        fullWidth
        onChange={handleChange}
        sx={{ paddingBottom: "1rem" }}
      />
      <TextField
        name="lastName"
        label="Last Name"
        size="small"
        placeholder={dbData.last_name}
        fullWidth
        defaultValue={dbData.notes}
        onChange={handleChange}
        sx={{ paddingBottom: "1rem" }}
        minRows={4}
      />
      <TextField
        name="email"
        label="Email"
        size="small"
        placeholder={dbData.email}
        fullWidth
        onChange={handleChange}
        sx={{ paddingBottom: "1rem" }}
      />

      <Grid container justifyContent={"space-between"}>
        <Button variant="contained" type="submit" sx={{ marginTop: "10px" }}>
          Submit
        </Button>
        <Button endIcon={<CloseIcon />} onClick={handleClose}>
          close
        </Button>
      </Grid>
    </form>
  );
}
