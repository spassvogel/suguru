import React, { useEffect, useMemo, useState } from "react";
import Cell from "./Cell";
import useSound from 'use-sound';
import './suguru-puzzlepal.scss';
import './suguru-default.scss';
import Bottom from "./Bottom";

interface Props {
  size: [number, number];
  startSituation: (number|undefined)[];
  groups: number[];
  solution: number[];
  maxNumber: number;
}

const Suguru = (props: Props) => {
  const { size, groups, maxNumber, startSituation, solution } = props;
  const total = size[0] * size[1];

  const [cellValues, setCellValues] = useState(startSituation)
  const [activeCell, setActiveCell] = useState<number>();
  const [checking, setChecking] = useState(false);

  const [playOpen] = useSound(`${process.env.PUBLIC_URL}/sound/open.mp3`);
  const [ playClosed] = useSound(`${process.env.PUBLIC_URL}/sound/close.mp3`);
  
  const handleReset = () => {
    playClosed();
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Weet je het zeker?")){
      setCellValues(startSituation);
    }
  }

  const handleCheck = () => {
    setChecking(true);
  }

  const handleOk = () => {
    setChecking(false);
  }

  const handleCellClick = (index: number) => {
    if (checking) return;

    if (index === activeCell) {
      setActiveCell(undefined)
    } else {
      playOpen();
      setActiveCell(index)
    }
  }

  const handleNumberChanged = (cell: number, value: number) => {
    setCellValues(values => values.map((v, i) => {
      if (i === cell) {
        return value === v ? undefined : value;
      }
      return v;
    }));
    playClosed();
  }

  const cells = [];
  let wrongCount = 0;

  for (let i = 0; i < total; i++) {
    const x = i % size[0];
    const y = Math.floor(i / size[0]);

    const leftEdge = x === 0;
    const topEdge = y === 0;
    const rightEdge = x === size[0] - 1;
    const bottomEdge = y === size[1] - 1;
    const otherGroupOnTheLeft = !leftEdge && groups[i] !== groups[i - 1];
    const otherGroupOnTop = !topEdge && groups[i] !== groups[i - size[0]];
    const otherGroupOnTheRight = !rightEdge && groups[i] !== groups[i + 1];
    const otherGroupUnderneath = !bottomEdge && groups[i] !== groups[i + size[0]];

    const selected = activeCell === i;
    const wrong = checking && cellValues[i] !== solution[i];
    if (wrong) {
      wrongCount++;
    }

    cells.push(
      <Cell
        key={i}
        selected={selected}
        markAsWrong={wrong}
        readOnly={startSituation[i] !== undefined}
        group={groups[i]}
        maxNumber={maxNumber}
        leftBorder={leftEdge || otherGroupOnTheLeft}
        topBorder={topEdge || otherGroupOnTop}
        rightBorder={rightEdge || otherGroupOnTheRight}
        bottomBorder={bottomEdge || otherGroupUnderneath}

        onClick={() => handleCellClick(i)}
        onNumberChanged={(value) => handleNumberChanged(i, value)}
      >
        {cellValues[i]}
      </Cell>
    );
  }

  useEffect(() => {
    // When clicking outside the game area, reset selection
    const resetSelection = () => {
      setActiveCell(undefined);
    }
    document.body.addEventListener('click', resetSelection);
    return () => {
      document.body.removeEventListener('click', resetSelection);
    }
  }, []);

  const style = { 
    '--columns': size[0],
    '--rows': size[1],
  } as React.CSSProperties;
  return (
    <div className="suguru">
      <ul className="game" style={style}>
        {cells}
      </ul>
      <Bottom 
        onReset={handleReset}
        onCheck={handleCheck}
        onOk={handleOk}
        checking={checking}
        wrongCount={wrongCount}
      />
    </div>
  ) 
}

export default Suguru;