import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../contexts/PlayerContext';
import { TextField } from '@material-ui/core';
import Button from '@mui/material/Button';

function PlayerNames() {
  const navigate = useNavigate();
  const { players, setPlayers, numPlayers } = useContext(PlayerContext);
  const [inputValues, setInputValues] = useState(Array(numPlayers).fill(''));

  useEffect(() => {
    setPlayers(Array(numPlayers).fill({ playerName: '', score: 0 }));
  }, [numPlayers, setPlayers]);

  const handleInputChange = (index, event) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  const handleClick = () => {
    const newPlayers = inputValues.map((value, index) => ({
      playerName: value,
      score: players[index] ? players[index].score : 0
    }));
    setPlayers(newPlayers);
    navigate('/Game');
  };

  return (
    <div className='container'>
        {inputValues.map((value, index) => (
          <div className='item'>
            <TextField variant="outlined" 
            label={`Player ${index + 1}` } 
            key={index}
            value={value}
            onChange={(event) => handleInputChange(index, event)}
            />
          </div>
        ))}
      <div className='item'>
        <Button variant="contained" onClick={handleClick} className='button' >{'✓'}</Button>
      </div>
    </div>
  );
}

export default PlayerNames;
