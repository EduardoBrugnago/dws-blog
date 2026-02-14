import styled, { css } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  z-index: 100;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ModalTopBar = styled.div<{ $isFocused?: boolean }>`
  ${({ theme, $isFocused }) => css`
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 12px 16px;
    padding: 4px 8px;
    border-radius: 42px;
    border: 1px solid
      ${$isFocused
        ? theme.colors.accent1.medium
        : theme.colors.neutrals.extraLight};
    transition: border-color 0.2s;
  `}
`;

export const IconButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background: transparent;
    cursor: pointer;
    flex-shrink: 0;
    padding: 0;

    .material-symbols-outlined {
      font-size: 20px;
      color: ${theme.colors.primary.dark};
    }

    &:hover {
      background-color: ${theme.colors.neutrals.lightest};
    }
  `}
`;

export const ModalInput = styled.input`
  ${({ theme }) => css`
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.bodyLarge.size};
    line-height: ${theme.typography.bodyLarge.lineHeight};
    color: ${theme.colors.neutrals.extraDark};
    padding: 4px 8px;
    min-width: 0;

    &::placeholder {
      color: ${theme.colors.neutrals.medium};
    }
  `}
`;

export const SuggestionsList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 4px 0;
`;
