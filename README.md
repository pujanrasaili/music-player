# 🎵 Music Player

A clean, responsive Music Player web app built with **React + Vite**.

## Features

- ▶️ Play / Pause / Skip / Previous controls
- 🔀 Shuffle & 🔁 Repeat modes
- ❤️ Like / unlike tracks
- 🎚️ Volume slider
- 📊 Animated audio visualizer
- ⏱️ Clickable progress bar with seek
- 📋 Playlist with active track highlight

## Tech Stack

- React 18
- Vite
- CSS Modules

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/       # UI components
│   ├── Player.jsx
│   ├── AlbumArt.jsx
│   ├── TrackInfo.jsx
│   ├── ProgressBar.jsx
│   ├── Controls.jsx
│   ├── VolumeControl.jsx
│   ├── Visualizer.jsx
│   └── Playlist.jsx
├── hooks/
│   └── usePlayer.js  # All player logic
├── data/
│   └── tracks.js     # Song data
├── App.jsx
└── main.jsx
```

## Author

Made with ❤️ by [Pujan  Rasaili]