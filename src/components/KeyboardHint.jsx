import styles from "./KeyboardHint.module.css";

const shortcuts = [
  { key: "Space", action: "Play / Pause" },
  { key: "→", action: "Next track" },
  { key: "←", action: "Previous track" },
  { key: "↑", action: "Volume up" },
  { key: "↓", action: "Volume down" },
];

export default function KeyboardHint({ dark }) {
  return (
    <div className={`${styles.wrapper} ${dark ? styles.dark : ""}`}>
      <p className={styles.title}>⌨️ Keyboard Shortcuts</p>
      <div className={styles.list}>
        {shortcuts.map(({ key, action }) => (
          <div key={key} className={styles.row}>
            <kbd className={styles.kbd}>{key}</kbd>
            <span className={styles.action}>{action}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
