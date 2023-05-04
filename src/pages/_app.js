// import '@/styles/globals.css'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useRouter } from "next/navigation";

import { Cloudinary } from "@cloudinary/url-gen";

import { createTheme, colors, ThemeProvider } from "@mui/material";

import { useEffect, useState } from "react";

import { UserProvider } from "@/context/user_context";
import Header from "@/components/globals/Header";

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
});
export default function App({ Component, pageProps }) {
  // Create a Cloudinary instance and set your cloud name.
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: "cordovez",
  //   },
  // });
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userToken = localStorage.getItem("userToken");
      if (userToken !== "null") {
        setLoggedIn(true);
        console.log("loggedIn: ", userToken);
      } else {
        setLoggedIn(false);
        console.log(loggedIn);
        // router.push("/me")
      }
    }
  }, [loggedIn]);

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Header />
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  );
}
