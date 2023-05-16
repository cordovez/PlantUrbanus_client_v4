/* eslint-disable react/no-unescaped-entities */
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";

import { useState, useContext } from "react";
import { useRouter } from "next/router";

import { UserContext } from "@/context/user_context";
import registerUser from "@/axios/register_user";

export default function RegisterForm({ setOpen, setRegister }) {
  const router = useRouter();
  const [token] = useContext(UserContext);
  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);
  const [alert, setAlert] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value.toLowerCase(),
    });
    // console.log(data);
  };

  const handleCompare = (e) => {
    setAlert(false);
    const value = e.target.value;
    if (value !== data.password || value === "") {
      setIsDisabled(true);
      setAlert(true);
    } else {
      setIsDisabled(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await registerUser(data, token);
      if (newUser.status === "200") {
        // router.push("/");
        console.log("match");
      }
      router.reload(window.location.pathname);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#fff",
        zIndex: 1,
        borderRadius: "12px",
      }}
      padding={1}
    >
      <form onSubmit={handleSubmit}>
        <Grid container flexDirection={"column"} spacing={-1}>
          <TextField
            required
            variant="outlined"
            label="user name"
            type="text"
            name="username"
            defaultValue={data.username}
            onChange={handleChange}
            sx={{ paddingBottom: "1rem" }}
          />

          <TextField
            required
            variant="outlined"
            label="email"
            type="email"
            name="email"
            defaultValue={data.email}
            onChange={handleChange}
            sx={{ paddingBottom: "1rem" }}
          />

          <TextField
            required
            variant="outlined"
            label="password"
            type="password"
            name="password"
            defaultValue={data.password}
            onChange={handleChange}
            sx={{ paddingBottom: "1rem" }}
          />

          <TextField
            required
            variant="outlined"
            label="confirm password"
            type="password"
            name="password2"
            defaultValue={data.password}
            onChange={handleCompare}
            sx={{ paddingBottom: "1rem" }}
          />
        </Grid>
        {alert ? (
          <Alert severity="error">
            <AlertTitle>Passwords Must Match</AlertTitle>
            This alert will disappear when passwords match.
          </Alert>
        ) : (
          <></>
        )}
        <Grid container justifyContent={"flex-end"} spacing={-1}>
          <Grid>
            <Button type="submit" variant="contained" disabled={isDisabled}>
              Register
            </Button>
          </Grid>
        </Grid>
        <Grid container flexDirection={"column"} marginTop={"30px"}>
          <Grid>
            <Typography variant="caption">
              If you already have an account, please ...
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Button
              variant="text"
              onClick={() => {
                setRegister(false);
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
