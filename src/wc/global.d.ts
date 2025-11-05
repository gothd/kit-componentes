import type { KcButton, KcCard } from "./kit-componentes";

export {};

declare global {
  interface Window {
    KitComponentes: {
      KcButton?: KcButton;
      KcCard?: KcCard;
    };
  }
}
