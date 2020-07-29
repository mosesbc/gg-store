import React, { useState } from "react";

import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import useStyles from "./foot-bar.styles";

export default function FootBar() {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const drawer = (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      open={openDrawer}
      onOpen={() => {
        setOpenDrawer(true);
      }}
      onClose={() => {
        setOpenDrawer(false);
      }}
    >
      <List disablePadding>
        <ListItem
          onClick={() => {
            setOpenDrawer(false);
          }}
          divider
          button
          component={Link}
          to="/"
        >
          <ListItemText disableTypography>Home</ListItemText>
        </ListItem>
        <ListItem
          onClick={() => {
            setOpenDrawer(false);
          }}
          divider
          button
          component={Link}
          to="/aboutus"
        >
          <ListItemText disableTypography>About Us</ListItemText>
        </ListItem>
        <ListItem
          onClick={() => {
            setOpenDrawer(false);
          }}
          divider
          button
          component={Link}
          to="/contact"
        >
          <ListItemText disableTypography>Contact Us</ListItemText>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
  return (
    <Hidden mdUp>
      {drawer}
      <AppBar className={classes.appBar}>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            className={classes.navButton}
            component={Link}
            to="/"
            label="Home"
            value="home"
            icon={<HomeIcon />}
          />

          <BottomNavigationAction
            className={classes.navButton}
            component={Link}
            to="/cart"
            label="Cart"
            value="cart"
            icon={
              <Badge badgeContent={6} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            }
          />

          <BottomNavigationAction
            className={classes.navButton}
            component={Link}
            to="/message"
            label="Message"
            value="message"
            icon={
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            }
          />
          <BottomNavigationAction
            label="Menu"
            value="menu"
            icon={<MenuIcon />}
            onClick={() => {
              setOpenDrawer(!openDrawer);
            }}
            className={classes.navButton}
          />
        </BottomNavigation>
      </AppBar>
    </Hidden>
  );
}
