import React, {useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PlayerContext } from '../contexts/PlayerContext';
import Button from '@mui/material/Button';

function CardsWinner() {
  const navigate = useNavigate();
  const location = useLocation();
  const { players, setPlayers } = useContext(PlayerContext); 
  const index = location.state || 0;
 
  const handleClick = () => {
    navigate('/Game');
  };

  
  const handleScoreChange = (points) => {
    const updatedPlayers = [...players];
    updatedPlayers[index].score += points;
    setPlayers(updatedPlayers);
  };
  
  return (
    <div className='container'>
      <h1 className='item'>Choose {players[index].playerName}'s Cards</h1>
      <div onClick={() => handleScoreChange(-40)} className='item card'>Q ♥  </div>
      <div onClick={() => handleScoreChange(-20)} className='item card'>Q ♣♦♠  </div>
      <div onClick={() => handleScoreChange(0)} className='item card'>Other ♥♣♦♠  </div>   
      <Button variant="contained" onClick={handleClick} className='item button'>{'✓'}</Button>
    </div>
  );
}

export default CardsWinner;
