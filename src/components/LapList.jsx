import { formatTime } from "../utils/formatTime";

export default function LapList({ laps }) {
  if (laps.length === 0) {
    return (
      <div className="laps empty">
        <p>Start the timer, then tap Lap to record a split.</p>
      </div>
    );
  }

  return (
    <ul className="laps">
      {laps.map((lap, i) => (
        <li key={laps.length - i}>
          <span className="lap-no">Lap {laps.length - i}</span>
          <span className="lap-split">{formatTime(lap.split)}</span>
          <span className="lap-total">{formatTime(lap.total)}</span>
        </li>
      ))}
    </ul>
  );
}