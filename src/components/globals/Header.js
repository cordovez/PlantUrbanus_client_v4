/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/context/user_context";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Image from "next/image";
import PlantUrbanusLogo from "../../../public/PlantUrbanusLogo.svg";

export default function Header() {
  const contextData = useContext(UserContext);
  const token = contextData[0];
  const expiration = contextData[2];
  const router = useRouter();

  const [hidden, setHidden] = useState("visible");
  const [label, setLabel] = useState("Log out");

  useEffect(() => {
    setHidden("visible");
    const isItVisible = () => {
      if (typeof window !== "undefined") {
        const user = () => {
          localStorage.getItem("userToken");
        };
        if (user !== "null") setHidden("visible");
        else {
          setHidden("hidden");
        }
      }
      console.log("is it visible: ", hidden);
    };
    const labelIs = () => {
      if (typeof window !== "undefined") {
        const user = () => {
          localStorage.getItem("userToken");
          console.log("user inside user: ", user);
        };
        if (token) setLabel("Log out");
        else {
          setLabel("Log in");
        }
      }

      console.log("label is: ", label);
    };

    isItVisible();
    labelIs();
  }, [token]);

  function handleClick() {
    if (!token) {
      router.push("/");
    } else {
      if (typeof window !== "undefined") {
        localStorage.setItem("userToken", null);
        localStorage.setItem("expiration", null);
        setHidden("hidden");
      }

      router.push("/");
      // router.reload("window.location.pathname");
    }
  }
  return (
    <Grid
      container
      justifyContent={"space-between"}
      position={"relative"}
      sx={{
        bgcolor: "white",
        borderBottom: "1px solid #ededed ",
        padding: "20px",
      }}
    >
      <Grid>
        <Image src={PlantUrbanusLogo} alt="PlantUrbanus" height={50} priority />
      </Grid>
      <Grid container alignContent={"center"}>
        <Grid>
          <Button
            variant="contained"
            onClick={handleClick}
            sx={{ visibility: `${hidden}` }}
          >
            {`${label}`}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
