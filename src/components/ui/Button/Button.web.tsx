// Button.web.tsx
import { WebComponentBase } from "@/defineWithStyles";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";

export class KcButton extends WebComponentBase<ButtonBaseProps> {
  static get observedAttributes() {
    return ["variant", "class"];
  }

  protected render() {
    const attrs = Array.from(this.attributes);
    const props = attrs.reduce<Record<string, string>>((acc, attr) => {
      const name = attr.name === "class" ? "className" : attr.name;
      acc[name] = attr.value;
      return acc;
    }, {});

    this.root?.render(
      <ButtonBase {...(props as ButtonBaseProps)}>
        <slot />
      </ButtonBase>
    );
  }
}
