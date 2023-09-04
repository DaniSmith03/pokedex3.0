import React from 'react';
import { style } from './CardStyle';
import './style.css';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Chip from '@mui/material/Chip';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { getImageId, capitalizeFirst } from '../../Helpers';

import { Container, Paper } from '@mui/material';
import { green, lightGreen } from '@mui/material/colors';

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
  const {
    name,
    height,
    weight,
    types,
    abilities,
    gen,
    moves,
    description,
    habitat,
  } = pokeDetails;
  const pokeId = pokeDetails.id[0];
  const newId = getImageId(pokeDetails.id[0]);
  const largeImageUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${newId}.png`;
  const swshImageUrl = `https://www.serebii.net/swordshield/pokemon/${newId}.png`;
  const swshShinyImageUrl = `https://www.serebii.net/Shiny/SWSH/${newId}.png`;
  const svImageUrl = `https://www.serebii.net/scarletviolet/pokemon/new/${newId}.png`;
  const svShinyImageUrl = `https://www.serebii.net/Shiny/SV/new/${newId}.png`;

  //render moves list
  function renderRow() {
    return moves.map((move, index) => {
      return (
        <ListItem key={index} component='div' disablePadding>
          <ListItemButton>
            <ListItemText primary={move} />
          </ListItemButton>
        </ListItem>
      );
    });
  }

  moves.map((move) => console.log(move));

  return (
    <div>
      <Modal
        open={pokemonCardOpen}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box componet='div' sx={style.container}>
          <Paper elevation={3} sx={style.titleContainer}>
            <Typography variant='h3' sx={style.title}>
              {capitalizeFirst(name)}
            </Typography>
          </Paper>
          <Box component='div' sx={style.imgContainer}>
            {pokeId <= 904 ? (
              <Container>
                <Box
                  component='img'
                  sx={{ height: 200, width: 200 }}
                  src={swshImageUrl}
                />
                <Typography sx={style.title}>Normal</Typography>
              </Container>
            ) : (
              <Container>
                <Box
                  component='img'
                  sx={{ height: 200, width: 200 }}
                  src={svImageUrl}
                />
                <Typography sx={style.title}>Normal</Typography>
              </Container>
            )}
            {pokeId <= 904 ? (
              <Container>
                <Box
                  component='img'
                  sx={{ height: 200, width: 200 }}
                  src={swshShinyImageUrl}
                />
                <Typography sx={style.title}>Shiny</Typography>
              </Container>
            ) : (
              <Container>
                <Box
                  component='img'
                  sx={{ height: 200, width: 200 }}
                  src={svShinyImageUrl}
                />
                <Typography sx={style.title}>Shiny</Typography>
              </Container>
            )}
          </Box>
          <Paper elevation={2}>
            <Box>
              <Typography sx={style.title}>{description}</Typography>
            </Box>
            <Box sx={style.moreDetails}>
              <div className='feature'>
                <Typography>Height</Typography>
                <Typography>{height}</Typography>
              </div>
              <div className='feature'>
                <Typography>Weight</Typography>
                <Typography>{weight}</Typography>
              </div>
              <div className='feature'>
                <Typography>Habitat</Typography>
                <Typography>{habitat}</Typography>
              </div>
            </Box>
            <Box sx={style.moreDetails}>
              <div className='feature'>
                <Typography>Types</Typography>
                <div className='types'>
                  {types.map((type) => {
                    return (
                      <Chip color='primary' variant='outlined' label={type} />
                    );
                  })}
                </div>
              </div>
              <div className='feature'>
                <Typography>Abilities</Typography>
                <div className='types'>
                  {abilities.map((ability) => {
                    return (
                      <Chip
                        color='secondary'
                        variant='outlined'
                        label={ability}
                      />
                    );
                  })}
                </div>
              </div>
            </Box>
            <div className='feature'>
              <Typography>Moves</Typography>
              <Box
                sx={{
                  width: 300,
                  height: 50,
                  // maxWidth: 360,
                  bgcolor: 'white',
                  border: 'solid',
                }}
              >
                <FixedSizeList
                  backgroundColor={lightGreen}
                  height={40}
                  width={200}
                  itemSize={50}
                  itemCount={50}
                  overscanCount={5}
                >
                  {renderRow}
                </FixedSizeList>
              </Box>
            </div>
          </Paper>
        </Box>
      </Modal>
    </div>
  );
}

export default PokemonCard;
