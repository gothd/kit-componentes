export function register(tag: string, element: CustomElementConstructor) {
  if (!customElements.get(tag)) {
    customElements.define(tag, element);
  }
}
