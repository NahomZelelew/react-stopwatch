import { useState, useEffect } from "react";
import Dial from "./components/Dial";
import Controls from "./components/Controls";
import LapList from "./components/LapList";

export default function App() {
  const [elapsed, setElapsed] = useState(0); // milliseconds
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  // Tick while running. Starting from (now - elapsed) lets Resume continue where it stopped.
  useEffect(() => {
    if (!running) return;
    const startedAt = Date.now() - elapsed;
    const id = setInterval(() => setElapsed(Date.now() - startedAt), 10);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const handleToggle = () => setRunning(!running);

  const handleLap = () => {
    const previousTotal = laps.length ? laps[0].total : 0;
    const newLap = { total: elapsed, split: elapsed - previousTotal };
    setLaps([newLap, ...laps]); // newest first
  };

  const handleReset = () => {
    setElapsed(0);
    setLaps([]);
  };

  return (
    <main className="stopwatch">
      <Dial elapsed={elapsed} running={running} />
      <LapList laps={laps} />
      <Controls
        running={running}
        hasStarted={elapsed > 0}
        onToggle={handleToggle}
        onLap={handleLap}
        onReset={handleReset}
      />
    </main>
  );
}