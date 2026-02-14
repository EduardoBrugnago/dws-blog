import type { ButtonHTMLAttributes, ReactNode } from "react";
import {
  PrimaryButton,
  SecondaryButton,
  FilterItem,
} from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: ReactNode;
}

interface FilterItemButtonProps extends ButtonProps {
  isSelected?: boolean;
}

export function Primary({ children, iconLeft, ...props }: ButtonProps) {
  return (
    <PrimaryButton {...props}>
      {iconLeft}
      {children}
    </PrimaryButton>
  );
}

export function Secondary({ children, iconLeft, ...props }: ButtonProps) {
  return (
    <SecondaryButton {...props}>
      {iconLeft}
      {children}
    </SecondaryButton>
  );
}

export function Filter({
  children,
  iconLeft,
  isSelected,
  ...props
}: FilterItemButtonProps) {
  return (
    <FilterItem $isSelected={isSelected} {...props}>
      {iconLeft}
      {children}
    </FilterItem>
  );
}
