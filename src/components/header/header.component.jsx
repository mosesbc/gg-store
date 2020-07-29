import React from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";

import AccountCircle from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import useStyles from "./header.styles";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props) {
  const theme = useTheme();
  const classes = useStyles();

  const [profileAnchorEl, setProfileAnchorEl] = React.useState(null);
  const [infoAnchorEl, setInfoAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(profileAnchorEl);
  const isInfoMenuOpen = Boolean(infoAnchorEl);

  const matchesXsDown = useMediaQuery(theme.breakpoints.down("xs"));

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const handleInfoMenuOpen = (event) => {
    setInfoAnchorEl(event.currentTarget);
  };
  const handleInfoMenuClose = () => {
    setInfoAnchorEl(null);
  };

  const profileMenuId = "account-menu";
  const renderProfileMenu = (
    <Menu
      anchorEl={profileAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={profileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
    </Menu>
  );

  const infoMenuId = "info-menu";
  const renderInfoMenu = (
    <Menu
      id={infoMenuId}
      open={isInfoMenuOpen}
      anchorEl={infoAnchorEl}
      onClose={handleProfileMenuClose}
      MenuListProps={{ onMouseLeave: handleInfoMenuClose }}
      keepMounted
    >
      <MenuItem onClick={handleInfoMenuClose} component={Link} to="/aboutus">
        About Us
      </MenuItem>
      <MenuItem onClick={handleInfoMenuClose} component={Link} to="/contact">
        Contact Us
      </MenuItem>
    </Menu>
  );

  const logoButton = (
    <Button
      edge="start"
      component={Link}
      to="/"
      className={classes.logoContainer}
      disableRipple
    >
      <img alt="logo" src={logo} className={classes.logo} />
    </Button>
  );

  const search = matchesXsDown ? (
    <IconButton
      className={classes.mobileSearch}
      aria-label="show 4 new mails"
      color="inherit"
    >
      <SearchIcon />
    </IconButton>
  ) : (
    <div className={classes.desktopSearch}>
      <div className={classes.desktopSearchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        variant="outlined"
      />
    </div>
  );

  const buttons = (
    <React.Fragment>
      <IconButton aria-label="home" color="inherit" component={Link} to="/">
        <HomeIcon />
      </IconButton>
      <IconButton
        aria-label="products"
        color="inherit"
        component={Link}
        to="/products"
      >
        <LocalMallIcon />
      </IconButton>
      <IconButton
        aria-label="info"
        aria-controls={infoMenuId}
        aria-haspopup="true"
        onMouseOver={handleInfoMenuOpen}
        color="inherit"
        component={Link}
        to="/info"
      >
        <InfoIcon />
      </IconButton>
      <IconButton aria-label="cart" aria-haspopup="true" color="inherit">
        <Badge badgeContent={6} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <IconButton aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="secondary">
          <MailIcon />
        </Badge>
      </IconButton>
      <IconButton aria-label="show 17 new notifications" color="inherit">
        <Badge badgeContent={17} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className={classes.grow}>
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar>
            {logoButton}
            <div className={classes.grow} />
            {search}
            <div>
              <Hidden smDown>{buttons}</Hidden>
              <IconButton
                edge="end"
                className={classes.profileButton}
                aria-label="account of current user"
                aria-controls={profileMenuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      {renderProfileMenu}
      {renderInfoMenu}
      <div className={classes.offsetDiv}></div>
    </div>
  );
}
