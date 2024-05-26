import React, { useContext, useEffect, useState } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

function WinnerScreen() {
  const { players, losingScore } = useContext(PlayerContext);
  const [finishTime, setFinishTime] = useState('');

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });
    setFinishTime(formattedTime);
  }, []);

  const rankPlayers = () => {
    const sortedPlayers = [...players];
    sortedPlayers.sort((a, b) => a.score - b.score);
    return sortedPlayers;
  };

  return (
    <div className='last-container'>
      <h3>{finishTime}</h3>
      <h2>Losing Score: {losingScore}</h2>
      <h1 className='item'>Game Over</h1>
        {rankPlayers().map((player, index) => (
          <div className='item last-name' key={index}>
            <span>{index + 1}.</span> {player.playerName} {player.score}
          </div>
        ))}
    </div>
  );
}

export default WinnerScreen;
