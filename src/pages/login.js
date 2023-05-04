import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useState, useContext } from "react";
import { useRouter } from "next/router";

import axios from "axios";

import { UserContext } from "@/context/user_context";

export default function Login() {
  const router = useRouter();
  const [, setToken] = useContext(UserContext);
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
    const formData = {
      username: data.username,
      password: data.password,
    };
    axios
      .post("http://127.0.0.1:8000/token", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((response) => {
        setToken(response.data.access_token);
        router.push("/me");
      });
  };
  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            variant="outlined"
            label="username"
            type="text"
            name="username"
            defaultValue={data.username}
            onChange={handleChange}
          />

          <TextField
            required
            variant="outlined"
            label="password"
            type="password"
            name="password"
            defaultValue={data.password}
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
}
