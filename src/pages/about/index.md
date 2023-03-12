---
layout: ../../layouts/Markdown.astro
title: "About – Overt"
---

# About

**Overt** is an open app store. With Overt, you can:

- explore a **vast catalog** of apps, both free and paid
- install apps **fast**, with one or two clicks
- remove apps even **faster**, to free up precious storage space
- easily update apps that don't self-update

Benefits to **developers** include:

- **no** feature restrictions
- **no** revenue cuts
- **no** arbitrary denials or removals
- **simplified installation** for Overt users
- option to **self-host** catalog sources for better control

Software listings are provided by their developers and/or the community, in various **catalog sources**.  
In the default catalog sources, app downloads always come from the developers' **official servers**.

<br/>

---

<br/>

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
      alt="Searching for apps, search term is &quot;note&quot;"
    />
  </a>
  <a data-bs-toggle="modal" href="#lightbox" onclick="lightbox(event.target)">
    <img
      src="/images/screenshot-2.png"
      alt="Viewing app details for Google Chrome; action button reads &quot;Install&quot;"
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
      alt="Overt settings pane"
    />
  </a>
  <a data-bs-toggle="modal" href="#lightbox" onclick="lightbox(event.target)">
    <img
      src="/images/screenshot-5.png"
      alt="Overt tasks pane with Log view open"
    />
  </a>
</div>

<br/>

---

<br/>

<a id="technical" class="visbility-hidden" aria-hidden="true"></a>

## What is it, **really**?

Apps on Overt are provided by **package managers**, which are command-line tools that install and manage software "packages".

Many package managers excel at what they do. But due to their command line UI, package managers are often only used by developers and highly experienced users. Overt's primary goal is to make them usable to everyone.

So, Overt is really a **package manager GUI client**.

Many package managers find packages from various **repositories** <span class="text-muted">(i.e., **catalog sources**)</span>, which are essentially websites that list software packages.
For example, a repository called "Browsers" at `https://example.com/Browsers` could provide packages for Chrome, Firefox, and so on.

Overt talks with package managers to:

- List packages to add to Overt's searchable catalog
- Install, update, and uninstall packages
- Add and remove source repositories

**Overt is currently available for macOS**, with [Homebrew](/package-managers/homebrew) as the package manager.

**Overt for Windows is planned**, with [Winget](https://github.com/microsoft/winget-cli) and [Scoop](https://scoop.sh) both on the table for support.

Other package managers (e.g., on Linux) are also possibilities for the long term.

<br/>

---

<br/>

## Why?

Apple has come under fire lately for locking down the software users can run on their devices, and imposing stringent and increasingly aggressive rules on what third-party developers are allowed to say and do.

<!-- I believe the backlash is justified. It's one thing for Apple to protect their customers, but it's another entirely to hold some of the policies they do, and—perhaps worse—enforce them inconsistently. Run a [web search for "apple antitrust"](https://www.google.com/search?q=apple+antitrust) if you'd like some examples. -->

Overt <span class="text-muted">(or "OpenStore," the original name)</span> is thus **an answer to Apple's App Store.**

**Like the App Store**, Overt helps you install and manage your favourite apps, and discover new ones to try.

**Unlike the App Store**, as proudly proclaimed on this site's homepage:

- **Overt does not restrict app features.**
  - If a web browser is a reskin of Safari, that's by choice.
  - If something could never work in the macOS sandbox, that's OK.
  - No arbitrarily delistings; anyone can create a catalog source.
  <!-- ("[won't someone think of the children?!](https://en.wikipedia.org/wiki/Censorship_by_Apple#App_Store)")
      <span class="text-muted">(Overt isn't for phones, of course, but [F-Droid](https://f-droid.org/) exists ;)</span> -->
- **Overt does not process payments.**
  - Legit payment processor? It's fair game.
  - No commission for being listed on the store.
    <!-- <span class="text-muted">(and you won't get special treatment just for being Amazon, etc.)</span> -->
  - Users can be instructed to sign up out-of-app.  
    <span class="text-muted">(oh the horror)</span>

<!-- I only <span class="text-muted">(somewhat cautiously)</span> continue to use macOS because it's still technically an open platform. You can still use software distrubuted outside of Apple's controlled environment, and you can still modify your system <span class="text-muted">(regardless of how annoying it can be)</span>.

It is this openness, however small, that allows Overt to exist. While I'm delighted this is so, I'm also very nervous about what Apple might do to macOS should a viable competitor to their App Store truly take off. It would be a final test of conscience, I suppose. -->

<br/>

---

<br/>

## How is it different from [Cakebrew](https://www.cakebrew.com/)?

- **Supports casks** — much wider variety of software, more of which is relevant to non-developer audiences
- **…and multiple package managers** — a Windows version that supports [Scoop](/package-managers/scoop) is close to beta release
- **…and is actively maintained** — unfortunately, Cakebrew has not seen an update since March of 2021
- **…but exposes fewer technical details** — Cakebrew's UI is specialized for Homebrew formulae, so it exposes more useful details for developers than Overt does
- **…and is less mature** — Cakebrew has received much more work and testing than Overt's formulae support, so it likely has fewer bugs and less confusing edge-case behaviour.

<br/>

---

<h2 class="h5" id="fyi">FYI</h2>

<ul class="small">
<li>Overt is not affiliated with or endorsed by the package managers it builds on.</li>
<li>Overt is not affiliated with or endorsed by the developers of software listed in catalog sources.</li>
<li>Overt is not responsible for the contents of catalog sources, as they can be self-hosted like a website.<br/>
Only add sources you trust.</li>
</ul>

<br/>

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
