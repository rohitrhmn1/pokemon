import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import PokemonCards from "./PokemonCards";

import axios from "./requests";
import SearchBar from "./SearchBar";

function PokemonContainer({ history, classes }) {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(25);

  let query = history.location.search;

  useEffect(() => {
    document.title = `Pokemon App`;

    const getPokemon = async () => {
      const response = await axios.get(`pokemon?limit=${limit}&offset=0`);
      setPokemons(response.data.results);
    };

    const processSearch = async (query) => {
      let broken = query.split("&");
      let searchQuery = broken[0].split("=")[1];

      console.log(searchQuery);

      const response = await axios.get(`pokemon/${searchQuery}`);
      let pokemon = [response.data];
      console.log(pokemon);
      setPokemons(pokemon);
    };
    if (query) {
      processSearch(query);
    } else {
      getPokemon();
    }
  }, [limit, query]);

  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <div
        style={{
          height: "200px",
          padding: "20px",
        }}
      >
        <Container maxWidth="sm">
          <SearchBar classes={classes} />
        </Container>
        <div style={{ margin: "20px" }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            style={{ background: "#f3f3f3", borderRadius: "12px" }}
          >
            <Grid item>
              <FormControl variant="outlined">
                <InputLabel htmlFor="filled-age-native-simple">Show</InputLabel>
                <Select
                  native
                  value={limit}
                  onChange={(e) => setLimit(e.target.value)}
                  label="Results"
                >
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={75}>75</option>
                  <option value={100}>100</option>
                  <option value={1118}>All</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </div>
      </div>
      <Grid container spacing={4}>
        {!pokemons?.length ? (
          <Container style={{ height: "100vh" }} align="center">
            <Card>
              <CardContent>
                <Typography variant="h5">No pokemons found</Typography>
              </CardContent>
            </Card>
          </Container>
        ) : (
          pokemons?.map((item, index) => (
            <Grid key={index} item lg={2} md={4} sm={4} xs={6}>
              <PokemonCards classes={classes} pokemon={item} />
            </Grid>
          ))
        )}
      </Grid>
      <div className={classes.containerFadeBottom}/>
    </Container>
  );
}

export default PokemonContainer;
