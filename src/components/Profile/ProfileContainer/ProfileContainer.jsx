import React from 'react';
import MyData from '../MyData/MyData';
import MyGames from '../MyGames/MyGames';
import MyPokemon from '../MyPokemon/MyPokemon';
import MyTeams from '../MyTeams/MyTeams';
import ProfileStyle from './ProfileStyle';
function ProfileContainer() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 30,
        }}
      >
        Profile Feature Coming Soon
      </div>
      <MyData />
      <MyGames />
      <MyTeams />
      <MyPokemon />
    </>
  );
}

export default ProfileContainer;
