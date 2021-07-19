import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import PokemonCards from "./PokemonCards";

import axios from "./requests";

function PokemonContainer({ classes }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get("pokemon?limit=300&offset=0");
      setPokemons(response.data.results);
    };

    getPokemon();
  }, []);

  return (
    <Grid container spacing={4}>
      {pokemons?.map((item, index) => (
        <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
          <PokemonCards classes={classes} pokemon={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PokemonContainer;
