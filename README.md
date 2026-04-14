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

## Deploy ke VPS / Render / Fly.io

### VPS (systemd)

```bash
go build -o portfolio ./cmd/server
```

```ini
[Unit]
Description=Marsel Portfolio
After=network.target

[Service]
ExecStart=/home/ubuntu/portfolio/portfolio
WorkingDirectory=/home/ubuntu/portfolio
Restart=always
Environment=PORT=8080

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable --now portfolio
```

### Render.com

1. Push repo ke GitHub
2. New Web Service → pilih repo ini
3. **Build Command:** `go build -o portfolio ./cmd/server`
4. **Start Command:** `./portfolio`
5. Set env var `PORT` jika perlu (Render auto-inject $PORT)

### Fly.io

```bash
fly launch && fly deploy
```

---

## Kontak

- Email: marsellrulianaa@gmail.com
- LinkedIn: [marsellrulianaa](https://www.linkedin.com/in/marsellrulianaa)
- WhatsApp: +62 851-7520-9039
