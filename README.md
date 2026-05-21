# 🛹 SKY WITH ME — Ride Beyond Gravity

> A premium futuristic skateboard showcase website with cinematic scroll-based frame animation, inspired by Apple product pages and cyberpunk aesthetics.

![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

---

## 🎬 Overview

**SKY WITH ME** is a cinematic, scroll-driven product showcase that feels like watching a sci-fi skateboard movie trailer. As the user scrolls, 192 high-quality frames scrub through on an HTML5 canvas (Apple AirPods Pro-style), while futuristic UI overlays animate in and out using GSAP ScrollTrigger.

### ✨ Key Features

- 🎥 **Apple-style scroll frame animation** — 192 HQ frames rendered on canvas, synced to scroll
- 🌆 **Cyberpunk aesthetic** — Neon pink/cyan/purple palette, glassmorphism, volumetric glow effects
- ⚡ **GSAP ScrollTrigger animations** — 7 immersive full-screen cinematic sections
- 🎨 **Futuristic UI overlays** — HUD elements, glassmorphism cards, animated indicators
- 📱 **Responsive design** — Works on desktop and mobile
- 🚀 **Zero build step** — Pure HTML/CSS/JS with CDN dependencies

---

## 📁 Project Structure

```
skateboard/
├── index.html              # Main HTML file with 7 cinematic sections
├── style.css               # Custom CSS (glassmorphism, HUD animations, scrollbar)
├── script.js               # Canvas renderer, GSAP ScrollTrigger animations
├── extract_frames.py       # Python utility to extract HQ frames from MP4
├── skateframes/            # 192 high-quality JPG frames (scroll animation)
│   ├── ezgif-frame-001.jpg
│   ├── ezgif-frame-002.jpg
│   ├── ...
│   └── ezgif-frame-192.jpg
└── README.md               # This file
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Edge, Firefox, Safari)
- Python 3.x (only needed if you want to re-extract frames from the MP4)

### Run Locally

1. **Clone or download** this project to your machine.

2. **Start a local server** using Python:
   ```bash
   cd skateboard
   python -m http.server 8000
   ```

3. **Open your browser** and navigate to:
   ```
   http://localhost:8000
   ```

4. **Scroll down** to experience the cinematic showcase! 🎬

> **Tip:** Press `F11` for full-screen mode for the best immersive experience.

---

## 🎨 The 7 Cinematic Frames

| Frame | Section | Description |
|-------|---------|-------------|
| 1 | **Hero Intro** | Full-screen reveal with glowing "SKY WITH ME" title and "The Future of Urban Motion" subtitle |
| 2 | **Hover Technology** | Anti-Gravity Hover System details slide in from the right |
| 3 | **Smart LED Wheels** | Three glassmorphism cards: Adaptive Neon, Shock Absorption, Magnetic Stability |
| 4 | **AI Balance Mode** | Rotating HUD circles with Auto Balance and Terrain Detection indicators |
| 5 | **Speed Experience** | Dramatic "0-60 IN SECONDS" typography with scale and blur effects |
| 6 | **Rider Experience** | Floating dashboard stats — Battery 98%, Speed 60 MPH |
| 7 | **Final CTA** | "RIDE BEYOND REALITY" with glowing PRE-ORDER NOW button |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5 Canvas** | Scroll-synced frame-by-frame rendering (Apple-style) |
| **Tailwind CSS** (CDN) | Utility-first styling and responsive layout |
| **GSAP + ScrollTrigger** (CDN) | Buttery-smooth scroll-based animations |
| **Google Fonts** | Orbitron (display) + Inter (body) typography |
| **Python + OpenCV** | Frame extraction from source MP4 video |

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Neon Pink | `#ff00ff` | Primary accent, highlights, CTA hover |
| Electric Cyan | `#00ffff` | Secondary accent, HUD elements, indicators |
| Deep Purple | `#6a00ff` | Gradient accent, glow effects |
| Cyber Dark | `#050505` | Background, dark overlays |

---

## ⚙️ Re-extracting Frames (Optional)

If you have the source MP4 video and want to re-extract frames at custom quality:

1. **Install OpenCV:**
   ```bash
   pip install opencv-python
   ```

2. **Run the extraction script:**
   ```bash
   python extract_frames.py
   ```

   This extracts all frames from the MP4 at 95% JPEG quality into the `skateframes/` directory.

---

## 🧠 How It Works

### Canvas Frame Scrubbing
The website loads all 192 frames into memory during the loading screen. A GSAP `ScrollTrigger` maps the total scroll progress (0% → 100%) to the frame index (0 → 191). On each scroll update, the corresponding frame is drawn onto a full-screen `<canvas>` element using `devicePixelRatio` for crisp rendering on high-DPI displays.

### UI Overlay Animations
Seven transparent `<section>` elements are stacked vertically. Each section has its own GSAP `ScrollTrigger` that fades, scales, slides, or blurs UI elements as the section enters and exits the viewport. The canvas background remains fixed while the UI scrolls over it.

---

## 📄 License

This project is for educational and demonstration purposes.

---

## 👤 Author

**Kethan Krishna**

---

<p align="center">
  <b>SKY WITH ME</b> — Ride Beyond Gravity 🛹✨
</p>
