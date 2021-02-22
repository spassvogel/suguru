import React, { useLayoutEffect, useRef, useState } from 'react';
import Suguru from 'components/Suguru';
import './app-default.scss';
import './app-puzzlepal.scss';
import games from 'games/games.json';
import GameSelector from './GameSelector';

const App = () => {
  const [gameIndex, setGameIndex] = useState(0)
  const gameRef = useRef<HTMLDivElement>(null);
  const resizerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // If the game is wider than the viewport, resize down
    const app = resizerRef.current?.parentNode as HTMLElement;
    if (gameRef.current?.clientWidth && app.clientWidth) {
      const ratio = app.clientWidth / gameRef.current?.clientWidth;
      if (ratio < 1) {
        resizerRef.current!.style.transform = `scale(${ratio * 0.95})`;
      } else {        
        resizerRef.current!.style.transform = '';
      }
    }
  }, [gameIndex]);

  return (
    <div className="app theme-puzzlepal">
      <div ref={resizerRef}>
        <p>
          Suguru, by Wouter
        </p>
        <GameSelector selectedIndex={gameIndex} onIndexChange={setGameIndex}/>
        <Suguru
          ref={gameRef}
          {...games[gameIndex]}
        />
      </div>
    </div>
  );
}

export default App;
