import styles from "./TrackInfo.module.css";
export default function TrackInfo({ track, isLiked, onToggleLike, dark }) {
  return (
    <div className={`${styles.wrapper} ${dark ? styles.dark : ""}`}>
      <div className={styles.text}>
        <h2 className={styles.title}>{track.title}</h2>
        <p className={styles.artist}>{track.artist}</p>
      </div>
      <button className={`${styles.likeBtn} ${isLiked ? styles.liked : ""}`} onClick={() => onToggleLike(track.id)} aria-label="Like">♥</button>
    </div>
  );
}
