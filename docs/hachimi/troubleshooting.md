# Troubleshooting
[[toc]]

## General

### "Communication error" messages when attempting to start the game

- In some regions, you might need a VPN to connect to the game itself. See [this page](https://gametora.com/umamusume/playing-on-dmm) for more details.
- If both the **Global Steam** and **Japanese DMM** version of the game are installed, [try the steps for the constant redownloading issue below](#global-and-dmm-versions-constantly-ask-to-redownload-data).

### Global Steam and JP DMM versions constantly ask to redownload data
Both versions use the same data download directory name with different capitalization.
Case sensitivity must be enabled on this directory for them to work together.
::: tip
If you want/need to move manually: To go directly to the game's data directory, use `WinKey + R` and enter `%localappdata%low\Cygames` in the dialog.
Global uses "Umamusume" while JP uses "umamusume".
:::
1. Close the game.
1. Open the `Start Menu`, search for `PowerShell`, choose "Run as Admin".
1. Run the following command: `fsutil.exe file setCaseSensitiveInfo $env:USERPROFILE\AppData\LocalLow\Cygames enable`.
    - If you get `Error: Unsupported action` or similar, first run the following command: `Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux`, then try again.
    - If you get `Error: The directory is not empty`, temporarily move everything out of the `Cygames` folder, then try again:
    ```powershell
    New-Item -ItemType Directory "$env:USERPROFILE\AppData\LocalLow\CygamesTEMP"
    Move-Item "$env:USERPROFILE\AppData\LocalLow\Cygames\*" "$env:USERPROFILE\AppData\LocalLow\CygamesTEMP"
    ```
1. If you had to empty the Cygames folder, move everything back into it:
    ```powershell
    Move-Item "$env:USERPROFILE\AppData\LocalLow\CygamesTEMP\*" "$env:USERPROFILE\AppData\LocalLow\Cygames"
    Remove-Item "$env:USERPROFILE\AppData\LocalLow\CygamesTEMP"
    ```


### Physics (hair, clothing, etc.) are stiff when running at 60+ FPS

Change the "Physics update mode" setting to "Mode60FPS". This setting is available in the Config Editor in the "Gameplay" tab.

### Corrupted images/sprites
Update your translations. Your source might be out of date, ask its maintainers.

### Something isn't translated
Translations are provided by volunteers in the community offering up their time. Many things are not yet done. Check in with your chosen translation source and try to support its translators.

### Lyrics switch between language randomly
Unfortunately, this is an unsolved bug introduced by a game update. We are working on it.

## Windows

### The game won't start after Hachimi is installed

- Make sure you used the right version of Hachimi for your game version (Japanese or Other). Find the right one on the [getting started](getting-started.md) page.
- Make sure to restart your computer after enabling DotLocal. **Click "Restart" in the shutdown menu, don't just shut down your computer and then turn it back on.**
- On DMM, try restarting the DMM Launcher.
- On Steam, game updates can replace some modified files. Uninstall Hachimi using the installer and reinstall it again.
- Navigate to the game's install folder, right click on the game's exe file, open Properties, and try **one or more** of the following, in order:
    - Enable `Disable fullscreen optimizations` in the Compatibility tab.
    - Enable `High DPI override with Application`.
- Go to `Windows Settings > Display > Graphics`, add the game's exe file there and tick `Don't use optimizations for windowed games` in its options.
- Force DMM Launcher to run as admin.

<!-- 
    TODO: add more details about weird edge cases like old unsupported versions of CarrotJuicer?
-->

### Global: Corrupted text and images

If you accidentally installed translations on the Global version, you will see corrupted text and images. This can be fixed by disabling translations. 
Open the Hachimi overlay with the right arrow key, then open the Config Editor and check the "Disable translations" checkbox. After this, restart the game.

### Steam: Issues with GUI/overlay

The Steam overlay can sometimes interfere with Hachimi's overlay. Disable one of them (Steam recommended). 
    
To disable Hachimi's: open the Hachimi menu and check the "Disable overlay (GUI)" checkbox in the "General" tab, press Save, and restart the game. 
When you want to re-enable Hachimi's overlay, open Hachimi's config file (config.json) in a text editor and change the `disable_gui` value from `true` back to `false`, then restart the game. This config file is located in the `hachimi` folder inside the game's installation folder.

### DMM: Input registering at the wrong spot on the screen after the window is resized

This is a known issue with Hachimi on the Japanese DMM version of the game (fix coming soon™). For now, just don't resize the window.

### DMM: Can't play certain games after installing Hachimi

The version of Hachimi for the JP DMM version of the game uses DotLocal DLL redirection to load, which some anticheats (such as Vanguard, used in Valorant and League of Legends) hate seeing enabled. 
You need to disable DLL redirection whenever you want to play an affected game. 
[DotLocalToggle](https://github.com/LeadRDRK/DotLocalToggle/releases/) is a small program that lets you quickly toggle DotLocal DLL redirection.
Alternatively, play the JP Steam version.

### DMM: In full screen mode: Input registering at the wrong spots on the screen / Game resolution stretched

Please make sure that you've set the `full_screen_mode` and `resolution_scaling` options correctly. If your screen has a resolution higher than 1080p, please set `resolution_scaling` to one of the other options. 
If your screen has an aspect ratio that's not 16:9, please use the Exclusive full screen mode.

### Sound issues
This is a bug in the game, not Hachimi. Some users can turn on Windows Sonic without adverse effects to fix it.

## Android

### Patching failed

- Make sure that you selected both the base and split APK files, or the combined XAPK file. You can tap and hold to select multiple files in the file picker. 
The recommended place to get the APKs from is [Qoopy](https://qoopy.leadrdrk.com/), use ID 6172. If you're on a Xiaomi device, try disabling MIUI Optimizations, it can potentially mess with the install.

- Try to clear cache of UmaPatcher Edge, hold the app icon -> app info -> storage -> cache (if applicable) -> clear cache. If this doesn't work, try redownloading UmaPatcher Edge and import the signing key again. 


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

This might be needed for some devices and emulators:  
Open your file manager and navigate to `Android/media`. Create a folder named "jp.co.cygames.umamusume". 
Inside of that folder, create a folder named "hachimi". Finally, download [this config file](https://files.leadrdrk.com/hachimi/android-compat/config.json) and put it inside the "hachimi" folder (make sure that it's called "config.json").

### Mismatched taps
Open Hachimi's menu -> Config Editor and play with the virtual resolution multiplier to find which value works best.

### Tapping doesn't register, or causes the game to crash or freeze
:::tip
Turning off the GUI disables translation updates. You'll have to occasionally toggle it on & off again to do so.
:::
1. Make sure your translations are up to date. Let Hachimi update if you can and don't touch anything until it's done.
1. Open Hachimi's menu -> Config Editor and select Disable Overlay (GUI).
    - To re-enable it, open Hachimi's `config.json` file in a text or JSON editor and change the `disable_gui` value from `true` back to `false`, then restart the game. This file is located in `android/media/jp.co.cygames.umamusume/hachimi` (might differ with phone brand).

### Patched successfully but no translations
Make sure the translations are downloaded and up to date. Run the first time setup again.

If during patching you see a message mentioning `libmain.so` you can try, in order until one works:
1. Make sure you are on the latest Hachimi update.
1. Force redownload Hachimi in the UmaPatcher Edge settings, then patch again.
1. Clear Umapatcher Edge's app cache and data.
1. Reinstall Umapatcher Edge.
1. Restart your device into recovery mode and wipe the cache.
<!-- Todo: How safe is the last one...? -->
