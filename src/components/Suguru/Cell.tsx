import { PropsWithChildren } from "react";
import SelectionCircle from "./SelectionCircle";
import classNames from "classnames";
import { ReactComponent as Wrong } from 'images/wrong.svg';

interface Props {
  selected: boolean;
  group: number;
  markAsWrong?: boolean;
  readOnly?: boolean;
  leftBorder?: boolean;
  topBorder?: boolean;
  rightBorder?: boolean;
  bottomBorder?: boolean;
  maxNumber: number;
  

  onClick?: () => void;
  onNumberChanged: (value: number) => void;
}

const Cell = (props: PropsWithChildren<Props>) => {
  const { 
    children,
    group,
    selected,
    markAsWrong,
    maxNumber,
    readOnly = false,
    leftBorder = false,
    topBorder = false,
    rightBorder = false,
    bottomBorder = false,
    onClick,
    onNumberChanged,
  } = props;

  const className = classNames({
    "selected": selected,
    "initial": readOnly,
    "left-edge": leftBorder,
    "top-edge": topBorder,
    "right-edge": rightBorder,
    "bottom-edge": bottomBorder,
  }, `group-${group+1}`);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    onClick?.();
    e.stopPropagation();
  }

  return (
    <li
      className={className}
      onClick={!readOnly ? handleClick : undefined}
    >
      {selected && (
        <SelectionCircle maxNumber={maxNumber} onNumberChanged={onNumberChanged}/>
      )}
      <div className="cell">
        {children}
      </div>
      { markAsWrong && <Wrong className="wrong-marker"/>}
    </li>
  )
}

export default Cell;