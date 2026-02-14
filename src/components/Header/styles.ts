import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    justify-content: space-between;
    padding: 16px 56px;
    background-color: transparent;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
    border-bottom: 1px solid ${theme.colors.neutrals.extraLight};
    @media (max-width: 1024px) {
      gap: 12px;
      padding: 16px 32px;
    }
    @media (max-width: 768px) {

      gap: 8px;
      padding: 16px;
    }
  `}
`;

export const Logo = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.h2.size};
    font-weight: ${theme.typography.h2.weight};
    line-height: ${theme.typography.h2.lineHeight};
    color: ${theme.colors.primary.dark};
    span {
      font-size: ${theme.typography.bodyLarge.size};
      font-weight: ${theme.typography.bodyLarge.weight.regular};
    }
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
