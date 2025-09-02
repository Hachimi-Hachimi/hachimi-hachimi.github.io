# Pemecahan Masalah
[[toc]]

## Secara Umum

### Pesan "Communication error" saat mencoba memulai game

Kamu mungkin perlu menggunakan VPN untuk bisa terhubung ke game. Lihat [halaman ini](https://gametora.com/umamusume/playing-on-dmm) untuk detail lebih lanjut.  
Jika kamu punya dua versi game terpasang, yaitu Steam global dan DMM Jepang, kamu perlu mengaktifkan case sensitivity di direktori unduhan data game, `C:\Users\NAMA_KAMU\AppData\LocalLow\Cygames`:
::: info
Pastikan kamu mengganti teks `NAMA_KAMU` pada jalur file berikut dengan username Windows kamu.
:::
1. Pindahkan semua isi dari `C:\Users\NAMA_KAMU\AppData\LocalLow\Cygames` untuk sementara. Folder ini harus kosong! Jika kamu memasang kedua versi game, ganti nama sementara salah satu foldernya agar Windows tidak menimpa file saat kamu memindahkan kembali. (Tambahkan angka 1 di akhir nama folder atau yang serupa.)
2. Buka jendela PowerShell lalu ketik perintah berikut:  
   `fsutil.exe file setCaseSensitiveInfo C:\Users\NAMA_KAMU\AppData\LocalLow\Cygames enable`
   - Jika muncul error, buka PowerShell sebagai administrator lalu jalankan perintah ini:  
     `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`  
     kemudian jalankan ulang perintah sebelumnya.
3. Kembalikan semua file ke dalam folder Cygames kamu. Versi global menggunakan "Umamusume", versi JP menggunakan "umamusume".

### Fisik karakter (rambut, pakaian, dll.) kaku saat berjalan di 60+ FPS

Ubah pengaturan "Physics update mode" ke "Mode60FPS". Pengaturan ini bisa diakses di Config Editor pada tab "Gameplay".

## Windows

### Game tidak bisa jalan setelah Hachimi dipasang

Pastikan kamu menggunakan versi Hachimi yang benar. Pada saat penulisan (Hachimi v0.14.1), Hachimi punya versi terpisah untuk rilis Steam global dan DMM Jepang.  
Untuk versi Steam global, gunakan file `hachimi_installer.exe` dari [rilis global terbaru](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases/latest).  
Untuk versi DMM Jepang, gunakan file `hachimi_installer.exe` dari [rilis JP terbaru](https://github.com/Hachimi-Hachimi/Hachimi/releases/latest).  
Setelah memasang Hachimi di versi DMM Jepang, kamu perlu restart komputer. **Klik "Restart" di menu shutdown, jangan hanya dimatikan lalu dinyalakan lagi.**

<!-- 
    TODO: tambah detail tentang kasus aneh seperti versi lama CarrotJuicer yang tidak didukung?
-->

### Steam: Teks dan gambar korup

Jika kamu tidak sengaja memasang terjemahan di versi Steam, kamu akan melihat teks dan gambar korup. Ini bisa diperbaiki dengan menonaktifkan terjemahan.  
Buka overlay Hachimi dengan tombol panah kanan, lalu buka Config Editor dan centang kotak "Disable translations". Setelah itu, restart game.

### Steam: Tidak bisa membuka Steam overlay

Steam overlay bertabrakan dengan overlay Hachimi. Untuk mengaktifkan Steam overlay, buka overlay Hachimi dan centang "Disable overlay (GUI)" di tab "General", tekan Save, lalu restart game.  
Jika kamu ingin mengaktifkan kembali overlay Hachimi, buka file konfigurasi Hachimi (`config.json`) dengan text editor dan ubah nilai `disable_gui` dari `true` ke `false`, lalu restart game. File konfigurasi ini ada di folder hachimi di dalam folder instalasi game.

### DMM: Input terdeteksi di posisi salah pada layar setelah jendela diubah ukurannya

Ini adalah masalah yang sudah diketahui pada Hachimi versi DMM Jepang (perbaikan akan datang™). Untuk sementara, jangan ubah ukuran jendela.

### DMM: Tidak bisa main game tertentu setelah memasang Hachimi

Versi Hachimi untuk DMM Jepang menggunakan DotLocal DLL redirection untuk berjalan, yang dibenci beberapa anticheat (seperti Vanguard di Valorant dan League of Legends).  
Kamu perlu menonaktifkan DLL redirection setiap kali ingin memainkan game yang menggunakan Vanguard atau anticheat lain yang memeriksa hal serupa.  
[DotLocalToggle](https://github.com/LeadRDRK/DotLocalToggle/releases/) adalah program kecil untuk menyalakan/mematikan DLL redirection dengan cepat. 

### DMM: Mode layar penuh: Input terdeteksi di posisi salah / Resolusi game melar

Pastikan kamu sudah mengatur opsi `full_screen_mode` dan `resolution_scaling` dengan benar. Jika layar kamu punya resolusi lebih tinggi dari 1080p, set `resolution_scaling` ke opsi lain.  
Jika layar kamu punya rasio aspek yang bukan 16:9, gunakan mode Exclusive full screen.

## Android

### Patching gagal

Pastikan kamu memilih kedua file split APK (base dan config) atau file XAPK gabungan. Kamu bisa tap dan tahan untuk memilih beberapa file di file picker.  
Tempat rekomendasi untuk mendapatkan APK adalah [Qoopy](https://qoopy.leadrdrk.com/), gunakan ID 6172. Jika kamu menggunakan perangkat Xiaomi, coba matikan optimisasi MIUI, karena bisa mengganggu instalasi.

### Tidak bisa login dengan akun Google Play

Kamu tidak bisa login ke versi game yang sudah dipatch menggunakan akun Google Play dan harus menggunakan password Data Link.  
Jika kamu sudah punya password Data Link, login ke akun itu dari title screen (☰ > Data Link).  
Jika *belum* punya password Data Link, kamu perlu uninstall versi patch, pasang ulang versi asli game, login dengan akun Google Play, lalu buat password Data Link. Setelah itu, ulangi proses patch lalu login dengan password Data Link yang sudah dibuat.  
Sebagai alternatif, kamu bisa login dengan Cygames ID untuk menautkan data akunmu.

### Error この端末でのプレイは許可されていません (Kamu tidak diizinkan bermain di perangkat ini)

Jika perangkatmu di-root, kamu perlu menyembunyikan root dari game. Denylist Magisk terbukti bekerja, begitu juga dengan tools lain seperti Shamiko.  
Jika perangkatmu *tidak* di-root dan kamu tetap menerima error ini, coba gunakan VPN saat memulai game. Lihat bagian "Communication error".

### Error I/O: Permission denied (os error 13)

Ini bisa terjadi karena scoped storage baru di Android 10, yang membuat Hachimi gagal membuat direktori data.  
Solusinya, buka file manager, masuk ke Android/media dan buat folder bernama "jp.co.cygames.umamusume". Jalankan ulang game dan masalah harusnya teratasi.

### Error I/O: File exists (os error 17)

Restart perangkatmu lalu coba jalankan game lagi. Jika error tetap ada, minta bantuan di server Discord.

### Crash setelah launch

Buka file manager dan masuk ke `Android/media`. Buat folder bernama "jp.co.cygames.umamusume".  
Di dalam folder itu, buat folder bernama "hachimi". Terakhir, download file config di bawah dan masukkan ke folder "hachimi" (pastikan namanya "config.json").

[Download file config](https://files.leadrdrk.com/hachimi/android-compat/config.json)

Langkah ini mungkin diperlukan untuk beberapa perangkat dan emulator.
