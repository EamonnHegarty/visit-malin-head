import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MalinHeadPier from "../../assets/malin-head-pier.jpg";
import SeaviewTavern from "../../assets/seaview-tavern.jpg";

export default function MediaCard() {
  return (
    <>
      <Grid
        container
        spacing={4}
        paddingTop={8}
        paddingBottom={4}
        paddingX={10}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Typography variant="h5">High Quality Food & Creamy Pints</Typography>
      </Grid>
      <Grid
        container
        spacing={2}
        paddingX={10}
        paddingBottom={2}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid item sm={6} md={4}>
          <Card>
            <CardMedia
              sx={{ height: 200 }}
              image={MalinHeadPier}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={6} md={4}>
          <Card>
            <CardMedia
              sx={{ height: 200 }}
              image={SeaviewTavern}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                SEAVIEW TAVERN
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Seaview Tavern is an awesome bar/restaurant with a beautiful
                view over looking Malin Head beach. On a clear you can enjoy
                creamy pints and possibly see Scotland.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={6} md={4}>
          <Card>
            <CardMedia
              sx={{ height: 200 }}
              image={MalinHeadPier}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
