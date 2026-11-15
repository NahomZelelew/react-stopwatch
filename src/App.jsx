import { useState, useEffect } from "react";
import { formatTime } from "./utils/formatTime";

export default function App() {
  const [elapsed, setElapsed] = useState(0); // milliseconds
  const [running, setRunning] = useState(false);

  // Tick while running. Starting from (now - elapsed) lets Resume continue where it stopped.
  useEffect(() => {
    if (!running) return;
    const startedAt = Date.now() - elapsed;
    const id = setInterval(() => setElapsed(Date.now() - startedAt), 10);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  return (
    <main className="stopwatch">
      <h1 role="timer">{formatTime(elapsed)}</h1>
      <button onClick={() => setRunning(!running)}>
        {running ? "Stop" : elapsed > 0 ? "Resume" : "Start"}
      </button>
    </main>
  );
}