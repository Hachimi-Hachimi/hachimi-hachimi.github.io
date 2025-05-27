# Troubleshooting
- **I/O error: Permission denied (os error 13)**

This could happen due to the new scoped storage introduced on Android 10, which makes Hachimi fail to create its data directory. To workaround this, open your file manager, go to Android/media and create a folder named "jp.co.cygames.umamusume". Relaunch the game and the problem should be fixed.


- **In full screen mode: Input registering at the wrong spots on the screen / Game resolution stretched**

Please make sure that you've set the `full_screen_mode` and `resolution_scaling` options correctly. If your screen have a resolution higher than 1080p, please set `resolution_scaling` to one of the other options. If your screen have an aspect ratio that's not 16:9, please use the Exclusive full screen mode.


- **Crashing after launch on Android**

Open your file manager and navigate to `Android/media`. Create a folder named "jp.co.cygames.umamusume". Inside of that folder, create a folder named "hachimi". Finally, download the config file below and put it inside the "hachimi" folder (make sure that it's called "config.json").

[Download config file](https://files.leadrdrk.com/hachimi/android-compat/config.json)

This might be needed for some devices and emulators.