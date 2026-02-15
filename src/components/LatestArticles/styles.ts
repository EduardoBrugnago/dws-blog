import styled, { css } from "styled-components";

export const LatestArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LatestArticlesTitle = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.h2.size};
    font-weight: ${theme.typography.h2.weight};
    line-height: ${theme.typography.h2.lineHeight};
    color: ${theme.colors.primary.dark};
    margin: 0;
  `}
`;

export const LatestArticlesGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;
