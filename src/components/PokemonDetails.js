import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "./requests";

function PokemonDetails({ match }) {
  const [pokemonData, setPokemonData] = useState({});
  const [speciesData, setSpeciesData] = useState({});
  

  useEffect(() => {
    const index = match.params.index;
    const getPokemonData = async () => {
      const response = await axios.get(`pokemon/${index}`);
      setPokemonData(response.data);
      console.log("Pokemon=>", response.data);
    };
    getPokemonData();
  }, [match]);

  return Object.entries(pokemonData).length === 0 &&
    pokemonData.constructor === Object ? (
    <div>Loading</div>
  ) : (
    <div>This is details for {pokemonData?.name}</div>
  );
}

export default PokemonDetails;
