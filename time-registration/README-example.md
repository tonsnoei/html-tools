# PDF Page Manager

A beautiful, zero-dependency PDF manipulation tool that runs entirely in your browser. No installation, no backend, no data leaves your device.

![PDF Page Manager](https://img.shields.io/badge/HTML-single%20file-orange?style=flat-square&logo=html5)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Mobile ready](https://img.shields.io/badge/mobile-ready-brightgreen?style=flat-square)
![No backend](https://img.shields.io/badge/backend-none-lightgrey?style=flat-square)

---

## What it does

PDF Page Manager lets you combine pages from multiple PDF files, remove pages you don't need, and reorder everything with drag and drop — then download the result as a single PDF. It works on desktop and mobile without installing anything.

**Core features:**

- Upload multiple PDF files at once
- Preview every page as a rendered thumbnail
- Drag and drop to reorder pages across files
- Remove individual pages with one tap
- Rotate pages
- Download the final result as a merged PDF
- Works fully offline after the first load

---

## Try it now

[![Try it now](https://img.shields.io/badge/Try%20it%20now-Live%20Demo-6366f1?style=for-the-badge&logo=github)](https://privatepdf.eu/)

---

## Demo

Open `index.html` directly in any modern browser. No web server needed.

---

## How to use

1. Download or clone this repository
2. Open `index.html` in Chrome, Firefox, Edge, or Safari
3. Upload one or more PDF files using the upload area
4. Rearrange pages by dragging thumbnails into the order you want
5. Delete pages you don't need by clicking the ✕ button on any thumbnail
6. Click **Download PDF** to export your final document

On mobile, drag and drop works via touch.

---

## How it works

The tool is a single HTML file that loads two open-source libraries from CDN:

| Library | Purpose |
|---|---|
| [PDF.js](https://mozilla.github.io/pdf.js/) v3.11 | Reads PDF files and renders page thumbnails to canvas |
| [pdf-lib](https://pdf-lib.js.org/) v1.17 | Builds and exports the final merged PDF |

Page reordering uses the native HTML5 Drag and Drop API, extended with Pointer Events for touch support. No frameworks, no build step, no `node_modules`.

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

All processing happens locally in your browser. Your PDF files are never uploaded to any server.

## Contributing

Contributions are welcome. Since the entire project is a single HTML file, a pull request is usually just one file changed.

Some ideas for improvements:
- Zoom controls for thumbnail size
- Password-protected PDF support
- Dark mode

