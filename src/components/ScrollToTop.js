import React from "react";
import { useScrollTrigger, Zoom, Fab } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";

function ScrollToTop() {
  const trigger = useScrollTrigger();

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "header"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
        }}
      >
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </div>
    </Zoom>
  );
}

export default ScrollToTop;
