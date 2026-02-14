import styled, { css } from "styled-components";

const baseStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 42px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: ${({ theme }) => theme.fontFamily};
`;

export const PrimaryButton = styled.button`
  ${({ theme }) => css`
    ${baseStyles}
    padding: 12px 24px;
    border: none;
    background-color: ${theme.colors.secondary.medium};
    color: ${theme.colors.neutrals.lightest};
    font-size: ${theme.typography.bodyLarge.size};
    line-height: ${theme.typography.bodyLarge.lineHeight};
    font-weight: ${theme.typography.bodyLarge.weight.semibold};

    &:hover {
      background-color: ${theme.colors.secondary.dark};
    }
  `}
`;

export const SecondaryButton = styled.button`
  ${({ theme }) => css`
    ${baseStyles}
    padding: 12px 16px;
    border: 1px solid ${theme.colors.secondary.medium};
    background-color: transparent;
    color: ${theme.colors.secondary.medium};
    font-size: ${theme.typography.bodyLarge.size};
    line-height: ${theme.typography.bodyLarge.lineHeight};
    font-weight: ${theme.typography.bodyLarge.weight.semibold};

    &:hover {
      border-color: ${theme.colors.secondary.dark};
      color: ${theme.colors.secondary.dark};
    }
  `}
`;

export const FilterItem = styled.button<{ $isSelected?: boolean }>`
  ${({ theme, $isSelected }) => css`
    ${baseStyles}
    justify-content: flex-start;
    padding: 12px 8px;
    border: ${$isSelected ? `1px solid ${theme.colors.accent1.dark}` : "none"};
    border-bottom: 1px solid
      ${$isSelected
        ? theme.colors.accent1.dark
        : theme.colors.neutrals.extraLight};
    background-color: ${$isSelected ? "#00BFC10D" : "transparent"};
    color: ${$isSelected
      ? theme.colors.accent1.dark
      : theme.colors.neutrals.darkest};
    font-size: ${theme.typography.bodySmall.size};
    line-height: ${theme.typography.bodySmall.lineHeight};
    font-weight: ${theme.typography.bodySmall.weight};
    border-radius: ${$isSelected ? "8px" : "0"};
    &:hover {
      color: ${theme.colors.accent1.dark};
    }
  `}
`;
