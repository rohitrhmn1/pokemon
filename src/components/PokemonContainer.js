import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import PokemonCards from "./PokemonCards";

import axios from "./requests";
import SearchBar from "./SearchBar";

function PokemonContainer({ classes }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get("pokemon?limit=25&offset=0");
      setPokemons(response.data.results);
    };

    getPokemon();
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <div
        style={{
          height: "200px",
          padding: "20px",
        }}
      >
        <Container maxWidth="sm">
          <SearchBar />
        </Container>
      </div>
      <Grid container spacing={4}>
        {pokemons?.map((item, index) => (
          <Grid key={index} item lg={2} md={4} sm={4} xs={6}>
            <PokemonCards classes={classes} pokemon={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PokemonContainer;
