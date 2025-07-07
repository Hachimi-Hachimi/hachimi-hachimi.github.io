# Getting started
<small>

View this page in other languages:

[Tiếng Việt](/vi/docs/hachimi/getting-started.html) | [Deustch](/de/docs/hachimi/getting-started.html) | [简体中文](/zh-cn/docs/hachimi/getting-started.html) | [繁體中文](/zh-tw/docs/hachimi/getting-started.html) | [Bahasa Indonesia](/id/docs/hachimi/getting-started.html) | [日本語](/ja/docs/hachimi/getting-started.html)

</small>

## ⚠️ Please don't link to this website or the GitHub repo
We understand that you want to help people install Hachimi and have a better experience playing the game. However, this project is inherently against the game's TOS and The Game Developer most definitely wants it gone if they were ever to learn about it.

While sharing in your self-managed chat services and through private messaging is fine, we humbly ask that you refrain from sharing links to this project on public facing sites, or to any of the tools involved.

Or share them and ruin it for the dozens of Hachimi users. It's up to you.

### If you're going to share it anyways
Do what you must, but we would respectfully request that you try to label the game as "UM:PD" or "The Honse Game" instead of the actual name of the game, to avoid search engine parsing.

## Compatibility

Please check the compatibility before installing.

### Windows
| Version | Supported |
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
- ✅ - Fully supported.
- ⚠️ - Works, but the game itself won't due to external circumstances (e.g. the AC triggering).
- ❔ - Untested. Might work, but don't count on it.
- ❌ - Not supported.

## Installation

The installation process is different depending on the version of the game. Click on one of these to view them.

<details>
<summary style="font-size: 20px; font-weight: 600;">JP</summary>

### Windows

As of v0.13.0, Hachimi currently supports two loading methods with different installation procedures. **Choose only one method, and either use the installer or do it manually, do NOT use multiple things at once.**

#### Method 1: DotLocal DLL redirection (UnityPlayer.dll) (recommended)

::: warning
Some anti cheats such as Vanguard hates seeing DLL redirection enabled on your system, even if it doesn't affect the game it's trying to protect directly. Disable DLL redirection whenever you want to play a game that uses Vanguard or another anti cheat that checks for the same thing.
:::

::: info
Game not launching after installing? Navigate to the game's install folder, right click on the game's exe file, open Properties, and enable **"Disable fullscreen optimizations"** in the Compatibility tab.
:::

- **Using the installer:** Download the latest `hachimi_installer.exe` from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi/releases). Run it, **choose "UnityPlayer.dll" as the target** and click on Install.

When installing for the first time, the installer might ask to you enable DotLocal DLL redirection. Press OK and it will be enabled for you. **You will need to restart your computer after enabling for it to work.**

- **Manually**
1. Refer to the "Configure the registry" section in [this article](https://learn.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-redirection#optional-configure-the-registry) to enable DLL redirection. Restart your computer after you're done.
2. Download the latest `hachimi.dll` from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi/releases).
3. In the game install folder, create a new folder named `umamusume.exe.local` and move the downloaded DLL file there. Rename it to `UnityPlayer.dll`.
4. Download the latest `cellar.dll` from the [Cellar Releases page](https://github.com/Hachimi-Hachimi/Cellar/releases).
5. Move it to `umamusume.exe.local` and rename it to `apphelp.dll`.

::: info
Tip for people who wants to play LoL/Valorant: You'll need to disable DLL redirection every time you want to play those games. You can use this program to quickly enable/disable it: https://github.com/LeadRDRK/DotLocalToggle/releases. Run it until it says it has disabled DLL redirection and restart your computer.
:::

#### Method 2: Plugin shimming (cri_mana_vpx.dll)

::: warning
This method is no longer working after a recent update. Please follow the guide below to migrate to method 1.
:::

#### Migrating from method 2 to method 1
You might want to switch from method 2 to method 1, however this process is not exactly straightforward compared to the opposite (for 1 -> 2, just uninstall and reinstall). 

You will need to cleanly uninstall Shinmy first; make sure that it isn't running when you're deleting it because it survives for up to 30 seconds after DMM closes and can restore itself. **The easiest way to do this is to just use the installer** (which also happens to be an uninstaller), it will clean up everything properly for you.

After that, you can just uninstall Hachimi as normal.

### Android

The easiest way to install is by using [UmaPatcher](https://github.com/LeadRDRK/UmaPatcher) which will modify the APK for you. It's recommended that you not have the game already installed before using this.

::: danger
If you have already installed the game, you must uninstall it before installing the patched version for the first time. You can update the game later without uninstalling it by installing another patched version.
:::

::: danger
Do not get your APK from APKPure, it's known to cause problems.
:::

1. Download and install the latest version of UmaPatcher from the [Releases page](https://github.com/LeadRDRK/UmaPatcher/releases).
2. Prepare an installation package for the game, which can be:
    - **Split APK files:** A base APK file and one of the split config APKs (config.arm64_v8a, config.armeabi-v7a, etc.),
    choose only one split config that's suitable for your device.
    This is currently only used by the JP version.
    - **Single APK file**: A full, fat APK file.
    - **XAPK file**: A ZIP file that contains the split APK files (with the extension renamed to XAPK).
3. Open UmaPatcher and choose "Normal install". Select the file(s) that you have prepared.
4. Tap on Patch to start the patching and installation process.

You'll need to repeat this process from step 2 again whenever the app updates.

#### For rooted users
UmaPatcher includes a rooted install option that doesn't require you to uninstall the game and let the game update normally from any app store.

With the game installed, tap on the card on top of the home screen to select the app that you want to patch (if needed). Then select "Direct install" as the install method and tap on Patch. No input files are needed.

You'll need to install it again whenever the app updates.

#### Manually
1. Build or download the prebuilt libraries from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi/releases).
2. Extract the APK file of the game. You might want to use [apktool](https://apktool.org/) for this.
3. Rename the `libmain.so` file in each of the folders inside `lib` to `libmain_orig.so`.
4. Copy the proxy libraries to their corresponding folders (e.g. `libmain-arm64-v8a.so` goes to `lib/arm64-v8a`). Rename them to `libmain.so`.
5. Build the APK file and install it.

</details>

<details>
<summary style="font-size: 20px; font-weight: 600;">Global / TW / CN</summary>

### Windows

- Using the installer: Download the latest `hachimi_installer.exe` from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases). Run it and click on Install. No need to modify any of the options if you don't know what they mean.
- Manually: Download the latest `hachimi.dll` from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) and put it in the game's install directory. Rename it to `winhttp.dll`, `version.dll` or `opengl32.dll`.

### Android

::: warning
Hachimi cannot be used with these versions without root.
:::

#### Zygisk
Download the latest Zygisk zip from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) and install it with Magisk or KernelSU (with Zygisk Next).

</details>

## First Time Setup
Upon launching the game for the first time after installing Hachimi, you should be greeted with this dialog:

![First Time Setup](/assets/first-time-setup.jpg)

*If you don't see it, it means that Hachimi has not been installed correctly. Please check the install guide and try again.*

Tap on Next and choose your preferred translation repo, then tap on Done to save your configuration and start the update check.

Hachimi will now prompt you to download a new translation update, click on Yes to start downloading the translation files.