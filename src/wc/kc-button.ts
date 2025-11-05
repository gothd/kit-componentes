import { KcButton } from "@components/ui/Button/Button.web";
import { register } from "./helpers/register";

register("kc-button", KcButton);
Object.assign((window.KitComponentes ??= {}), { KcButton }); // Não sobrescreve o objeto usando export
