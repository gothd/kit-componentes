import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilitário para unir classes condicionalmente
 * e resolver conflitos de Tailwind.
 *
 * Exemplo:
 * cn("p-2", condition && "bg-red-500", "p-4")
 * => "bg-red-500 p-4"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
