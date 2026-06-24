import { usePlayer } from "../hooks/usePlayer";
import AlbumArt from "./AlbumArt";
import TrackInfo from "./TrackInfo";
import ProgressBar from "./ProgressBar";
import Controls from "./Controls";
import VolumeControl from "./VolumeControl";
import Visualizer from "./Visualizer";
import Playlist from "./Playlist";
import styles from "./Player.module.css";

export default function Player() {
  const { tracks, track, currentIndex, isPlaying, currentTime, volume, shuffle, repeat, togglePlay, handleNext, handlePrev, seek, setVolume, setShuffle, setRepeat, loadTrack, toggleLike, isLiked } = usePlayer();
  return (
    <div className={styles.card}>
      <AlbumArt track={track} isPlaying={isPlaying} />
      <TrackInfo track={track} isLiked={isLiked(track.id)} onToggleLike={toggleLike} />
      <ProgressBar currentTime={currentTime} duration={track.duration} onSeek={seek} />
      <Controls isPlaying={isPlaying} shuffle={shuffle} repeat={repeat} onTogglePlay={togglePlay} onNext={handleNext} onPrev={handlePrev} onToggleShuffle={() => setShuffle((s) => !s)} onToggleRepeat={() => setRepeat((r) => !r)} />
      <VolumeControl volume={volume} onVolumeChange={setVolume} />
      <Visualizer isPlaying={isPlaying} />
      <Playlist tracks={tracks} currentIndex={currentIndex} isPlaying={isPlaying} isLiked={isLiked} onSelect={loadTrack} />
    </div>
  );
}
