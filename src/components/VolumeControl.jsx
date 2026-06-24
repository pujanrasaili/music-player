import styles from "./VolumeControl.module.css";
export default function VolumeControl({ volume, onVolumeChange }) {
  const icon = volume === 0 ? "🔇" : volume < 50 ? "🔈" : "🔊";
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>{icon}</span>
      <input type="range" min="0" max="100" step="1" value={volume} onChange={(e) => onVolumeChange(Number(e.target.value))} className={styles.slider} aria-label="Volume" />
      <span className={styles.value}>{volume}</span>
    </div>
  );
}
