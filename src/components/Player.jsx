import { useCallback } from "react";
import { usePlayer } from "../hooks/usePlayer";
import { useKeyboard } from "../hooks/useKeyboard";
import AlbumArt from "./AlbumArt";
import TrackInfo from "./TrackInfo";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import VolumeControl from "./VolumeControl";
import Visualizer from "./Visualizer";
import Playlist from "./Playlist";
import KeyboardHint from "./KeyboardHint";
import styles from "./Player.module.css";

export default function Player({ dark }) {
  const {
    tracks, track, currentIndex, isPlaying, currentTime,
    volume, shuffle, repeat, togglePlay, handleNext, handlePrev,
    seek, setVolume, setShuffle, setRepeat, loadTrack, toggleLike, isLiked,
  } = usePlayer();

  const volumeUp   = useCallback(() => setVolume((v) => Math.min(100, v + 10)), [setVolume]);
  const volumeDown = useCallback(() => setVolume((v) => Math.max(0, v - 10)), [setVolume]);

  useKeyboard({
    onPlayPause: togglePlay,
    onNext: handleNext,
    onPrev: handlePrev,
    onVolumeUp: volumeUp,
    onVolumeDown: volumeDown,
  });

  return (
    <div className={`${styles.card} ${dark ? styles.dark : ""}`}>
      <AlbumArt track={track} isPlaying={isPlaying} />
      <TrackInfo track={track} isLiked={isLiked(track.id)} onToggleLike={toggleLike} dark={dark} />
      <ProgressBar currentTime={currentTime} duration={track.duration} onSeek={seek} dark={dark} />
      <Controls
        isPlaying={isPlaying} shuffle={shuffle} repeat={repeat}
        onTogglePlay={togglePlay} onNext={handleNext} onPrev={handlePrev}
        onToggleShuffle={() => setShuffle((s) => !s)}
        onToggleRepeat={() => setRepeat((r) => !r)}
        dark={dark}
      />
      <VolumeControl volume={volume} onVolumeChange={setVolume} dark={dark} />
      <Visualizer isPlaying={isPlaying} />
      <Playlist tracks={tracks} currentIndex={currentIndex} isPlaying={isPlaying} isLiked={isLiked} onSelect={loadTrack} dark={dark} />
      <KeyboardHint dark={dark} />
    </div>
  );
}
