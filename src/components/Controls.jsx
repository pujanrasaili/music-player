import styles from "./Controls.module.css";
export default function Controls({ isPlaying, shuffle, repeat, onTogglePlay, onNext, onPrev, onToggleShuffle, onToggleRepeat }) {
  return (
    <div className={styles.wrapper}>
      <button className={`${styles.iconBtn} ${shuffle ? styles.active : ""}`} onClick={onToggleShuffle} aria-label="Shuffle">⇄</button>
      <button className={styles.iconBtn} onClick={onPrev} aria-label="Previous">⏮</button>
      <button className={styles.playBtn} onClick={onTogglePlay} aria-label={isPlaying ? "Pause" : "Play"}>{isPlaying ? "⏸" : "▶"}</button>
      <button className={styles.iconBtn} onClick={onNext} aria-label="Next">⏭</button>
      <button className={`${styles.iconBtn} ${repeat ? styles.active : ""}`} onClick={onToggleRepeat} aria-label="Repeat">↺</button>
    </div>
  );
}
