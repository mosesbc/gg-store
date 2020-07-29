import { fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2em",
    },
    [theme.breakpoints.down("md")]: {
      height: "3em",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  offsetDiv: { ...theme.mixins.toolbar },
  grow: {
    flexGrow: 1,
  },

  desktopSearch: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    border: `1px solid ${fade(theme.palette.primary.contrastText, 0.15)}`,

    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  desktopSearchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mobileSearch: {
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 1),
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },

  profileButton: {
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0, 1),
    },
  },
}));
export default useStyles;
