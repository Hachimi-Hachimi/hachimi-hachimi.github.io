# Installation guide (Global / TW / CN)
<small>

View this page in other languages:

[Tiếng Việt](/vi/docs/hachimi/getting-started.html) | [Deustch](/de/docs/hachimi/getting-started.html) | [简体中文](/zh-cn/docs/hachimi/getting-started.html) | [繁體中文](/zh-tw/docs/hachimi/getting-started.html) | [Bahasa Indonesia](/id/docs/hachimi/getting-started.html) | [日本語](/ja/docs/hachimi/getting-started.html)

</small>

::: warning
This project is inherently against the game's TOS and The Game Developer would likely want it gone if they were ever to learn about it.  
Use at your own risk, and please share names and links in a responsible manner. The community asks you to particularly refrain from doing so in places where it would attract certain attention from the developers.
:::

## Installation process

### Windows

- Using the installer: Download the latest `hachimi_installer.exe` from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases). Run it and click on Install. No need to modify any of the options if you don't know what they mean.
- Manually: Download the latest `hachimi.dll` from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) and put it in the game's install directory. Rename it to `winhttp.dll`, `version.dll` or `opengl32.dll`.

::: tip
If you aren't interested in using Hachimi's translation features, you can disable them by exiting the First-Time Setup window when you first launch the game with Hachimi installed. 
Installing translations onto the global version of the game may result in corrupted textures. This can be resolved by disabling translations (in Config Editor > Gameplay), then restarting the game.
:::

### Android

::: warning
Hachimi cannot be used with these versions without root.
:::

#### Zygisk
Download the latest Zygisk zip from the [Releases page](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases) and install it with Magisk or KernelSU (with Zygisk Next).


## First Time Setup
Upon launching the game for the first time after installing Hachimi, you should be greeted with this dialog:

![First Time Setup](/assets/first-time-setup.jpg)

::: info
If you don't see it, it means that Hachimi has not been installed correctly. Please read the install guide carefully and try again, or look at [Troubleshooting](troubleshooting.md).
:::

Tap on Next and choose your preferred translation source, then tap on Done to save your configuration and start the update check.

Hachimi will now prompt you to download a new translation update, click on Yes to start downloading the translation files.
