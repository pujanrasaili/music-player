import styles from "./ProgressBar.module.css";
function fmt(s) { return `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,"0")}`; }
export default function ProgressBar({ currentTime, duration, onSeek, dark }) {
  const pct = duration > 0 ? (currentTime / duration) * 100 : 0;
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    onSeek(Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)));
  };
  return (
    <div className={`${styles.wrapper} ${dark ? styles.dark : ""}`}>
      <div className={styles.bar} onClick={handleClick}>
        <div className={styles.fill} style={{ width: `${pct}%` }} />
        <div className={styles.thumb} style={{ left: `${pct}%` }} />
      </div>
      <div className={styles.times}><span>{fmt(currentTime)}</span><span>{fmt(duration)}</span></div>
    </div>
  );
}
