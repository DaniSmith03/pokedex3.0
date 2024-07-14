import * as React from 'react';
import './NavBarStyle.css';
import { Outlet, Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'center',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  '@media all': {
    minHeight: 60,
  },
}));

const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' className='navbar'>
          <StyledToolbar className='navbar-container'>
            <Typography
              className='navbar-logo'
              variant='h6'
              component={Link}
              to='/'
            >
              Pokédex
            </Typography>
            <div className='nav-menu'>
              {/* <Typography
                className='nav-links'
                variant='h6'
                component={Link}
                to='/'
              >
                Home
              </Typography> */}
              {/* <Typography
                className='nav-links'
                variant='h6'
                component={Link}
                to='/pokedex'
              >
                Pokedex
              </Typography> */}
              {/* <Typography
                className='nav-links'
                variant='h6'
                component={Link}
                to='/profile'
              >
                Profile
              </Typography> */}
            </div>
          </StyledToolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
};

export default NavBar;
