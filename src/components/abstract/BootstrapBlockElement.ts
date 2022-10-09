import { css, CSSResultArray, LitElement } from "lit";
import { bootstrap, reboot } from "../../../vendor/bootstrap";

export default class BootstrapBlockElement extends LitElement {
  static styles: CSSResultArray = [
    reboot,
    bootstrap,
    css`
      :host {
        display: block;
      }
    `,
  ];

  getRootNode(options?: GetRootNodeOptions): ShadowRoot {
    return super.getRootNode(options) as ShadowRoot;
  }
}
