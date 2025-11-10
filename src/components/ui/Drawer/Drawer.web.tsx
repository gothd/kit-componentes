import { BooleanKeys, NumericKeys } from "@/types";
import { WebComponentBase, WebComponentBaseProps } from "@/wc/helpers/defineWithStyles";
import type { DialogProps } from "@radix-ui/react-dialog";
import styles from "./drawer.css?inline";
import {
  DrawerBase,
  DrawerClose,
  DrawerContent,
  DrawerContentProps,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "./DrawerBase";
import tailwindCSS from "./styles.css?inline";

export type KcDrawerProps = WebComponentBaseProps &
  DialogProps & {
    direction?: DrawerContentProps["direction"];
  };

type KcDrawerSlots = "title" | "description" | "trigger" | "close";

/**
 * Drawer Web Component
 *
 * @element kc-drawer
 *
 * @attr open - Define se o drawer está aberto.
 * @attr direction - Direção de abertura ("left" | "right" | "bottom").
 * @attr class - Classe CSS adicional.
 *
 * @slot trigger - Elemento que dispara a abertura do drawer.
 * @slot title - Título exibido no cabeçalho.
 * @slot description - Texto descritivo abaixo do título.
 * @slot close - Botão ou elemento para fechar o drawer.
 */
export class KcDrawer extends WebComponentBase<KcDrawerProps, KcDrawerSlots> {
  static override get observedAttributes(): (keyof KcDrawerProps & string)[] {
    return ["direction", "open"];
  }

  protected booleanAttributes: BooleanKeys<KcDrawerProps>[] = ["open"];
  protected numericAttributes: NumericKeys<KcDrawerProps>[] = [];

  constructor() {
    super(tailwindCSS, styles);
  }

  openDrawer() {
    this.setAttribute("open", "");
  }

  closeDrawer() {
    this.removeAttribute("open");
  }

  connectedCallback() {
    // mantém inicialização da classe pai
    super.connectedCallback();

    // intercepta trigger slot
    const triggerSlot = this.shadowRoot?.querySelector(
      'slot[name="trigger"]'
    ) as HTMLSlotElement | null;
    triggerSlot?.addEventListener("slotchange", () => {
      triggerSlot.assignedElements().forEach((el) => {
        el.addEventListener("click", () => this.openDrawer());
      });
    });

    // intercepta close slot
    const closeSlot = this.shadowRoot?.querySelector(
      'slot[name="close"]'
    ) as HTMLSlotElement | null;
    closeSlot?.addEventListener("slotchange", () => {
      closeSlot.assignedElements().forEach((el) => {
        el.addEventListener("click", () => this.closeDrawer());
      });
    });
  }

  protected render({ direction, open, className, ...props }: Partial<KcDrawerProps>) {
    this.root?.render(
      <DrawerBase>
        <DrawerRoot open={open}>
          <DrawerTrigger asChild>
            <slot name="trigger" />
          </DrawerTrigger>

          <DrawerContent direction={direction} className={className} {...props}>
            <DrawerHeader>
              {this.slots["title"] && (
                <DrawerTitle>
                  <slot name="title" />
                </DrawerTitle>
              )}
              {this.slots["description"] && (
                <DrawerDescription>
                  <slot name="description" />
                </DrawerDescription>
              )}
            </DrawerHeader>

            {/* Conteúdo principal */}
            <slot />

            <DrawerFooter>
              <DrawerClose asChild>
                <slot name="close">Fechar</slot>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </DrawerRoot>
      </DrawerBase>
    );
  }
}
