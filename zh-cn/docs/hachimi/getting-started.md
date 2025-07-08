# 入门指南

## ⚠️ 请不要分享这个网站与 GitHub 仓库的相关链接
我们非常理解您希望帮助别人安装 Hachimi 来与其获得更好的游戏体验。但是，此项目本质上违反了游戏的服务条款，如果被游戏的开发商得知，他们肯定会希望这个项目灰飞烟灭。

您可以私下与别人分享，这完全没有问题，但是我们请求您不要在公开的网站上分享此项目的相关链接，也不要分享任何相关工具的链接。

如果进行分享宣传，这可能会破坏很多 Hachimi 用户的体验，请三思而后行。

### 如果您执意要分享
我们无法改变您的想法，但我们建议您在提及游戏本体时，使用 “UM:PD” 或 “某赛马拟人化游戏” 等隐语去代替游戏名字，这样能避免被搜索引擎剖析到。

## 兼容性

请在安装前检查兼容性。

### Windows
| 游戏版本 | 支持情况 |
| --- | :---: |
| 日语 DMM 版（JP DMM） | ✅ |
| 日语 Steam 版 (JP Steam) | ❌ |
| 韩语版（KR） | ❌ |
| 国际版（Global） | ✅ |

### Android

| 游戏版本 | 普通安装 | 直接安装 | Zygisk |
| --- | :---: | :---: | :---: |
| 日语版（JP） | ✅ | ✅ | ✅ |
| 韩语版（KR） | ❌ | ❌ | ❌ |
| 繁体中文 Google Play 版（TW GP） | ⚠️ | ⚠️ | ✅ |
| 繁体中文 Mycard 版（TW MC） | ⚠️ | ⚠️ | ✅ |
| 简体中文版（CN） | ⚠️ | ⚠️ | ✅ |
| 国际版（Global） | ⚠️ | ⚠️ | ❔ |
- ✅ - 完全支持。
- ⚠️ - 可能支持，但游戏可能因为外部因素导致无法正常运行（例如：反作弊）。
- ❔ - 未经测试。理论上支持，但并不保证。
- ❌ - 不支持。

## 安装

安装过程根据游戏版本而有所不同。请点击其中一个进行查看。

<details>
<summary style="font-size: 20px; font-weight: 600;">日语版</summary>

### Windows

从 v0.13.0 版本开始，Hachimi 目前支持两种不同的安装方法。 **请注意：只能使用一种安装方法，无论使用安装程序还是手动安装，不要同时使用两种安装方法。**

#### 方法1：DotLocal DLL redirection（.local 文件 DLL 重定向）（UnityPlayer.dll）（推荐使用）

::: warning
部分反作弊系统（如 Vanguard）并不喜欢你启用的 DLL 重定向，即使该操作不会直接影响游戏运行。建议在游玩采用 Vanguard 等同类反作弊系统的游戏时，务必提前禁用 DLL 重定向功能。
:::

::: info
游戏在安装完成后无法运行？请定位到游戏的安装路径，右键 `umamusume.exe` 文件，打开属性，转到兼容性选项卡，并打开**禁用全屏优化**。
:::

- **使用安装程序**：从[发布页面](https://github.com/Hachimi-Hachimi/Hachimi/releases)下载最新的`hachimi_installer.exe`，打开它，**在 Target 一栏选择 UnityPlayer.dll **并点击Install。

首次安装时，安装程序可能会向你询问是否开启 DotLocal DLL redirection。点击 OK ，它就会为你启用此功能。**启用后，你必须重新启动你的计算机。**

- **手动安装**
1. 请参阅[这篇文章](https://learn.microsoft.com/zh-cn/windows/win32/dlls/dynamic-link-library-redirection#optional-configure-the-registry)中的“配置注册表”部分去开启DLL重定向，并在完成后重新启动你的计算机。
2. 从[发布页面](https://github.com/Hachimi-Hachimi/Hachimi/releases)下载最新的`hachimi.dll`。
3. 在游戏的安装路径新建一个名为`umamusume.exe.local`的文件夹，将下载好的DLL移动到这里，并将其命名为`UnityPlayer.dll`。
4. 从[Cellar发布页面](https://github.com/Hachimi-Hachimi/Cellar/releases)下载最新的`cellar.dll`。
5. 将其移动至`umamusume.exe.local`并命名为`apphelp.dll`。

::: info
给想玩英雄联盟（LoL）以及无畏契约（Valorant）的玩家的一些提示：当你每次想玩这些游戏时，你都要禁用 DLL 重定向。你可以使用这个程序去快速启用/禁用它：https://github.com/LeadRDRK/DotLocalToggle/releases 运行它，直到它显示已禁用（disabled）DLL 重定向，然后重新启动计算机。
:::

#### 方法2：Plugin shimming（插件兼容适配）（cri_mana_vpx.dll）

::: warning
此方法在最近的更新以后不再有效，请按照下面的指引迁移到方法1。
:::

#### 从方法2迁移到方法1
您可能需要从方法2切换至方法1，但此过程相比反向操作（方法1到方法2只需卸载后重装）更为复杂。

首先需要彻底卸载 Shinmy，删除时请确保其未在后台运行，因为它会在 DMM 关闭后存活最多 30 秒，并可能自我恢复。**最简单的方法是直接使用安装程序**（该程序同时支持卸载功能），它会自动为您清理所有残留文件。  

完成上述操作后，即可正常卸载 Hachimi。

### Android

最简单的方法是使用 [UmaPatcher](https://github.com/LeadRDRK/UmaPatcher)，它会自动帮你修改 apk 文件，建议在使用此功能前，确保未提前安装原版游戏。

*从 v1.0.1 版本开始，UmaPatcher 将支持**简体中文**，以下内容将以简体中文为准。*

::: danger
若您已安装原版游戏，首次安装修改版前必须将其卸载。后续更新时，可直接安装新版修改版而无需卸载。
:::

::: danger
请不要从 APKPure 下载你的 apk，这样会导致一些问题。
:::

1. 从[发布页面](https://github.com/LeadRDRK/UmaPatcher/releases)下载最新的UmaPatcher。
2. 准备一个游戏的安装包，可以是以下几种：
    - **拆分 APK 文件:** 一个基础 APK 文件和其中一个拆分配置 APK（例如 config.arm64_v8a，config.armeabi-v7a 等)，
    请仅选择适合您设备的拆分配置。
    此功能目前仅有日语版使用。
    - **单一 APK 文件**: 一个完整的，未拆分的 APK 文件。
    - **XAPK 文件**: 一个包含拆分后的 APK 文件的 ZIP 压缩包（将扩展名重命名为了 .xapk）。
3. 运行 UmaPatcher 并选择 “普通安装”，并选择你已经准备好的游戏安装包。
4. 点击 “开始补丁” 按钮即可开始进行安装流程。

注意：应用更新后需从第二步开始重新执行安装流程。

#### 对于已经 root 的用户
UmaPatcher 包含 root 安装选项，无需卸载游戏即可使用，且游戏仍可通过任意应用商店正常更新。

游戏安装后，点击主页上方的卡片选择你要安装的游戏（如果需要的话）。然后选择 “直接安装（需要root）” 并点击 “开始补丁” 即可。不需要任何额外的文件。

注意：应用更新后需重新执行安装流程。

#### 手动安装
1. 自行构建或从[发布页面](https://github.com/Hachimi-Hachimi/Hachimi/releases)下载预编译库文件。
2. 提取游戏的APK文件，你也许会用得上[apktool](https://apktool.org/)这个软件。
3. 将`lib`文件夹内的所有文件夹里的`libmain.so`重命名为`libmain_orig.so`。
4. 将代理库文件复制至对应架构文件夹（例如：`libmain-arm64-v8a.so` 应放入 `lib/arm64-v8a`），并将其重命名为 `libmain.so`。
5. 构建APK文件并安装。

</details>

<details>
<summary style="font-size: 20px; font-weight: 600;">国际版 / 繁体中文版 / 简体中文版</summary>

### Windows（仅限国际版）

- **使用安装程序**：从[发布页面](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases)下载最新的`hachimi_installer.exe`，打开它并点击 Install。如果你不知道里面的选项是什么意思，就请不要修改。
-**手动安装**：从[发布页面](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases)下载最新的`hachimi.dll`并将其放在游戏安装目录，并将其重命名为`winhttp.dll``version.dll`或`opengl32.dll`。

### Android

::: warning
Hachimi 必须在有 root 的环境下才能在这些版本上使用。
:::

#### Zygisk

请在[发布页面](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases)下载最新的 Zygisk 模块压缩包并将其安装在 Magisk 或 KernelSU（安装了 Zygisk Next 模块）上。

</details>

## 初始化设置（First Time Setup）
成功安装 Hachimi 后，初次启动游戏将显示如下对话框：

![First Time Setup](/assets/first-time-setup.jpg)

*如果没有显示此对话框代表 Hachimi 没有被正确安装，请检查你的安装步骤并重试。*

*从 v0.14.0 版本开始，你可以在此页面点击 “Language” 将 Hachimi 内置 GUI 语言切换为简体中文。*

点击 “下一步”，选择您所需的翻译仓库，随后点击 “完成” 保存配置并启动更新检查。

Hachimi 将提示您下载新翻译更新，点击 “是” 即可开始下载翻译文件。
