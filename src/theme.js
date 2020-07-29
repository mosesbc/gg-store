import { createMuiTheme } from "@material-ui/core/styles";

//const ggBlueGreen = "#002732";#3943A1,#f041d5
const ggYellow = "#E0C03B";
const ggBlack = "#002732";

export default createMuiTheme({
  palette: {
    common: {
      ggBlueGreen: "#002732",
      ggYellow: "#E0C03B",
    },
    primary: {
      main: ggBlack,
    },
    secondary: {
      main: ggYellow,
    },
  },
  typography: {
    h6: {
      fontWeight: 300,
    },
  },
});
