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
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import FiltersModal from './FiltersModal';

function PokedexNavigation({
  setFilter,
  isChecked,
  setIsChecked,
  setPokemonsPerPage,
}) {
  const handleSearch = (event) => {
    setFilter(lowerFirst(event.target.value));
  };

  //Handle Opening MoreFilters Modal on button click
  const [modalOpen, setModalOpen] = useState(false);
  const handleMoreFilters = () => {
    setModalOpen(true);
  };

  //Return JSX for pokemonNavigation
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar sx={{ backgroundColor: 'red' }}>
          {/* <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Pokedex Navigation
          </Typography>
          <Button variant='contained' onClick={handleMoreFilters}>
            More Filters
          </Button>
          <FiltersModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            setPokemonsPerPage={setPokemonsPerPage}
          />
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
