# Penerjemah Otomatis
Hachimi mampu menerjemahkan bagian-bagian permainan secara otomatis melalui Sugoi Offline Translator atau server terjemahan kompatibel yang menerapkan API serupa (seperti [py3translationServer](https://github.com/gdiaz384/py3translationServer)).

### Apa Maksudnya?
- Kamu akan mendapat mesin penerjemah untuk semua yang belum diterjemahkan.
- Terjemahan dari mesin akan diganti oleh terjemahan asli jika mereka sudah tersedia dari repo terjemahannya.

### Waspada
- Proses penerjemahan bersifat sinkron; permainan akan berhenti saat menunggu penerjemahan selesai. Proses ini akan berkurang seiring berjalannya waktu karena semakin banyak hal yang diterjemahkan dan Hachimi dapat memuat ulang data yang telah diterjemahkan.

## Cara Penggunaan
Buka Config Editor dan hidupkan pengaturan Penerjemah Otomatis/Auto Translation (Otomatis Menerjemahkan Cerita/UI)

::: peringatan
"Auto translate UI" tidak direkomendasikan secara umum, terutama pada penerjemah yang tidak mempunyai cache internal.
:::

Kamu juga butuh menjalankan program penerjemah bersamaan dengan gamenya.

### Untuk Sugoi Offline Translator
Luncurkan file .bat "Offline Translator" di Sugoi Toolkit. Biarkan program penerjemahan/command prompt terbuka sehingga Hachimi dapat menggunakan penerjemah (namun, penerjemah tidak akan menampilkan apa pun melalui jendela ini).

**Penerjemah "Auto translate UI" tidak direkomendasikan.**

### Untuk py3translationServer
Jika menurutmu sudah menyiapkan model dengan benar, tidak perlu konfigurasi tambahan. Jalankan saja servernya dan akan berfungsi.

## URL Kustom
Jika server terjemahanmu berjalan di port atau mesin berbeda, kemungkinan kamu harus menghubungkan Hachimi di alamat yang berbeda.

Caranya, atur pengaturan `sugoi_url` secara manual di file konfig. Contoh:
```json
"sugoi_url": "http://127.0.0.1:14366"
```

Biasanya, nilai ini mungkin tidak ada atau disetel ke `null` dalam berkas konfigurasi. Ini normal, dan Hachimi akan tetap terhubung ke `http://127.0.0.1:14366` jika tidak diatur secara manual.