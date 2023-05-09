import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import DeleteButton from "./globals/DeleteButton";
import delete_plant from "@/axios/delete_plant";

function PlantCard({ plant, id, token }) {
  const deleteFunction = delete_plant;
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="100%"
            image={`${plant.images[0].uri}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {plant.common_name}
            </Typography>
            <Typography
              gutterBottom
              variant="caption"
              component="div"
              sx={{ fontStyle: "italic" }}
            >
              {plant.scientific_name}
            </Typography>
            <hr />
            <Typography variant="body2" color="text.secondary">
              {plant.notes}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <DeleteButton id={id} token={token} deleteFunction={deleteFunction} />
        </CardActions>
      </Card>
    </>
  );
}
export default PlantCard;
