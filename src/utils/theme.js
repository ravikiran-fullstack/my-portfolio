import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#2c6d77",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#d62828",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
});

export default theme;
