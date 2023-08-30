import React from 'react';
import { style } from './CardStyle';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { getImageId } from '../../Helpers';

import { Paper } from '@mui/material';

// const style = {
//   container: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     height: 400,
//     bgcolor: 'background.paper',
//     borderRadius: '10%',
//     boxShadow: 24,
//     p: 4,
//   },
//   title: {
//     color: 'red',
//   },
// };

function PokemonCard({ pokemonCardOpen, setPokemonCardOpen, pokeDetails }) {
  const handleClose = () => {
    setPokemonCardOpen(false);
  };
  const { id } = useParams();
  console.log(id);
  console.log(pokeDetails);
  const { name, pokeId, height, weight, types, abilities, gen, moves } =
    pokeDetails;
  const newId = getImageId(pokeDetails.id[0]);
  const largeImageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${newId}.png`;
  const fullImageUrl = `https://www.serebii.net/swordshield/pokemon/${newId}.png`;
  const fullShinyUrl = `https://www.serebii.net/Shiny/SWSH/${newId}.png`;

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
            <Typography sx={style.title}>{name}</Typography>
          </Paper>
          <img src={fullImageUrl} />
        </Box>
      </Modal>
    </div>
  );
}

export default PokemonCard;
