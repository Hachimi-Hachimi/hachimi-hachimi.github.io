# 故障排除
[[toc]]

## 常规

### 尝试启动游戏时出现“通信错误”消息

您可能需要 VPN 才能连接到游戏。请参阅[此页面](https://gametora.com/umamusume/playing-on-dmm)以获取更多信息。如果您同时安装了国际 Steam 版和日语 DMM 版游戏，则需要在游戏数据下载目录中启用大小写区分。`C:\Users\您的用户名\AppData\LocalLow\Cygames`:
1. 将 C:\Users\您的用户名\AppData\LocalLow\Cygames 路径下的所有内容暂时移出，此文件夹必须为空！如果您同时安装了两个版本的游戏，请暂时将其中一个版本的文件夹重命名，否则 Windows 会在您移动文件时尝试覆盖它们（请尝试在文件夹末尾添加 1 或类似的数字等）。
2. 打开 Powershell 窗口并输入以下内容：`fsutil.exe file setCaseSensitiveInfo {path to your \LocalLow\Cygames} enable`。
3. 将文件移回 Cygames 文件夹，开启大小写区分后，国际版将使用 "Umamusume" 文件夹，日语版将使用 "umamusume" 文件夹。

### 以 60+ FPS 运行时，物理效果（头发、衣服等）会变得僵硬

将“物理引擎更新模式”设置更改为 **“Mode60FPS”** 。此设置可以在配置编辑器的“游戏玩法”选项卡中进行调整。

## Windows

### 安装 Hachimi 后游戏无法启动

确保您使用了正确版本的 Hachimi。在撰写本文时（Hachimi v0.14.1），Hachimi 已分别针对国际 Steam 版和日本 DMM 版发布了不同的版本。对于国际 Steam版，您应该使用[最近的国际版发布页面](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases/latest)中的 "hachimi_installer.exe"。对于日语 DMM 版，您应该使用[最近的日语版发布页面](https://github.com/Hachimi-Hachimi/Hachimi/releases/latest)中的 "hachimi_installer.exe"。在日语 DMM 版上安装 Hachimi 后，您需要重启您的计算机。**请点击关机菜单中的“重启”，而不要直接关机然后再开机。**

<!-- 
    待办：添加更多关于奇怪边缘案例的细节，比如CarrotJuicer的旧版本不受支持的情况？
-->

### Steam: 无法打开 Steam 覆盖层

Steam 覆盖层会干扰 Hachimi 的覆盖层。要启用 Steam 覆盖层，请打开配置编辑器，并在“常规”选项卡中勾选“禁用覆盖层（GUI）”复选框并点击“保存”，然后重新启动游戏。如果您想重新启用 Hachimi 的覆盖层，请在文本编辑器中打开 Hachimi 的配置文件 (config.json)，将值`disable_gui`从 `true`改为`false`，然后重新启动游戏。此配置文件位于游戏安装文件夹中的 hachimi 文件夹中。

### DMM: 调整窗口大小后，输入位置与实际点击位置不一致

这是日语 DMM 版游戏中 Hachimi 的已知问题（即将修复™）。目前，请不要调整窗口大小。

### DMM: 安装 Hachimi 后无法游玩某些游戏

适用于日语 DMM 版游戏的 Hachimi 版本使用 DotLocal DLL redirection 来加载，一些反作弊软件（例如《无畏契约》和《英雄联盟》中使用的 Vanguard）并不喜欢看到此功能开启。当您想玩使用 Vanguard 或其他类似的反作弊软件的游戏时，您需要禁用 DLL 重定向。您可以使用 [DotLocalToggle](https://github.com/LeadRDRK/DotLocalToggle/releases/) 这个小程序来快速开启或关闭 DotLocal DLL redirection，开启或关闭后，您必须重启您的计算机才能进行应用。

### DMM: 全屏模式下：输入位置不正确/游戏分辨率拉伸

请确保您已正确设置 `full_screen_mode` 和 `resolution_scaling` 这两个选项。如果您的屏幕分辨率高于 1080p，请将 `resolution_scaling` 设置为其他可用选项。如果您的画面比例不是 16:9，请使用**独占全屏**模式。

## Android

### 补丁失败

确保您选择了两个拆分的 APK 文件（基础 APK 和拆分配置 APK）或合并的 XAPK 文件。您可以在文件选择器中点击并按住以选择多个文件。推荐从 [Qoopy](https://qoopy.leadrdrk.com/) 输入 ID 6172来获取APK文件。如果您使用的是小米设备，请尝试禁用 MIUI 优化，这可能会影响安装。

### この端末でのプレイは許可されていません（无法经由此设备游玩）错误

如果您的设备已 root，则需要在游戏中隐藏 root 权限。可以使用 Magisk 的黑名单，也可以使用其他工具（例如 Shamiko）。如果您*没有*获取 root 权限却收到此错误信息，则可能需要在启动游戏时使用 VPN。请参阅“通信错误”部分。

### I/O error: Permission denied (os error 13)

这可能是由于 Android 10 引入了分区存储，导致 Hachimi 无法创建其数据目录。要解决此问题，请打开文件管理器，前往 Android/media 并创建一个名为 “jp.co.cygames.umamusume” 的文件夹。重新启动游戏即可解决问题。

### I/O error: File exists (os error 17)

重启设备并尝试再次启动游戏。如果错误仍然存在，请在 Discord 服务器中寻求帮助。

### 启动游戏时崩溃

打开文件管理器并导航至`Android/media`并新建一个名为 "jp.co.cygames.umamusume" 的文件夹，在新建的文件夹内再创建一个名为 "hachimi" 的文件夹。最后，下载下面的配置文件，并将其放入 "hachimi" 文件夹中（确保文件的名称为config.json）。

[下载配置文件](https://files.leadrdrk.com/hachimi/android-compat/config.json)

某些设备和模拟器可能需要这样做。
