import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

export default function Footer() {
  return (
    <Grid
      container
      sx={{
        padding: "6px",
        bgcolor: "#005404",
        color: "#999",
      }}
      justifyContent={"space-between"}
    >
      <Grid>
        <Typography variant="caption">
          Developed by{" "}
          <a href="https://www.el-cordovez.com" style={{ color: "inherit" }}>
            JC Cordovez-Mantilla
          </a>
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="caption">
          Background Photo by{" "}
          <a
            href="https://unsplash.com/@xteemu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            style={{ color: "inherit" }}
          >
            Teemu Paananen
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com/photos/OOE4xAnBhKo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            style={{ color: "inherit" }}
          >
            Unsplash
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
}
