// defineWithStyles.ts
import tailwindCSS from "@styles/index.css?inline";
import ReactDOM from "react-dom/client";

const sheet = new CSSStyleSheet();
sheet.replaceSync(tailwindCSS);

export abstract class WebComponentBase<T extends object> extends HTMLElement {
  protected root?: ReactDOM.Root;

  constructor(styles?: string | string[]) {
    super();
    const shadow = this.attachShadow({ mode: "open", delegatesFocus: true });

    if (styles) {
      const stylesArray = Array.isArray(styles) ? styles : [styles];
      for (const css of stylesArray) {
        const styleTag = document.createElement("style");
        styleTag.textContent = css;
        shadow.appendChild(styleTag);
      }
    }

    if (!shadow.adoptedStyleSheets.includes(sheet)) {
      shadow.adoptedStyleSheets = [...shadow.adoptedStyleSheets, sheet];
    }

    // agora o React monta direto no shadowRoot
    this.root = ReactDOM.createRoot(shadow as unknown as Element);
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  disconnectedCallback() {
    this.root?.unmount();
  }

  protected abstract render(props?: T): void;
}
