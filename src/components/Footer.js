import React from "react";
import { Typography } from "@material-ui/core";

function Footer({ classes }) {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerFadeTop} />
      <Typography
        variant="h6"
        align="center"
        gutterBottom
        style={{ color: "whitesmoke" }}
      >
        Designed by Rohit Rahman 👉
        <a
          style={{ textDecoration: "none", color: "inherit" }}
          href="https://github.com/rohitrhmn1/pokemon"
          target="_blank"
          rel="noreferrer"
        >
          Github Link
        </a>
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        component="p"
        style={{ color: "whitesmoke" }}
      >
        <a
          style={{ textDecoration: "none", color: "inherit" }}
          href="https://www.vecteezy.com/free-vector/pokemon-pattern"
          target="_blank"
          rel="noreferrer"
        >
          Pokemon Pattern Vectors by Vecteezy
        </a>
      </Typography>
    </footer>
  );
}

export default Footer;
