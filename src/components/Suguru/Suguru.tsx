import React, { forwardRef, useEffect, useState } from "react";
import confetti from 'canvas-confetti';
import useSound from 'use-sound';
import Bottom from "./Bottom";
import useKey from "@rooks/use-key";
import Board from "./Board";
import './suguru-puzzlepal.scss';
import './suguru-default.scss';

interface Props {
  size: number[];
  startSituation: (number|undefined)[];
  groups: number[];
  solution: number[];
  maxNumber: number;

  onHelp: () => void; 
  onNext: () => void; 
}

const Suguru = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { size, groups, maxNumber, startSituation, solution, onNext, onHelp } = props;

  const [cellValues, setCellValues] = useState(startSituation)
  const [activeCell, setActiveCell] = useState<number>();
  const [checking, setChecking] = useState(false);

  const [playOpen] = useSound(`${process.env.PUBLIC_URL}/sound/open.mp3`);
  const [playClosed] = useSound(`${process.env.PUBLIC_URL}/sound/close.mp3`);

  useEffect(() => {
    setChecking(false);
    setCellValues(startSituation);
  }, [startSituation]);

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
    // "ok" button clicked after failed
    setChecking(false);
  }

  const handleNext = () => {
    // "next" button clicked after win
    setChecking(false);
    onNext();
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

  useKey(["1", "2", "3", "4", "5", "6", "7", "8", "9"], (a) => {
    // Keyboard control
    if (activeCell === undefined) return;
    const number = parseInt(a.key);
    if (number <= maxNumber) {
      handleNumberChanged(activeCell, number);
    }
  })

  const wrongCells = !checking ? [] : solution.reduce<number[]>((acc, value, i) => {
    if (value !== cellValues[i]) {
      acc.push(i);
    }
    return acc;
  }, []);


  useEffect(() => {
    if (checking && wrongCells.length === 0){
      confetti();
    }
  }, [checking, wrongCells.length]);

  return (
    <div className="suguru" ref={ref}>
      <Board 
        size={size}
        cellValues={cellValues}
        startSituation={startSituation}
        selectedCell={activeCell}
        wrongCells={wrongCells}
        groups={groups}
        maxNumber={maxNumber}
        onCellClick={handleCellClick}
        onNumberChanged={handleNumberChanged}
      />
      <Bottom 
        checking={checking}
        wrongCount={wrongCells.length}
        onHelp={onHelp}
        onReset={handleReset}
        onCheck={handleCheck}
        onBack={handleOk}
        onNext={handleNext}
      />
    </div>
  ) 
});

export default Suguru;