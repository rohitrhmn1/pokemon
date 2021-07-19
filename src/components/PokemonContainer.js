import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import PokemonCards from "./PokemonCards";
import styles from "./styles";
import axios from "./requests";

function PokemonContainer() {
  const classes = styles();
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get("pokemon?limit=300&offset=0");
      setPokemons(response.data.results);
    };

    getPokemon();
  }, []);

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Grid container spacing={4}>
        {pokemons?.map((item, index) => (
          <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
            <PokemonCards classes={classes} pokemon={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PokemonContainer;
