# Troubleshooting
[[toc]]

## General

### "Communication error" messages when attempting to start the game

You may need a VPN to connect to the game.  See [this page](https://gametora.com/umamusume/playing-on-dmm) for more details.
If you have both the global Steam version and the Japanese DMM version of the game installed, you will need to enable case sensitivity in the game's data download directory, `C:\Users\YOUR_USERNAME_HERE\AppData\LocalLow\Cygames`:
::: info
Make sure you replace the `YOUR_USERNAME_HERE` text in the following file paths with your Windows username.
:::
1. Move everything out of `C:\Users\YOUR_USERNAME_HERE\AppData\LocalLow\Cygames` temporarily. This folder needs to be empty! If you have both versions of the game installed, temporarily rename one version's folder or Windows will attempt to overwrite the files when you move them. (Add a 1 to the end of the folder or something similar.)
2. Open a PowerShell window and paste in the following command: `fsutil.exe file setCaseSensitiveInfo $env:USERPROFILE\AppData\LocalLow\Cygames enable`
    - If you receive an error, open a PowerShell window as an administrator and run the following command: `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`, then re-run the previous command.
3. Put all your files back into your Cygames folder. Global uses "Umamusume", JP uses "umamusume".

### Physics (hair, clothing, etc.) are stiff when running at 60+ FPS

Change the "Physics update mode" setting to "Mode60FPS". This setting is available in the Config Editor in the "Gameplay" tab.

### Corrupted images/sprites
Update your translations. Your source might be out of date, ask its maintainers.

### Something isn't translated
Translations are provided by volunteers in the community offering up their time. Many things are not yet done. Check in with your chosen translation source and try to support its translators.

## Windows

### The game won't start after Hachimi is installed

Try one of the following: 
- Make sure you used the right version of Hachimi for your game version (Japanese or Other). Find the right one on the [getting started](getting-started.md) page.
- Make sure to restart your computer after enabling DotLocal. **Click "Restart" in the shutdown menu, don't just shut down your computer and then turn it back on.**
- On DMM, try restarting the DMM Launcher.
- Navigate to the game's install folder, right click on the game's exe file, open Properties, and try **one or more** of the following, in order:
    - Enable **"Disable fullscreen optimizations"** in the Compatibility tab.
    - Enable **"High DPI override with Application"**.
- Go to Windows Settings > Display > Graphics add the game's exe file there and tick in its options **"Don't use optimizations for windowed games"**.
- Force DMM Launcher to run as admin

<!-- 
    TODO: add more details about weird edge cases like old unsupported versions of CarrotJuicer?
-->

### Global: Corrupted text and images

If you accidentally installed translations on the Global version, you will see corrupted text and images. This can be fixed by disabling translations. 
Open the Hachimi overlay with the right arrow key, then open the Config Editor and check the "Disable translations" checkbox. After this, restart the game.

### Steam: Issues with GUI/overlay

The Steam overlay can sometimes interfere with Hachimi's overlay. Disable one of them (Steam recommended). 
For Hachimi's: open the Hachimi menu and check the "Disable overlay (GUI)" checkbox in the "General" tab, press Save, and restart the game. 
When you want to re-enable Hachimi's overlay, open Hachimi's config file (config.json) in a text editor and change the `disable_gui` value from `true` back to `false`, then restart the game. This config file is located in the `hachimi` folder inside the game's installation folder.

### DMM: Input registering at the wrong spot on the screen after the window is resized

This is a known issue with Hachimi on the Japanese DMM version of the game (fix coming soon™). For now, just don't resize the window.

### DMM: Can't play certain games after installing Hachimi

The version of Hachimi for the JP DMM version of the game uses DotLocal DLL redirection to load, which some anticheats (such as Vanguard, used in Valorant and League of Legends) hate seeing enabled. 
You need to disable DLL redirection whenever you want to play an affected game. 
[DotLocalToggle](https://github.com/LeadRDRK/DotLocalToggle/releases/) is a small program that lets you quickly toggle DotLocal DLL redirection. 

### DMM: In full screen mode: Input registering at the wrong spots on the screen / Game resolution stretched

Please make sure that you've set the `full_screen_mode` and `resolution_scaling` options correctly. If your screen has a resolution higher than 1080p, please set `resolution_scaling` to one of the other options. 
If your screen has an aspect ratio that's not 16:9, please use the Exclusive full screen mode.

### Sound issues
This is a bug in the game, not Hachimi. Some users can turn on Windows Sonic without adverse effects to fix it.

## Android

### Patching failed

Make sure that you selected both the base and split APK files, or the combined XAPK file. You can tap and hold to select multiple files in the file picker. 
The recommended place to get the APKs from is [Qoopy](https://qoopy.leadrdrk.com/), use ID 6172. If you're on a Xiaomi device, try disabling MIUI Optimizations, it can potentially mess with the install.

Try to clear cache of UmaPatcher Edge, hold the app icon -> app info -> storage -> cache (if applicable) -> clear cache. If this doesn't work, try redownloading UmaPatcher Edge and import the signing key again. 


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

### Mismatched taps
Open Hachimi's menu -> Config Editor and play with the virtual resolution multiplier to find which value works best.

### Tapping doesn't register, or causes the game to crash or freeze
1. Make sure your translations are up to date. Let Hachimi update if you can and don't touch anything until it's done.
1. Open Hachimi's menu -> Config Editor and select Disable Overlay (GUI).
    - To re-enable it, open Hachimi's config file (config.json) in a text or JSON editor and change the `disable_gui` value from `true` back to `false`, then restart the game. This config file is located in `android/media/jp.co.cygames.umamusume/hachimi` (might differ with phone brand).

### Patched successfully but no translations
1. Make sure the translations are downloaded and up to date. Run the first time setup again.

If during patching you see a message mentioning `libmain.so` you can try:
1. Make sure you are on the latest Hachimi update
1. Force redownload Hachimi in the UmaPatcher settings, then patch again.
1. Reinstalling Umapatcher Edge or clearing app cache and data.
1. Restarting your device into recovery mode and wiping the cache.
