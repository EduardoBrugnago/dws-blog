import styled, { css } from "styled-components";

export const FilterCategoryTitle = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.typography.bodyLarge.weight.semibold};
    font-size: ${theme.typography.bodyLarge.size};
    color: ${theme.colors.primary.dark};
    padding: 0px;
    margin-top: 16px;
    margin-bottom: 8px;
  `}
`;
