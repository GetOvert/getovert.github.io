---
layout: ../../layouts/Markdown.astro
title: "About – Overt"
---

# About

**Overt** is an open app store. Anyone can distribute apps for anyone else to find and install.

For developers, this means **no feature restrictions**, **no revenue cuts**, and **no arduous review process**.  
If it's not outright malware, it's fair game.

For users, this means **all your apps** are available **in one place**. No more installers or "dmg" files.

---

## How it works

Overt is a graphical user interface (GUI) that unifies various package managers. _Package managers_ are command-line programs that manage software "packages", which are often applications.

Most package managers work by monitoring a list of _source repositories_, each of which can provide packages to install.  
For example, the source repository `apps` at `https://example.com/apps` might provide the packages `chrome`, `firefox`, and so on.

In most cases, Overt simply talks with package managers to:

1. Find out what packages are available
2. Install/update/uninstall packages at your request
3. Add/remove source repositories at your request

Overt currently supports [Homebrew](https://brew.sh) on macOS. Support is planned for [Winget](https://github.com/microsoft/winget-cli) and [Scoop](https://scoop.sh) on Windows.

---

## Disclaimer

Please note:

- Overt is not affiliated with, nor endorsed by, any supported package managers.
- Overt is not affiliated with, nor endorsed by, any third parties whose software is available in source repositories.
- Overt is not responsible for the contents of any third-party source repositories. Please exercise caution.

---

## Screenshots

<img
    class="showcase-image"
    src="/images/screenshot-0.png"
    alt="Screenshot of Overt: Browsing installed apps"
  />
<img
    class="d-block col showcase-image"
    src="/images/screenshot-1.png"
    alt="Screenshot of Overt: Searching for apps, search term is &quot;Microsoft&quot;"
  />
<img
    class="d-block col showcase-image"
    src="/images/screenshot-2.png"
    alt="Screenshot of Overt: Installing Microsoft Excel"
  />
<img
    class="d-block col showcase-image"
    src="/images/screenshot-3.png"
    alt="Screenshot of Overt: Password prompt for Microsoft Excel installer"
  />
<img
    class="d-block col showcase-image"
    src="/images/screenshot-4.png"
    alt="Options pane"
  />

<style>
  .showcase-image {
    object-fit: contain;
    width: 100%;
    height: auto;
  }

  .disclaimer,
  .disclaimer > li {
    font-size: calc(0.9 * var(--bs-body-font-size));
  }
</style>
