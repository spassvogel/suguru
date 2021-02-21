interface Props {
  checking: boolean;
  wrongCount: number;

  onReset: () => void;
  onCheck: () => void;
  onOk: () => void;
}
const Bottom = (props: Props) => {
  const { checking, wrongCount, onReset, onCheck, onOk } = props;
  if (checking) {
    return (
      <div className="bottom">
        {wrongCount > 0 && <div className="mistakes">{wrongCount} fouten gemaakt :( </div>}
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