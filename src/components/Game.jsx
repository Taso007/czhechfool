import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from '../contexts/PlayerContext';
import Button from '@mui/material/Button';

function Game() {
  const navigate = useNavigate();
  const { players,  winnerSelected, setWinnerSelected, losingScore, setAmount, amount } = useContext(PlayerContext);

  const handleClick = (index) => {
    if (!winnerSelected) {
      setWinnerSelected(true);
      
      navigate('/CardsWinner', {
        state: index
      });
    } else {
      reset();
      navigate('/CardsLoser', {
        state: index
      });
    }
  };

  const allPlayers = players.map((player, index) => (
    <div key={index} onClick={() => handleClick(index)} className='item card'>
      <span className='name'>{player.playerName} </span>
      <span className='player-score'>{player.score}</span>
      <span className='player-next'> {'>'} </span>
    </div>
  ));
 
  const handleButtonClick = () => {
    setWinnerSelected(false);
    for(let i = 0; i < players.length; i++){
      if(losingScore <= players[i].score){
        navigate('/WinnerScreen');
      }
    }
  }

  const reset = () => {
    const updatedAmount = amount.map(item => ({ ...item, selectedAmount: 0 }));
    setAmount(updatedAmount);
  };

  return (
    <div className='container'>
      <h1 className='item'>Select Winner</h1>
      {allPlayers}
      <Button variant="contained" onClick={handleButtonClick} className='item button'>Round Over</Button>
    </div>
  );
}

export default Game;
