import { Chip } from "@material-ui/core";
import React from "react";

const TYPE_COLORS = {
  bug: "#A6B91A",
  dark: "#705746",
  dragon: "#6F35FC",
  electric: "#F7D02C",
  fairy: "#D685AD",
  fighting: "#C22E28",
  fire: "#EE8130",
  flying: "#A98FF3",
  ghost: "#735797",
  grass: "#7AC74C",
  ground: "#E2BF65",
  ice: "#96D9D6",
  normal: "#A8A77A",
  poison: "#A33EA1",
  physhic: "#F95587",
  rock: "#B6A136",
  steel: "#B7B7CE",
  water: "#6390F0",
};

function PokemonTypes({ type }) {
  return (
    <Chip
      variant="outlined"
      size="small"
      label={type}
      clickable
      style={{
        backgroundColor: TYPE_COLORS[type],
        textTransform: "uppercase",
        fontWeight: "bold",
        color:"whitesmoke",
        margin:"2px"
      }}
    />
  );
}

export default PokemonTypes;
