import React from "react";
import Cell from "./Cell";

interface Props {
  size: number[];
  cellValues: (number|undefined)[];
  startSituation?: (number|undefined)[];
  selectedCell?: number;
  wrongCells?: number[];
  groups: number[];
  maxNumber?: number;

  onCellClick?: (index: number) => void
  onNumberChanged?: (index: number, value: number) => void
}

const Board = (props: Props) => {
  const {
    size,
    groups,
    selectedCell,
    wrongCells  = [],
    maxNumber = 1,
    cellValues,
    startSituation = [],

    onCellClick,
    onNumberChanged
  } = props;

  const cells = [];
  const total = size[0] * size[1];

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

    const selected = selectedCell === i;


    cells.push(
      <Cell
        key={i}
        selected={selected}
        markAsWrong={wrongCells.indexOf(i) !== -1}
        readOnly={!!startSituation[i]}
        group={groups[i]}
        maxNumber={maxNumber}
        leftBorder={leftEdge || otherGroupOnTheLeft}
        topBorder={topEdge || otherGroupOnTop}
        rightBorder={rightEdge || otherGroupOnTheRight}
        bottomBorder={bottomEdge || otherGroupUnderneath}

        onClick={() => onCellClick?.(i)}
        onNumberChanged={(value) => onNumberChanged?.(i, value)}
      >
        {!!cellValues[i] && cellValues[i]}
      </Cell>
    );
  }
  const style = { 
    '--columns': size[0],
    '--rows': size[1],
  } as React.CSSProperties;

  return (
    <ul className="board" style={style}>
      {cells}
    </ul>
  )
}

export default Board;