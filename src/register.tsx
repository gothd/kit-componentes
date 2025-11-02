import React from "react";
import * as ReactDOMClient from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";
import tailwindCSS from "./styles/tailwind.flat.css?inline";

// Importa seus componentes React
import { CardWeb } from "@/components/Card/Card.web";
import { ButtonWeb } from "./components/ui/Button/Button.web";

const sheet = new CSSStyleSheet();
sheet.replaceSync(tailwindCSS);

// Wrapper que remapeia `class` do host para `className` do React
function withClassMapping<P extends object>(Component: React.ComponentType<P>) {
  return function Wrapper(rawProps: Partial<P> & { class?: string }) {
    const { class: hostClass, ...rest } = rawProps;
    const mapped = { ...(rest as P), className: hostClass } as P;
    return <Component {...mapped} />;
  };
}

// Define e aplica estilos + suporte a `class`
function defineWithStyles<T extends object>(tag: string, Component: React.ComponentType<T>) {
  const Wrapped = withClassMapping(Component);

  const BaseWC = reactToWebComponent(Wrapped, React, ReactDOMClient, {
    shadow: "open",
    props: ["class"],
  });

  class WC extends (BaseWC as unknown as typeof HTMLElement) {
    static get observedAttributes() {
      // @ts-expect-error BaseWC pode não declarar observedAttributes
      return ["class", ...(super.observedAttributes || [])];
    }

    connectedCallback() {
      if (this.shadowRoot && !this.shadowRoot.adoptedStyleSheets.includes(sheet)) {
        this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, sheet];
      }
      // @ts-expect-error BaseWC pode não implementar connectedCallback
      super.connectedCallback?.();
    }
  }

  if (!customElements.get(tag)) {
    customElements.define(tag, WC as unknown as CustomElementConstructor);
  }
}

// Registro dos Web Components com prefixo kc-
defineWithStyles("kc-card", CardWeb);
defineWithStyles("kc-button", ButtonWeb);
