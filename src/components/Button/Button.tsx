import type { ButtonHTMLAttributes } from "react";
import {
  PrimaryButton,
  SecondaryButton,
  FilterItem,
} from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface FilterItemButtonProps extends ButtonProps {
  isSelected?: boolean;
}

export function Primary({ children, ...props }: ButtonProps) {
  return <PrimaryButton {...props}>{children}</PrimaryButton>;
}

export function Secondary({ children, ...props }: ButtonProps) {
  return <SecondaryButton {...props}>{children}</SecondaryButton>;
}

export function Filter({
  children,
  isSelected,
  ...props
}: FilterItemButtonProps) {
  return (
    <FilterItem $isSelected={isSelected} {...props}>
      {children}
    </FilterItem>
  );
}
