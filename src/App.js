import React, { useState } from "react";
import { createMuiTheme } from "@material-ui/core";


import CssBaseline from "@material-ui/core/CssBaseline";

import { ThemeProvider } from "@material-ui/core";

import Home from "./components/home/Home";
// import { lightTheme, darkTheme } from "./utils/theme";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const handleThemeChange = () => { 
    setIsDark(!isDark);
  }

  const darkTheme = createMuiTheme({
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
  
  const lightTheme = createMuiTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#fff",
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
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <div>
          <CssBaseline />
          <Home isDark={isDark} handleThemeChange={handleThemeChange} />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
