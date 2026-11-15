import { formatTime } from "../utils/formatTime";

const ticks = Array.from({ length: 60 }, (_, i) => i);

export default function Dial({ elapsed, running }) {
  const fraction = ((elapsed / 1000) % 60) / 60; // how far through the current minute
  const [main, centis] = formatTime(elapsed).split(".");
  const status = running ? "Running" : elapsed > 0 ? "Paused" : "Ready";

  return (
    <div className={`dial ${running ? "is-running" : ""}`}>
      <svg viewBox="0 0 300 300" className="dial-svg" aria-hidden="true">
        <defs>
          <linearGradient id="ring-grad" gradientUnits="userSpaceOnUse" x1="20" y1="20" x2="280" y2="280">
            <stop offset="0" stopColor="var(--grad-a)" />
            <stop offset="1" stopColor="var(--grad-b)" />
          </linearGradient>
        </defs>

        {/* tick marks */}
        <g transform="translate(150 150)">
          {ticks.map((i) => {
            const major = i % 5 === 0;
            return (
              <line
                key={i}
                x1="0"
                x2="0"
                y1="-124"
                y2={major ? -110 : -117}
                className={major ? "tick major" : "tick"}
                transform={`rotate(${i * 6})`}
              />
            );
          })}
        </g>

        {/* ring: faint track + gradient arc that sweeps once per minute */}
        <circle cx="150" cy="150" r="140" className="track" />
        <circle
          cx="150"
          cy="150"
          r="140"
          pathLength="100"
          className="arc"
          style={{ opacity: elapsed > 0 ? 1 : 0 }}
          strokeDasharray={`${fraction * 100} 100`}
          transform="rotate(-90 150 150)"
        />

        {/* glowing head */}
        <g transform={`rotate(${fraction * 360} 150 150)`} style={{ opacity: elapsed > 0 ? 1 : 0 }}>
          <circle cx="150" cy="10" r="7" className="head" />
        </g>
      </svg>

      <div className="face">
        <span className="time" role="timer">
          <span className="time-main">{main}</span>
          <span className="time-centis">.{centis}</span>
        </span>
        <span className="status">{status}</span>
      </div>
    </div>
  );
}