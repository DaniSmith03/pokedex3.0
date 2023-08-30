import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';

const style = {
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 400,
    bgcolor: 'background.paper',
    borderRadius: '10%',
    boxShadow: 24,
    p: 4,
  },
  title: {
    color: 'red',
  },
};

function PokemonCard({ pokemonCardOpen, setPokemonCardOpen, pokeDetails }) {
  const navigate = useNavigate();
  const handleClose = () => {
    setPokemonCardOpen(false);
    // return navigate('/pokedex');
  };
  const { id } = useParams();
  console.log(id);

  console.log(pokeDetails);
  return (
    <div>
      <Modal
        open={pokemonCardOpen}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style.container}>
          <Paper elevation={3}>
            <Typography sx={style.title}>hi</Typography>
          </Paper>
        </Box>
      </Modal>
    </div>
  );
}

export default PokemonCard;
