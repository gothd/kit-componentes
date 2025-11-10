import { cn } from "@utils";
import React from "react";

export interface CardBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function CardBase({ children, className, ...props }: CardBaseProps) {
  return (
    <div className={cn("block rounded border p-4 shadow bg-white", className)} {...props}>
      {children}
    </div>
  );
}
