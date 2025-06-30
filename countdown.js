
// Set tanggal target hitung mundur
const targetDate = new Date("December 24, 2025 10:00:00").getTime();



// Fungsi untuk mengubah angka dengan animasi
function animateChange(id, value) {
  const el = document.getElementById(id);
  if (el.textContent !== value) {
    el.textContent = value;

    // Reset animasi
    el.classList.remove("animate");
    void el.offsetWidth; // Trigger reflow agar animasi bisa dijalankan ulang
    el.classList.add("animate");
  }
}

// Interval untuk update setiap detik
setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.querySelector('.countdown-container').innerHTML = "<h3>Acara Telah Dimulai!</h3>";
    return;
  }

  const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

  animateChange("days", days);
  animateChange("hours", hours);
  animateChange("minutes", minutes);
  animateChange("seconds", seconds);
}, 1000);
