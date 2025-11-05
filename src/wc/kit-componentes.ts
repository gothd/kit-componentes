// Importa os componentes React para Web
import { KcCard } from "@components/Card/Card.web";
import { KcButton } from "@components/ui/Button/Button.web";
import { register } from "./helpers/register";

// Registro dos Web Components com prefixo kc-
register("kc-button", KcButton);
register("kc-card", KcCard);

// 👇 Exporta os componentes para o objeto global KitComponentes
export { KcButton, KcCard };
