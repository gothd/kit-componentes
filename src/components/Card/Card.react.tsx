import { CardBase, CardBaseProps } from "./CardBase";

export interface CardProps extends CardBaseProps {
  title?: string;
  description?: string;
}

export function Card({ title, description, children, ...props }: CardProps) {
  return (
    <CardBase {...props}>
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {description && <p className="mb-4">{description}</p>}
      {children}
    </CardBase>
  );
}
