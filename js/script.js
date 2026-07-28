// Menyimpan posisi scroll terakhir
let lastScroll = 0;

// Mengambil elemen header
const header = document.querySelector("header");

//"Browser, tolong panggil function ini setiap kali halaman discroll."
// Event akan berjalan setiap halaman discroll
window.addEventListener("scroll", () => {

    // Posisi scroll saat ini
    // pageYOffset artinya "Sudah sejauh apa halaman discroll dari atas."
    // hasil awal 0
    const currentScroll = window.pageYOffset;

    // Jika sedang scroll ke bawah
    if (currentScroll > lastScroll && currentScroll > 100) {

        // Tambahkan class hide
        header.classList.add("hide");

    } else {

        // Jika scroll ke atas
        // Hapus class hide sehingga navbar muncul lagi
        header.classList.remove("hide");
    }

    // Simpan posisi scroll sekarang
    lastScroll = currentScroll;
});