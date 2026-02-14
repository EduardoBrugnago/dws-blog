import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-8px);
  }
`;

export const DropdownContainer = styled.div<{ $isClosing: boolean }>`
  ${({ theme, $isClosing }) => css`
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    max-height: 320px;
    overflow-y: auto;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    z-index: 10;
    padding: 4px 0;
    font-family: ${theme.fontFamily};
    animation: ${$isClosing ? fadeOut : fadeIn} 0.2s ease-out forwards;
    pointer-events: ${$isClosing ? "none" : "auto"};

    @media (max-width: 767px) {
      display: none;
    }
  `}
`;
