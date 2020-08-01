import React from "react";
import { Grid, Typography, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Carousel from "./components/carousel/carousel.component";
import logo from "./assets/logo.png";

/*
https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1280px-Good_Food_Display_-_NCI_Visuals_Online.jpg
https://cdn.pixabay.com/photo/2017/04/04/00/36/japanese-food-2199962_960_720.jpg
https://images.financialexpress.com/2017/12/Foodgrain-l-ie-1.jpg
https://storage.needpix.com/rsynced_images/delicious-food-2726708_1280.jpg
https://pixnio.com/free-images/2020/01/24/2020-01-24-08-23-35-1200x800.jpg
*/
const photos = [
  {
    name: "photo1",
    //url: "./assets/jeng1.png",
    url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1280px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
  },
  {
    name: "photo2",
    url:
      "https://cdn.pixabay.com/photo/2017/04/04/00/36/japanese-food-2199962_960_720.jpg",
  },
  {
    name: "photo3",
    url: "https://images.financialexpress.com/2017/12/Foodgrain-l-ie-1.jpg",
  },
  {
    name: "photo4",
    url:
      "https://storage.needpix.com/rsynced_images/delicious-food-2726708_1280.jpg",
  },

  {
    name: "photo5",
    url:
      "https://pixnio.com/free-images/2020/01/24/2020-01-24-08-23-35-1200x800.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "7em",
    [theme.breakpoints.down("lg")]: {
      height: "5em",
    },
  },
  crslContainer: {
    width: "50%",
    marginTop: "5em",
    [theme.breakpoints.down("lg")]: {
      marginTop: "3em",
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
      width: "100%",
    },
  },
  section: {
    //border: "1px solid red",
    padding: "5em",
    [theme.breakpoints.down("lg")]: {
      padding: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.section}
      >
        <Hidden xsDown>
          <Grid item className={classes.logoContainer}>
            <img alt="logo" src={logo} className={classes.logo} />
          </Grid>
          <Grid item>
            <Typography variant="h6">
              Pag May Tiyaga May Nilaga !!! xD
            </Typography>
          </Grid>
        </Hidden>
        <Grid item className={classes.crslContainer}>
          <Carousel photos={photos} />
        </Grid>
      </Grid>

      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">WOMENS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">MENS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
        </div>
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">WOMENS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">MENS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
        </div>
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">WOMENS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">MENS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
        </div>
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">WOMENS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">MENS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
        </div>
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">WOMENS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">MENS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
        </div>
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">WOMENS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">MENS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
        </div>
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">SNEAKERS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">WOMENS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">MENS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
