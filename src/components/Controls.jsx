export default function Controls({ running, hasStarted, onToggle }) {
  // Start -> Stop -> Resume
  const label = running ? "Stop" : hasStarted ? "Resume" : "Start";

  return (
    <div className="controls">
      <button className={`circle main ${running ? "stop" : ""}`} onClick={onToggle}>
        {label}
      </button>
    </div>
  );
}