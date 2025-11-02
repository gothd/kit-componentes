import { ButtonBase } from "./ButtonBase";

export function ButtonWeb(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <ButtonBase {...props}>
      <slot />
    </ButtonBase>
  );
}
