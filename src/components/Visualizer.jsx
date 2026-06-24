import { useEffect, useRef } from "react";
import styles from "./Visualizer.module.css";
const BAR_COUNT = 28;
export default function Visualizer({ isPlaying }) {
  const barsRef = useRef([]);
  useEffect(() => {
    if (!isPlaying) { barsRef.current.forEach((b) => { if (b) b.style.height = "4px"; }); return; }
    const interval = setInterval(() => {
      barsRef.current.forEach((b) => { if (b) b.style.height = `${Math.floor(Math.random() * 28) + 4}px`; });
    }, 130);
    return () => clearInterval(interval);
  }, [isPlaying]);
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: BAR_COUNT }).map((_, i) => (
        <div key={i} className={styles.bar} ref={(el) => (barsRef.current[i] = el)} />
      ))}
    </div>
  );
}
