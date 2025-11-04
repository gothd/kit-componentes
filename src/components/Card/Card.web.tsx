import { WebComponentBase } from "@/defineWithStyles";
import { CardBase, CardBaseProps } from "./CardBase";
import styles from "./styles.css?inline";

export class KcCard extends WebComponentBase<CardBaseProps> {
  static get observedAttributes() {
    return ["class"]; // adicione outros atributos se quiser mapear
  }

  constructor() {
    super(styles); // injeta o CSS no shadow DOM
  }

  protected render() {
    const attrs = Array.from(this.attributes);
    const props = attrs.reduce<Record<string, string>>((acc, attr) => {
      const name = attr.name === "class" ? "className" : attr.name;
      acc[name] = attr.value;
      return acc;
    }, {});

    this.root?.render(
      <CardBase {...(props as CardBaseProps)}>
        <slot name="title" />
        <slot name="description" />
        <slot />
      </CardBase>
    );
  }
}
