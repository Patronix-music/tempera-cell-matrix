# Tempera Cell Matrix (TCM)

![version](https://img.shields.io/badge/version-2.12.81-blue)
![license](https://img.shields.io/badge/license-MIT-green)
![platform](https://img.shields.io/badge/platform-Web%20Audio-orange)

**Tempera Cell Matrix (TCM)** is a standalone, web-based editor for the  
**Beetlecrab Tempera** granular synthesizer.

Focus: **fast, visual sample preparation** that feels like an **instrument**, not a dialog.

👉 **Live app:**  
https://patronix-music.github.io/tempera-cell-matrix/

---

## 🔥 TCM v2.12.81 🔥

### Main new features:

- 🎚️ **Auto fade presets**
  Added Click-safe, Soft, Strong and Custom Auto fade presets.
  `A` applies Auto fade, while `Shift+A` opens the settings.

- 🎵 **Improved Cell Pitch workflow**
  Cell Pitch now supports faster and finer tuning steps:
  normal, Shift and Alt/Option precision control. Keyboard shortcut: `-` / `+`

- 🎛️ **Compact Tuner shortcuts**
  `T` opens now the Tuner. `F` is now for fitting your long samples.

- 🧲 **Wave Editor Snap**
  Wave Snap now defaults to off, remembers its setting, and snaps
  released L/R handles to the nearest nearby zero crossing.

- ✂️ **Slice Editor Snap**
  Slice Snap was added for L/R handle release and also works after
  L/R arrow nudges settle.

- 🎨 **Matrix palettes**
  The app logo now cycles and remembers matrix palettes, including
  stronger fun-style "Logo 4" colors.


### Fixes and improvements:

- 🧩 **Wave and Slice zoom mapping stabilized**
  Zoom and magnifier mapping are now more consistent in both editors.

- ↩️ **Better undo coverage**
  Column Clear can now be undone with `Cmd/Ctrl+Z`.

- ✂️ **Wave Editor selection fixes**
  Wave Editor `Esc` now preserves long-sample selections, and sliced
  cell edits persist correctly.

- 🔊 **Fade rendering fixes**
  Fade-out and fade envelopes now follow the audible trimmed or
  fit-rendered sample length more accurately.

- 🎛️ **Fit mode fix**
  Fit mode no longer mirrors temporary Wave Editor selections, so
  Trim and Fit behave separately again.

- 📘 **Help shortcut**
  Clicking the version text opens Help directly at the Release notes.

- 🧹 **Interface cleanup**
  Colors are reduced (better with matrix palletes),
  buttons (also with shift function) are visible on or off and consistent.  
---

## 🔥 TCM v2.11.80 🔥

### Main new features:

- 🧩 **Export Grid** — Export loaded cells as one evenly sliced 4 / 8 / 16 / 32 / 64 sample-grid WAV.
- 🎛️ **Sampler-friendly Grid export** — Built for Digitakt II Grid Machine, also useful for MPC/Force, SP-404MKII, Octatrack, Polyend Tracker/Play and 1010music Blackbox workflows.
- 🔢 **Smart Grid sizing** — Empty cells are skipped; if the loaded count is not exact, TCM uses the nearest lower valid grid size.
- 🕒 **Grid sample-rate choice** — Export Grid now supports 48 kHz and 44.1 kHz WAV output.
- 🎚️ **Overflow + Tune** — Long samples can now be tuned first, then safely overflowed across cells.
- 🔊 **Seamless overflow export** — Long-sample overflow exports no longer get anti-click fades at cell boundaries.

---
## TCM v2.11.71

### Main new features

🧭 **Compact Tuner popup**
<br>Added a small Tuner tool in the inspector for looping the selected cell and fine-tuning the existing Cell Pitch slider.

🧩 **Smarter Trim/Fit behavior**
<br>Trim/Fit now only switches to Fit when a sample is actually longer than the cell, so short samples no longer get unwanted pitch changes.

🗂️ **Improved Random Sources list**
<br>Sources now show total audio files first, then filtered audio files when filters are active.

🖱️ **Auto Preview on click**
<br>Auto preview now also plays when clicking a matrix cell, not only when navigating with arrow keys.

🏷️ **Better export naming**
<br>The name template now supports {celname}, and recent name templates can be deleted while the default stays protected.

---

## TCM v2.11.46

### Main new features:

- 🧩 **Remix workflow added** — create quick column variants like Reverse, Rotate +1, Odd/Even, and Random Order right from the inspector.
- 🎚️ **Prep Loop added** — load one file into the selected column, fit it to the current BPM / beats-per-cell grid, and slice it cleanly across all 8 cells.
- 🛠️ **Safer drag & drop** — single-file column drops now go to the next empty cell, and long sample drops on cells or columns use the same shared Long Sample popup flow.
- ✅ **Faster bulk selection** — added **Sel Col / Sel Row**, including toggle behavior to quickly de-select back to the main cell.
- ▶️ **Auto Preview upgraded** — when Auto Preview is on, clicking a cell with the mouse now previews it too, not just arrow-key navigation.
- ⚡ **Fit All added** — one inspector button now sets all 64 cells to Fit mode in one go.
- 🎵 **Cell Pitch added** — per-cell pitch control is now available in the inspector and affects TCM playback / exported audio.

---

## TCM v2.11.22

### Main new features:

- 🎛️ Tempera `.canvas` export, with optional use of an existing Tempera `.canvas` as a settings template
- 📦 Template-only preset export, plus template preset import into an empty matrix
- 🧠 Presets now remember the chosen `.canvas` template metadata for later export
- ✂️ Long sample popup: trim in current cell, overflow into cells below, or Overflow + Fit (pitch)
- 🔒 Cell Lock added, plus Lock Col and Lock Row
- 🎲 Load 8 and Random 64 now respect locked cells
- 🎧 Auto Preview while navigating the matrix
- ⌨️ Matrix shortcuts: `N(ormalize)`, `R(everse)`, `M(ute)`, `L(ock)`, `T(rim/fit)`, `Enter(load)`, `Delete/Backspace`
- 🎚️ Normalize supports multi-select, with undo for Normalize and selected-cell Clear/Delete
- 🗂️ Random 64 Sources: reusable live multi-folder source list
- 🔗 Preset import can relink remembered Random 64 source folders directly
- 🎰 The per-column `Load 8` button now becomes `Random 8` when a live Sources list is active
- 🚨 Duplicate detection: single-cell loads warn about duplicates, and Random 8 / Random 64 prefer unique files and mark unavoidable repeats in red

---

## TCM v2.10.77

### Main new features:

- 🧩 Tempera canvas template merge: export a TCM `.canvas` using an existing Tempera `.canvas` as the settings template while replacing only the audio tracks
- 🗂️ Template-only preset export: export a reusable preset with settings + layout only, without audio files
- 🪄 Template preset import: template presets now load as a clean empty matrix with names and cell settings, without a missing-files popup
- ➡️ Long sample load options: long samples can now be trimmed in the current cell or overflow seamlessly into the cells below
- 🎚️ Overflow control: choose exactly how many cells a long sample should spread across
- 🏷️ Auto column naming for overflow loads: overflow-loaded long samples now auto-fill the column name from the filename
- 🌊 Full-length fades: fade in and fade out can now use the full sample length instead of being capped halfway
- ✨ Anti-click microfade: short pad/trim samples now get a tiny automatic fade to reduce clicks
- 🎲 Load 8 improved: selecting more than 8 files now randomly picks 8 samples for that column
- 🧩 Real Tempera `.canvas` export: export directly to an actual Tempera canvas file
- 📦 ZIP import with embedded sources: exported ZIPs with embedded samples can now be imported directly and relink automatically from `TCM_Sources`
- 🔍 Wave Editor improvements: handle grabbing is more reliable, edge jumping is reduced, and editing feels faster
- 👀 Zoom Auto Hide: the zoom window in both Wave Editor and Slice Editor can now hide automatically on mouse release
- ✅ Multi-cell editing: Shift-click range select, Cmd/Ctrl-click non-contiguous select, and apply inspector changes across all selected cells with undo support

---

## TCM v2.10.25

### Main new features:

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

---

## TCM v2.9.84

### Main new features:

- 🔍 New: Slice zoom for large samples — + / - to zoom into a slice, TAB to jump between slices.
- 📦 New: You can now embed samples directly into ZIP exports. Perfect for hand-picked samples and sharing presets.
- 🖱️ New: Scrollbar On/Off toggle in the header (great for trackpads and iPad users).
- 🟢 Matrix playback outline now stays nicely in sync, even with fast retriggering.
- ⌨️ Playback is much more solid when navigating with Tab, Arrow keys and Space (matrix + editors).
- 💬 Tooltips fully rebuilt — no more laggy or stuck browser tooltips.
- 🎚️ Fade in/out sliders now scale correctly with the actual sample length.
- 🧹 Header cleaned up to make room for the scrollbar control.
- 🎛️ Wave & Slice editor UI cleaned up, with help moved to the Help page (? for help, X to close).

---

## TCM v2.9

### Main new features:

- 🧠 Massive CPU & memory optimizations: Safari is no longer choking (big win). Chrome also runs lean and stable.
- 📦 Preset import fixed for long samples: Selections are restored correctly in mini-wave AND Wave Editor.
- 🎚️ Sliders got love: Themed sliders, double-click to reset, and all volume/fade sliders now reset properly on every load
(Load, Load 8, Load+Slice, Random64).
- ▶️ Playback clarity: Green play-outline now reflects actual sample length, not just cell length.
- 🎛️ Wave / Slice editor improvements: Source file duration shown, Slice behavior fine-tuned and Scissors only appear when a file is actually edited (also after preset import).
- 📱 iOS finally behaves: Audio works correctly and the file picker can load WAV files.

---

## TCM v2.7

### Main new features:

- ✂️ Load + Slice Editor (major upgrade): Visual slicing, Live zoom window, Z = auto zoom (auto normalize), L / M / R = left edge / move / right edge (Sample-accurate nudging)
- 🌊 Wave Editor: Same zoom & shortcuts as Slice Editor, Clear selection handles, Predictable ESC workflow (zoom → editor)
- ⌨️ Workflow & Export: "Export 8" export all 8 cells as individual WAV files (zipped), Cell names stored in presets and used in exports, Preset import/export preserves slices and trims.

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
![TCM Wave Editor](./screenshots/matrix-overview.jpeg)
---

## 🚀 Getting started
1. Open the app in a modern browser
2. Click **Load+Slice**
3. Slice visually, apply
4. Name cells if needed
5. Export or save a preset

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
