import React from 'react';
import PokedexStyle from './PokedexStyle';
import PokemonList from '../PokemonList/PokemonList';
import PokemonCard from '../PokemonCard/PokemonCard';
import { Outlet } from 'react-router-dom';

function PokedexContainer() {
  return (
    <>
      <div> Hello From PokeDexContainer</div>
      <PokemonList />
      <Outlet />
    </>
  );
}

export default PokedexContainer;
