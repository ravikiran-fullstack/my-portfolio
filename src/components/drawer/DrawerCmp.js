import React from "react";

import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    overflow: "auto"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const ListCmp = ({ toggleDrawer }) => {
  return (
    <div onClick={toggleDrawer}>
      <List>
        <ListItem divider button>
          <ListItemIcon>
            <ListItemText> About Me </ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button>
          <ListItemIcon>
            <ListItemText> Experience </ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button>
          <ListItemIcon>
            <ListItemText> Projects </ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button>
          <ListItemIcon>
            <ListItemText> Contact Me </ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button>
          <ListItemIcon>
            <ListItemText> My Resume </ListItemText>
          </ListItemIcon>
        </ListItem>
      </List>
    </div>
  );
};

const DrawerCmp = ({ open, toggleDrawer }) => {
  const classes = useStyles();
  return (
    <>
      <Drawer
        open={open}
        anchor="left"
        onClose={() => toggleDrawer()}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <ListCmp toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
};

export default DrawerCmp;
