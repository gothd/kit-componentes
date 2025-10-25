import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export function TooltipContent({ children }: { children: React.ReactNode }) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        sideOffset={5}
        className="bg-gray-800 text-white text-sm px-3 py-1.5 rounded-md shadow-lg"
      >
        {children}
        <TooltipPrimitive.Arrow className="fill-gray-800" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}
