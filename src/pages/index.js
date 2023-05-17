import { UserContext } from "@/context/user_context";
import { useContext, useEffect, useState } from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";

import LoginForm from "@/components/Forms/login_form";
import RegisterForm from "@/components/Forms/register_form";

import Image from "next/image";
import backgroundImage from "../../public/teemu-paananen-OOE4xAnBhKo-unsplash2.jpg";
import PlantUrbanusLogo from "../../public/PlantUrbanusLogo_white.svg";

export default function Home() {
  const [register, setRegister] = useState(false);
  return (
    <>
      <Image
        src={backgroundImage}
        alt="background ferns"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <Grid container alignContent={"center"} flexDirection={"column"}>
        <Image
          style={{ position: "relative" }}
          src={PlantUrbanusLogo}
          alt="PlantUrbanus"
          height={100}
          priority
        />
        {!register ? (
          <LoginForm setRegister={setRegister} />
        ) : (
          <RegisterForm setRegister={setRegister} />
        )}
      </Grid>
    </>
  );
}
