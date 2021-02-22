import { useEffect } from "react";
import useSound from "use-sound";

interface Props {
  checking: boolean;
  wrongCount: number;

  onHelp: () => void; 
  onReset: () => void;
  onCheck: () => void;
  onBack: () => void;
  onNext: () => void;
}
const Bottom = (props: Props) => {
  const { checking, wrongCount, onReset, onCheck, onBack, onNext, onHelp } = props;
  const [playWin] = useSound(`${process.env.PUBLIC_URL}/sound/tada.mp3`);

  useEffect(() => {
    if (checking && !wrongCount) {
      playWin();
    }
  }, [checking, playWin, wrongCount]);

  if (checking) {
    return (
      <div className="bottom">
        {wrongCount > 0 && (
          <>
            <div className="info">{wrongCount} fouten gemaakt :( </div>
            <button className="ok" onClick={onBack}>Ok</button>
          </>
        )}
        {wrongCount === 0 && (
          <>
            <div className="info">Goed gedaan! </div>
            <button className="ok" onClick={onNext}>Volgende</button>
          </>
        )}
      </div>
    )
  }
  return (
    <div className="bottom">
      {!checking && (
        <>
          <button onClick={onHelp} className="help">?</button>
          <button onClick={onReset}>Reset</button>
          <button onClick={onCheck}>Check!</button>
        </>
      )}
    </div>
  )
}
export default Bottom;