import { cn } from "@utils";
import React from "react";

export interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export function ButtonBase({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonBaseProps) {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
    secondary: "bg-neutral-bg text-neutral hover:bg-neutral-light focus:ring-neutral",
    outline:
      "border border-primary text-primary hover:bg-primary-light hover:text-white focus:ring-primary",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
