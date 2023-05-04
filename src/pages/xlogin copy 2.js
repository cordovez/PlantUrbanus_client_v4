import { useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Login() {
  const [data, setData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/token", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(
          `grant_type=&username=${data.username}&password=${data.password}&scope=&client_id=&client_secret=`
        ),
      });
      console.log(response);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        console.log("server responded");
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          variant="outlined"
          label="username"
          type="text"
          name="username"
          defaultValue={data.username}
          onChange={handleChange}
        />

        <input
          required
          variant="outlined"
          label="password"
          type="password"
          name="password"
          defaultValue={data.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>

      <br></br>
      <label>Output:</label>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
