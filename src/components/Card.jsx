import React, { useContext } from 'react';
import { PlayerContext } from '../contexts/PlayerContext';

function Card({ card, cardIndex }) {
  const { amount, setAmount } = useContext(PlayerContext);

  const changeAmount = (operation) => {
    const updatedAmount = amount.map(item => {
      if (item.cardIndex === cardIndex) {
        let maxSelectedAmount = 1; 
        if (card === 'Q ♣♦♠') {
          maxSelectedAmount = 3; 
        } else if (card !== 'Q ♥') {
          maxSelectedAmount = 4; 
        }
        const newSelectedAmount = operation === 'increase'
          ? Math.min(item.selectedAmount + 1, maxSelectedAmount)
          : Math.max(item.selectedAmount - 1, 0);
        return { ...item, selectedAmount: newSelectedAmount };
      }
      return item;
    });
    setAmount(updatedAmount);
  };

  const selectedAmount = amount.find(item => item.cardIndex === cardIndex)?.selectedAmount || 0;

  return (
    <div className='item card'>
      <span className='name'>{card}</span>
      <button className='change' onClick={() => changeAmount('decrease')}>-</button>
      <span className='player-score'>{selectedAmount}</span>
      <button className='change' onClick={() => changeAmount('increase')}>+</button>
    </div>
  );
}

export default Card;
