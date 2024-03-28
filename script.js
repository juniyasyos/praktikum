// Ambil semua elemen slide
const slides = document.querySelectorAll(".slide");

// Set indeks awal slide
let currentSlide = 0;

// Fungsi untuk menampilkan slide berikutnya
function nextSlide() {
  // Sembunyikan slide saat ini
  slides[currentSlide].style.display = "none";
  // Pindah ke slide berikutnya
  currentSlide = (currentSlide + 1) % slides.length;
  // Tampilkan slide baru
  slides[currentSlide].style.display = "block";
}

// Fungsi untuk menampilkan slide sebelumnya
function prevSlide() {
  // Sembunyikan slide saat ini
  slides[currentSlide].style.display = "none";
  // Pindah ke slide sebelumnya
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  // Tampilkan slide baru
  slides[currentSlide].style.display = "block";
}

// Tampilkan slide pertama
slides[currentSlide].style.display = "block";

// Atur interval untuk berpindah otomatis setiap beberapa detik (misalnya setiap 3 detik)
setInterval(nextSlide, 3000);