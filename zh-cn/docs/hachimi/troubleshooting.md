# 故障排除
- **I/O error: Permission denied (os error 13)**

这可能是由于 Android 10 引入了分区存储，导致 Hachimi 无法创建其数据目录。要解决此问题，请打开文件管理器，前往 Android/media 并创建一个名为 “jp.co.cygames.umamusume” 的文件夹。重新启动游戏即可解决问题。

- **全屏模式下：输入位置不正确/游戏分辨率拉伸**

请确保你已正确设置 `full_screen_mode` 和 `resolution_scaling` 这两个选项。如果你的屏幕分辨率高于 1080p，请将 `resolution_scaling` 设置为其他可用选项。如果你的画面比例不是 16:9，请使用**独占全屏**模式。

- **在 Android 设备上启动时崩溃**

打开文件管理器并导航至 `Android/media` ，新建一个名为 "jp.co.cygames.umamusume" 的文件夹，在该文件夹中再创建一个名为 "hachimi" 的文件夹。最后，下载下面的配置文件，并将其放入 "hachimi" 文件夹中（确保文件的名称为config.json）。

[下载配置文件](https://files.leadrdrk.com/hachimi/android-compat/config.json)

某些设备和模拟器可能需要这样做。