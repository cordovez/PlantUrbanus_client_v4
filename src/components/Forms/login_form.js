/* eslint-disable react/no-unescaped-entities */
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

import { useState, useContext } from "react";
import { useRouter } from "next/router";

import { UserContext } from "@/context/user_context";
import post_login from "@/axios/post_login";

export default function LoginForm({ setRegister }) {
  const router = useRouter();
  const [, setToken, , setExpiration] = useContext(UserContext);

  const [data, setData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const now = new Date();
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    console.log("tomorrow: ", tomorrow);
    const login_response = await post_login(data);
    // console.log(login_response);
    setToken(login_response);
    setExpiration(tomorrow);
    router.push("/me");
  };

  return (
    <Grid
      container
      sx={{
        // marginTop: "10vh",
        bgcolor: "#fff",
        zIndex: 1,
        borderRadius: "12px",
      }}
      padding={2}
    >
      <form onSubmit={handleSubmit}>
        <Grid container flexDirection={"column"} spacing={-2}>
          <TextField
            required
            variant="outlined"
            label="username"
            type="text"
            name="username"
            defaultValue={data.username}
            onChange={handleChange}
            sx={{ marginBottom: "10px" }}
          />
          <TextField
            required
            variant="outlined"
            label="password"
            type="password"
            name="password"
            defaultValue={data.password}
            onChange={handleChange}
            sx={{ margin: "auto" }}
          />
        </Grid>
        <Grid container justifyContent={"flex-end"} spacing={-2}>
          <Grid>
            <Button variant="contained" type="submit">
              Log in
            </Button>
          </Grid>
        </Grid>
        <Grid container flexDirection={"column"} marginTop={"30px"}>
          <Grid>
            <Typography variant="caption">
              If you don't have an account, please ...
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Button
              variant="text"
              onClick={() => {
                setRegister(true);
              }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
}
