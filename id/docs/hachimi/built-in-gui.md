# GUI Bawaan
GUI bawaan bisa digunakan untuk mengaktifkan beberapa fungsi dalam game dan mengubah konfigurasi.

![Tangkapan layar GUI](/assets/built-in-gui.jpg)

## Membuka Menu
Menu bisa dibuka dengan menekan tombol atau kombinasi tombol. Ini berbeda untuk setiap platform:
- **Android:** Tombol Volume Atas + Volume Bawah
- **Windows:** Tombol panah kanan(\*)

**Catatan:** Saat menu atau dialog dari Hachimi terbuka, semua input dari sistem akan diblokir agar tidak masuk ke game. Kamu harus menutup semuanya untuk bisa mengendalikan game kembali.

(\*) Tombol ini bisa diubah. Lihat opsi `menu_open_key` di [halaman Konfigurasi](/docs/hachimi/config).

## Konfigurasi
- **Open config editor:** Tempat untuk mengedit file konfigurasi di dalam game. Lihat halaman Konfigurasi untuk detail setiap opsi.
- **Reload config:** Memuat ulang file konfigurasi dari disk. Ini dilakukan secara otomatis oleh editor konfigurasi.
- **Open first time setup:** Menjalankan wizard pengaturan awal. Kamu bisa mengubah repo terjemahan di sini.

## Grafis
Di sini kamu bisa mengubah opsi grafis secara real-time.

Perhatikan bahwa opsi ini tidak permanen dan akan direset saat game dimulai kembali. Untuk menerapkan opsi ini secara permanen, ubah langsung melalui Editor Konfigurasi.

## Terjemahan
- **Muat ulang data lokal:** Ditujukan untuk penerjemah. Akan memuat ulang file terjemahan dari disk.
- **Periksa pembaruan:** Menjalankan pengecekan pembaruan.

## Zona Bahaya
Opsi-opsi ini sebenarnya tidak terlalu berbahaya jika digunakan dengan benar; tapi justru karena itu diletakkan di bagian ini. **Jangan utak-atik kalau tidak tahu risikonya.**

Cukup dengan peringatan, kalau kamu tetap penasaran, berikut fungsinya dan hal yang harus dihindari:

- **Soft Restart:** Memicu error di game dan memaksa pengguna mengonfirmasi restart, yang hanya akan mengembalikan game ke layar judul. Ini cara cepat untuk menerapkan beberapa pengaturan grafis yang biasanya baru aktif setelah game ditutup dan dibuka kembali. **Jelas, jangan gunakan saat sedang bermain, karena tidak bisa dibatalkan.**
- **Open in-game browser:** (hanya Android) Ini sebenarnya cukup aman digunakan, hanya akan membuka browser dalam game, yang bisa dipakai untuk menjelajahi web (~~atau main DOOM~~) tanpa keluar dari game. Secara default membuka Google, tapi bisa dikonfigurasi. Diletakkan di sini karena bisa mengganggu sistem dialog game. Jangan buka saat game sedang menampilkan prompt/dialog lain.
- **Toggle game UI:** Mengaktifkan/nonaktifkan semua objek UI game yang sedang aktif. Objek yang dibuat setelah toggle diaktifkan tidak akan terpengaruh. Bisa saja mengembalikan status UI secara salah (misalnya mengaktifkan objek yang seharusnya mati), tapi umumnya tidak menimbulkan masalah besar.