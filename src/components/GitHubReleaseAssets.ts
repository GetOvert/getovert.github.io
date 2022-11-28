import { css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { until } from "lit/directives/until.js";
import BootstrapBlockElement from "./abstract/BootstrapBlockElement";
import "./GitHubReleaseAsset";
import type { Asset } from "./GitHubReleaseAsset";

export const tagName = "getovert-github-release-assets";

@customElement(tagName)
export class GitHubReleaseAssets extends BootstrapBlockElement {
  @state()
  release: Promise<any> = this.fetchRelease();

  private async fetchRelease() {
    const response = await fetch(
      `https://api.github.com/repos/GetOvert/Overt/releases/latest`,
      {
        headers: { Accept: "application/json" },
      }
    );
    if (!response.ok) {
      console.error(response);
      throw new Error(response.statusText);
    }

    return await response.json();
  }

  static styles = [
    BootstrapBlockElement.styles,
    css`
      .flex-basis-0 {
        flex-basis: 0;
      }
    `,
  ];

  protected render() {
    return html`
      ${until(
        this.renderRelease(),
        html`
          <div class="d-flex">
            <div class="spinner-border text-info mx-auto my-4" role="status">
              <span class="visually-hidden">Finding releases…</span>
            </div>
          </div>
        `
      )}
    `;
  }

  private async renderRelease() {
    const release = await this.release;

    return html`
      <div class="d-flex flex-wrap gap-2">
        ${release.assets.map((asset: Asset) => {
          return html`
            <getovert-github-release-asset
              class="flex-grow-1 flex-basis-0"
              releaseName=${release.name}
              .asset=${asset}
            ></getovert-github-release-asset>
          `;
        })}
      </div>
    `;
  }
}
