import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

import { useState, useContext } from "react";
import { useRouter } from "next/router";

import axios from "@/axios";

import { UserContext } from "@/context/user_context";
import { AlertTitle } from "@mui/material";

export default function RegisterForm({ setOpen }) {
  const router = useRouter();
  const [, setToken] = useContext(UserContext);
  const [data, setData] = useState({ email: "", username: "", password: "" });
  const [alert, setAlert] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
    console.log(data);
  };

  const handleCompare = (e) => {
    setAlert(false);
    const value = e.target.value;
    if (value !== data.password) {
      setAlert(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("/users/create", data).then((response) => {
      console.log(response);
    });
    setOpen(false);
  };
  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <form onSubmit={handleSubmit}>
          <Grid item>
            <TextField
              required
              variant="outlined"
              label="user name"
              type="text"
              name="username"
              defaultValue={data.username}
              onChange={handleChange}
              sx={{ paddingBottom: "2rem" }}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              variant="outlined"
              label="email"
              type="email"
              name="email"
              defaultValue={data.email}
              onChange={handleChange}
              sx={{ paddingBottom: "2rem" }}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              variant="outlined"
              label="password"
              type="password"
              name="password"
              defaultValue={data.password}
              onChange={handleChange}
              sx={{ paddingBottom: "2rem" }}
            />
          </Grid>
          <Grid item>
            <TextField
              required
              variant="outlined"
              label="confirm password"
              type="password"
              name="password2"
              defaultValue={data.password}
              onChange={handleCompare}
              sx={{ paddingBottom: "2rem" }}
            />
          </Grid>
          {alert ? (
            <Alert severity="error">
              <AlertTitle>Passwords Must Match</AlertTitle>
              This alert will disappear if passwords match.
            </Alert>
          ) : (
            <></>
          )}
          <Grid item>
            <Button type="submit" variant="outlined">
              Register
            </Button>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}
