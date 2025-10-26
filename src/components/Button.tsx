import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  onClick,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
    secondary:
      "bg-neutral-bg text-neutral hover:bg-neutral-light focus:ring-neutral",
    outline:
      "border border-primary text-primary hover:bg-primary-light hover:text-white focus:ring-primary",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
