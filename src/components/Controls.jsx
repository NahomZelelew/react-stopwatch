export default function Controls({ running, hasStarted, onToggle, onLap, onReset }) {
  // Start -> Stop -> Resume
  const mainLabel = running ? "Stop" : hasStarted ? "Resume" : "Start";

  return (
    <div className="controls">
      {running ? (
        <button className="circle ghost" onClick={onLap}>
          Lap
        </button>
      ) : (
        <button className="circle ghost" onClick={onReset} disabled={!hasStarted}>
          Reset
        </button>
      )}

      <button className={`circle main ${running ? "stop" : ""}`} onClick={onToggle}>
        {mainLabel}
      </button>
    </div>
  );
}