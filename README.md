# Tempera Cell Matrix (TCM)

![version](https://img.shields.io/badge/version-2.10.25-blue)
![license](https://img.shields.io/badge/license-MIT-green)
![platform](https://img.shields.io/badge/platform-Web%20Audio-orange)

**Tempera Cell Matrix (TCM)** is a standalone, web-based editor for the  
**Beetlecrab Tempera** granular synthesizer.

Focus: **fast, visual sample preparation** that feels like an **instrument**, not a dialog.

👉 **Live app:**  
https://patronix-music.github.io/tempera-cell-matrix/

---

## 🔥 TCM v2.10.77 🔥

Here’s a quick recap of the latest additions and workflow improvements:

🧩 Tempera canvas template merge
- You can now export a TCM .canvas using an existing Tempera .canvas as a settings template
- TCM replaces the audio tracks, while keeping the Tempera canvas settings intact

🗂️ Template-only preset export
- New preset export option: settings + layout only
- Exports a reusable template preset without audio files
- Useful for loading a ready-made matrix setup and then dropping in new samples later

🪄 Template preset import
- Template presets now load as a clean empty matrix with names + cell settings
- No missing-files popup
- Settings stay available for later sample loading / Random 64

➡️ Long sample load options
When loading a long sample into a cell, you can now choose to:
- trim it in the current cell
- or let it overflow seamlessly into cells below

🎚️ Overflow control
You can choose how many cells the sample should flow across.

🏷️ Auto column naming for overflow loads
If a long sample is loaded with overflow, the column name is now filled automatically from the sample filename.

🌊 Fades can now use the full sample length
Fade in / fade out are no longer limited to half the sample.

✨ Automatic anti-click microfade
Short samples in pad/trim now get a tiny default fade to avoid clicks without manual editing.

🎲 Load 8 improved
If you select more than 8 files, it now randomly picks 8 samples for that column.

🧩 Export to real Tempera `.canvas`
You can export directly to an actual Tempera canvas file.

📦 ZIP import with embedded sources
If you export a ZIP with embedded samples, you can now import that ZIP directly and it will relink from [TCM_Sources] automatically.

🔍 Wave Editor improvements
Better handle grabbing, less accidental jumping near the selection edges, and faster editing feel.

👀 Zoom: Auto Hide
Added to both the Wave Editor and Slice Editor so the zoom window can disappear automatically on mouse release.

✅ Multi-cell editing
You can now:
- Shift-click to select a range
- Cmd/Ctrl-click for non-contiguous cells
- Cmd/Ctrl-Z undo support for multi-cell changes
Apply the lower inspector settings to all selected cells at once

Still beta, so test it to your heart's content and let me know if anything is not what it should be. 🫣

<br>

## ✨ What’s new in v2.10.25

### 🧰 Mainly UI bugs fixed, and you can now open TCM as an app with the new TCM icon <img width="32" height="32" alt="favicon-32x32" src="https://github.com/user-attachments/assets/2447a974-17a8-4ed7-8fe3-5392198e49cf" />
- ☕️ meta: added Buy Me a Coffee support link (header)
- 🔒 ui-tune: header+inspector fixed.
- 🧽 Fix: Clear All no longer blanks mini-wave placeholder (empty + center line).
- 🗿 Icons: add favicon/apple-touch-icon/manifest files.
- 🎚️ fix-volume: mini-wave gain line stays in the middle at Volume=0.00.
- 📊 Fix Import Preset: restore per-cell slice windows for Load+Slice columns.
- 😵‍💫 Fix Load+Slice target column sticking to Column 1 on re-load in Slice Editor.
- 🔪 Fix Load+Slice applies/loads to correct column when switching columns.
- 🧹 Clear All / Clear Column now also clears Load+Slice buffer for that column.

<br>

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
