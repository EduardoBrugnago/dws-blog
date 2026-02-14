import styled, { css } from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  justify-items: center;
  @media (min-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1792px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const NoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 48px;

  p {
    ${({ theme }) => css`
      font-family: ${theme.fontFamily};
      font-size: ${theme.typography.bodyLarge.size};
      line-height: ${theme.typography.bodyLarge.lineHeight};
      font-weight: ${theme.typography.bodyLarge.weight};
      color: ${theme.colors.neutrals.dark};
    `}
  }
`;
