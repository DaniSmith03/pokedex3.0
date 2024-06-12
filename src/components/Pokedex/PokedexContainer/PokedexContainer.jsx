import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokedexStyle from './PokedexStyle';
import PokemonList from '../PokemonList/PokemonList';
import PokemonCard from '../PokemonCard/PokemonCard';
import { Outlet } from 'react-router-dom';
import { Box, CircularProgress, Typography } from '@mui/material';
import PokedexNavigation from '../PokedexNavigation/PokedexNavigation';
import PaginationControls from '../PaginationControls';
import './PokedexContainer.css';

function PokedexContainer() {
  // Define useState Variables.
  const [allPokeData, setAllPokeData] = useState([]); // All Pokémon data
  const [filteredPokeData, setFilteredPokeData] = useState([]); // Filtered Pokémon data
  const [displayedPokeData, setDisplayedPokeData] = useState([]); // Displayed Pokémon data (after pagination)
  const [pokeDetails, setPokeDetails] = useState(null);
  const [filter, setFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState([]);
  const [pokemonCardOpen, setPokemonCardOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(20);
  const [totalPokemons, setTotalPokemons] = useState(0);

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
    // Fetch all Pokémon data initially
    const fetchAllPokemonData = async () => {
      let allPokemonDetailsObj = [];
      let offset = 0;
      const limit = 200; // Adjust the limit based on API rate limits and performance considerations

      while (true) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        );
        const pokemonDataObj = response.data.results;

        if (pokemonDataObj.length === 0) break;

        // Fetch details for each Pokémon
        const details = await Promise.all(
          pokemonDataObj.map((pokemon) => {
            return axios.get(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
          })
        );

        details.forEach((poke) => {
          const nameType = poke.data.types.map((item) => {
            const { type } = item;
            const { name } = type;
            return name;
          });

          const nameAbility = poke.data.abilities.map((item) => {
            const { ability } = item;
            const { name } = ability;
            return name;
          });

          const nameMoves = poke.data.moves.map((item) => {
            const { move } = item;
            const { name } = move;
            return name;
          });

          const statData = poke.data.stats.map((item) => {
            const statsObj = {};
            const { stat } = item;
            const { name } = stat;
            const statusName = String(name);
            const { base_stat } = item;

            statsObj[statusName] = base_stat;
            return statsObj;
          });

          const gameIntro = poke.data.game_indices.slice(0, 3).map((item) => {
            const { version } = item;
            const { name } = version;
            return name;
          });

          allPokemonDetailsObj.push({
            id: poke.data.id,
            name: poke.data.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.data.id}.png`,
            types: nameType,
            height: poke.data.height,
            weight: poke.data.weight,
            abilities: nameAbility,
            moves: nameMoves,
            stats: statData,
            gen: gameIntro,
          });
        });

        offset += limit;
      }

      setAllPokeData(allPokemonDetailsObj);
    };

    fetchAllPokemonData();
  }, []);

  useEffect(() => {
    // Filter the full dataset
    const applyFilters = () => {
      const filteredData = allPokeData.filter((pokemon) => {
        // Apply name filter
        if (filter && !pokemon.name.includes(filter)) {
          return false;
        }

        // Apply type filter
        if (
          typeFilter.length > 0 &&
          !typeFilter.some((type) => pokemon.types.includes(type))
        ) {
          return false;
        }

        return true;
      });

      setFilteredPokeData(filteredData);
      setTotalPokemons(filteredData.length);
      setCurrentPage(1); // Reset to the first page whenever filters are applied
    };

    applyFilters();
  }, [allPokeData, filter, typeFilter]);

  useEffect(() => {
    // Paginate the filtered results
    const paginate = () => {
      const offset = (currentPage - 1) * pokemonsPerPage;
      const paginatedData = filteredPokeData.slice(
        offset,
        offset + pokemonsPerPage
      );
      setDisplayedPokeData(paginatedData);
    };

    paginate();
  }, [filteredPokeData, currentPage, pokemonsPerPage]);

  useEffect(() => {
    // Update type filter based on isChecked state
    const newTypeFilter = Object.keys(isChecked).filter(
      (key) => isChecked[key]
    );
    setTypeFilter(newTypeFilter);
  }, [isChecked]);

  //Pokedex card open function:
  const handlePokemonCardOpen = (pokemonId) => {
    const pokemon = allPokeData.find((poke) => poke.id === pokemonId);
    setPokeDetails(pokemon);
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
        setPokemonsPerPage={setPokemonsPerPage}
      />
      {Object.keys(displayedPokeData).length !== 0 ? (
        <>
          <div className='pokedex-container'>
            <div className='pokemon-list-container'>
              <div className='box1'>
                <PokemonList
                  filter={filter}
                  typeFilter={typeFilter}
                  pokeData={displayedPokeData}
                  isChecked={isChecked}
                  setIsChecked={setIsChecked}
                  handlePokemonCardOpen={handlePokemonCardOpen}
                />
              </div>
              <div className='box2'>
                {pokeDetails !== null && (
                  <PokemonCard
                    pokemonCardOpen={pokemonCardOpen}
                    setPokemonCardOpen={setPokemonCardOpen}
                    pokeDetails={pokeDetails}
                  />
                )}
              </div>
            </div>

            <PaginationControls
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPokemons={totalPokemons}
              pokemonsPerPage={pokemonsPerPage}
            />
          </div>
        </>
      ) : (
        <Box className='loading-container'>
          <div className='pokeball'></div>
          <div className='loading-text'>Loading</div>
        </Box>
      )}

      <Outlet />
    </>
  );
}

export default PokedexContainer;
