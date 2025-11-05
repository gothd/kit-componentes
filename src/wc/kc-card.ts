import { register } from "./helpers/register";
import { KcCard } from "./kit-componentes";

register("kc-card", KcCard);
Object.assign((window.KitComponentes ??= {}), { KcCard }); // Não sobrescreve o objeto usando export
