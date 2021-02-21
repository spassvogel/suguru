import React from 'react';
import Suguru from 'components/Suguru';
import './app-default.scss';
import './app-puzzlepal.scss';

const _ = undefined;

const App= () => {
  return (
    <div className="app theme-puzzlepal">
      <p>
        Suguru, by Wouter
      </p>
      <Suguru
        size={[4, 5]}
        startSituation={[
          _, 2, _, 3,
          3, _, _, 2, 
          1, _, 3, _,
          _, _, 4, 2,
          1, 2, _, 3
        ]}
        solution={[
          4, 2, 1, 3,
          3, 5, 4, 2,
          1, 2, 3, 1,
          3, 5, 4, 2,
          1, 2, 1, 3
        ]}
        groups={[
          0, 0, 0, 0,
          1, 2, 2, 2,
          1, 1, 2, 2,
          3, 4, 4, 4,
          3, 3, 4, 4,
        ]}
        maxNumber={5}
      />
    </div>
  );
}

export default App;
