import styled, { css } from "styled-components";

export const FiltersContainer = styled.aside`
  ${({ theme }) => css`
    @media (max-width: 767px) {
      display: none;
    }
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
    width: 100%;
    max-width: clamp(100px, 22vw, 314px);
    height: fit-content;
    border: 1px solid ${theme.colors.neutrals.lightest};
    padding: 20px;
    border-radius: 16px;
    font-family: ${theme.fontFamily};
    display: flex;
    flex-direction: column;
  `}
`;

export const FiltersMobileContainer = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }
`;
export const FiltersMobileSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const FiltersHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const FiltersTitle = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.typography.h3.weight};
    font-size: ${theme.typography.h3.size};
    color: ${theme.colors.primary.dark};
    margin: 0;
  `}
`;

export const FiltersIcon = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.typography.h3.size};
  `}
`;

export const FiltersSection = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
    margin-bottom: 26px;
    gap: 4px;
  `}
`;
