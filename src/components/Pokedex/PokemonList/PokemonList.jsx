import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, Avatar, Typography, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';

function PokemonList({ pokeData, filter, isChecked, handlePokemonCardOpen }) {
  //function to evaluate which pokemon types to display based on the data in the isChecked obj
  const evalTypes = (typeDataArr) => {
    const checkedStat = Object.keys(isChecked);
    let match = false;
    if (checkedStat.length >= 1) {
      for (let i = 0; i < checkedStat.length; i++) {
        typeDataArr.map((item) => {
          if (item === checkedStat[i]) {
            return (match = true);
          }
        });
      }
    } else {
      return (match = true);
    }
    return match;
  };

  //function to handle open pokemon card action when a card is clicked
  // const handlePokemonCardOpen = () => {
  //   setPokemonCardOpen(true);
  // };

  //Function to create a pokemonCard with sprite image and pokemon name
  const pokedexCard = Object.keys(pokeData).map((item) => {
    let pokemon = pokeData[item];

    return (
      //Takes the information from the pokeData prop and created a grid item containing a card that holds the pokemon sprite and pokemon name.
      pokemon.name.includes(filter) &&
      evalTypes(pokemon.types) === true && (
        <Grid item xs={2} md={2} lg={2} key={pokemon.id}>
          <Link to={`/pokedex/${pokemon.id}`}>
            <Card variant='outlined'>
              <CardActionArea onClick={() => handlePokemonCardOpen(pokemon.id)}>
                <Avatar
                  src={pokemon.sprite}
                  alt={pokemon.name}
                  sx={{ width: 56, height: 56 }}
                />
                <Typography>{pokemon.name}</Typography>
              </CardActionArea>
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
