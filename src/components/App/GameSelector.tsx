import games from 'games/games.json';

interface Props {
  selectedIndex: number;
  onIndexChange: (value: number) => void;
}

const GameSelector = (props: Props) => {
  const { selectedIndex, onIndexChange } = props;
  const style = { 
    '--columns': games[selectedIndex].size[0],
  } as React.CSSProperties;

  return (
    <div className="game-selector" style={style}>
      <select 
        value={selectedIndex}
        onChange={(e) => { onIndexChange(e.target.value as unknown as number); }}
      >
        {games.map((config, i) => (
          <option value={i} key={i}>{config.name}</option>
        ))}
      </select>
    </div>
  )
}

export default GameSelector;