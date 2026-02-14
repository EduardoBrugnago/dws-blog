import styled, { css } from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownButton = styled.button<{ $isOpen: boolean }>`
  ${({ theme, $isOpen }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 32px;
    padding: 12px 12px 12px 16px;
    gap: 4px;
    border: none;
    border-radius: 42px;
    cursor: pointer;
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.caption.size};
    font-weight: 700;
    background-color: ${$isOpen
      ? theme.colors.secondary.medium + "0D"
      : theme.colors.neutrals.lightest};
    border: 0.094rem solid ${theme.colors.secondary.medium};
    color: ${theme.colors.secondary.medium};
    transition: background-color 0.2s;

    &:hover {
      background-color: ${theme.colors.secondary.medium + "0D"};
    }
  `}
`;

export const Menu = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    width: 314px;
    max-height: 204px;
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
    padding: 16px;
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
    border-radius: 16px;
    background-color: #ffffff;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    z-index: 10;
    font-family: ${theme.fontFamily};
  `}
`;

export const FilterChip = styled.li<{ $isSelected: boolean }>`
  ${({ theme, $isSelected }) => css`
    display: flex;
    align-items: center;
    padding: 0px;
    height: 28px;
    gap: 8px;
    border-radius: 4px;
    cursor: pointer;
    font-size: ${theme.typography.bodySmall.size};
    line-height: ${theme.typography.bodySmall.lineHeight};
    font-weight: ${theme.typography.bodySmall.weight};
    color: ${$isSelected
      ? theme.colors.secondary.medium
      : theme.colors.neutrals.darkest};
  `}
`;
