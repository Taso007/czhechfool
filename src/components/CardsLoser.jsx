import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PlayerContext } from '../contexts/PlayerContext';
import Button from '@mui/material/Button';
import Card from './Card';

function CardsLoser() {
  const navigate = useNavigate();
  const location = useLocation();
  const { players, setPlayers, amount } = useContext(PlayerContext);
  const index = location.state || 0;

  const handleClick = () => {
    const updatedPlayers = [...players];
    amount.forEach(({ cardIndex, selectedAmount }) => {
      const points = getPointsForCard(cardIndex);
      updatedPlayers[index].score += points * selectedAmount;
    });
    setPlayers(updatedPlayers);
    navigate('/Game');
  };

  const getPointsForCard = (cardIndex) => {
    const pointsMap = {
      0: 40,
      1: 20,
      2: 11,
      3: 4,
      4: 2,
      5: 10,
      6: 9,
      7: 8,
      8: 7,
      9: 6
    };
    return pointsMap[cardIndex] || 0;
  };

  return (
    <div className='container'>
      <h1 className='item'>Choose {players[index].playerName}'s Cards</h1>
      <Card cardIndex={0} card='Q ♥' />
      <Card cardIndex={1} card='Q ♣♦♠' />
      <Card cardIndex={2} card='T ♥♣♦♠' />
      <Card cardIndex={3} card='K ♥♣♦♠' />
      <Card cardIndex={4} card='J ♥♣♦♠' />
      <Card cardIndex={5} card='10 ♥♣♦♠' />
      <Card cardIndex={6} card='9 ♥♣♦♠' />
      <Card cardIndex={7} card='8 ♥♣♦♠' />
      <Card cardIndex={8} card='7 ♥♣♦♠' />
      <Card cardIndex={9} card='6 ♥♣♦♠' />
      <Button variant="contained" onClick={handleClick} className='item button'>{'✓'}</Button>
    </div>
  );
}

export default CardsLoser;
