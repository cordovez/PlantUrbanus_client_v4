// import '@/styles/globals.css'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useRouter } from "next/navigation";

import { Cloudinary } from "@cloudinary/url-gen";

import { createTheme, colors, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import { useEffect, useState } from "react";

import { UserProvider } from "@/context/user_context";
import Header from "@/components/globals/Header";

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
});
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Header />
        <Container maxWidth="sm">
          <Component {...pageProps} />
        </Container>
      </UserProvider>
    </ThemeProvider>
  );
}
