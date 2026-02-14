import styled, { css } from "styled-components";

export const Card = styled.div`
  ${({ theme }) => css`
    border-radius: 16px;
    width: 100%;
    height: auto;
    max-width: 314px;
    max-height: 425px;
    display: flex;
    flex-direction: column;
    border: 1px solid ${theme.colors.neutrals.extraLight};
    align-items: flex-start;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    transition: box-shadow 0.2s;

    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }
  `}
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 196px;
  object-fit: cover;
  display: block;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px;
  height: 114px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const Info = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.caption.size};
    font-weight: ${theme.typography.caption.weight};
    color: ${theme.colors.neutrals.medium};
    paddingblock: 4px;
  `}
`;

export const Dot = styled.div`
  ${({ theme }) => css`
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${theme.colors.secondary.medium};
    flex-shrink: 0;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.h3.size};
    line-height: ${theme.typography.h3.lineHeight};
    font-weight: ${theme.typography.h3.weight};
    color: ${theme.colors.neutrals.darkest};
    margin: 0;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.bodySmall.size};
    line-height: ${theme.typography.bodySmall.lineHeight};
    font-weight: ${theme.typography.bodySmall.weight};
    color: ${theme.colors.neutrals.dark};
    margin: 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12x;
`;

export const CategoryTag = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.caption.size};
    line-height: ${theme.typography.caption.lineHeight};
    font-weight: ${theme.typography.caption.weight};
    color: ${theme.colors.neutrals.darkest};
    background-color: ${theme.colors.neutrals.lightest};
    border-radius: 42px;
    padding: 8px 12px;
  `}
`;
