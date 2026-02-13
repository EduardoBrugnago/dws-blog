import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background-color: #1a1a2e;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }
`;

export const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
`;

export const SearchInput = styled.input`
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 0.9rem;
  font-family: "Open Sans", sans-serif;
  outline: none;
  width: 250px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
