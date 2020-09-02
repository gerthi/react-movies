import React from "react";
import Movie from "./Movie";
import { Grid } from "@material-ui/core";

class MoviesList extends React.Component {
  render() {
    const imgUrl = `https://image.tmdb.org/t/p/w600_and_h900_bestv2`;
    const movies = this.props.results.map((movie) => (
      <Movie
        key={"movie-" + movie.id}
        title={movie.original_title}
        image={imgUrl + movie.poster_path}
        description={movie.overview.substring(0, 100)}
      />
    ));

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        {movies}
      </Grid>
    );
  }
}

export default MoviesList;
