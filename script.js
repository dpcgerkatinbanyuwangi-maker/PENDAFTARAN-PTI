// Ganti nomor berikut dengan WhatsApp panitia.
const PANITIA_WA = '6281234567890';

const prices = {
  'Lengan Pendek': 75000,
  'Lengan Panjang': 85000,
  'Lengan Panjang XXXL': 90000
};

const form = document.getElementById('shirtForm');
const model = document.getElementById('model');
const ukuran = document.getElementById('ukuran');
const jumlah = document.getElementById('jumlah');
const totalHarga = document.getElementById('totalHarga');
const detailHarga = document.getElementById('detailHarga');

function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(value);
}

function updateTotal() {
  const qty = Math.max(1, Number(jumlah.value || 1));
  const selectedModel = model.value;
  const unit = prices[selectedModel] || 75000;
  const total = unit * qty;
  totalHarga.textContent = formatRupiah(total);
  detailHarga.textContent = `${qty} kaos • ${selectedModel || 'Model belum dipilih'} • Ukuran ${ukuran.value || 'belum dipilih'}`;
}

model.addEventListener('change', updateTotal);
ukuran.addEventListener('change', updateTotal);
jumlah.addEventListener('input', updateTotal);
updateTotal();

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  if (PANITIA_WA === '6281234567890') {
    alert('Silakan ganti nomor WhatsApp panitia pada file script.js terlebih dahulu.');
    return;
  }

  const data = new FormData(form);
  const qty = Number(data.get('jumlah') || 1);
  const unit = prices[data.get('model')] || 0;
  const total = unit * qty;

  const message = `*PENDAFTARAN KAOS PTI 2026*

Nama Lengkap: ${data.get('nama')}
WhatsApp: ${data.get('wa')}
Kategori: ${data.get('kategori')}
Alamat: ${data.get('alamat')}

Model Kaos: ${data.get('model')}
Ukuran: ${data.get('ukuran')}
Jumlah: ${qty}
Total: ${formatRupiah(total)}
Metode Pengambilan: ${data.get('pengambilan')}

Metode Pembayaran: ${data.get('metodeBayar') || '-'}
Status Pembayaran: ${data.get('statusBayar') || 'Belum Bayar'}
Catatan: ${data.get('catatan') || '-'}

Saya menyatakan data pendaftaran sudah benar.`;

  const url = `https://wa.me/${PANITIA_WA}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});
