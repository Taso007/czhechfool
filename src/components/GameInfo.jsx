import '../styles/GameBasics.css';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../contexts/PlayerContext';
import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@material-ui/core';
import Button from '@mui/material/Button';


function GameInfo() {
  const navigate = useNavigate(); 
  const { losingScore, setLosingScore, numPlayers, setNumPlayers } = useContext(PlayerContext);

  const handleNumPlayersChange = (event) => {
    setNumPlayers(parseInt(event.target.value));
  };

  const handleLosingScoreChange = (event) => {
    setLosingScore(parseInt(event.target.value));
  };

  const handleClick = () => {
    navigate('/PlayerNames');
  };

  return (
    <div className='container'>
      <div className='item'>
        <FormControl variant="outlined" >
          <InputLabel shrink>Number of players</InputLabel>
          <Select value={numPlayers} onChange={handleNumPlayersChange} label="Number of players">
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
          <FormHelperText>Select the number of players</FormHelperText>
        </FormControl>
      </div>
      <div className='item'>
        <FormControl variant="outlined" >
          <InputLabel shrink>Losing Score</InputLabel>
          <Select value={losingScore} onChange={handleLosingScoreChange} label="Losing Score">
            <MenuItem value={200}>200</MenuItem>
            <MenuItem value={300}>300</MenuItem>
            <MenuItem value={400}>400</MenuItem>
          </Select>
          <FormHelperText>Select the losing Score</FormHelperText>
        </FormControl>
      </div>
      <div className='item'>
        <Button variant="contained" onClick={handleClick} className='button' >{'✓'}</Button>
      </div>
    </div>
  );
}

export default GameInfo;
