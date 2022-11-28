import BootstrapBlockElement from "./abstract/BootstrapBlockElement";
import { html } from "lit";
import { customElement, state } from "lit/decorators.js";

export const tagName = "getovert-link-generator";

@customElement(tagName)
export class LinkGenerator extends BootstrapBlockElement {
  @state()
  private useCustomSourceRepository = false;
  @state()
  private customSourceRepositoryURL = "";

  @state()
  private packageManager: "" | "brew-cask" | "brew" = "";
  @state()
  private packageName = "";

  private onCustomSourceRepositoryCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.useCustomSourceRepository = checkbox.checked;
  }

  private generateRawURL(
    addSourceRepository: boolean,
    install: boolean
  ): string | undefined {
    if (this.packageManager === "" || this.packageName === "") return undefined;

    const url = new URL(`overt:${this.packageManager}`);

    let actionCount = 0;

    if (addSourceRepository) {
      url.searchParams.append(`${++actionCount}`, "add-source-repository");

      try {
        const name = new URL(this.customSourceRepositoryURL).pathname
          .split("/")
          .slice(1, 3)
          .join("/");
        url.searchParams.append(`${actionCount}[name]`, name);

        url.searchParams.append(
          `${actionCount}[url]`,
          this.customSourceRepositoryURL
        );
      } catch (error) {
        console.error(error);
        return undefined;
      }
    }

    if (install) {
      url.searchParams.append(`${++actionCount}`, "install");
      url.searchParams.append(`${actionCount}[name]`, this.packageName);
    }

    return this.partiallyUnencode(url.href);
  }

  private generateWebURL(): string | undefined {
    const url = new URL(window.location.origin + "/open");

    const rawURL = this.generateRawURL(this.useCustomSourceRepository, true);
    if (!rawURL) return undefined;

    url.searchParams.append(`action`, rawURL);

    return this.partiallyUnencode(url.href);
  }

  private partiallyUnencode(url: string): string {
    // Including these characters unencoded in URLs doesn't cause problems
    // in real web browsers, at least for our use cases
    return url
      .replace(/%2F/g, "/")
      .replace(/%3A/g, ":")
      .replace(/%3D/g, "=")
      .replace(/%5B/g, "[")
      .replace(/%5D/g, "]");
  }

  protected render() {
    const rawInstallURL = this.generateRawURL(false, true);
    const rawAddSourceRepositoryURL = this.generateRawURL(true, false);
    const rawURL = this.generateRawURL(this.useCustomSourceRepository, true);
    const webURL = this.generateWebURL();

    return html`
      <div class="card text-dark bg-white mb-3">
        <div class="card-header">Quick-install link generator</div>
        <form class="card-body" onsubmit="event.preventDefault()">
          <div class="form-check">
            <label class="form-check-label">
              <input
                id="customSourceRepositoryCheckbox"
                class="form-check-input"
                type="checkbox"
                value=""
                ?checked=${this.useCustomSourceRepository}
                @change=${this.onCustomSourceRepositoryCheckboxChange}
              />
              Custom source repository
            </label>
          </div>

          ${this.useCustomSourceRepository
            ? html`
                <label class="d-flex flex-column mt-3 fw-bold">
                  Source repository URL
                  <input
                    class="mt-1"
                    id="customSourceRepositoryURL"
                    value=${this.customSourceRepositoryURL}
                    @input=${(event: Event) =>
                      (this.customSourceRepositoryURL = (
                        event.target as HTMLInputElement
                      ).value)}
                  />
                </label>
              `
            : ""}

          <label class="d-flex flex-column mt-3 fw-bold">
            Package manager
            <select
              class="form-select form-select-sm mt-1"
              @change=${(event: Event) =>
                (this.packageManager = (event.target as HTMLSelectElement)
                  .value as any)}
            >
              ${this.packageManager === ""
                ? html`<option selected>Select</option>`
                : ""}
              <option ?selected=${this.packageManager === "brew-cask"}>
                brew-cask
              </option>
              <option ?selected=${this.packageManager === "brew"}>brew</option>
            </select>
          </label>

          <label class="d-flex flex-column mt-3 fw-bold">
            Package name
            <input
              class="mt-1"
              id="packageName"
              value=${this.packageName}
              @input=${(event: Event) =>
                (this.packageName = (event.target as HTMLInputElement).value)}
            />
          </label>

          ${webURL
            ? html` <hr />

                <label class="d-block w-100 mt-3 fw-bold">
                  Output &ndash; Web-based link &ndash;
                  <span class="text-success"
                    >prompts to install Overt if necessary</span
                  >
                  <output
                    for="customSourceRepositoryCheckbox customSourceRepositoryURL packageManager packageName"
                    class="form-control mt-2"
                    disabled
                    >${webURL}</output
                  >
                </label>

                <label class="d-block w-100 mt-3 fw-bold">
                  Output &ndash; Raw link &ndash;
                  <span class="text-warning"
                    >users must have Overt installed already</span
                  >
                  <output
                    for="packageManager packageName"
                    class="form-control mt-2"
                    disabled
                    >${rawURL}</output
                  >
                </label>

                ${this.useCustomSourceRepository
                  ? html`<label class="d-block w-100 mt-3 fw-bold">
                        Output &ndash; Raw
                        <code>add-source-repository</code> link &ndash;
                        <span class="text-warning"
                          >users must have Overt installed already</span
                        >
                        <output
                          for="customSourceRepositoryCheckbox customSourceRepositoryURL"
                          class="form-control mt-2"
                          disabled
                          >${rawAddSourceRepositoryURL}</output
                        >
                      </label>

                      <label class="d-block w-100 mt-3 fw-bold">
                        Output &ndash; Raw <code>install</code> link &ndash;
                        <span class="text-warning"
                          >users must have Overt installed already</span
                        >
                        <output
                          for="packageManager packageName"
                          class="form-control mt-2"
                          disabled
                          >${rawInstallURL}</output
                        >
                      </label>`
                  : ""}`
            : ""}
        </form>
      </div>
    `;
  }
}
