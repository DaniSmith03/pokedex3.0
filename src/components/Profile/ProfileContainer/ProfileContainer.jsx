import React from 'react';
import MyData from '../MyData/MyData';
import MyGames from '../MyGames/MyGames';
import MyPokemon from '../MyPokemon/MyPokemon';
import MyTeams from '../MyTeams/MyTeams';
import ProfileStyle from './ProfileStyle';
function ProfileContainer() {
  return (
    <>
      <div>Profile Container</div>
      <MyData />
      <MyGames />
      <MyTeams />
      <MyPokemon />
    </>
  );
}

export default ProfileContainer;
