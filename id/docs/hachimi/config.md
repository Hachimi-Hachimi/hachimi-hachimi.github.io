# Config

This page lists the config options and describes what they're used for.

The config file can be found at one of these locations:
- Windows: `[Game install folder]\hachimi\config.json`
- Android: `/sdcard/Android/media/jp.co.cygames.umamusume/hachimi/config.json`

**Note:** Some of these options are not available in the Config Editor and must be added manually.

- `debug_mode`: Whether to enable debug mode or not. Currently, this only enables/disables debug logging.
- `translator_mode`: Intended for translators. Logs untranslated UI strings to the console and enables some other features useful for translators.
- `disable_gui`: Disables the built-in GUI. Note that this will also disable the translation updater.
- `localized_data_dir`: The directory that contains the localized data. Must have a localized data configuration file.
- `target_fps`: The target FPS of the game. If not set, Hachimi will not attempt to override the game's FPS. Doesn't have any effect when `vsync_count` is set.
- `open_browser_url`: The default URL to open when launching the in-game browser from the GUI. Default: `https://www.google.com/`
- `virtual_res_mult`: The virtual resolution multiplier. If your device can handle it, 1.5 or 2 is a good value; anything higher than that is probably overkill. Can be applied without closing the game by doing a "Soft restart".
- `translation_repo_index`: The index URL of the translation repo. Used by the translation updater.
- `skip_first_time_setup`: Whether to skip the first time setup on startup or not. Automatically set to `true` once the first time setup dialog is closed.
- `disable_auto_update_check`: Disables auto update checks on startup.
- `disable_translations`: Disables translation features.
- `ui_scale`: The UI scale factor. Default: `1.0` (no scaling).
- `graphics_quality`: Possible values: `Default`, `Toon1280`, `Toon1280x2`, `Toon1280x4`, `ToonFull`, `Max`.
- `story_choice_auto_select_delay`: The choice select delay in seconds when using story auto mode. Default: `0.75` (seconds)
- `story_tcps_multiplier`: The story text speed ("typewriting count per second") multiplier. Default: `1.0`
- `enable_ipc`: Enables the HTTP inter-process communication server which allows other programs to control the game. Intended for use with translation tools.
- `ipc_listen_all`: Accepts IPC commands from any devices on the network. **You should NOT enable this option if you don't have a need for it.**
- `force_allow_dynamic_camera`: Forces the game to let you select dynamic camera (aka POV camera, jockey camera, etc.) in any type of race.
- `live_theater_allow_same_chara`: Forces the game to allow you to select the same character multiple times for the live concert formation. Also disables auto formation saves. **Do NOT attempt to manually save your duplicated formations.**
- `sugoi_url`: The URL to a Sugoi Offline Translator or compatible translation server for auto translations. You do not need to set this option if you're using a typical Sugoi setup. Default: `http://127.0.0.1:14366`
- `auto_translate_stories`: Allows translating stories through the auto translator.
- `auto_translate_localize`: Allows translating UI text through the auto translator. This is generally NOT recommended since most translators do not properly preserve line breaks or formatting tags.

### Windows only
- `vsync_count`: The VSync count. Set it to 1 to match your monitor's refresh rate. Refer to the [Unity docs](https://docs.unity3d.com/ScriptReference/QualitySettings-vSyncCount.html) for more info.
- `load_libraries`: List of libraries to load on startup. Can be used to load other mods. Example: `["applejuicer.dll", "banana.dll"]`
- `menu_open_key`: The Windows VK code for the key that opens the menu. Default: `39` (Right arrow key). Check [this page](https://cherrytree.at/misc/vk.htm) for a list of all of the keycodes.
- `auto_full_screen`: Put the game into full screen mode automatically whenever the game's orientation matches the screen's orientation. As of now, Hachimi has no support for other aspect ratios and will always scale the full screen resolution to 16:9. Please set the `full_screen_mode` and `resolution_scaling` values properly when using this option.
- `full_screen_mode`: The full screen mode to use. Possible values: `ExclusiveFullScreen`, `FullScreenWindow` (Borderless full screen). Please use `ExclusiveFullScreen` if your screen's aspect ratio isn't 16:9, otherwise the game contents will not be scaled properly.
- `resolution_scaling`: The resolution scaling mode. Possible values: `Default`, `ScaleToScreenSize`, `ScaleToWindowSize`. Please use either `ScaleToScreenSize` (recommended) or `ScaleToWindowSize` when using `auto_full_screen` on a screen with a resolution higher than 1080p, otherwise the game contents will not be scaled properly.
- `block_minimize_in_full_screen`: Blocks minimization in full screen. Should only be used with `FullScreenWindow`.
- `window_always_on_top`: Keep the game window always on top of other windows.