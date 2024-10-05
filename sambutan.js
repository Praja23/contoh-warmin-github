document.addEventListener("DOMContentLoaded", function () {
  // Cek apakah pesan selamat datang sudah ditampilkan sebelumnya
  if (!sessionStorage.getItem("welcomeShown")) {
    alert("Selamat datang di Warung Mina Mamah Nada!");
    sessionStorage.setItem("welcomeShown", "true");
  }

  // Menambahkan efek klik pada item menu
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.addEventListener("click", () => {
      // Navigasi ke halaman item menu tanpa menampilkan popup selamat datang
      window.location.href = item.querySelector("a").getAttribute("href");
    });
  });

  // Menambahkan transisi halus saat navigasi
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: "smooth" });
    });
  });
});
