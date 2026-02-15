import styled, { css } from "styled-components";

export const Container = styled.div<{ $isFocused?: boolean }>`
  ${({ theme, $isFocused }) => css`
    display: flex;
    align-items: center;
    border-radius: 42px;
    transition: border-color 0.2s;
    background-color: transparent;

    @media (max-width: 767px) {
      border: none;
      padding: 0;
      width: auto;
    }

    @media (min-width: 769px) {
      border: 1px solid
        ${$isFocused
          ? theme.colors.accent1.medium
          : theme.colors.neutrals.extraLight};
      padding: 8px 8px 8px 16px;
      width: 100%;

      &:hover {
        border-color: ${theme.colors.accent1.medium};
      }
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.bodyLarge.size};
    line-height: ${theme.typography.bodyLarge.lineHeight};
    color: ${theme.colors.neutrals.extraDark};
    padding: 0px;

    &::placeholder {
      color: ${theme.colors.neutrals.extraDark};
    }

    @media (max-width: 767px) {
      display: none;
    }
  `}
`;

export const SearchButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background-color: ${theme.colors.primary.light};
    cursor: pointer;
    flex-shrink: 0;
    transition: background-color 0.2s;

    .material-symbols-outlined {
      font-size: 24px;
      color: ${theme.colors.neutrals.lightest};
    }

    &:hover {
      background-color: ${theme.colors.primary.medium};
    }
  `}
`;
