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
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'black',
};

function FiltersModal({
  modalOpen,
  setModalOpen,
  isChecked,
  setIsChecked,
  setPokemonsPerPage,
}) {
  const handleClose = () => setModalOpen(false);

  // Function to handle checkbox change
  const handleCheck = (event) => {
    const { value, checked } = event.target;
    setIsChecked((prevChecked) => ({
      ...prevChecked,
      [value]: checked,
    }));
  };

  // Set the number to display filter
  const handleNumChange = (e) => {
    setPokemonsPerPage(Number(e.target.value));
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
            <div>
              {Object.keys(isChecked).map((type) => (
                <label key={type}>
                  <input
                    type='checkbox'
                    id='type'
                    name='type'
                    value={type}
                    checked={isChecked[type]}
                    onChange={handleCheck}
                  />
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              ))}
            </div>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', margin: 5 }}>
            <Typography># of Pokemon to Display</Typography>
            <input
              style={{ textAlign: 'center', fontSize: 20 }}
              type='number'
              min='20'
              step='25'
              max='925'
              onChange={handleNumChange}
            />
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default FiltersModal;
