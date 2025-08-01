# Troubleshooting
[[toc]]

## General

### "Communication error" messages when attempting to start the game

You may need a VPN to connect to the game.  See [this page](https://gametora.com/umamusume/playing-on-dmm) for more details.
If you have both the global Steam version and the Japanese DMM version of the game installed, you will need to enable case sensitivity in the game's data download directory, `C:\Users\YOUR_USERNAME_HERE\AppData\LocalLow\Cygames`:
1. Move everything out of C:\Users\YOUR_USERNAME_HERE\AppData\LocalLow\Cygames temporarily. This folder needs to be empty! If you have both versions of the game installed, temporarily rename one version's folder or Windows will attempt to overwrite the files when you move them. (Add a 1 to the end of the folder or something similar.)
2. Open a Powershell window type the following: `fsutil.exe file setCaseSensitiveInfo C:\Users\YOUR_USERNAME_GOES_HERE\AppData\LocalLow\Cygames enable`
3. Put all your files back into your Cygames folder. Global uses "Umamusume", JP uses "umamusume".

### Physics (hair, clothing, etc.) are stiff when running at 60+ FPS

Change the "Physics update mode" setting to "Mode60FPS". This setting is available in the Config Editor in the "Gameplay" tab.

## Windows

### The game won't start after Hachimi is installed

Make sure you used the right version of Hachimi. At the time of writing (Hachimi v0.14.1), Hachimi has separate versions for the global Steam release and the Japanese DMM versions of the game.
For the global Steam version of the game, you should be using the "hachimi_installer.exe" file from the [most recent global release](https://github.com/Hachimi-Hachimi/Hachimi-Unity2020/releases/latest).
For the Japanese DMM version of the game, you should be using the "hachimi_installer.exe" file from the [most recent JP release](https://github.com/Hachimi-Hachimi/Hachimi/releases/latest).
After you've installed Hachimi on the Japanese DMM version of the game, you need to restart your computer. **Click "Restart" in the shutdown menu, don't just shut down your computer and then turn it back on.**

<!-- 
    TODO: add more details about weird edge cases like old unsupported versions of CarrotJuicer?
-->

### Steam: Corrupted text and images

If you accidentally installed translations on the Steam version, you will see corrupted text and images. This can be fixed by disabling translations. 
Open the Hachimi overlay with the right arrow key, the open the Config Editor and check the "Disable translations" checkbox. After this, restart the game.

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

### Cannot log in via a Google Play account

You cannot log in to the patched version of the game using a Google Play account and must use a Data Link password instead. 
If you have a Data Link password already created, log in to that account from the title screen (☰ > Data Link). 
If you *don't* have a Data Link password, you will need to uninstall the patched version of the game, reinstall the unpatched version of the game, log in via your Google Play account, then create a Data Link password. 
After that, you can repeat the patching process and then log in using the created Data Link password.
Alternatively, you may log in to a Cygames ID to link your account data.

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