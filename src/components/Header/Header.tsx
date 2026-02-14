import { SearchBar } from "../SearchBar/SearchBar";
import { HeaderContainer, Logo, } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>dentsu <p >world service</p></Logo>
      <SearchBar type="text" placeholder="Pesquisar..." />
    </HeaderContainer>
  );
}
