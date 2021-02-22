import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import { ThemeProvider } from "@material-ui/core";

import Home from "./components/home/Home";
import theme from "./utils/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
      <div>
        <CssBaseline />
        <Home />
      </div>
    </ThemeProvider>
    </>
  );
};

export default App;
