# Smoelenboek (Employee Directory)

A browser-only employee directory — no backend, no cloud, no dependencies.

## Features

- **Add, edit, and delete** employees with name, role, department, email, phone, and photo
- **Photos** — upload from your device, auto-resized to thumbnails and stored as base64 in the database
- **Auto-generated avatars** — employees without a photo get a colored initial-circle avatar
- **Search** — real-time search across name, role, email, phone, and department
- **Filter by department** — dynamically populated from stored data
- **Export/Import** — download all data as JSON or bulk-import from a JSON file (with a safety confirmation + countdown)
- **Data persistence** — all data is stored locally in IndexedDB, no server required
- **No external dependencies** — pure HTML, CSS, and vanilla JavaScript in a single file. No frameworks, no npm, no build step.

## How to use

Open `index.html` in any modern browser. Data persists automatically in your browser's IndexedDB.

## Import format

When importing, the JSON file must have an `employees` array where each entry has at least `id`, `firstName`, and `lastName`:

```json
{
  "version": 1,
  "exportedAt": "2025-01-01T00:00:00.000Z",
  "employees": [
    {
      "id": "uuid",
      "firstName": "Jan",
      "lastName": "Jansen",
      "role": "Developer",
      "department": "Engineering",
      "email": "jan@example.com",
      "phone": "+31 6 12345678",
      "photo": "data:image/jpeg;base64,..."
    }
  ]
}
```
