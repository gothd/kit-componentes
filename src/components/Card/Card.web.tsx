import { BooleanKeys, NumericKeys } from "@/types";
import { WebComponentBase, WebComponentBaseProps } from "@/wc/helpers/defineWithStyles";
import styles from "./card.css?inline";
import { CardBase, CardBaseProps } from "./CardBase";
import tailwindCSS from "./styles.css?inline";

export type KcCardProps = WebComponentBaseProps & CardBaseProps;

type KcCardSlots = "title" | "description";

/**
 * Card Web Component
 *
 * @element kc-card
 *
 * @attr class - Classe CSS adicional.
 *
 *
 * @slot - Conteúdo principal (slot padrão, sem `name`).
 * @slot title - Título exibido no cabeçalho.
 * @slot description - Texto descritivo abaixo do título.
 */
// * @attr elevated - Define se o card tem sombra elevada.
export class KcCard extends WebComponentBase<KcCardProps, KcCardSlots> {
  static get observedAttributes() {
    return []; // adicione outros atributos se quiser mapear, não inclua "class"
  }

  protected booleanAttributes: BooleanKeys<KcCardProps>[] = [];
  protected numericAttributes: NumericKeys<KcCardProps>[] = [];

  constructor() {
    super(tailwindCSS, styles); // injeta o CSS no shadow DOM
  }

  protected render({ className, ...props }: Partial<KcCardProps>) {
    this.root?.render(
      <CardBase className={className} {...props}>
        <slot name="title" />
        <slot name="description" />
        <slot />
      </CardBase>
    );
  }
}
