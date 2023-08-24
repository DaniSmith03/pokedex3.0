import React, { useState } from 'react';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './PokedexNavigationStyle';
import { lowerFirst } from '../../Helpers';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

function PokedexNavigation({ setFilter, setTypeFilter }) {
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

  const handleSearch = (event) => {
    setFilter(lowerFirst(event.target.value));
  };

  const handleCheck = (event) => {
    const typeObj = {};
    const { value, checked } = event.target;
    console.log(value, checked);
    isChecked[value] = checked;
    // if (isChecked[value]===true){
    //   typeArr.push(value)
    // return typeArr
    // }
    console.log('value of', isChecked);

    Object.keys(isChecked).map((key) => {
      if (isChecked[key] === true) {
        typeObj[key] = true;
      }
      console.log(typeObj);
      return typeObj;
    });
    // setIsChecked(typeArr)
    console.log('Final Check', typeObj);

    setIsChecked(typeObj);
  };

  console.log('returning', isChecked);

  const evalTypes = (typeDataArr) => {
    const checkedStat = Object.keys(isChecked);
    console.log(checkedStat);
    let match = false;
    if (checkedStat.length >= 1) {
      for (let i = 0; i < checkedStat.length; i++) {
        typeDataArr.map((item) => {
          if (item === checkedStat[i]) {
            console.log(item);
            console.log(checkedStat[i]);
            return (match = true);
          }
        });
      }
    } else {
      return (match = true);
    }

    //  console.log("well",typeDataArr,match)
    return match;
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Search onChange={handleSearch}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default PokedexNavigation;
