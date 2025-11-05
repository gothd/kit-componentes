import { WebComponentBase } from "@/wc/helpers/defineWithStyles";
import styles from "./button.css?inline";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";
import tailwindCSS from "./styles.css?inline";

export class KcButton extends WebComponentBase<ButtonBaseProps> {
  static get observedAttributes() {
    return ["variant", "class"];
  }

  constructor() {
    super(tailwindCSS, styles);
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
