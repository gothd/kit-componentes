import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export function DropdownMenuContent({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        className="min-w-[180px] bg-white rounded-lg shadow-md p-2"
        sideOffset={5}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Portal>
  );
}

export const DropdownMenuItem = DropdownMenuPrimitive.Item;
export const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;