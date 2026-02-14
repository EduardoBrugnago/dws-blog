import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 16px;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 32px 32px;
  }

  @media (min-width: 1024px) {
    padding: 32px 56px;
  `}
`;
export const PageContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: 32px;
    justify-content: center;
  `}
`;
export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PageTitle = styled.h2`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.h2.size};
    font-weight: ${theme.typography.h2.weight};
    line-height: ${theme.typography.h2.lineHeight};
    color: ${theme.colors.primary.dark};
    margin: 0;

    @media (max-width: 767px) {
      display: none;
    }
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
  @media (min-width: 425px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
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

export const FiltersContainer = styled.aside`
  ${({ theme }) => css`
    @media (max-width: 767px) {
      display: none;
    }
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
    width: 100%;
    max-width: 300px;
    height: fit-content;
    border: 1px solid ${theme.colors.neutrals.lightest};
    padding: 20px;
    border-radius: 16px;
    font-family: ${theme.fontFamily};
    display: flex;
    flex-direction: column;
  `}
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
  `}
`;

export const FilterCategory = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-weight: ${theme.typography.bodyLarge.weight.semibold};
    font-size: ${theme.typography.bodyLarge.size};
    color: ${theme.colors.primary.dark};
    padding: 0px;
    margin-top: 24px;
    margin-bottom: 8px;
  `}
`;

export const ApplyButton = styled.button`
  ${({ theme }) => css`
    margin-top: 10px;
    padding: 12px;
    border: none;
    border-radius: 25px;
    background-color: ${theme.colors.secondary.medium};
    color: ${theme.colors.neutrals.lightest};
    font-family: ${theme.fontFamily};
    font-weight: ${theme.typography.bodyLarge.weight.semibold};
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.9;
    }
  `}
`;
