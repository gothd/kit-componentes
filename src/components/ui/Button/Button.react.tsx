import React from "react";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";

export type ButtonProps = ButtonBaseProps;

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <ButtonBase {...props} />;
};
