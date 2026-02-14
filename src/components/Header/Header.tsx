import { SearchBar } from "../SearchBar/SearchBar";
import { HeaderContainer, Logo, } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>dentsu < span>world services</span></Logo>
      <SearchBar type="text" placeholder="Pesquisar..." />
    </HeaderContainer>
  );
}
