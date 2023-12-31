import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokedexStyle from './PokedexStyle';
import PokemonList from '../PokemonList/PokemonList';
import PokemonCard from '../PokemonCard/PokemonCard';
import { Outlet } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
import PokedexNavigation from '../PokedexNavigation/PokedexNavigation';

function PokedexContainer() {
  //Define useState Variables.
  const [pokeData, SetPokeData] = useState({});
  const [pokeDetails, setPokeDetails] = useState(null);
  const [filter, setFilter] = useState('');
  const [typeFilter, setTypeFilter] = [];
  const [pokemonCardOpen, setPokemonCardOpen] = useState(false);
  const [loadNum, setLoadNum] = useState(900);
  const [isChecked, setIsChecked] = useState({
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    grass: false,
    electric: false,
    physic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknown: false,
    shadow: false,
  });

  useEffect(() => {
    //initialize an object to store pokemon data we want to extract
    const pokemonDetailsObj = {};

    //API call to Pokemon API to get information from the server listed in the results object of the data object is an array of pokemon names and urls based on the number specified in the query as "limit" Store this information in pokemonDetailsObj

    const getTheData = async () => {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${loadNum}`
      );
      const pokemonDataObj = response.data.results;

      //Promise All used to make a promise chain that maps through the array of pokemonDetailsObj takes the name key from each obj and makes a new API call to get pokemon objects containing details using the pokemon name returned in an array
      const details = await Promise.all(
        pokemonDataObj.map((pokemon) => {
          return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
        })
      );
      //   console.log(details);

      details.forEach((poke, index) => {
        //Extract and Set Pokemon Type Details to an array with the type details
        const nameType = poke.data.types.map((item) => {
          const { type } = item;
          const { name } = type;
          return name;
        });

        //Extract and set Pokemon ability Details to an array with the ability details
        const nameAbility = poke.data.abilities.map((item) => {
          const { ability } = item;
          const { name } = ability;
          return name;
        });

        //Extract and set Pokemon move Details to an array with the move details
        const nameMoves = poke.data.moves.map((item) => {
          const { move } = item;
          const { name } = move;
          return name;
        });

        //Extracts and set Pokemon base stat details to an array of objects each object being a key value pair of the status name and the matching value
        const statData = poke.data.stats.map((item) => {
          const statsObj = {};
          const { stat } = item;
          const { name } = stat;
          const statusName = String(name);
          const { base_stat } = item;

          statsObj[statusName] = base_stat;
          return statsObj;
        });

        //Extract and set first video game title appearance.
        const gameIntro = poke.data.game_indices.slice(0, 3).map((item) => {
          const { version } = item;
          const { name } = version;
          return name;
        });

        //Create Pokemon Object with all of the Pokemon Details. Deconstructed set that object to the state pokeData
        pokemonDetailsObj[index + 1] = {
          id: [index + 1],
          name: poke.data.name,
          sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
          types: nameType,
          height: poke.data.height,
          weight: poke.data.weight,
          abilities: nameAbility,
          moves: nameMoves,
          stats: statData,
          gen: gameIntro,
        };
        // console.log(pokemonDetailsObj);
        return pokemonDetailsObj;
      });
      const moreDetails = await Promise.all(
        pokemonDataObj.map(async (pokemon) => {
          try {
            const response = await axios.get(
              `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`
            );
            return response.data; // Assuming you want to return the data
          } catch (error) {
            console.error(
              `Error fetching data for ${pokemon.name}: ${error.message}`
            );
            return null; // or handle the error in another way, e.g., return a default value
          }
        })
      );

      // Filter out the null values (failed requests)
      const successfulResponses = moreDetails.filter((data) => data !== null);

      console.log(successfulResponses);

      successfulResponses.forEach((poke, index) => {
        let description;
        poke.flavor_text_entries
          ? (description = poke.flavor_text_entries[0].flavor_text)
          : (description = 'No Description Available');
        // console.log(description);

        let evolvesFrom;
        poke.evolves_from_species
          ? (evolvesFrom = poke.evolves_from_species.name)
          : (evolvesFrom = null);
        // console.log(evolvesFrom);

        let habitat;
        poke.habitat ? (habitat = poke.habitat.name) : (habitat = null);

        const isMythical = poke.is_mythical;

        const isLegendary = poke.is_legendary;

        pokemonDetailsObj[poke.id].description = description;
        pokemonDetailsObj[poke.id].evolves_from = evolvesFrom;
        pokemonDetailsObj[poke.id].habitat = habitat;
        pokemonDetailsObj[poke.id].is_mythical = isMythical;
        pokemonDetailsObj[poke.id].isLegendary = isLegendary;
      });

      SetPokeData(pokemonDetailsObj);
    };
    getTheData();
  }, []);
  console.log('hello' + Object.keys(pokeData).length);
  console.log(pokeData);

  //Pokedex card open function:

  const handlePokemonCardOpen = (pokemonId) => {
    setPokeDetails(pokeData[pokemonId]);
    setPokemonCardOpen(true);
  };

  //JSX to return pokedex elements
  return (
    <>
      <PokedexNavigation
        setFilter={setFilter}
        setTypeFilter={setTypeFilter}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        setLoadNum={setLoadNum}
      />
      {Object.keys(pokeData).length !== 0 ? (
        <PokemonList
          filter={filter}
          typeFilter={typeFilter}
          pokeData={pokeData}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          handlePokemonCardOpen={handlePokemonCardOpen}
          loadNum={loadNum}
        />
      ) : (
        <Box>
          <Typography>Loading Pokedex</Typography>
          <CircularProgress color='inherit' />
        </Box>
      )}
      {pokeDetails !== null && (
        <PokemonCard
          pokemonCardOpen={pokemonCardOpen}
          setPokemonCardOpen={setPokemonCardOpen}
          pokeDetails={pokeDetails}
        />
      )}

      <Outlet />
    </>
  );
}

export default PokedexContainer;
