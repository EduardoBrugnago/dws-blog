import styled, { css, keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

export const SkeletonBlock = styled.div<{
  $width?: string;
  $height?: string;
  $borderRadius?: string;
}>`
  ${({
    theme,
    $width = "100%",
    $height = "16px",
    $borderRadius = "4px",
  }) => css`
    width: ${$width};
    height: ${$height};
    border-radius: ${$borderRadius};
    background-color: ${theme.colors.neutrals.extraLight};
    animation: ${pulse} 1.5s ease-in-out infinite;
  `}
`;
