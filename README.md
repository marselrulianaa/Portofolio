# Portfolio — Marsel Ruliana Hermawan

Website portofolio modern (1-page) yang dibangun dengan **Go** (tanpa framework berat) + HTML/CSS/JS murni.

**Live stack:** dark premium design · blue/cyan (trust) · purple (creative) · teal CTA · toggle ID/EN

---

## Struktur Folder

```
portfolio/
├── cmd/server/main.go          # Entry point HTTP server
├── internal/handlers/
│   ├── home.go                 # Handler halaman utama
│   └── contact.go              # Handler POST /contact (validasi + rate-limit + simpan JSONL)
├── web/
│   ├── templates/layout.html   # HTML template lengkap
│   └── static/
│       ├── css/style.css       # Design system modern
│       ├── js/main.js          # Toggle ID/EN + contact form AJAX + animasi
│       └── img/                # avatar.svg + favicon.svg
├── data/                       # submissions.jsonl tersimpan di sini (auto-created)
├── go.mod
└── README.md
```

---

## Cara Run Lokal

**Prasyarat:** Go 1.21+

```bash
# Clone repo
git clone https://github.com/marselrulianaa/portfolio.git
cd portfolio

# Jalankan server (default port 8080)
go run ./cmd/server

# Atau dengan port kustom
PORT=3000 go run ./cmd/server
```

Buka browser: [http://localhost:8080](http://localhost:8080)

---

## Build Binary

```bash
go build -o portfolio ./cmd/server
./portfolio
```

---

## Fitur

- ✅ **1-Page Portfolio** — Hero, Proyek, Keahlian, Tentang, Kontak
- ✅ **Toggle Bahasa ID/EN** — Semua teks utama berubah
- ✅ **Contact Form** — POST `/contact`, validasi server + client, rate-limit per IP (5 req/menit)
- ✅ **Submissions log** — Tersimpan ke `data/submissions.jsonl` + stdout
- ✅ **Responsive** — Mobile-first, hamburger menu
- ✅ **SEO** — meta title/description, OpenGraph, favicon
- ✅ **Aksesibilitas** — aria labels, focus states, reduced-motion support
- ✅ **Health check** — `GET /healthz`

---

## Kontak

- Email: marsellrulianaa@gmail.com
- LinkedIn: [marsellrulianaa](https://www.linkedin.com/in/marsellrulianaa)
- WhatsApp: +62 851-7520-9039
