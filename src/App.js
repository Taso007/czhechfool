import React, { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import GameInfo from './components/GameInfo';
import PlayerNames from './components/PlayerNames';
import Game from './components/Game';
import CardsWinner from './components/CardsWinner';
import CardsLoser from './components/CardsLoser';
import { PlayerProvider } from './contexts/PlayerContext';
import WinnerScreen from './components/WinnerScreen';


function App() {
  return (
    <div className="App">
      <div>
      </div>
      <PlayerProvider>
        <Routes>
            <Route path="/" element={<GameInfo />} />
            <Route path="/PlayerNames" element={<PlayerNames />}/>
            <Route path="/Game" element={<Game />} />
            <Route path="/CardsWinner" element={<CardsWinner/>}/>
            <Route path='/CardsLoser' element={<CardsLoser/>}/>
            <Route path='/WinnerScreen' element={<WinnerScreen/>}/>
          </Routes>
      </PlayerProvider>
    </div>
  );
}

export default App;



