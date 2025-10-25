// src/components/ui/Popover.tsx
import * as PopoverPrimitive from "@radix-ui/react-popover";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;

export function PopoverContent({ children }: { children: React.ReactNode }) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        sideOffset={5}
        className="bg-white rounded-lg shadow-md p-4 w-64"
      >
        {children}
        <PopoverPrimitive.Arrow className="fill-white" />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}