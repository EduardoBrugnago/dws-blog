import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    body {
      min-height: 100vh;
      background-color: transparent;
      background-image:
        radial-gradient(circle at 100% 0%, ${theme.colors.secondary.medium}0D 0px, transparent 440px),
        radial-gradient(circle at 0% 28%, ${theme.colors.accent1.medium}0D 0px, transparent 440px),
        radial-gradient(circle at 100% 52%, ${theme.colors.primary.medium}0D 0px, transparent 440px),
        radial-gradient(circle at 0% 78%, ${theme.colors.secondary.medium}0D 0px, transparent 440px);
      background-size: 100vw 250vh;
      background-repeat: no-repeat;
    }
  `}
`;
