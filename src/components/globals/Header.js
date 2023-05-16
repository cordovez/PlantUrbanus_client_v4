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

  const [logged, setLogged] = useState(false);
  const [hidden, setHidden] = useState("visible");

  useEffect(() => {
    setHidden("visible");

    if (typeof window !== "undefined") {
      const user = () => {
        localStorage.getItem("userToken");
      };
      if (user !== "null") setHidden("visible");
      else {
        setHidden("hidden");
      }
    }
  }, [hidden]);

  function handleClick() {
    if (typeof window !== "undefined") {
      localStorage.setItem("userToken", null);
      localStorage.setItem("expiration", null);
      setHidden("hidden");
    }

    router.push("/");
    // router.reload("window.location.pathname");
  }
  return (
    <Grid
      container
      justifyContent={"space-between"}
      sx={{
        bgcolor: "white",
        padding: "20px",
      }}
    >
      <Grid>
        <Image src={PlantUrbanusLogo} alt="PlantUrbanus" height={50} priority />
      </Grid>
      <Grid>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={{ visibility: `${hidden}` }}
        >
          Log Out
        </Button>
      </Grid>
    </Grid>
  );
}
