# React Stopwatch

A stopwatch I made while learning React hooks. You can start, stop, resume and record laps.

## Run it

```bash
git clone https://github.com/NahomZelelew/react-stopwatch
cd stopwatch-react
npm install
npm run dev
```

Then open the link that Vite prints in the terminal.

## How it works

The state lives in `App.jsx` with `useState`: the elapsed time, whether it is running, and the list of laps. `App` passes that data down to `Dial`, `Controls` and `LapList` as props.

A `useEffect` with `setInterval` updates the time every 10 ms. It reads the real clock with `Date.now()` instead of adding up ticks, so the time stays accurate and Resume continues where it stopped.

## What I learned

- How `useState` makes React redraw the page
- Passing data and functions to child components with props
- Using `useEffect` and cleaning up an interval
- Laying out a page with CSS grid so it works on phones and desktops

## Ideas for later

- Save laps in `localStorage`
- Keyboard shortcuts for start, stop and lap
