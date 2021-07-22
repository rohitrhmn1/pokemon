import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer";

import Header from "./Header";
import PokemonContainer from "./PokemonContainer";
import PokemonDetails from "./PokemonDetails";
import styles from "./styles";

function App() {
  const classes = styles();
  return (
    <Router>
      <div id="content-wrap" style={{paddingBottom:"6rem"}}>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <PokemonContainer {...props} classes={classes} />
            )}
          />
          <Route
            path="/details/:index/"
            render={(props) => <PokemonDetails {...props} classes={classes} />}
          />
        </Switch>
      </div>
      <Footer classes={classes} />
    </Router>
  );
}

export default App;
