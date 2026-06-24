import { useState } from "react";
import styles from "./Playlist.module.css";

function fmt(s) {
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
}

export default function Playlist({ tracks, currentIndex, isPlaying, isLiked, onSelect }) {
  const [query, setQuery] = useState("");

  const filtered = tracks.filter(
    (t) =>
      t.title.toLowerCase().includes(query.toLowerCase()) ||
      t.artist.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={styles.wrapper}>
      <p className={styles.header}>Playlist</p>

      {/* Search Bar */}
      <div className={styles.searchBox}>
        <span className={styles.searchIcon}>🔍</span>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search songs or artists..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button className={styles.clearBtn} onClick={() => setQuery("")}>✕</button>
        )}
      </div>

      {/* Results count */}
      {query && (
        <p className={styles.resultCount}>
          {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "{query}"
        </p>
      )}

      {/* Track list */}
      {filtered.length === 0 ? (
        <div className={styles.empty}>No songs found 🎵</div>
      ) : (
        filtered.map((track) => {
          const originalIndex = tracks.indexOf(track);
          const active = originalIndex === currentIndex;
          return (
            <div
              key={track.id}
              className={`${styles.item} ${active ? styles.active : ""}`}
              onClick={() => onSelect(originalIndex)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onSelect(originalIndex)}
            >
              <span className={styles.num}>
                {active && isPlaying ? "▶" : originalIndex + 1}
              </span>
              <img src={track.cover} alt="" className={styles.thumb} />
              <div className={styles.meta}>
                <span className={`${styles.name} ${active ? styles.activeName : ""}`}>
                  {highlight(track.title, query)}
                </span>
                <span className={styles.artist}>{highlight(track.artist, query)}</span>
              </div>
              {isLiked(track.id) && <span className={styles.heart}>♥</span>}
              <span className={styles.dur}>{fmt(track.duration)}</span>
            </div>
          );
        })
      )}
    </div>
  );
}

// Highlight matching text in yellow
function highlight(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark style={{ background: "#fff3b0", borderRadius: "2px", padding: "0 1px" }}>
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}
