# Penyelesaian Masalah
- I/O error: Permission denied (os error 13)

Hal ini dapat terjadi karena penyimpanan terbatas baru yang diperkenalkan di Android 10, yang membuat Hachimi gagal membuat direktori datanya. Untuk mengatasinya, buka pengelola file, buka Android/media, lalu buat folder bernama "jp.co.cygames.umamusume". Luncurkan ulang game dan masalahnya akan teratasi.

- Dalam mode layar penuh: Input terdaftar di tempat yang salah di layar / Resolusi game melebar

Pastikan kamu telah menyetel opsi `full_screen_mode` dan `resolution_scaling` dengan benar. Jika layar kamu memiliki resolusi lebih tinggi dari 1080p, harap setel `resolution_scaling` ke salah satu opsi lainnya. Jika layar Anda memiliki rasio aspek selain 16:9, harap gunakan mode layar penuh Eksklusif.