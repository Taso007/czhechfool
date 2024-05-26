import React, { createContext, useState } from 'react';



export const PlayerProvider = ({ children }) => {
  const [losingScore, setLosingScore] = useState(200);
  const [numPlayers, setNumPlayers] = useState(2);
  const [winnerSelected, setWinnerSelected] = useState(false);
  const [players, setPlayers] = useState([{ playerName: '', score: 0 }]);
  const [amount, setAmount] = useState([
    { cardIndex: 0, selectedAmount: 0},
    { cardIndex: 1, selectedAmount: 0},
    { cardIndex: 2, selectedAmount: 0},
    { cardIndex: 3, selectedAmount: 0},
    { cardIndex: 4, selectedAmount: 0},
    { cardIndex: 5, selectedAmount: 0},
    { cardIndex: 6, selectedAmount: 0},
    { cardIndex: 7, selectedAmount: 0},
    { cardIndex: 8, selectedAmount: 0},
    { cardIndex: 9, selectedAmount: 0}
  ]);

  return (
    <PlayerContext.Provider value={{ players, setPlayers, losingScore, setLosingScore, numPlayers, setNumPlayers, winnerSelected, setWinnerSelected, amount, setAmount }}>
      {children}
    </PlayerContext.Provider>
  ); 
};


export const PlayerContext = createContext();