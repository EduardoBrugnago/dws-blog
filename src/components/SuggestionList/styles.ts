import styled, { css } from "styled-components";

export const SectionHeader = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.bodySmall.size};
    font-weight: ${theme.typography.bodyLarge.weight.semibold};
    line-height: ${theme.typography.bodySmall.lineHeight};
    color: ${theme.colors.primary.dark};
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 12px 16px 4px;
  `}
`;

export const SuggestionItem = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 12px 16px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.caption.size};
    line-height: ${theme.typography.caption.lineHeight};
    font-weight: ${theme.typography.caption.weight};
    color: ${theme.colors.neutrals.darkest};
    text-align: left;
    transition: background-color 0.15s;

    span {
      font-size: 12px;
      color: ${theme.colors.neutrals.medium};
    }

    &:hover {
      background-color: ${theme.colors.neutrals.lightest};
    }
  `}
`;
