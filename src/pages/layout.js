import Header from "@/components/globals/Header";
import Footer from "@/components/globals/Footer";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";

export const metadata = {
  title: "PlantUrbanus",
  description: "House-plant management",
};

export default function RootLayout({ children }) {
  return (
    <Grid container flexDirection={"column"}>
      <Header />
      <Container sx={{ flex: "1" }}>{children}</Container>
      <Footer />
    </Grid>
  );
}
