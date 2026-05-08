# Tijdregistratie

A beautiful, zero-dependency time‑tracking tool that runs entirely in your browser. No installation, no backend, your data never leaves your device.

![HTML single file](https://img.shields.io/badge/HTML-single%20file-orange?style=flat-square&logo=html5)
![IndexedDB](https://img.shields.io/badge/storage-IndexedDB-blue?style=flat-square)
![Mobile ready](https://img.shields.io/badge/mobile-ready-brightgreen?style=flat-square)
![No backend](https://img.shields.io/badge/backend-none-lightgrey?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

---

## What it does

Tijdregistratie lets you track hours per project on a weekly and daily basis. You can add, edit, and delete time entries, manage projects (including archiving), toggle between light and dark themes, and export your data as CSV or a full backup.

**Core features:**

- Week view with a clear table showing hours per project per day
- Day view for a detailed list of entries on a single day
- Click any cell to quickly edit or delete an entry
- Add new entries directly from the day view
- Create, rename, archive, and color‑code projects
- Toggle between “replace” and “add” mode when saving hours
- Hide empty project rows for a cleaner view
- Dark mode that respects your system preference
- Export the current week as a CSV file
- Full backup and restore (JSON) for safe keeping
- All data stored locally in IndexedDB – nothing is uploaded

---

## Try it now

[![Try it now](https://img.shields.io/badge/Try%20it%20now-Live%20Demo-6366f1?style=for-the-badge&logo=github)](https://your-demo-url.com)

> **Note:** Replace the link above with your own hosted version, or simply open `index.html` directly.

---

## Demo

Open `index.html` in any modern browser. No web server required.

---

## How to use

1. Download or clone this repository
2. Open `index.html` in Chrome, Firefox, Edge, or Safari
3. Click **📋 Projecten** to add your first project (e.g. “Development”, “Design”)
4. Use the week navigation (◀ / ▶) to move between weeks
5. Click any empty cell in the week table to add hours for a project on that day
6. Click a day header (Ma, Di, …) to open the day view for detailed management
7. In the day view, select a project, enter hours, and click **Opslaan**
8. Use the **Vervangen / Optellen** toggle to decide whether new hours replace or add to existing ones
9. Export the current week as CSV with **📥 Exporteer CSV**
10. Create a full backup with **💾 Backup** (right‑click for restore)

---

## How it works

The tool is a single HTML file that uses the browser’s built‑in IndexedDB API for persistent storage. No external libraries, no frameworks, no build step.

| Component | Purpose |
|---|---|
| IndexedDB | Stores projects and time entries locally |
| Vanilla JavaScript | Renders the week table, day view, modals, and handles all user interactions |
| CSS custom properties | Provides theming (light / dark) and responsive layout |

The week view calculates totals per project and per day, and the day view allows quick entry editing. All operations are asynchronous and update the UI immediately.

---

## Browser support

| Browser | Status |
|---|---|
| Chrome / Edge 90+ | Fully supported |
| Firefox 90+ | Fully supported |
| Safari 15+ | Fully supported |
| iOS Safari 15+ | Fully supported |
| Android Chrome | Fully supported |

---

## Privacy

All data is stored locally in your browser’s IndexedDB. Your time entries and project information are never sent to any server.

## Contributing

Contributions are welcome. Since the entire project is a single HTML file, a pull request is usually just one file changed.

Some ideas for improvements:
- Add a monthly overview
- Support for multiple users (local only)
- Export to PDF or Excel
- Add a timer / stopwatch feature
