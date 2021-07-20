import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import PokemonCards from "./PokemonCards";

import axios from "./requests";
import SearchBar from "./SearchBar";

function PokemonContainer({ classes }) {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(25);

  useEffect(() => {
    document.title = `Pokemon App`;
    const getPokemon = async () => {
      const response = await axios.get(`pokemon?limit=${limit}&offset=0`);
      setPokemons(response.data.results);
    };

    getPokemon();
  }, [limit]);

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
        <div style={{ margin: "20px" }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <FormControl variant="filled">
                <InputLabel htmlFor="outlined-age-native-simple">
                  Results
                </InputLabel>
                <Select
                  native
                  value={limit}
                  onChange={(e) => setLimit(e.target.value)}
                  label="Results"
                >
                  <option aria-label="None" value="" >25</option>
                  <option value={50}>50</option>
                  <option value={75}>75</option>
                  <option value={100}>100</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </div>
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
