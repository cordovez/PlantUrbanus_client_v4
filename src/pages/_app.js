// import "@/styles/globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// import { useRouter } from "next/navigation";

import { Cloudinary } from "@cloudinary/url-gen";

import { createTheme, colors, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

import { UserProvider } from "@/context/user_context";
import Header from "@/components/globals/Header";
import Footer from "@/components/globals/Footer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
});
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <CssBaseline>
          {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </CssBaseline>
      </UserProvider>
    </ThemeProvider>
  );
}
