import type { Category } from "../../api/categories/types";
import type { Author } from "../../api/authors/types";
import { SectionHeader, SuggestionItem } from "./styles";

interface SuggestionListProps {
  categories: Category[];
  authors: Author[];
  onSelectCategory: (name: string) => void;
  onSelectAuthor: (name: string) => void;
}

export function SuggestionList({
  categories,
  authors,
  onSelectCategory,
  onSelectAuthor,
}: SuggestionListProps) {
  if (categories.length === 0 && authors.length === 0) return null;

  return (
    <>
      {categories.length > 0 && (
        categories.map((c) => (
          <SuggestionItem
            key={c.id}
            type="button"
            onClick={() => onSelectCategory(c.name)}
          >
            {c.name} <span >(Category)</span>
          </SuggestionItem>
        ))

      )}
      {authors.length > 0 && (

        authors.map((a) => (
          <SuggestionItem
            key={a.id}
            type="button"
            onClick={() => onSelectAuthor(a.name)}
          >
            {a.name} <span >(Author)</span>
          </SuggestionItem>
        ))

      )}
    </>
  );
}
