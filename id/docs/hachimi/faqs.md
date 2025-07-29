# FAQs
- How do I use another mod with Hachimi?

See the `load_libraries` option on the [Config page](/docs/hachimi/config). Note that some mods will not work with this method; they weren't really designed to be used with each other.

- The update just finished installing but everything's still not translated. Why?

The translations may have been installed, but the game hasn't attempted to load the new translations yet. Simply navigate to another screen (that triggers a loading procedure) and you should see translations appearing.

- Can I play the game while the update is in progress?

Yes, it is totally fine to continue playing the game while the translation data is still being updated, but do note that translations are disabled during update and will disappear when you navigate away from the current screen in the game. It should come back once it finishes installing and the game starts loading it (see above).

- I accidentally closed the game while it was installing. Is it over for me?

Nope. Just open the game back up again and it should ask you to start downloading from the beginning.

- What's that `.tl_repo_cache` file in my Hachimi folder? Can I eat it?

No. It's used to track the current state of the translation files for incremental updates later on; do not modify it manually or delete it.