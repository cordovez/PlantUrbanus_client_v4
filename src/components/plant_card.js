import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import Tooltip from "@mui/material/Tooltip";

import DeleteButton from "./globals/DeleteButton";
import delete_plant from "@/axios/delete_plant";

function PlantCard({ plant, id, token }) {
  return (
    <>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            // maxHeight="100%"
            image={`${plant.images[0].uri}`}
            alt={`${plant.images[0].common_name}`}
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
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Tooltip title="not yet activated" arrow>
            <Button size="small" color="primary">
              Share
            </Button>
          </Tooltip>

          <Tooltip title="Beware, one click and it's gone" arrow>
            <DeleteButton id={id} token={token} />
          </Tooltip>
        </CardActions>
      </Card>
    </>
  );
}
export default PlantCard;
