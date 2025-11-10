import { KcDrawer } from "@/components/ui/Drawer/Drawer.web";
import { register } from "./helpers/register";

register("kc-drawer", KcDrawer);
Object.assign((window.KitComponentes ??= {}), { KcDrawer }); // Não sobrescreve o objeto usando export
