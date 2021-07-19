import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "./requests";
import {
  CircularProgress,
  Card,
  CardContent,
  Typography,
  CardHeader,
  CardMedia,
  Grid,
  LinearProgress,
} from "@material-ui/core";
import PokemonTypes from "./PokemonTypes";

function PokemonDetails({ match, classes }) {
  const [index, setIndex] = useState(null);
  const [pokemonData, setPokemonData] = useState({});
  const [speciesData, setSpeciesData] = useState({});
  const [description, setDescription] = useState({});

  const normalize = (value) => (value * 100) / 255;

  useEffect(() => {
    const index = match.params.index;
    setIndex(index);

    const getPokemonData = async () => {
      const { data } = await axios.get(`pokemon/${index}/`);

      setPokemonData(data);
    };

    const getSpeciesData = async () => {
      const { data } = await axios.get(`pokemon-species/${index}/`);

      setSpeciesData(data);
      setDescription(
        data.flavor_text_entries.reduce((initial, curr) => {
          if (curr.language.name === "en") {
            initial[curr.version.name] = curr.flavor_text;
          }
          return initial;
        }, {})
      );
    };

    getPokemonData();
    getSpeciesData();
  }, [match]);

  return Object.entries(pokemonData).length === 0 &&
    pokemonData.constructor === Object ? (
    <CircularProgress
      style={{
        height: "100px",
        width: "100px",
        margin: "25% auto",
        display: "block",
      }}
    />
  ) : (
    <Card
      style={{
        background: "rgba(255,255,255,0.6)",
        borderRadius: "20px",
      }}
    >
      <CardHeader
        title={pokemonData?.name}
        subheader={`EXP: ${pokemonData?.base_experience}`}
        style={{
          textTransform: "capitalize",
          background: "rgba(236, 240, 241 ,0.6)",
        }}
        action={
          <>
            {pokemonData.types.map((type, index) => (
              <PokemonTypes key={index} type={type.type.name} />
            ))}
          </>
        }
      />
      <Grid container spacing={2}>
        <Grid item>
          <CardMedia
            title="Image"
            component="img"
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`}
            style={{
              width: "150px",
              margin: "auto",
              padding: "15px",
              display: "block",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </Grid>
        <Grid item xs={12} sm alignContent="center">
          <CardContent>
            <Typography variant="h6">
              Abilities:
              {pokemonData.abilities.map(
                (ability, index) => `${index + 1}: ${ability.ability.name} `
              )}
            </Typography>

            <Typography variant="h6">Height: {pokemonData.height}</Typography>
            <Typography variant="h6">Weight: {pokemonData.weight}</Typography>
            <Typography variant="h4">Stats</Typography>

            {pokemonData.stats.map((stat, index) => (
              <Typography variant="h6" key={index}>
                {`${stat.stat.name}: ${stat.base_stat}. Effort: ${
                  stat.effort ? "true" : "false"
                }`}
                <LinearProgress
                  variant="determinate"
                  value={normalize(stat.base_stat)}
                  style={{
                    // borderRadius: 16,
                    // backgroundColor: "#1a90ff",
                    borderRadius: 5,
                    height: 10,
                  }}
                />
              </Typography>
            ))}

            <Typography variant="h4">Species Information</Typography>
            <Typography variant="h6">
              Happiness: {speciesData.base_happiness}
            </Typography>
            <Typography variant="h6">
              Capture Rate: {speciesData.capture_rate}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
}

export default PokemonDetails;
