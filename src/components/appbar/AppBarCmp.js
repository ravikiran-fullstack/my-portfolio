import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Tabs,
  Tab,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { green } from "@material-ui/core/colors";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.secondary,
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: green[500],
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      visibility: "visible",
    },
    [theme.breakpoints.up("md")]: {
      visibility: "hidden",
    },
  },
  title: {
    flexGrow: 1,
  },
  tabs: {
    // border: "1px solid red",
    width: "12%",
    color: '#90cc30',
    marginRight: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '10px 10px',
    textTransform: 'uppercase',
    '&:hover': {
      background: "#eefaed",
      color: '#15e80e',
      zIndex: 500
    },
    [theme.breakpoints.down("sm")]: {
      // border: "1px solid red",
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      // border: "1px solid blue"
    },
    [theme.breakpoints.up("lg")]: {
      // border: "1px solid black"
    },
  },
  logo: {
    flexGrow: 1,
    color: '#9dff00',
    cursor: 'pointer'
  },
}));

const AppBarCmp = ({ toggleDrawer }) => {
  const classes = useStyles();
  const value = 1;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.logo}>
            My Portfolio
          </Typography>
          <div value={value} className={classes.tabs}>
            <div>About Me</div>
          </div>
          <div className={classes.tabs}>
            <div>Experience</div>
          </div>
          <div className={classes.tabs}>
            <div>Projects</div>
          </div>
          <div className={classes.tabs}>
            <div>Contact Me</div>
          </div>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: "5px" }}
          >
            My Resume
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarCmp;
