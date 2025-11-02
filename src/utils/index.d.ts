import { type ClassValue } from "clsx";
export * from "./typedEntries";
/**
 * Utilitário para unir classes condicionalmente
 * e resolver conflitos de Tailwind.
 *
 * Exemplo:
 * cn("p-2", condition && "bg-red-500", "p-4")
 * => "bg-red-500 p-4"
 */
export declare function cn(...inputs: ClassValue[]): string;
