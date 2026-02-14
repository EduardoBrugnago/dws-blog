import styled, { css } from "styled-components";

export const PageWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 16px;

    @media (min-width: 768px) {
      flex-direction: row;
      padding: 32px 56px;
      gap: 32px;
    }
  `}
`;

export const BackButtonArea = styled.div`
  flex-shrink: 0;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const PostContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;

    @media (min-width: 768px) {
      flex: 1;
      max-width: clamp(320px, 80vw, 900px);
      margin: 0 auto;
    }
  `}
`;

export const PostTitle = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.h1.size};
    font-weight: ${theme.typography.h1.weight};
    line-height: ${theme.typography.h1.lineHeight};
    color: ${theme.colors.primary.dark};
    margin: 0 0 16px;
  `}
`;

export const AuthorSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

export const AuthorImage = styled.img`
  ${({ theme }) => css`
    width: 54px;
    height: 54px;
    border-radius: 50%;
    object-fit: cover;
  `}
`;

export const AuthorInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2px;

    p {
      margin: 0;
      font-family: ${theme.fontFamily};
      font-size: ${theme.typography.bodySmall.size};
      line-height: ${theme.typography.bodySmall.lineHeight};
      font-weight: ${theme.typography.bodySmall.weight};
      color: ${theme.colors.neutrals.dark};
    }
  `}
`;

export const PostImage = styled.img`
  width: 100%;
  max-height: 340px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 24px;
`;

export const PostContent = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily};
    font-size: ${theme.typography.bodyLarge.size};
    line-height: ${theme.typography.bodyLarge.lineHeight};
    font-weight: ${theme.typography.bodyLarge.weight.regular};
    color: ${theme.colors.neutrals.extraDark};
    margin: 0 0 32px;
  `}
`;

export const Divider = styled.hr`
  ${({ theme }) => css`
    border: none;
    border-top: 1px solid ${theme.colors.neutrals.extraLight};
    margin: 0 0 32px;
  `}
`;
