import { Typography } from "@mui/material";

export default function Plants({ plants }) {
  return (
    <>
      <Typography variant="h1">Plants</Typography>
      {plants.map((plant) => {
        for (let i = 0; i < plant.images.length; i++) {
          const image = plant.images[i];
          return (
            <div class="w-32 h-32 mt-10 ">
              <img src={image.uri} alt={image.public_id} />{" "}
            </div>
          );
        }
      })}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:8000/admin/plants");
  const plants = await res.json();
  return {
    props: { plants },
  };
}
