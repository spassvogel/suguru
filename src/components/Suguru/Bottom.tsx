import { useEffect } from "react";
import useSound from "use-sound";

interface Props {
  checking: boolean;
  wrongCount: number;

  onReset: () => void;
  onCheck: () => void;
  onOk: () => void;
}
const Bottom = (props: Props) => {
  const { checking, wrongCount, onReset, onCheck, onOk } = props;
  const [playWin] = useSound(`${process.env.PUBLIC_URL}/sound/tada.mp3`);

  useEffect(() => {
    if (checking && !wrongCount) {
      playWin();
    }
  }, [checking, playWin, wrongCount]);

  if (checking) {
    return (
      <div className="bottom">
        {wrongCount > 0 && <div className="info">{wrongCount} fouten gemaakt :( </div>}
        {wrongCount === 0 && <div className="info">Goed gedaan! </div>}
        <button className="ok" onClick={onOk}>Ok</button>
      </div>
    )
  }
  return (
    <div className="bottom">
      {!checking && (
        <>
          <button className="help">?</button>
          <button onClick={onReset}>Reset</button>
          <button onClick={onCheck}>Check!</button>
        </>
      )}
    </div>
  )
}
export default Bottom;