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

<script is:inline>
  function lightbox(img) {
    document.querySelector('#lightbox img').src = img.src;
  }
</script>

<div class="screenshots d-flex flex-wrap justify-content-center my-4">
  <a data-bs-toggle="modal" href="#lightbox" onclick="lightbox(event.target)">
    <img
      src="/images/screenshot-0.png"
      alt="Browsing installed apps"
    />
  </a>
  <a data-bs-toggle="modal" href="#lightbox" onclick="lightbox(event.target)">
    <img
      src="/images/screenshot-1.png"
      alt="Searching for apps, search term is &quot;Microsoft&quot;"
    />
  </a>
  <a data-bs-toggle="modal" href="#lightbox" onclick="lightbox(event.target)">
    <img
      src="/images/screenshot-2.png"
      alt="Installing Microsoft Excel"
    />
  </a>
  <a data-bs-toggle="modal" href="#lightbox" onclick="lightbox(event.target)">
    <img
      src="/images/screenshot-3.png"
      alt="Viewing details for UTM, an installed app; action buttons read &quot;Launch&quot;, &quot;Update&quot; and &quot;Uninstall&quot;"
    />
  </a>
  <a data-bs-toggle="modal" href="#lightbox" onclick="lightbox(event.target)">
    <img
      src="/images/screenshot-4.png"
      height="568"
      alt="Settings pane"
    />
  </a>
  <a data-bs-toggle="modal" href="#lightbox" onclick="lightbox(event.target)">
    <img
      src="/images/screenshot-5.png"
      alt="Tasks pane with Log view open"
    />
  </a>
</div>

<div class="modal fade" id="lightbox" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen-xl-down modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <img class="modal-body" />
    </div>
  </div>

<style>
  .screenshots :is(a, img) {
    max-height: 250px;
  }
  #lightbox img {
    max-height: 85vh;
  }
  .screenshots img, #lightbox img {
    object-fit: contain;
  }

  .disclaimer,
  .disclaimer > li {
    font-size: calc(0.9 * var(--bs-body-font-size));
  }
</style>
