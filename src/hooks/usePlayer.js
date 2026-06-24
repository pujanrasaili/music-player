import { useState, useEffect, useRef, useCallback } from "react";
import tracks from "../data/tracks";

export function usePlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [liked, setLiked] = useState([]);
  const tickerRef = useRef(null);
  const track = tracks[currentIndex];

  const startTicker = useCallback(() => {
    clearInterval(tickerRef.current);
    tickerRef.current = setInterval(() => {
      setCurrentTime((prev) => (prev >= track.duration ? prev : prev + 1));
    }, 1000);
  }, [track.duration]);

  useEffect(() => {
    if (isPlaying) startTicker();
    else clearInterval(tickerRef.current);
    return () => clearInterval(tickerRef.current);
  }, [isPlaying, startTicker]);

  const handleNext = useCallback(() => {
    const idx = shuffle ? Math.floor(Math.random() * tracks.length) : (currentIndex + 1) % tracks.length;
    setCurrentIndex(idx);
    setCurrentTime(0);
  }, [shuffle, currentIndex]);

  useEffect(() => {
    if (currentTime >= track.duration && isPlaying) {
      if (repeat) setCurrentTime(0);
      else handleNext();
    }
  }, [currentTime]);

  const loadTrack = (index) => { setCurrentIndex(index); setCurrentTime(0); };
  const togglePlay = () => setIsPlaying((p) => !p);
  const handlePrev = () => {
    if (currentTime > 3) { setCurrentTime(0); return; }
    const idx = shuffle ? Math.floor(Math.random() * tracks.length) : (currentIndex - 1 + tracks.length) % tracks.length;
    loadTrack(idx);
  };
  const seek = (pct) => setCurrentTime(Math.round(pct * track.duration));
  const toggleLike = (id) => setLiked((prev) => prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]);
  const isLiked = (id) => liked.includes(id);

  return { tracks, track, currentIndex, isPlaying, currentTime, volume, shuffle, repeat, togglePlay, handleNext, handlePrev, seek, setVolume, setShuffle, setRepeat, loadTrack, toggleLike, isLiked };
}
