/**
 * Retorna um mapa com todos os slots declarados em um host.
 * A chave é o nome do slot, o valor é um boolean indicando se existe.
 */
export function getNamedSlots(host: HTMLElement): Record<string, boolean> {
  const result: Record<string, boolean> = {};

  const slottedElements = host.querySelectorAll("[slot]");
  slottedElements.forEach((el) => {
    const name = el.getAttribute("slot") || "";
    result[name] = true;
  });

  return result;
}
