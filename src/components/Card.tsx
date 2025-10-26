import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function Card({ title, description, children }: CardProps) {
  return (
    <div className="bg-white border rounded-lg shadow-md p-6 flex flex-col">
      <h3 className="mb-2">{title}</h3>
      {description && <p className="mb-4">{description}</p>}
      {children && <div className="mt-auto">{children}</div>}
    </div>
  );
}
