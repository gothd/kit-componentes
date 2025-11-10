import type { KcCardProps } from "@/components";
import type { KcButtonProps, KcDrawerProps } from "@/components/ui";
import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "kc-card": KcCardProps;
      "kc-drawer": KcDrawerProps;
      "kc-button": KcButtonProps;
    }
  }
}
