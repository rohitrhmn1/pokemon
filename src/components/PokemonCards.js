import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@material-ui/core";
import loading from "../assets/loading.gif";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function PokemonCards({ classes, pokemon }) {
  const [index, setIndex] = useState(null);

  useEffect(() => {
    setIndex(pokemon.url.split("/")[6]);
  }, [pokemon]);

  return (
    <Link to={`/details/${index}/`} style={{ textDecoration: "none" }}>
      <Card className={classes.card}>
        <CardContent>
          <CardMedia
            className={classes.cardMedia}
            title={pokemon.name}
            image={
              index
                ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`
                : loading
            }
          />
          <Typography
            gutterBottom
            variant="h6"
            align="center"
            className={classes.pokemonTitle}
          >
            {pokemon.name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

export default PokemonCards;
