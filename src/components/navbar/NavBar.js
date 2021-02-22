import React, { useState } from "react";

import AppBarCmp from "../appbar/AppBarCmp";
import DrawerCmp from "../drawer/DrawerCmp";

const NavBar = ({ isDark, handleThemeChange }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <AppBarCmp toggleDrawer={toggleDrawer} isDark={ isDark } handleThemeChange={handleThemeChange} />
      <DrawerCmp open={open} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default NavBar;
