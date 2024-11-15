import React from "react";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>NAV BAR</nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
