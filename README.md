# Tempera Cell Matrix (TCM)

![version](https://img.shields.io/badge/version-2.9.84-blue)
![license](https://img.shields.io/badge/license-MIT-green)
![platform](https://img.shields.io/badge/platform-Web%20Audio-orange)

**Tempera Cell Matrix (TCM)** is a standalone, web-based editor for the  
**Beetlecrab Tempera** granular synthesizer.

Focus: **fast, visual sample preparation** that feels like an **instrument**, not a dialog.

👉 **Live app:**  
https://patronix-music.github.io/tempera-cell-matrix/

---

## ✨ What’s new in v2.9.84

### 🔍 New: Slice zoom for large samples — + / - to zoom into a slice, TAB to jump between slices.

### 📦 New: You can now embed samples directly into ZIP exports. Perfect for hand-picked samples and sharing presets.
### 🖱️ New: Scrollbar On/Off toggle in the header (great for trackpads and iPad users).
- 🟢 Matrix playback outline now stays nicely in sync, even with fast retriggering.
- ⌨️ Playback is much more solid when navigating with Tab, Arrow keys and Space (matrix + editors).
- 💬 Tooltips fully rebuilt — no more laggy or stuck browser tooltips.
- 🎚️ Fade in/out sliders now scale correctly with the actual sample length.
- 🧹 Header cleaned up to make room for the scrollbar control.
- 🎛️ Wave & Slice editor UI cleaned up, with help moved to the Help page (? for help, X to close).

<br>

## ✨ What’s new in v2.9

### 🧠 Massive CPU & memory optimizations
  - Safari is no longer choking (big win). Chrome also runs lean and stable.

- 📦 Preset import fixed for long samples
  - Selections are restored correctly in mini-wave AND Wave Editor.

- 🎚️ Sliders got love
  - Themed sliders, double-click to reset, and all volume/fade sliders now reset properly on every load
(Load, Load 8, Load+Slice, Random64).

- ▶️ Playback clarity
  - Green play-outline now reflects actual sample length, not just cell length.

- 🎛️ Wave / Slice editor improvements
  - Source file duration shown
  - Slice behavior fine-tuned
  - Scissors only appear when a file is actually edited (also after preset import)

- 📱 iOS finally behaves: Audio works correctly and the file picker can load WAV files.

<br>

## ✨ What’s new in v2.7

### ✂️ Load + Slice Editor (major upgrade)
- Visual slicing (no more blind splits)
- Live **zoom window** that follows your selection
- **Z** = auto zoom / auto normalize
- **L / M / R** = left edge / move / right edge
- Sample-accurate nudging

### 🌊 Wave Editor
- Same zoom & shortcuts as Slice Editor
- Clear selection handles
- Predictable **ESC** workflow (zoom → editor)

### ⌨️ Workflow & Export
- **Export 8**: export all 8 cells as individual WAV files (zipped)
- Cell names stored in presets and used in exports
- Preset import/export preserves slices and trims

---

## 🧠 UX philosophy
- What you see is what you edit  
- No hidden state, no guessing  
- Same gestures everywhere  
- Focus stays on the waveform  

---

## 📸 Screenshots

### Slice Editor
![TCM Slice Editor](./screenshots/slice-editor.png)

### Wave Editor
![TCM Wave Editor](./screenshots/wave-editor.png)

### Main 8x8 Matrix
![TCM Wave Editor](./screenshots/matrix-overview.png)
---

## 🚀 Getting started
1. Open the app in a modern browser
2. Click **Load+Slice**
3. Slice visually, apply
4. Name cells if needed
5. Export or save a preset

No install. No build. Just open and go.

---

## ⌨️ Core shortcuts
- **Z** — toggle zoom / auto-normalize  
- **L / M / R** — left / move / right  
- **Arrow keys** — nudge selection  
- **ESC** — close zoom → close editor  

(Full list is available in the in-app Help.)

---

## 🛠 Technology
- Single-file HTML app
- Web Audio API
- No external dependencies
- Runs fully client-side

---

## 📄 License
MIT License  
© 2026 Patronix
