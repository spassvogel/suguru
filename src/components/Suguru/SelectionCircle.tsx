import { useMemo } from "react";

interface Props {
  maxNumber: number;

  onNumberChanged: (value: number) => void;
}

const SelectionCircle = (props: Props) => {
  const { maxNumber, onNumberChanged } = props;

  const options = useMemo(() => {
    const handleClick = (number: number) => {
      onNumberChanged(number);
    }
    const options = [];
    for (let i = 0; i < maxNumber; i++) {
      options.push(
        <div 
          className="option"
          key={i}
          onClick={() => handleClick(i + 1)}
        >{i + 1}</div>)
    }
    return options;
  }, [maxNumber, onNumberChanged]);
  

  return (
    <div className={`selection options-${maxNumber}`} >
      {options}
    </div>
  )
}

export default SelectionCircle;


