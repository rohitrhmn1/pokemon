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
    <div style={{ margin: "0 auto" }}>
      <Router>
        <Header />

        <Switch>
          {/* <Route path="/" exact component={PokemonContainer} />
            <Route path="/details/:index/" component={PokemonDetails} /> */}

          {/* <Route path="/" exact>
              <PokemonContainer classes={classes} />
            </Route>
            <Route path="/details/:index/">
              <PokemonDetails classes={classes} />
            </Route> */}

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
        <Footer classes={classes}/>
      </Router>
    </div>
  );
}

export default App;
