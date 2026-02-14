import { useState, useCallback, useEffect } from "react";
import { CategoryFilter } from "../CategoryFilter/CategoryFilter";
import DropdownSelect from "../DropdownSelect/DropdownSelect";
import { PrimaryButton } from "../Button/styles";
import {
  FiltersContainer,
  FiltersMobileContainer,
  FiltersHeader,
  FiltersIcon,
  FiltersTitle,
  FiltersSection,
  FiltersMobileSection,
} from "./styles";
import { SortButton } from "../../pages/HomePage/styles";

interface FilterItem {
  id: string;
  name: string;
}

interface AppliedFilters {
  categories: string[];
  authors: string[];
}

interface FilterSidebarProps {
  categories: FilterItem[];
  authors: FilterItem[];
  isLoading: boolean;
  onApply: (filters: AppliedFilters) => void;
  appliedFilters: AppliedFilters;
  sortNewest: boolean;
  setSortNewest: React.Dispatch<React.SetStateAction<boolean>>;
}

export function FilterSidebar({
  categories,
  authors,
  isLoading,
  onApply,
  appliedFilters,
  sortNewest,
  setSortNewest
}: FilterSidebarProps) {
  const [pendingCategories, setPendingCategories] = useState<string[]>([]);
  const [pendingAuthors, setPendingAuthors] = useState<string[]>([]);

  useEffect(() => {
    setPendingCategories(appliedFilters.categories);
    setPendingAuthors(appliedFilters.authors);
  }, [appliedFilters]);

  const handleCategoryChange = useCallback((selected: string[]) => {
    setPendingCategories(selected);
  }, []);

  const handleAuthorChange = useCallback((selected: string[]) => {
    setPendingAuthors(selected);
  }, []);

  const handleApply = () => {
    onApply({
      categories: pendingCategories,
      authors: pendingAuthors,
    });
  };

  return (
    <>
      <FiltersContainer>
        <FiltersHeader>
          <FiltersIcon className="material-symbols-outlined">tune</FiltersIcon>
          <FiltersTitle>Filters</FiltersTitle>
        </FiltersHeader>
        <FiltersSection>
          <CategoryFilter
            title="Category"
            items={categories}
            isLoading={isLoading}
            onSelectionChange={handleCategoryChange}
            externalSelected={pendingCategories}
          />
          <CategoryFilter
            title="Author"
            items={authors}
            isLoading={isLoading}
            onSelectionChange={handleAuthorChange}
            externalSelected={pendingAuthors}
          />
        </FiltersSection>
        <PrimaryButton onClick={handleApply}>Apply Filters</PrimaryButton>
      </FiltersContainer>

      <FiltersMobileContainer>
        <FiltersMobileSection>
          {categories.length > 0 && (
            <DropdownSelect
              value={pendingCategories}
              onChange={(val) => {
                setPendingCategories(val);
                onApply({ categories: val, authors: pendingAuthors });
              }}
              placeholder="Category"
              options={categories.map((c) => ({ value: c.name, label: c.name }))}
            />
          )}
          {authors.length > 0 && (
            <DropdownSelect
              value={pendingAuthors}
              onChange={(val) => {
                setPendingAuthors(val);
                onApply({ categories: pendingCategories, authors: val });
              }}
              placeholder="Author"
              options={authors.map((a) => ({ value: a.name, label: a.name }))}
            />
          )}
        </FiltersMobileSection>

        <SortButton onClick={() => setSortNewest((prev) => !prev)}>
          <span className="material-symbols-outlined">swap_vert</span>
          {sortNewest ? "Newest first" : "Oldest first"}
        </SortButton>
      </FiltersMobileContainer>
    </>
  );
}
