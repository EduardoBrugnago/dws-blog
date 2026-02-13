import { HeaderContainer, Logo, SearchInput } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>dentsu <p >world service</p></Logo>
      <SearchInput type="text" placeholder="Pesquisar..." />
    </HeaderContainer>
  );
}
