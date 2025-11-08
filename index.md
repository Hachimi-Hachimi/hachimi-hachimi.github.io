---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

head:
  - ["link", { rel: "canonical", href: "https://hachimi.noccu.art" }]
  - [
      "meta",
      {
        name: "og:description",
        content: "Game translation and enhancement mod for Umamusume. Maintained fork of Hachimi, with updates and improvements.",
      },
    ]
  - [
      "meta",
      {
        name: "keywords",
        content: "umamusume, hachimi, translation, game mod, patch",
      },
    ]

hero:
  name: "Hachimi Edge"
  text: "UM:PD translation and enhancement mod"
  tagline: For Windows and Android.
  image:
    src: /assets/logo.png
    alt: Hachimi
  actions:
    - theme: brand
      text: Get Started
      link: /docs/hachimi/getting-started
    - theme: alt
      text: Discord
      link: https://discord.gg/BVEt5FcxEn
    - theme: alt
      text: Troubleshooting
      link: /docs/hachimi/troubleshooting
    - theme: alt
      text: Credits
      link: /credits

features:
  - icon: 🚀
    title: Easy to use
    details: Comes with an installer and convenient in-game GUI. No patching whatsoever. Translations update automatically.
  - icon: 🌍
    title: Multilingual translations
    details: Indexes translations from different community projects, allowing easy access and source switching. Check credits for a list.
  - icon: 📝
    title: Text augmentation
    details: Provides specialized text features that help translations feel more natural and improves support for different languages.
  - icon: 🖥️
    title: Game tweaks
    details: Includes a number of other features and settings which you can adjust to fit your needs.
---

## About

Hachimi Edge is a fork of the unmaintained [Hachimi](https://hachimi.leadrdrk.com) mod. It was made to quickly serve issues fixed after the game update on 2025/09/24 to users, and has since incorporated additional features and fixes by various community members. If you are still using the original Hachimi, please uninstall it and install Edge to resolve issues. Should Hachimi's developer return, Edge will likely be merged back and discontinued.

## Translations

Translations are sourced from various community projects. Hachimi provides a framework to modify the game, it does not do any translation itself.
Check out the sources in more detail on the [credits page](credits.md).

## Screenshots {#screenshots}

<div class="gallery">
  <img class="item grid-4" src="/assets/screen1.jpg" alt="Home screen">
  <img class="item grid-4" src="/assets/screen2.jpg" alt="Training screen">
  <img class="item grid-4" src="/assets/screen3.jpg" alt="Training event">
  <img class="item grid-4" src="/assets/screen4.jpg" alt="Main story">
</div>
