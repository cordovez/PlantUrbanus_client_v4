import { useState, useContext } from "react";
import axios from "@/axios";
import { UserContext } from "@/context/user_context";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import update_plant_axios from "@/axios/update_plant_axios";

export default function UpdatePlant({ dbData, plant_id, handleClose }) {
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
    const newInputs = {
      common_name: data.common_name,
      scientific_name: data.scientific_name,
      pest_treatment: data.pest_treatment,
      substrate: data.substrate,
      nutrients: data.nutrients,
      notes: data.notes,
      date_of_purchase: data.date_of_purchase,
      purchased_at: data.purchased_at,
      price_paid: data.price_paid,
    };
    const updateData = compareInputs(newInputs, dbData);
    // console.log("newIputs: ", newInputs);
    // console.log("updatedData: ", updateData);
    // console.log(data);

    try {
      await update_plant_axios(plant_id, updateData, token);
      handleClose();
      router.reload(window.location.pathname);
    } catch (err) {
      if (err.response.status === 422) {
        const details = err.response.data.detail;
        details.map((detail) =>
          console.log(detail.loc, detail.msg, detail.type)
        );
      } else {
        console.log(err.response);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="common_name"
        // value={data.common_name}
        label="Common Name"
        size="small"
        placeholder={dbData.common_name}
        fullWidth
        onChange={handleChange}
        sx={{ paddingBottom: "1rem" }}
      />
      <TextField
        name="scientific_name"
        label="Scientific name"
        size="small"
        placeholder={dbData.scientific_name}
        fullWidth
        onChange={handleChange}
        sx={{ paddingBottom: "1rem" }}
      />
      <TextField
        name="notes"
        label="Notes"
        size="small"
        placeholder={dbData.notes}
        fullWidth
        defaultValue={dbData.notes}
        onChange={handleChange}
        sx={{ paddingBottom: "1rem" }}
        multiline
        minRows={4}
      />
      <TextField
        name="date_of_purchase"
        label="Date of purchase"
        size="small"
        placeholder={dbData.date_of_purchase}
        fullWidth
        onChange={handleChange}
        sx={{ paddingBottom: "1rem" }}
      />
      <TextField
        name="price_paid"
        // value={data.price_paid}
        label={"price paid"}
        size="small"
        placeholder={data.price_paid}
        fullWidth
        onChange={handleChange}
        sx={{ paddingBottom: "1rem" }}
      />
      <TextField
        name="substrate"
        label="Substrate"
        size="small"
        placeholder={dbData.substrate}
        fullWidth
        onChange={handleChange}
        sx={{ paddingBottom: "1rem" }}
      />
      <TextField
        name="nutrients"
        label="Fertiliser"
        size="small"
        placeholder={dbData.nutrients}
        fullWidth
        onChange={handleChange}
        sx={{ paddingBottom: "1rem" }}
      />
      <TextField
        name="pest_treatment"
        label="Pesticides"
        size="small"
        placeholder={dbData.pest_treatment}
        fullWidth
        onChange={handleChange}
        sx={{ paddingBottom: "1rem" }}
      />

      <Button variant="contained" type="submit" sx={{ marginTop: "10px" }}>
        Submit
      </Button>
    </form>
  );
}
