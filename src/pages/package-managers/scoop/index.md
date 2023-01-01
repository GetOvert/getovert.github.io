---
layout: ../../../layouts/Markdown.astro
title: "Scoop – Overt"
---

# Scoop

<a href="https://scoop.sh" target="_blank">**Scoop** <i class="bi bi-box-arrow-up-right ms-1" role="img" aria-label="External link"></i></a> is a simple and flexible app installer and manager for Windows. In most cases, it installs apps in an isolated, "portable" way, without requiring admin access.

Scoop has multiple official repositories <span class="text-muted">(or "buckets"):

- <a href="https://github.com/ScoopInstaller/Main" target="_blank">main <i class="bi bi-box-arrow-up-right ms-1" role="img" aria-label="External link"></i></a> — 1,100+ popular command line tools <span class="text-muted">(that fit <a href="https://github.com/ScoopInstaller/Scoop/wiki/Criteria-for-including-apps-in-the-main-bucket" target="_blank">the criteria <i class="bi bi-box-arrow-up-right ms-1" role="img" aria-label="External link"></i></a>)</span>;
- <a href="https://github.com/ScoopInstaller/Extras" target="_blank">extras <i class="bi bi-box-arrow-up-right ms-1" role="img" aria-label="External link"></i></a> — 1,700+ apps that don't fit the criteria for main
- <a href="https://github.com/ScoopInstaller/Nonportable" target="_blank">nonportable <i class="bi bi-box-arrow-up-right ms-1" role="img" aria-label="External link"></i></a> — 100+ apps that require global (non-portable) installation
- <a href="https://github.com/ScoopInstaller/Versions" target="_blank">versions <i class="bi bi-box-arrow-up-right ms-1" role="img" aria-label="External link"></i></a> — 400+ non-stable builds and previous major versions of apps
- <a href="https://github.com/Calinou/scoop-games" target="_blank">games <i class="bi bi-box-arrow-up-right ms-1" role="img" aria-label="External link"></i></a> — 250+ free-of-charge games, emulators, and game-related tools

<small>

<span class="text-muted">Also:</span>

- <span class="text-muted"><a href="https://github.com/ScoopInstaller/Java" target="_blank">java <i class="bi bi-box-arrow-up-right ms-1" role="img" aria-label="External link"></i></a> — JREs and JDKs</span>
- <span class="text-muted"><a href="https://github.com/ScoopInstaller/PHP" target="_blank">php <i class="bi bi-box-arrow-up-right ms-1" role="img" aria-label="External link"></i></a> — different versions of PHP</span>
- <span class="text-muted"><a href="https://github.com/niheaven/scoop-sysinternals" target="_blank">sysinternals <i class="bi bi-box-arrow-up-right ms-1" role="img" aria-label="External link"></i></a></span>
- <span class="text-muted"><a href="https://github.com/kodybrown/scoop-nirsoft" target="_blank">nirsoft <i class="bi bi-box-arrow-up-right ms-1" role="img" aria-label="External link"></i></a></span>
- <span class="text-muted"><a href="https://github.com/matthewjberger/scoop-nerd-fonts" target="_blank">nerd-fonts <i class="bi bi-box-arrow-up-right ms-1" role="img" aria-label="External link"></i></a></span>

</small>

Under <span class="fs-6 p-1 border-bottom">Source</span> in the sidebar, select <span class="text-uppercase fs-6 bg-success text-light rounded p-1">Scoop</span>.

<br/>

## Install

### Requirements

- [Windows 10 / Windows Server 2012 or later](https://github.com/ScoopInstaller/Scoop/wiki/Quick-Start#prerequisites)

### Install

1. Open Windows PowerShell. <span class="text-muted">Search the Start menu for "powershell".</span>
2. Copy the <b>first</b> official install command from <a href="https://scoop.sh" target="_blank">the Scoop website <i class="bi bi-box-arrow-up-right ms-1" role="img" aria-label="External link"></i></a> under <b>Quickstart</b>.
3. Paste into your PowerShell window, then press <kbd>Enter</kbd>.
4. If necessary, confirm the execution policy change. <span class="text-muted">Press <kbd>Y</kbd>, then <kbd>Enter</kbd>.</span>
5. Copy the <b>second</b> official install command. <span class="text-muted">It's from the website above, under <b>Quickstart</b></span>.
6. Paste the command into your PowerShell window, then press <kbd>Enter</kbd>.
7. Wait for Scoop to download and install.
8. Add the default catalog sources for apps you will likely want:
   1. Copy these commands:
      ```ps1
      scoop bucket add main
      scoop bucket add extras
      ```
      <span class="text-muted">Feel free to add other buckets too, at your own discretion.</span>
   2. Paste into your PowerShell window, then press <kbd>Enter</kbd>.
   3. Wait for the process to complete.

### Add to Overt

1. <span class="text-muted">If you are not in setup mode, go to Settings → Advanced → Set Up Package Managers.</span>
2. Click <span class="text-uppercase fs-6 bg-light rounded p-1">Find</span> next to Scoop.
3. Click <span class="text-uppercase fs-6 bg-success text-light rounded p-1">Finish</span> to leave setup mode.

<div class="overscroll-enabler" aria-hidden="true"></div>
