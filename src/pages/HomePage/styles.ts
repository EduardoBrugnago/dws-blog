import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 16px;
  justify-content: center;
  @media (min-width: 769px) {
    padding: 32px 32px;
  }

  @media (min-width: 1025px) {
    padding: 32px 56px;
  `}
`;

export const PageContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 32px;
    justify-content: center;
    @media (max-width: 767px) {
      flex-direction: column;
    }
  `}
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const PageTitle = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.h2.size};
    font-weight: ${theme.typography.h2.weight};
    line-height: ${theme.typography.h2.lineHeight};
    color: ${theme.colors.primary.dark};
    margin: 0;
  `}
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SortTitle = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.bodySmall.size};
    line-height: ${theme.typography.bodySmall.lineHeight};
    font-weight: ${theme.typography.bodySmall.weight};
    color: ${theme.colors.neutrals.dark};
  `}
`;

export const SortButton = styled.button`
  ${({ theme }) => css`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 8px;
    border: none;
    border-radius: 42px;
    background-color: transparent;
    cursor: pointer;
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.bodySmall.size};
    line-height: ${theme.typography.bodySmall.lineHeight};
    font-weight: ${theme.typography.bodySmall.weight};
    color: ${theme.colors.neutrals.extraDark};
    transition: all 0.2s;

    .material-symbols-outlined {
      font-size: 18px;
      color: ${theme.colors.accent1.medium};
      transition: color 0.2s;
    }

    &:hover {
      background-color: ${theme.colors.accent1.medium};
      color: ${theme.colors.neutrals.extraLight};

      .material-symbols-outlined {
        color: ${theme.colors.neutrals.extraLight};
      }
    }
  `}
`;
