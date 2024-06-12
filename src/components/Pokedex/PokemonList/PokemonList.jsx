import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, Avatar, Typography, CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import './ListStyle.css';
import { capitalizeFirst } from '../../Helpers';

function PokemonList({
  pokeData,
  filter,
  isChecked,
  handlePokemonCardOpen,
  loadNum,
}) {
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
  const pokedexCard = Object.keys(pokeData)
    .slice(0, loadNum)
    .map((item) => {
      let pokemon = pokeData[item];

      return (
        //Takes the information from the pokeData prop and created a grid item containing a card that holds the pokemon sprite and pokemon name.
        pokemon.name.includes(filter) &&
        evalTypes(pokemon.types) === true && (
          <Grid item key={pokemon.id} className='grid'>
            {/* <Link to={`/pokedex/${pokemon.id}`}> */}
            <Card
              className='card'
              sx={{
                borderRadius: 50,
                width: 90,
                height: 90,
              }}
              variant='outlined'
              onClick={() => handlePokemonCardOpen(pokemon.id)}
            >
              <div className='cardDiv'>
                <Avatar
                  className='avatar'
                  src={pokemon.sprite}
                  alt={pokemon.name}
                  sx={{ width: 60, height: 60 }}
                />
              </div>
            </Card>
            {/* </Link> */}
            <Typography className='pokemonName'>
              {capitalizeFirst(pokemon.name)}
            </Typography>
          </Grid>
        )
      );
    });

  return (
    <>
      <Box sx={{ margin: 8 }}>
        <Grid
          // sx={{ marginTop: 5 }}
          // sx={{ marginBottom: 5 }}
          container
          rowSpacing={2}
          columnSpacing={{ xs: 2, sm: 2, md: 2, lg: 2 }}
        >
          {pokedexCard}
        </Grid>
      </Box>
    </>
  );
}

export default PokemonList;
