import React from "react";

import { Link } from "react-router-dom";
import { Typography, AppBar } from "@material-ui/core";

function Header() {
  return (
    <AppBar position="relative" color="primary">
      <Typography variant="h4" align="center" style={{ padding: "1%" }}>
        <Link to="/" style={{ textDecoration: "none" ,color:"inherit"}}>
          Pokemon App
        </Link>
      </Typography>
    </AppBar>
  );
}

export default Header;
