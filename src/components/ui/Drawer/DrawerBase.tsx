import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@utils";
import * as React from "react";

export type DrawerDirection = "left" | "right" | "bottom";

export interface DrawerBaseProps {
  children?: React.ReactNode;
}

// Base
export function DrawerBase({ children }: DrawerBaseProps) {
  return <>{children}</>;
}

// Root (sem direction)
export function DrawerRoot(props: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="drawer" {...props} />;
}

// Trigger
export function DrawerTrigger(props: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

// Portal
export function DrawerPortal(props: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="drawer-portal" {...props} />;
}

// Close
export function DrawerClose(props: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="drawer-close" {...props} />;
}

// Overlay
export function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/50",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  );
}

export interface DrawerContentProps
  extends Omit<React.ComponentProps<typeof DialogPrimitive.Content>, "children"> {
  children?: React.ReactNode;
  direction?: DrawerDirection; // novo
}

// Content recebe direction e aplica como data-attribute
export function DrawerContent({
  className,
  children,
  direction = "left",
  ...props
}: DrawerContentProps) {
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DialogPrimitive.Content
        data-slot="drawer-content"
        data-drawer-direction={direction}
        className={cn(
          "group/drawer-content bg-white fixed z-50 flex flex-col",
          // Direções
          "data-[drawer-direction=right]:inset-y-0 data-[drawer-direction=right]:right-0 data-[drawer-direction=right]:w-3/4 sm:data-[drawer-direction=right]:max-w-sm data-[drawer-direction=right]:border-l",
          "data-[drawer-direction=left]:inset-y-0 data-[drawer-direction=left]:left-0 data-[drawer-direction=left]:w-3/4 sm:data-[drawer-direction=left]:max-w-sm data-[drawer-direction=left]:border-r",
          "data-[drawer-direction=bottom]:inset-x-0 data-[drawer-direction=bottom]:bottom-0 data-[drawer-direction=bottom]:h-[80%] data-[drawer-direction=bottom]:rounded-t-lg data-[drawer-direction=bottom]:border-t",
          className
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DrawerPortal>
  );
}

// Header
export function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn("flex flex-col items-center justify-between p-4 border-b", className)}
      {...props}
    />
  );
}

// Footer
export function DrawerFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

// Title
export function DrawerTitle(props: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return <DialogPrimitive.Title data-slot="drawer-title" {...props} />;
}

// Description
export function DrawerDescription(props: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return <DialogPrimitive.Description data-slot="drawer-description" {...props} />;
}
