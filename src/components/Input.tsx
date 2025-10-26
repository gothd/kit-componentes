import type { InputHTMLAttributes } from "react";

type InputProps = {
  label: string;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-neutral">{label}</label>
      <input
        {...props}
        className={`
          block w-full px-4 py-2 rounded-lg border bg-white
          text-neutral placeholder-neutral-light
          focus:outline-none focus:ring-2 focus:ring-primary
          ${
            error ? "border-red-500 focus:ring-red-500" : "border-neutral-light"
          }
        `}
      />
      {error && <small className="text-red-500">{error}</small>}
    </div>
  );
}
