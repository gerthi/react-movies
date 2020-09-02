import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";

class Movie extends React.Component {
  render() {
    return (
      <Grid item>
        <Card className="movie-card">
          <CardActionArea>
            <CardMedia
              component="img"
              image={this.props.image}
              title="movie poster"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.description + "..."}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Watch
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default Movie;
