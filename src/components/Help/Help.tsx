import { Board } from "components/Suguru";
import React, { useEffect, useState } from "react";
import useSound from "use-sound";

interface Props {
  page: number;

  onNext: () => void;
}

export const HELP_PAGE_COUNT = 3;

const Help = (props: Props) => {
  const { page, onNext } = props;
  const [playPlop] = useSound(`${process.env.PUBLIC_URL}/sound/plop.mp3`);

  const [activeCell, setActiveCell] = useState<number>();
  const [cellValues, setCellValues] = useState([1, 0, 2, 3, 5 ])

  const handleCellClick = (index: number) => {
    if (index === activeCell) {
      setActiveCell(undefined)
    } else {
      setActiveCell(index)
    }
  }
  const handleNumberChanged = (cell: number, value: number) => {
    setCellValues(values => values.map((v, i) => {
      if (i === cell) {
        return value === v ? 0 : value;
      }
      return v;
    }));
  }

  useEffect(() => {
    playPlop();
  }, [page, playPlop]);

  switch (page) {
    case 0: {
      //  This is the only interactive board
      return (
        <>
          <Board
            size={[5, 1]}
            groups={[0, 0, 0, 0, 0,]}
            cellValues={cellValues}
            selectedCell={activeCell}
            onCellClick={handleCellClick}
            onNumberChanged={handleNumberChanged}
            maxNumber={5}
          />
          <div className="help-text" onClick={onNext}> 
            Het doel is om in ieder vakje met een getal te vullen. 
            Klik op een cel om het getal te wijzigen. 
          </div>
        </>
      )
    }
    case 1: {
      return (
        <>
          <Board
            size={[5, 2]}
            groups={[2, 1, 1, 1, 0, 2, 2, 1, 3, 0]}
            cellValues={[2, 4, 1, 3, 2, 1, 3, 2, 1, 0]}
          />
          <div className="help-text" onClick={onNext}> 
            De gekleurde vakjes vormen een groep, ieder getal mag maar 1 keer voorkomen in de groep
          </div>
        </>
      )
    }
    case 2: {
      return (
        <>
          <Board
            size={[5, 2]}
            groups={[0, 0, 1, 1, 3, 0, 0, 1, 3, 3]}
            cellValues={[0, 0, 1, 2, 0, 0, 0, 3, 0, 0]}
            startSituation={[0, 0, 0, 0, 0, 0, 0, 3, 0, 0]}
          />
          <div className="help-text" onClick={onNext}> 
            Je mag geen getal in een hokje plaatsen wat hoger is dan het aantal hokjes in de groep
          </div>
        </>
      )
    }
    case 3: {
      return (
        <>
          <Board
            size={[3, 3]}
            groups={[0, 0, 0, 0, 3, 0, 0, 0, 0]}
            cellValues={[0, 0, 0, 0, 0, 0, 0, 0, 0]}
          />
          <div className="help-text" onClick={onNext} > 
            Een getal mag ook niet gelijk zijn aan een getal in een aangrenzend hokje
          </div>
        </>
      )
    }
  }
  return <div></div>
}

export default Help;
