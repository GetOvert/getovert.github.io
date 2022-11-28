import BootstrapBlockElement from "./abstract/BootstrapBlockElement";
import { customElement, property } from "lit/decorators.js";
import { css, html } from "lit";

export type Asset = {
  name: string;
  browser_download_url: string;
  updated_at: number;
  size: number;
  download_count: number;
};

export const tagName = "getovert-github-release-asset";

@customElement(tagName)
export class GitHubReleaseAsset extends BootstrapBlockElement {
  @property()
  releaseName!: string;
  @property()
  asset!: Asset;

  static styles = [
    BootstrapBlockElement.styles,
    css`
      .bi {
        font-family: "bootstrap-icons";
      }

      ul.card-body {
        list-style: none;
        padding-left: 2.5rem;
        padding-bottom: 0;
      }
      ul.card-body > li {
        display: block;
        position: relative;
        padding-left: 0.35em;
        margin-bottom: 0.25em;
      }
      ul.card-body > li::before {
        font-size: 1.2em;
        font-family: "bootstrap-icons";

        position: absolute;
        left: -1.5rem;
        top: -0.1em;
      }
      ul.card-body > li.size::before {
        content: "\uF391";
      }
      ul.card-body > li.date-released::before {
        content: "\uF1E2";
      }
      ul.card-body > li.downloads::before {
        content: "\uF128";
      }
    `,
  ];

  protected render() {
    const { name, browser_download_url, updated_at, size, download_count } =
      this.asset;

    const updated = new Date(updated_at);

    return html`
      <div class="card">
        <div class="card-body">
          <h4 class="card-title h5">
            <a href=${browser_download_url}
              >${this.releaseName}
              <span
                class="d-inline-block bi ms-1"
                style="transform: translateY(3px)"
                aria-hidden="true"
              >
                ${"\uF30A"}</span
              ></a
            >
          </h4>
          <h5 class="card-subtitle h6 fw-bolder text-muted mb-2">
            ${this.subtitleFromAssetName(name)}
          </h5>
        </div>
        <ul class="card-body border-top">
          <li class="size">
            <b>${Math.round(size / 1024 / 1024)} MB</b>
          </li>
          <li class="date-released">
            Released
            <b>
              ${updated.toLocaleDateString(undefined, {
                day: "numeric",
              })}
              ${updated.toLocaleDateString(undefined, {
                month: "short",
              })}
              ${updated.toLocaleDateString(undefined, {
                year: "numeric",
              })}
            </b>
          </li>
          <li class="downloads"><b>${download_count}</b> downloads</li>
        </ul>
      </div>
    `;
  }

  private subtitleFromAssetName(name: string) {
    if (name.match(/darwin-arm64/)) return "for macOS (Apple Silicon)";
    if (name.match(/darwin-x64/)) return "for macOS (Intel)";
    return name;
  }
}
