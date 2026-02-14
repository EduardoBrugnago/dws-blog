import { useState, useCallback, useEffect } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchAutocomplete } from "../SearchAutocomplete/SearchAutocomplete";
import { MobileSearchModal } from "../MobileSearchModal/MobileSearchModal";
import { useClickOutside } from "../../hooks/useClickOutside";
import { HeaderContainer, Logo, SearchWrapper } from "./styles";

export default function Header() {
  const [query, setQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  const closeDropdown = useCallback(() => {
    if (isDropdownOpen) {
      setIsClosing(true);
      setIsDropdownOpen(false);
    }
  }, [isDropdownOpen]);

  const wrapperRef = useClickOutside<HTMLDivElement>(closeDropdown);

  useEffect(() => {
    if (!isDropdownOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeDropdown();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isDropdownOpen, closeDropdown]);

  function handleQueryChange(value: string) {
    setQuery(value);
    if (value.trim().length > 0) {
      setIsDropdownOpen(true);
      setIsClosing(false);
    } else {
      setIsDropdownOpen(false);
      setIsClosing(false);
    }
  }

  function handleSuggestionSelected() {
    setQuery("");
    setIsDropdownOpen(false);
    setIsClosing(false);
  }

  function handleExited() {
    setIsClosing(false);
  }

  const showDropdown = isDropdownOpen || isClosing;

  return (
    <HeaderContainer>
      <Logo>
        dentsu <span>world services</span>
      </Logo>
      <SearchWrapper ref={wrapperRef}>
        <SearchBar
          type="text"
          placeholder="Pesquisar..."
          value={query}
          onValueChange={handleQueryChange}
          onMobileSearchClick={() => setIsMobileModalOpen(true)}
        />
        {showDropdown && (
          <SearchAutocomplete
            query={query}
            onSelect={handleSuggestionSelected}
            isClosing={isClosing}
            onExited={handleExited}
          />
        )}
      </SearchWrapper>
      <MobileSearchModal
        isOpen={isMobileModalOpen}
        onClose={() => setIsMobileModalOpen(false)}
      />
    </HeaderContainer>
  );
}
