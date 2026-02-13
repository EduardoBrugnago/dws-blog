import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 32px;
    background-color: ${theme.colors.primary.medium};

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 12px;
      padding: 16px;
    }
  `}
`;

export const Logo = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.h3.size};
    font-weight: ${theme.typography.h3.weight};
    line-height: ${theme.typography.h3.lineHeight};
    color: ${theme.colors.neutrals.lightest};
  `}
`;

export const SearchInput = styled.input`
  ${({ theme }) => css`
    padding: 8px 16px;
    border: 1px solid ${theme.colors.neutrals.light};
    border-radius: 20px;
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.bodySmall.size};
    line-height: ${theme.typography.bodySmall.lineHeight};
    outline: none;
    width: 250px;

    &::placeholder {
      color: ${theme.colors.neutrals.medium};
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  `}
`;
