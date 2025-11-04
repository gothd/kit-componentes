// Importa os componentes React para Web
import { KcCard } from "@components/Card/Card.web";
import { KcButton } from "@components/ui/Button/Button.web";

function register(tag: string, element: CustomElementConstructor) {
  if (!customElements.get(tag)) {
    customElements.define(tag, element);
  }
}

// Registro dos Web Components com prefixo kc-
register("kc-button", KcButton);
register("kc-card", KcCard);
