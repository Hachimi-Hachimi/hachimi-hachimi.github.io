# Troubleshooting
[[toc]]

## General

### "Communication error" messages when attempting to start the game

You may need a VPN to connect to the game.  See [this page](https://gametora.com/umamusume/playing-on-dmm) for more details. If

### Physics (hair, clothing, etc.) are stiff when running at 60+ FPS

Change the "Physics update mode" setting to "Mode60FPS". This setting is available in the Config Editor in the "Gameplay" tab.

## Windows

### The game won't start after Hachimi is installed

Make sure you used the right version of Hachimi. At the time of writing (Hachimi v0.14.1), Hachimi has separate versions for the global Steam release and the Japanese DMM versions of the game.
For the global Steam version of the game, you should be using the "hachimi_installer.exe" file from the [most recent global release](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases/latest).
For the Japanese DMM version of the game, you should be using the "hachimi_installer.exe" file from the [most recent JP release](https://github.com/Hachimi-Hachimi/Hachimi/releases/latest).
After you've installed Hachimi on the Japanese DMM version of the game, you need to restart your computer. **Click "Restart" in the shutdown menu, don't just shut down your computer and then turn it back on.**

<!-- 
    TODO: add more details about weird edge cases like running DMM JP and global Steam versions simultaneously and old unsupported versions of CarrotJuicer?
-->

### Steam: Can't open the Steam overlay

The Steam overlay interferes with Hachimi's overlay. To enable the Steam overlay, open the Hachimi overlay and check the "Disable overlay (GUI)" checkbox in the "General" tab, press Save, and then restart the game. 
When you want to re-enable Hachimi's overlay, open Hachimi's config file (config.json) in a text editor and change the `disable_gui` value from `true` back to `false`, then restart the game. This config file is located in the hachimi folder inside the game's installation folder.

### DMM: Input registering at the wrong spot on the screen after the window is resized

This is a known issue with Hachimi on the Japanese DMM version of the game (fix coming soon™). For now, just don't resize the window.

### DMM: Can't play certain games after installing Hachimi

The version of Hachimi for the JP DMM version of the game uses DotLocal DLL redirection to load, which some anticheats (such as Vanguard, used in Valorant and League of Legends) hate seeing enabled. 
You need to disable DLL redirection whenever you want to play a game that uses Vanguard or another anticheat that checks for the same thing. 
[DotLocalToggle](https://github.com/LeadRDRK/DotLocalToggle/releases/) is a small program that lets you quickly toggle DotLocal DLL redirection. 

### DMM: In full screen mode: Input registering at the wrong spots on the screen / Game resolution stretched

Please make sure that you've set the `full_screen_mode` and `resolution_scaling` options correctly. If your screen have a resolution higher than 1080p, please set `resolution_scaling` to one of the other options. 
If your screen have an aspect ratio that's not 16:9, please use the Exclusive full screen mode.

## Android

### Patching failed

Make sure that you selected both of the split APK files (base and config) or the combined XAPK file. You can tap and hold to select multiple files in the file picker. 
The recommended place to get the APKs from is [Qoopy](https://qoopy.leadrdrk.com/), use ID 6172. If you're on a Xiaomi device, try disabling MIUI optimization, it can potentially mess with the install.

### この端末でのプレイは許可されていません (You are not authorized to play on this device) error 

If your device is rooted, you will need to hide root from the game. Magisk's denylist appears to work, as do other tools such as Shamiko. 
If you *aren't* rooted and are receiving this error message, you may need to use a VPN when starting the game. See the "Communication error" section.

### I/O error: Permission denied (os error 13)

This could happen due to the new scoped storage introduced on Android 10, which makes Hachimi fail to create its data directory. 
To workaround this, open your file manager, go to Android/media and create a folder named "jp.co.cygames.umamusume". Relaunch the game and the problem should be fixed.

### I/O error: File exists (os error 17)

Reboot your device and try launching the game again. If the error persists, ask for help in the Discord server.

### Crashing after launch

Open your file manager and navigate to `Android/media`. Create a folder named "jp.co.cygames.umamusume". 
Inside of that folder, create a folder named "hachimi". Finally, download the config file below and put it inside the "hachimi" folder (make sure that it's called "config.json").

[Download config file](https://files.leadrdrk.com/hachimi/android-compat/config.json)

This might be needed for some devices and emulators.