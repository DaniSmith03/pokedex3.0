import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PokemonList from './Pokedex/PokemonList/PokemonList';
import PokemonCard from './Pokedex/PokemonCard/PokemonCard';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import PokedexContainer from './Pokedex/PokedexContainer/pokedexContainer';
import MyTeams from './Profile/MyTeams/MyTeams';
import ProfileContainer from './Profile/ProfileContainer/ProfileContainer';
import MyPokemon from './Profile/MyPokemon/MyPokemon';
function App() {
  return (
    <>
      <Routes>
        <Route element={<NavBar />}>
          <Route path='/' element={<Home />} />
          <Route path='/pokedex' element={<PokedexContainer />}>
            <Route path=':id' element={<PokemonCard />} />
          </Route>
          <Route path='/profile' element={<ProfileContainer />}>
            <Route path='myteams:id' element={<MyTeams />} />
            <Route path='mypokemon' element={<MyPokemon />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
