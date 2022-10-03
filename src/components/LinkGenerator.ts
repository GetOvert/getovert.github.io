import BootstrapBlockElement from "./abstract/BootstrapBlockElement";
import { css, html } from "lit";
import { customElement, state } from "lit/decorators.js";

export const tagName = "getovert-link-generator";

@customElement(tagName)
export default class LinkGenerator extends BootstrapBlockElement {
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

  private get generatedInstallURI(): string | undefined {
    if (this.packageManager === "" || this.packageName === "") return undefined;
    return `overt:install?package-manager=${this.packageManager}&name=${this.packageName}`;
  }

  private get generatedAddSourceRepositoryURI(): string | undefined {
    if (!this.useCustomSourceRepository) return undefined;
    try {
      const name = new URL(this.customSourceRepositoryURL).pathname
        .split("/")
        .slice(1, 3)
        .join("/");
      if (name === "") return;
      return `overt:add-source-repository?package-manager=${this.packageManager}&name=${name}&url=${this.customSourceRepositoryURL}`;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }

  private get generatedURL(): string | undefined {
    const url = new URL("https://getovert.app/open");

    if (!this.generatedInstallURI) return undefined;
    const actions = [this.generatedInstallURI];

    if (this.useCustomSourceRepository) {
      if (!this.generatedAddSourceRepositoryURI) return undefined;
      actions.unshift(this.generatedAddSourceRepositoryURI);
    }

    actions.forEach((action, index) => {
      url.searchParams.set(`action${index + 1}`, action);
    });

    return url.href;
  }

  protected render() {
    return html`
      <div class="card text-dark bg-white mb-3">
        <div class="card-header">Installation link generator</div>
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
              <option ?selected=${this.packageManager === ""}></option>
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

          ${(!this.useCustomSourceRepository ||
            this.generatedAddSourceRepositoryURI) &&
          this.generatedInstallURI
            ? html` <hr />

                <label class="d-block w-100 mt-3 fw-bold">
                  Output &ndash;
                  ${!this.useCustomSourceRepository ? "2" : "3"}-click
                  installation link &ndash;
                  <span class="text-success"
                    >prompts to install Overt if necessary</span
                  >
                  <output
                    for="customSourceRepositoryCheckbox customSourceRepositoryURL packageManager packageName"
                    class="form-control mt-2"
                    disabled
                    >${this.generatedURL}</output
                  >
                </label>

                ${this.useCustomSourceRepository
                  ? html`<label class="d-block w-100 mt-3 fw-bold">
                      Output &ndash; Raw <code>add-source-repository</code> link
                      &ndash;
                      <span class="text-warning"
                        >users must have Overt installed already</span
                      >
                      <output
                        for="customSourceRepositoryCheckbox customSourceRepositoryURL"
                        class="form-control mt-2"
                        disabled
                        >${this.generatedAddSourceRepositoryURI}</output
                      >
                    </label>`
                  : ""}

                <label class="d-block w-100 mt-3 fw-bold">
                  Output &ndash; Raw <code>install</code> link &ndash;
                  <span class="text-warning"
                    >users must have Overt installed already</span
                  >
                  <output
                    for="packageManager packageName"
                    class="form-control mt-2"
                    disabled
                    >${this.generatedInstallURI}</output
                  >
                </label>`
            : ""}
        </form>
      </div>
    `;
  }
}
