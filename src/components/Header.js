import React from "react";

import { Link } from "react-router-dom";
import { Typography, AppBar } from "@material-ui/core";

function Header() {
  return (
    <AppBar
      position="relative"
      style={{
        background:
          "linear-gradient(90deg, rgba(93,73,212,1) 0%, rgba(24,31,41,1) 45%, rgba(24,31,41,1) 55%, rgba(249,4,223,1) 100%)",
      }}
    >
      <Typography variant="h4" align="center" style={{ padding: "1%" }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Pokemon App
        </Link>
      </Typography>
    </AppBar>
  );
}

export default Header;
