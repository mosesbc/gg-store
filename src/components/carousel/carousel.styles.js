const { makeStyles } = require("@material-ui/core");

const useStyles = makeStyles((theme) => ({
  crslMedia: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  crslCard: {
    borderRadius: "10px",
    [theme.breakpoints.down("xs")]: {
      borderRadius: "unset",
    },
  },
}));
export default useStyles;
