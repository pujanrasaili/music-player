import { useState } from "react";
import Player from "./components/Player";
import "./index.css";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      <div className="topbar">
        <h1 className="app-title">🎵 Music Player</h1>
        <button
          className="theme-toggle"
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle dark mode"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
      <Player dark={dark} />
    </div>
  );
}
