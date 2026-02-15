import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 0;
`;

export const SpinnerCircle = styled.div`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    border: 4px solid ${theme.colors.neutrals.extraLight};
    border-top-color: ${theme.colors.secondary.medium};
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
  `}
`;
