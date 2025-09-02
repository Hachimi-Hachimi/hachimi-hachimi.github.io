# Cara Memulai
<small>

Lihat halaman ini dari berbagai bahasa:

[Tiếng Việt](/vi/docs/hachimi/getting-started.html) | [Deustch](/de/docs/hachimi/getting-started.html) | [简体中文](/zh-cn/docs/hachimi/getting-started.html) | [繁體中文](/zh-tw/docs/hachimi/getting-started.html) | [Bahasa Indonesia](/id/docs/hachimi/getting-started.html) | [日本語](/ja/docs/hachimi/getting-started.html)

</small>

## ⚠️ Tolong jangan sebar tautan laman ini atau repo Github nya.
Kami paham bahwa kamu ingin membantu seseorang mengunduh Hachimi dan memiliki pengalaman game yang layak. Walau begitu, proyek ini secara bertentangan melanggar Ketentuan Layanan (TOS) permainan dan pengembang permainan pasti ingin menghapusnya jika mereka mengetahui hal tersebut.

Walau kami memperbolehkan kamu membagikannya melalui pesan pribadi atau grup pesan yang pribadi, kami dengan hormat meminta agar kamu tidak membagikan tautan proyek ini di situs web yang dapat diakses publik, atau lainnya.

Terserah kamu jika ingin membagikannya dan merusak pengalaman puluhan pengguna Hachimi.

### Jika kamu ingin tetap membagikannya
Lakukan sesukamu, tapi kami meminta secara hormat melabeli game ini menjadi "UM:PD" atau "Game Kuda" ketimbang nama asli dari gamenya, untuk mencegah terdeteksi di mesin pencarian.

## Kompabilitas

Harap cek terlebih dahulu kompabilitasnya.

### Windows
| Versi | Mendukung |
| --- | :---: |
| JP (DMM) | ✅ |
| JP (Steam) | ❌ |
| KR | ❌ |
| Global | ✅ |

### Android

| Version | Unduh Normal | Unduh Langsung | Zygisk |
| --- | :---: | :---: | :---: |
| JP | ✅ | ✅ | ✅ |
| KR | ❌ | ❌ | ❌ |
| TW GP | ⚠️ | ⚠️ | ✅ |
| TW MC | ⚠️ | ⚠️ | ✅ |
| CN | ⚠️ | ⚠️ | ✅ |
| Global | ⚠️ | ⚠️ | ❔ |
- ✅ - Sangat mendukung.
- ⚠️ - Bekerja, tapi ada beberapa kendala eksternal (contoh: Trigger AC).
- ❔ - Belum Coba. Mungkin bekerja, tapi tidak dihitung.
- ❌ - Tidak mendukung.

## Instalasi

Proses instalasi berbeda-beda tergantung pada versi permainan. Klik salah satu dari opsi berikut untuk melihatnya.

<details>
JP</summary>

### Windows

Per v0.13.0, Hachimi saat ini mendukung dua metode pemuatan dengan prosedur instalasi yang berbeda. **Pilih hanya satu metode, dan gunakan installer atau lakukan secara manual, JANGAN gunakan beberapa hal sekaligus.**

#### Metode 1: DotLocal DLL redirection (UnityPlayer.dll) (direkomendasikan)

::: perhatian
Beberapa anti-cheat seperti Vanguard tidak suka melihat pengalihan DLL di sistem kamu, bahkan jika itu tidak secara langsung memengaruhi game yang dilindunginya. Nonaktifkan pengalihan DLL setiap kali kamu ingin memainkan game yang menggunakan Vanguard atau anti-cheat lain yang memeriksa hal yang sama.
:::

::: info
Game tidak bisa diluncurkan setelah instalasi? Navigasi ke folder instalasi game, klik kanan pada file .exe game, buka Properties, dan aktifkan "Disable fullscreen optimizations" di tab Compatibility.
:::

- **Menggunakan installer:** Unduh `hachimi_installer.exe` terbaru dari [Halaman Rilis](https://github.com/Hachimi-Hachimi/Hachimi/releases). Jalankan, **pilih "UnityPlayer.dll" sebagai targetnya** dan klik untuk install.

Saat pertama kali unduh, installer mungkin akan meminta kamu untuk mengaktifkan DotLocal DLL redirection. Tekan OK dan itu akan diaktifkan untuk kamu. **Kamu perlu restart komputer setelah mengaktifkannya agar bekerja.**

- **Secara Manual**
1. Merujuk pada bagian "Configure the registry" di [this article](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-redirection#optional-configure-the-registry) untuk mengaktifkan pengalihan DLL. Restart komputer kamu setelah selesai.
2. Unduh `hachimi.dll` terbaru dari [Halaman Rilis](https://github.com/Hachimi-Hachimi/Hachimi/releases).
3. Di folder instalasi game, buat folder baru bernama `umamusume.exe.local` dan pindahkan file DLL yang diunduh ke sana. Ganti namanya menjadi `UnityPlayer.dll`.
4. Unduh `cellar.dll` terbaru dari [Halaman Rilis Cellar](https://github.com/Hachimi-Hachimi/Cellar/releases).
5. Pindahkan ke `umamusume.exe.local` dan ganti namanya menjadi `apphelp.dll`.

::: info
Tips untuk orang yang ingin bermain LoL/Valorant: kamu perlu menonaktifkan pengalihan DLL setiap kali kamu ingin memainkan game tersebut. kamu dapat menggunakan program ini untuk mengaktifkan/menonaktifkannya dengan cepat: https://github.com/LeadRDRK/DotLocalToggle/releases. Jalankan hingga muncul pesan bahwa pengalihan DLL telah dinonaktifkan dan restart komputer kamu.
:::

#### Metode 2: Plugin shimming (cri_mana_vpx.dll)

::: perhatian
Metode ini tidak lagi berfungsi setelah pembaruan terbaru. Harap ikuti panduan di bawah ini untuk bermigrasi ke metode 1.
:::

#### Migrasi dari metode 2 ke metode 1
Kamu mungkin ingin beralih dari metode 2 ke metode 1, namun proses ini tidak terlalu mudah dibandingkan sebaliknya (untuk 1 -> 2, cukup hapus instalasi dan instal kembali). 

Kamu perlu menghapus instalasi Shinmy secara bersih terlebih dahulu; pastikan Shinmy tidak berjalan saat kamu menghapusnya karena ia dapat bertahan hingga 30 detik setelah DMM ditutup dan dapat memulihkan dirinya sendiri. `Cara termudah untuk melakukan ini adalah dengan menggunakan penginstal` (yang juga berfungsi sebagai penghapus instalasi), itu akan membersihkan semuanya dengan benar untuk kamu.

Setelah itu, kamu bisa menghapus instalasi Hachimi seperti biasa.

### Android

Cara termudah untuk install [UmaPatcher](https://github.com/LeadRDRK/UmaPatcher) yang akan memodifikasi APK kamu. Disarankan agar kamu tidak menginstal game terlebih dahulu sebelum menggunakan ini.

::: bahaya
Jika kamu sudah menginstal game, kamu harus menghapus instalasinya sebelum menginstal versi yang ditambal untuk pertama kalinya. kamu dapat memperbarui game nanti tanpa menghapusnya dengan menginstal versi lain yang ditambal.
:::

::: danger
Jangan ambil APK dari APKPure, karena dapat menyebabkan masalah.
:::

::: info
Jika kamu sudah memiliki data simpanan untuk game yang tidak ditambal, buat kata sandi Data Link sebelum menginstal versi game yang ditambal jika kamu belum melakukannya.
kamu tidak dapat masuk ke versi game yang ditambal menggunakan akun Google Play kamu, dan menggunakan kata sandi Data Link adalah cara termudah untuk mentransfer kemajuan kamu.
Sebagai alternatif, kamu dapat menggunakan ID Cygames untuk menyinkronkan data akun kamu.
:::


1. Download dan unduh versi terbaru UmaPatcher dari [Halaman Rilis](https://github.com/LeadRDRK/UmaPatcher/releases).
2. Siapkan paket instalasi untuk game, yang bisa berupa:
    - **Split APK files:** Sebuah file APK utama (base APK) dan salah satu file split config APK (config.arm64_v8a, config.armeabi-v7a, dll.),  
      pilih hanya satu split config yang sesuai dengan perangkatmu.  
      Saat ini hanya digunakan oleh versi JP.
    - **Single APK file**: File APK penuh.
    - **XAPK file**: File ZIP yang berisi split APK files (ekstensinya diubah menjadi XAPK).
   
   Split APK files atau file XAPK bisa diunduh dari [Qoopy](https://qoopy.leadrdrk.com/), gunakan ID 6172.
3. Buka UmaPatcher dan pilih "Normal install". Pilih file yang sudah kamu siapkan.
4. Tekan Patch untuk memulai proses patching dan instalasi.

Kamu harus mengulangi proses dari langkah 2 lagi setiap kali aplikasi mendapatkan update.

#### Untuk pengguna root
UmaPatcher menyertakan opsi instalasi khusus root yang tidak mengharuskanmu menghapus game dan memungkinkan game untuk diperbarui secara normal dari app store mana pun.

Dengan game sudah terinstal, ketuk kartu di bagian atas layar utama untuk memilih aplikasi yang ingin kamu patch (jika perlu).  
Lalu pilih "Direct install" sebagai metode instalasi dan tekan Patch. Tidak perlu memasukkan file apa pun.

Kamu harus menginstalnya kembali setiap kali aplikasi mendapatkan update.

#### Secara Manual
1. Build atau unduh library prebuilt dari [Halaman Rilis](https://github.com/Hachimi-Hachimi/Hachimi/releases).
2. Ekstrak file APK dari game. Kamu bisa menggunakan [apktool](https://apktool.org/) untuk ini.
3. Ganti nama file `libmain.so` di setiap folder dalam `lib` menjadi `libmain_orig.so`.
4. Salin library proxy ke folder yang sesuai (misalnya `libmain-arm64-v8a.so` masuk ke `lib/arm64-v8a`).  
   Lalu ubah namanya menjadi `libmain.so`.
5. Build kembali file APK dan instal.

</details>

<details>
### Global / TW / CN

### Windows

- **Menggunakan installer:** Unduh `hachimi_installer.exe` terbaru dari [Halaman Rilis](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases). Jalankan dan klik Install.  
  Tidak perlu mengubah opsi apa pun jika kamu tidak tahu artinya.
- **Secara manual:** Unduh `hachimi.dll` terbaru dari [Halaman Rilis](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) dan letakkan di folder instalasi game.  
  Ganti namanya menjadi `winhttp.dll`, `version.dll`, atau `opengl32.dll`.

::: tip
Jika kamu tidak tertarik menggunakan fitur terjemahan Hachimi, kamu bisa menonaktifkannya dengan menutup jendela First-Time Setup ketika pertama kali meluncurkan game dengan Hachimi terinstal.  
Menginstal terjemahan pada versi global game bisa menyebabkan tekstur rusak.  
Hal ini bisa diatasi dengan menonaktifkan terjemahan (di **Config Editor > Gameplay**), lalu restart game.
:::

### Android

::: warning
Hachimi tidak bisa digunakan di versi ini tanpa root.
:::

#### Zygisk
Unduh file zip Zygisk terbaru dari [Halaman Rilis](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) dan instal menggunakan Magisk atau KernelSU (dengan Zygisk Next).

</details>

## Setup Pertama Kali
Saat meluncurkan game untuk pertama kali setelah menginstal Hachimi, kamu akan disambut dengan dialog berikut:

![First Time Setup](/assets/first-time-setup.jpg)

*Jika kamu tidak melihatnya, berarti Hachimi belum terinstal dengan benar. Silakan periksa panduan instalasi dan coba lagi.*

Ketuk **Next** dan pilih repo terjemahan yang kamu inginkan, lalu ketuk **Done** untuk menyimpan konfigurasi dan memulai pemeriksaan update.

Hachimi sekarang akan meminta kamu untuk mengunduh update terjemahan baru, klik **Yes** untuk mulai mengunduh file terjemahan.
