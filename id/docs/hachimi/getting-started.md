# Awal Mula

## Kompatibilitas

Silakan periksa kompatibilitasnya sebelum menginstal terlebih dahulu.

### Windows
| Versi | Didukung |
| --- | :---: |
| JP (DMM) | ✅ |
| JP (Steam) | ❌ |
| KR | ❌ |
| Global | ✅ |

### Android

| Version | Normal install | Direct install | Zygisk |
| --- | :---: | :---: | :---: |
| JP | ✅ | ✅ | ✅ |
| KR | ❌ | ❌ | ❌ |
| TW GP | ⚠️ | ⚠️ | ✅ |
| TW MC | ⚠️ | ⚠️ | ✅ |
| CN | ⚠️ | ⚠️ | ✅ |
| Global | ⚠️ | ⚠️ | ❔ |
- ✅ - Didukung sepenuhnya.
- ⚠️ - Bekerja, tergantung stiuasi terkadang menjadi gagal (Contoh: karena masalah Anti Cheat).
- ❔ - Mungkin bekerja, jangan terlalu berharap.
- ❌ - Tidak didukung.

## Instalasi

Proses instalasi berbeda-beda, tergantung pada versi gamenya. Klik salah satu buat lihat caranya.

<details>
<summary style="font-size: 20px; font-weight: 600;">JP</summary>
    
### Windows

Mulai dari versi v0.13.0, Hachimi saat ini mendukung dua metode dengan prosedur instalasi yang berbeda. **Pilih hanya satu metode, dan gunakan installer atau lakukan secara manual, JANGAN gunakan bersamaan.**

#### Metode 1: DotLocal DLL redirection (UnityPlayer.dll) (sangat direkomendasikan)

::: warning
Beberapa anti cheat seperti Vanguard tidak cocok dengan redirect DLL diaktifkan, meski pun itu tidak berpengaruh terhadap game tersebut. Nonaktifkan redirect DLL setiap kali kamu ingin bermain game yang menggunakan Vanguard atau anti cheat lain yang melakukan hal yang sama.
:::

::: info
Game tidak bisa berjalan setelah terinstall? Terlebih dahulu buka folder instalasi game, klik kanan pada file exe game, buka Properties, dan aktifkan **"Disable fullscreen optimizations"** di tab Compatibility.
:::

- **Cara menggunakan Hachimi installer:** Download hachimi terbaru `hachimi_installer.exe` di [Releases page](https://github.com/Hachimi-Hachimi/Hachimi/releases). Jalankan lalu pilih, **"UnityPlayer.dll" sebagai utama** dan klik install.

Ketika menginstall pertamakali, installer akan meminta permintaan untuk enable DotLocal DLL redirection. Pencet "OK" dan akan otomatis enable. **Kamu membutuhkan restar komputer untuk pertama kalinya.**

- **Cara manual**
1. Merujuk pada "Configure the registry" artikel [di sini](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-redirection#optional-configure-the-registry) untuk enable DLL redirection. Restar komputer setelah kamu selesai.
2. Download `hachimi.dll` terbaru dari [Releases page](https://github.com/Hachimi-Hachimi/Hachimi/releases).
3. Di dalam game install folder, buat folder baru bernama `umamusume.exe.local` dan pindahkan DLL file di sini. ganti nama menjadi `UnityPlayer.dll`.
4. Download `cellar.dll` terbaru dari [Cellar Releases page](https://github.com/Hachimi-Hachimi/Cellar/releases).
5. Pindahkan `umamusume.exe.local` ganti nama menjadi `apphelp.dll`.

::: info
Tips untuk kamu yang ingin bermain LoL/Valorant: Kamu harus disable DLL redirection setiap kali kamu ingin bermain game tersebut. Kamu bisa dengan mudah langsung enable/disable menggunakan: https://github.com/LeadRDRK/DotLocalToggle/releases. Jalankan sampai muncul disabled DLL redirection dan restar komputer kamu.
:::

#### Metode 2: Plugin shimming (cri_mana_vpx.dll)

::: warning
Metode ini sudah tidak lagi berjalan. Silakan ikuti cara di bawah untuk cara migrasi ke metode 1.
:::

#### Migrasi dari metode 2 ke metode 1
Kamu mungkin migrasi dari metode 2 ke metode 1, proses ini tidak sepenuhnya mudah dibandingkan dengan sebaliknya (dari 1 -> 2, hanya unistall dan install). 

Kamu perlu menghapus Shinmy secara bersih terlebih dahulu; pastikan Shunmy tidak berjalan saat kamu menghapusnya karena dapat bertahan hingga 30 detik setelah DMM ditutup dan dapat memulihkan (aktif lagi) dengan sendirinya. **Cara termudah untuk melakukannya adalah dengan menggunakan installer** (yang juga kebetulan merupakan uninstaller), aplikasi tersebut akan membersihkan semuanya dengan aman.

Setelah itu, kamu bisa menginstall Hachimi secara normal.

### Android

Cara termudah menggunakan [UmaPatcher](https://github.com/LeadRDRK/UmaPatcher) yang akan memodifikasi APK untuk kamu. Disarankan agar kamu tidak mengisntall gamenya terlebih dahulu.

::: danger
Jika kamu sudah menginstall gamenya, kamu harus uninstall sebelum menginstal versi yang telah dipatch untuk pertama kalinya. Kamu bisa memperbarui game tersebut nantinya tanpa uninstall dengan menginstal versi patch lainnya (terbaru).
:::

::: danger
Jangan download APK dari APKPure, akan ada masalah nantinya.
:::

1. Download dan install versi terbaru UmaPatcher di [Releases page](https://github.com/LeadRDRK/UmaPatcher/releases).
2. Persiapkan instalasi package game, bahan-bahannya :
    - **Split APK files:** basis APK file split config APK (config.arm64_v8a, config.armeabi-v7a, etc.),
    pilih salah satu yang mendukung device (HP) kamu sekarang.
    Untuk sekarang yang didukung hanya versi JP.
    - **Single APK file**: Sebuah file APK yang full.
    - **XAPK file**: Sebuah file ZIP yang berisi file APK yang terpisah (ini adalah extensi yang diganti nama menjadi XAPK).
3. Buka UmaPatcher dan pilih "Normal install". Pilih file yang sebelumnya sudah kamu persiapkan.
4. Tap di Patch untuk memulai patching dan proses intalasi bakal dimulai.

Kamu harus mengulangi lagi proses cara 2 jika suatu saat aplikasi tersebut diperbarui.

#### Untuk Penggun Root
UmaPatcher menyertakan opsi instalasi yang di-root yang tidak memerlukan kamu untuk menghapus instalasi game dan memungkinkan game diperbarui secara normal dari aplikasi download mana pun.

Dengan game terpasang, tap di bagian atas layar beranda untuk memilih aplikasi yang ingin kamu timpa (jika diperlukan). Kemudian pilih "Direct Install" sebagai metode instalasi dan tap pada "Patch". Tidak diperlukan file tambahan.

Kamu perlu menginstalnya lagi setiap kali aplikasi diperbarui.

#### Cara manual
1. Download hasil jadi aplikasi yang ada di [Releases page](https://github.com/Hachimi-Hachimi/Hachimi/releases).
2. Ekstrak file APK dari game tersebut. kamu mungkin bisa menggunakan [apktool](https://apktool.org/) untuk ini.
3. Ganti nama `libmain.so` file di setiap folder di dalam `lib` ke `libmain_orig.so`.
4. Salin proxy ke folder yang sesuai. (contoh `libmain-arm64-v8a.so` pergi ke `lib/arm64-v8a`). Ganti namanya menjadi `libmain.so`.
5. Build file APK dan instal.
   
</details>
<summary style="font-size: 20px; font-weight: 600;">Global / TW / CN</summary>

### Windows

- Cara pake installer: Download Hachimi terbaru `hachimi_installer.exe` di [Releases page](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases). Jalankan dan klik Instal. Gak perlu ubah opsi apa pun jika kamu gak tahu artinya.
- Cara manual: Download paling baru Hachimi `hachimi.dll` di [Releases page](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) dan taruh di direktori instalasi game. Ubah namanya menjadi `winhttp.dll`, `version.dll` or `opengl32.dll`.

### Android

::: warning
Hachimi tidak dapat digunakan dengan versi ini (Global) tanpa root.
:::

#### Zygisk
Download zip Zygisk terbaru di [Releases page](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) dan instal dengan Magisk atau KernelSU (dengan Zygisk Next).

</details>

## Pengaturan Pertama Kali
Saat memulai game untuk pertama kalinya setelah menginstal Hachimi, kamu akan disambut dengan dialog ini.

![First Time Setup](/assets/first-time-setup.jpg)

*Jika kamu tidak melihatnya, itu berarti Hachimi tidak terinstal dengan benar. Silakan cek kembali panduan instalasi dan coba lagi.*

Tap "Next" dan pilih repositori terjemahan yang kamu inginkan, lalu tap Done untuk menyimpan konfigurasi dan memulai pemeriksaan pembaruan.

Hachimi sekarang akan meminta kamu untuk mengunduh pembaruan terjemahan baru, klik "Yes" untuk mulai mengunduh file terjemahan.
