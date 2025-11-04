import { WebComponentBase } from "@/defineWithStyles";
import { CardBase, CardBaseProps } from "./CardBase";

export class KcCard extends WebComponentBase<CardBaseProps> {
  static get observedAttributes() {
    return ["class"]; // adicione outros atributos se quiser mapear
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
        <slot name="title" className="text-xl font-bold mb-2" />
        <slot name="description" className="mb-4" />
        <slot />
      </CardBase>
    );
  }
}
