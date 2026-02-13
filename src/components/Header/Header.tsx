import { HeaderContainer, Logo, SearchInput } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>header</Logo>
      <SearchInput type="text" placeholder="Pesquisar..." />
    </HeaderContainer>
  );
}
