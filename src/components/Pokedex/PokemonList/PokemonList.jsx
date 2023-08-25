import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, Avatar, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

function PokemonList({ pokeData, filter, typeFilter }) {
  //Function to create a pokemonCard with sprite image and pokemon name
  const pokedexCard = Object.keys(pokeData).map((item) => {
    let pokemon = pokeData[item];

    return (
      //Takes the information from the pokeData prop and created a grid item containing a card that holds the pokemon sprite and pokemon name.
      pokemon.name.includes(filter) && (
        <Grid item xs={2} md={2} lg={2} key={pokemon.id}>
          <Link to={`/pokedex/${pokemon.id}`}>
            <Card variant='outlined'>
              <Avatar
                src={pokemon.sprite}
                alt={pokemon.name}
                sx={{ width: 56, height: 56 }}
              />
              <Typography>{pokemon.name}</Typography>
            </Card>
          </Link>
        </Grid>
      )
    );
  });

  return (
    <>
      <Box>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {pokedexCard}
        </Grid>
      </Box>
    </>
  );
}

export default PokemonList;
