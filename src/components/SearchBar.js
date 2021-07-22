import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { Paper, InputBase } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

function SearchBar({ classes }) {
  const [query, setQuery] = useState("");

  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    if (query) {
      history.push(`/?query=${query}`);
    } else {
      history.push(history.push(history.location.pathname));
    }
  };

  return (
    <Paper component="form" className={classes.root} onSubmit={submitHandler}>
      <InputBase
        className={classes.input}
        placeholder="Search your pokemon"
        fullWidth
        inputProps={{ "aria-label": "search pokemon" }}
        name="query"
        onChange={(e) => setQuery(e.target.value)}
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
