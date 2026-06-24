import styles from "./Playlist.module.css";
function fmt(s) { return `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`; }
export default function Playlist({ tracks, currentIndex, isPlaying, isLiked, onSelect }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.header}>Playlist</p>
      {tracks.map((track, i) => {
        const active = i === currentIndex;
        return (
          <div key={track.id} className={`${styles.item} ${active ? styles.active : ""}`} onClick={() => onSelect(i)} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onSelect(i)}>
            <span className={styles.num}>{active && isPlaying ? "▶" : i + 1}</span>
            <img src={track.cover} alt="" className={styles.thumb} />
            <div className={styles.meta}>
              <span className={`${styles.name} ${active ? styles.activeName : ""}`}>{track.title}</span>
              <span className={styles.artist}>{track.artist}</span>
            </div>
            {isLiked(track.id) && <span className={styles.heart}>♥</span>}
            <span className={styles.dur}>{fmt(track.duration)}</span>
          </div>
        );
      })}
    </div>
  );
}
