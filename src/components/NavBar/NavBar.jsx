import * as React from 'react';
import NavBarStyle from './NavBarStyle';
import { Outlet, Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

//Export into Style File
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

//Begin Navbar Component
function NavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' sx={{ backgroundColor: 'blue' }}>
          <StyledToolbar>
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
              margin='0 50px'
              variant='h5'
              noWrap
              component={Link}
              color='white'
              to='/'
              sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
            >
              Home
            </Typography>
            <Typography
              margin='0 50px'
              variant='h5'
              noWrap
              component={Link}
              color='white'
              to='/pokedex'
              sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
            >
              Pokedex
            </Typography>
            <Typography
              margin='0 50px'
              variant='h5'
              noWrap
              component={Link}
              color='white'
              to='/profile'
              sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
            >
              Profile
            </Typography>
            {/* <IconButton size='large' aria-label='search' color='inherit'>
              <SearchIcon />
            </IconButton>
            <IconButton
              size='large'
              aria-label='display more actions'
              edge='end'
              color='inherit'
            >
              <MoreIcon />
            </IconButton> */}
          </StyledToolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}

export default NavBar;
