import { WebComponentBase } from "@/defineWithStyles";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";
import styles from "./styles.css?inline";

export class KcButton extends WebComponentBase<ButtonBaseProps> {
  static get observedAttributes() {
    return ["variant", "class"];
  }

  constructor() {
    super(styles);
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
