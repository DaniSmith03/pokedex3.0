import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'black',
};

function FiltersModal({ modalOpen, setModalOpen, isChecked, setIsChecked }) {
  const handleClose = () => setModalOpen(false);

  //function to get and add the opposite value of the checked input to the isChecked array of pokemon data types by mapping through
  const handleCheck = (event) => {
    const typeObj = {};
    const { value, checked } = event.target;
    console.log(value, checked);
    console.log(isChecked);
    setIsChecked((isChecked[value] = checked));

    Object.keys(isChecked).map((key) => {
      if (isChecked[key] === true) {
        typeObj[key] = true;
      }
      console.log(typeObj);
      return typeObj;
    });
    setIsChecked(typeObj);
  };

  return (
    <React.Fragment>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Filter By Type
          </Typography>
          <Box width='500px' height='60px'>
            {/* <Box width='350px' height='55px' className={classes.form}> */}
            <div>
              <input
                type='checkbox'
                id='type'
                name='type'
                value='normal'
                checked={isChecked.normal}
                onChange={handleCheck}
              />
              Normal
              <input
                type='checkbox'
                id='type'
                name='type'
                value='fighting'
                checked={isChecked.fighting}
                onChange={handleCheck}
              />
              Fighting
              <input
                type='checkbox'
                id='type'
                name='type'
                value='flying'
                checked={isChecked.flying}
                onChange={handleCheck}
              />
              Flying
              <input
                type='checkbox'
                id='type'
                name='type'
                value='poison'
                checked={isChecked.poison}
                onChange={handleCheck}
              />
              Poison
              <input
                type='checkbox'
                id='type'
                name='type'
                value='ground'
                checked={isChecked.ground}
                onChange={handleCheck}
              />
              Ground
              <input
                type='checkbox'
                id='type'
                name='type'
                value='rock'
                checked={isChecked.rock}
                onChange={handleCheck}
              />
              Rock
              <input
                type='checkbox'
                id='type'
                name='type'
                value='bug'
                checked={isChecked.bug}
                onChange={handleCheck}
              />
              Bug
              <input
                type='checkbox'
                id='type'
                name='type'
                value='ghost'
                checked={isChecked.ghost}
                onChange={handleCheck}
              />
              Ghost
              <input
                type='checkbox'
                id='type'
                name='type'
                value='steel'
                checked={isChecked.steel}
                onChange={handleCheck}
              />
              Steel
              <input
                type='checkbox'
                id='type'
                name='type'
                value='fire'
                checked={isChecked.fire}
                onChange={handleCheck}
              />
              Fire
              <input
                type='checkbox'
                id='type'
                name='type'
                value='water'
                checked={isChecked.water}
                onChange={handleCheck}
              />
              Water
              <input
                type='checkbox'
                id='type'
                name='type'
                value='grass'
                checked={isChecked.grass}
                onChange={handleCheck}
              />
              Grass
              <input
                type='checkbox'
                id='type'
                name='type'
                value='electric'
                checked={isChecked.electric}
                onChange={handleCheck}
              />
              Electric
              <input
                type='checkbox'
                id='type'
                name='type'
                value='psychic'
                checked={isChecked.psychic}
                onChange={handleCheck}
              />
              Psychic
              <input
                type='checkbox'
                id='type'
                name='type'
                value='ice'
                checked={isChecked.ice}
                onChange={handleCheck}
              />
              Ice
              <input
                type='checkbox'
                id='type'
                name='type'
                value='dragon'
                checked={isChecked.dragon}
                onChange={handleCheck}
              />
              Dragon
              <input
                type='checkbox'
                id='type'
                name='type'
                value='dark'
                checked={isChecked.dark}
                onChange={handleCheck}
              />
              Dark
              <input
                type='checkbox'
                id='type'
                name='type'
                value='fairy'
                checked={isChecked.fairy}
                onChange={handleCheck}
              />
              Fairy
              <input
                type='checkbox'
                id='type'
                name='type'
                value='unknown'
                checked={isChecked.unknown}
                onChange={handleCheck}
              />
              Unknown
              <input
                type='checkbox'
                id='type'
                name='type'
                value='shadow'
                checked={isChecked.shadow}
                onChange={handleCheck}
              />
              Shadow
            </div>
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default FiltersModal;
