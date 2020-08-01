import React from "react";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import { default as MuiCarousel } from "react-material-ui-carousel";

import useStyles from "./carousel.styles";

export default function Carousel({ photos }) {
  const classes = useStyles();
  return (
    <MuiCarousel>
      {photos.map((photo, idx) => (
        <Card key={idx} elevation={10} className={classes.crslCard}>
          <CardMedia
            className={classes.crslMedia}
            image={photo.url}
            //title="Title"
          />
        </Card>
      ))}
    </MuiCarousel>
  );
}
