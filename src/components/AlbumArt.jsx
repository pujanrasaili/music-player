import styles from "./AlbumArt.module.css";
export default function AlbumArt({ track, isPlaying }) {
  return (
    <div className={styles.wrapper}>
      <img src={track.cover} alt={track.title} className={`${styles.cover} ${isPlaying ? styles.spin : ""}`} />
      <span className={styles.badge}>Now Playing</span>
    </div>
  );
}
