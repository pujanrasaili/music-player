import { useEffect } from "react";

export function useKeyboard({ onPlayPause, onNext, onPrev, onVolumeUp, onVolumeDown }) {
  useEffect(() => {
    const handleKey = (e) => {
      // Don't trigger if user is typing in search box
      if (e.target.tagName === "INPUT") return;

      switch (e.code) {
        case "Space":
          e.preventDefault();
          onPlayPause();
          break;
        case "ArrowRight":
          e.preventDefault();
          onNext();
          break;
        case "ArrowLeft":
          e.preventDefault();
          onPrev();
          break;
        case "ArrowUp":
          e.preventDefault();
          onVolumeUp();
          break;
        case "ArrowDown":
          e.preventDefault();
          onVolumeDown();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onPlayPause, onNext, onPrev, onVolumeUp, onVolumeDown]);
}
