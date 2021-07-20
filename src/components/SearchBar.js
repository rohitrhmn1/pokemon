import React from "react";
import { Paper, InputBase, makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function SearchBar() {
  const classes = useStyles();
  return (
    <Paper
      component="form"
      className={classes.root}
      onSubmit={(e) => e.preventDefault()}
    >
      <InputBase
        className={classes.input}
        placeholder="Search your pokemon"
        fullWidth
        inputProps={{ "aria-label": "search pokemon" }}
        name="q"
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
