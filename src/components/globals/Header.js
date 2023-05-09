import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/context/user_context";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import RegisterForm from "../Forms/register_form";
import LoginForm from "../Forms/login_form";
import Image from "next/image";
import PlantUrbanusLogo from "src/assets/images/PlantUrbanusLogo.svg";

export default function Header() {
  const contextData = useContext(UserContext);
  const token = contextData[0];
  const router = useRouter();

  const [logged, setLogged] = useState(false);
  const [visible, setVisible] = useState("visible");

  useEffect(() => {
    if (localStorage.getItem("userToken") === null) {
      setLogged(false);
    }
  }, [logged]);

  function handleClick() {
    if (typeof window !== "undefined") {
      localStorage.setItem("userToken", null);
    }

    router.push("/");
    router.reload("window.location.pathname");
  }
  return (
    <Grid container spacing={2} justifyContent={"space-between"}>
      <Grid item>nav</Grid>
      <Grid item>
        <Image src={PlantUrbanusLogo} alt="PlantUrbanus" height={50} priority />
      </Grid>
      <Grid item>
        {logged ? (
          <Button variant="contained" onClick={handleClick}>
            Log Out
          </Button>
        ) : (
          <LoginForm setLogged={setLogged} />
        )}
      </Grid>
    </Grid>
  );
}
