import { useSearchSuggestions } from "../../hooks/useSearchSuggestions";
import { SuggestionList } from "../SuggestionList/SuggestionList";
import { DropdownContainer } from "./styles";

interface SearchAutocompleteProps {
  query: string;
  onSelect: () => void;
  isClosing: boolean;
  onExited: () => void;
}

export function SearchAutocomplete({
  query,
  onSelect,
  isClosing,
  onExited,
}: SearchAutocompleteProps) {
  const { filteredCategories, filteredAuthors, selectSuggestion, hasResults } =
    useSearchSuggestions(query);

  if (!query.trim() || !hasResults) return null;

  function handleSelect(type: "category" | "author", name: string) {
    selectSuggestion(type, name);
    onSelect();
  }

  return (
    <DropdownContainer
      $isClosing={isClosing}
      onAnimationEnd={() => {
        if (isClosing) onExited();
      }}
    >
      <SuggestionList
        categories={filteredCategories}
        authors={filteredAuthors}
        onSelectCategory={(name) => handleSelect("category", name)}
        onSelectAuthor={(name) => handleSelect("author", name)}
      />
    </DropdownContainer>
  );
}
