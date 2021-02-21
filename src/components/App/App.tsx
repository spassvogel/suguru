import React, { useState } from 'react';
import Suguru from 'components/Suguru';
import './app-default.scss';
import './app-puzzlepal.scss';
import games from 'games/games.json';
import GameSelector from './GameSelector';

const App= () => {
  const [gameIndex, setGameIndex] = useState(0)
  return (
    <div className="app theme-puzzlepal">
      <p>
        Suguru, by Wouter
      </p>
      <GameSelector selectedIndex={gameIndex} onIndexChange={setGameIndex}/>
      <Suguru
        {...games[gameIndex]}
      />
    </div>
  );
}

export default App;
