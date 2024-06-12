import React from 'react';
import { Button, Box, Typography } from '@mui/material';

function PaginationControls({
  currentPage,
  setCurrentPage,
  totalPokemons,
  pokemonsPerPage,
}) {
  const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
      <Button
        variant='contained'
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </Button>
      <Typography sx={{ mx: 2, display: 'flex', alignItems: 'center' }}>
        Page {currentPage} of {totalPages}
      </Typography>
      <Button
        variant='contained'
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </Button>
    </Box>
  );
}

export default PaginationControls;
