# Pendaftaran Kaos PTI 2026 — GitHub Pages

Website statis untuk pendaftaran/pemesanan kaos kegiatan Pekan Tuli Internasional 2026.

## Cara pasang di GitHub

1. Buat repository baru di GitHub.
2. Upload `index.html`, `style.css`, dan `script.js`.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/root`, lalu **Save**.
6. Tunggu GitHub Pages aktif, kemudian buka URL yang diberikan GitHub.

## Wajib sebelum dipakai

Buka `script.js`, lalu ganti:

```js
const PANITIA_WA = '6281234567890';
```

menjadi nomor WhatsApp panitia dalam format internasional, misalnya `628xxxxxxxxxx` tanpa tanda `+`.

## Catatan

GitHub Pages bersifat statis. Form ini tidak menyimpan database dan tidak menerima upload bukti pembayaran langsung ke GitHub. Form membentuk pesan otomatis dan meneruskannya ke WhatsApp panitia.

Harga bawaan yang digunakan:
- Lengan Pendek: Rp75.000
- Lengan Panjang: Rp85.000
- Lengan Panjang XXXL: Rp90.000

Silakan edit harga, nama kegiatan, logo, dan identitas panitia sesuai kebutuhan sebelum dipublikasikan.
