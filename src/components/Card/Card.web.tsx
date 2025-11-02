import { CardBase } from "./CardBase";

export function CardWeb(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <CardBase {...props}>
      <h2 className="text-xl font-bold mb-2">
        <slot name="title" />
      </h2>
      <p className="mb-4">
        <slot name="description" />
      </p>
      <slot />
    </CardBase>
  );
}
