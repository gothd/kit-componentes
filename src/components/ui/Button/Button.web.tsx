import { BooleanKeys, NumericKeys } from "@/types";
import { WebComponentBase, WebComponentBaseProps } from "@/wc/helpers/defineWithStyles";
import styles from "./button.css?inline";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";
import tailwindCSS from "./styles.css?inline";

export type KcButtonProps = WebComponentBaseProps & ButtonBaseProps;

/**
 * Button Web Component
 *
 * @element kc-button
 *
 * @attr variant - Estilo do botão ("primary" | "secondary | "outline").
 * @attr class - Classe CSS adicional.
 *
 */
// * @slot icon - Ícone exibido dentro do botão.
// * @slot label - Texto do botão.
export class KcButton extends WebComponentBase<KcButtonProps> {
  static get observedAttributes() {
    return ["variant"];
  }

  protected booleanAttributes: BooleanKeys<KcButtonProps>[] = [];
  protected numericAttributes: NumericKeys<KcButtonProps>[] = [];

  constructor() {
    super(tailwindCSS, styles);
  }

  protected render({ className, ...props }: KcButtonProps) {
    this.root?.render(
      <ButtonBase className={className} {...props}>
        <slot />
      </ButtonBase>
    );
  }
}
