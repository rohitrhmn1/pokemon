import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Header from "./Header";
import PokemonContainer from "./PokemonContainer";
import PokemonDetails from "./PokemonDetails";

function App() {
  return (
    <div style={{ margin: "0 auto" }}>
      <Router>
        <Header />
        <Container maxWidth="lg">
          <Switch>
            <Route path="/" exact component={PokemonContainer} />
            <Route path="/details/:index/" component={PokemonDetails} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
