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
  const [helpPage, setHelpPage] = useState<number>();

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

  const handleNext = () => {
    // try to start next puzzle
    if (gameIndex < games.length) {
      setGameIndex(gameIndex + 1);
    }
  }
  const handleOpenHelp = () => {
    setHelpPage(0);
  }

  return (
    <div className="app theme-puzzlepal">
      <div ref={resizerRef}>
        <p>
          Suguru, by Wouter
        </p>
        <GameSelector selectedIndex={gameIndex} onIndexChange={setGameIndex}/>
        <div style={{ display: helpPage === undefined ? "block" : "none" }}>
          <Suguru
            ref={gameRef}
            {...games[gameIndex]}
            onNext={handleNext}
            onHelp={handleOpenHelp}
          />
        </div>
        { helpPage !== undefined && (
          <Help page={helpPage} />
        )}
      </div>
    </div>
  );
}

export default App;
