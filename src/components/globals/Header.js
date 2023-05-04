import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/context/user_context";

import BasicTabs from "../TabPanel";
import Button from "@mui/material/Button";

export default function Header() {
  const contextData = useContext(UserContext);
  const token = contextData[0];
  const router = useRouter();

  const [logged, setLogged] = useState(false);
  const [visible, setVisible] = useState("visible");

  useEffect(() => {
    if (token !== null) {
      setLogged(true);
      setVisible("hidden");
    }
    setVisible("visible");
  }, [token]);

  function handleClick() {
    if (logged) {
      if (typeof window !== "undefined") {
        localStorage.setItem("userToken", null);
      }
    }
    router.push("/login");
    // setVisible(false)
    setLogged(!logged);
  }

  return (
    <>
      <Button
        sx={{ visibility: { visible } }}
        variant="contained"
        onClick={handleClick}
      >
        {logged ? "Log Out" : "Log In"}
      </Button>

      <BasicTabs />
    </>
  );
}
