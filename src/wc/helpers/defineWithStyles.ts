// defineWithStyles.ts
import { BooleanKeys, NumericKeys } from "@/types";
import { getNamedSlots } from "@/utils/slots";
// import tailwindCSS from "@styles/wc.css?inline";
import tailwindCSS from "@styles/index.css?inline";
import { find, html } from "property-information";
import ReactDOM from "react-dom/client";

const sheet = new CSSStyleSheet();
// sheet.replaceSync(tailwindCSS);

export type WebComponentBaseProps = React.HTMLAttributes<HTMLElement>;

export abstract class WebComponentBase<
  T extends WebComponentBaseProps,
  S extends string = string // 👈 nomes de slots
> extends HTMLElement {
  protected root?: ReactDOM.Root;
  private slotChangeScheduled = false;
  private _observer?: MutationObserver;

  constructor(baseSheet: string, styles?: string | string[]) {
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

    if (import.meta.env.VITE_SHEET === "global") sheet.replaceSync(tailwindCSS);
    else sheet.replaceSync(baseSheet);

    if (!shadow.adoptedStyleSheets.includes(sheet)) {
      shadow.adoptedStyleSheets = [...shadow.adoptedStyleSheets, sheet];
    }

    // agora o React monta direto no shadowRoot
    this.root = ReactDOM.createRoot(shadow as unknown as Element);
  }

  // Getter dinâmico tipado
  get slots(): Record<S, boolean> {
    return getNamedSlots(this) as Record<S, boolean>;
  }

  // declaração estática para evitar o erro TS2339
  static get observedAttributes(): string[] {
    return [];
  }

  // subclasses devem sobrescrever com BooleanKeys<T>[]
  // lista de atributos que devem ser tratados como booleanos que não estão no schema html
  protected booleanAttributes!: BooleanKeys<T>[];

  // atributos numéricos que subclasses definem, que não estão no schema html
  protected numericAttributes!: NumericKeys<T>[];

  protected getProps(): Partial<T> {
    const props: Record<string, unknown> = {};
    const ctor = this.constructor as typeof WebComponentBase;
    const attrs = ctor.observedAttributes as string[];

    for (const attr of attrs) {
      const value = this.getAttribute(attr);

      if (this.booleanAttributes.includes(attr as BooleanKeys<T>)) {
        // se o atributo existe, é true; se não existe, é false
        props[attr] = value !== null;
      } else if (this.numericAttributes?.includes(attr as NumericKeys<T>)) {
        props[attr] = value !== null ? Number(value) : undefined;
      } else {
        props[attr] = value;
      }
    }

    return props as Partial<T>;
  }

  /** hook para subclasses customizarem o mapeamento, já junta getProps + todos os atributos HTML */
  protected mapAttributes(): Partial<T> & Record<string, unknown> {
    const baseProps = this.getProps();
    const extra: Record<string, unknown> = {};

    for (const attr of Array.from(this.attributes)) {
      // usa property-information para descobrir o nome correto da prop
      const info = find(html, attr.name);
      const key = info?.property || attr.name;
      const value = attr.value;

      if (info?.boolean) {
        // booleanos: presença do atributo = true
        extra[key] = value !== null;
      } else if (info?.number) {
        // numéricos: converte para Number
        extra[key] = value !== null ? Number(value) : undefined;
      } else {
        // default: string
        if (key === "className") {
          extra.className = attr.value;
        } else {
          extra[key] = attr.value;
        }
      }
    }

    return { ...baseProps, ...extra };
  }

  connectedCallback() {
    this.render(this.mapAttributes() ?? {});

    // observa mudanças em atributos
    this._observer = new MutationObserver(() => {
      this.render(this.mapAttributes() ?? {});
    });
    this._observer.observe(this, { attributes: true });

    // Listener único para todos os slots
    this.shadowRoot?.addEventListener("slotchange", () => {
      if (!this.slotChangeScheduled) {
        this.slotChangeScheduled = true;
        requestAnimationFrame(() => {
          this.slotChangeScheduled = false;
          this.render(this.mapAttributes() ?? {});
        });
      }
    });
  }

  attributeChangedCallback() {
    this.render(this.mapAttributes() ?? {});
  }

  disconnectedCallback() {
    this._observer?.disconnect();
    this.root?.unmount();
  }

  protected abstract render(props?: Partial<T>): void;
}
