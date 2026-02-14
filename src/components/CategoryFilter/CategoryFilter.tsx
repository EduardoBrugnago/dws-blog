import { useState, useEffect } from "react";
import { Filter } from "../Button/Button";
import { SkeletonBlock } from "../PostCard/skeleton-styles";
import { FilterCategoryTitle } from "./styles";

interface CategoryFilterProps {
  title: string;
  items: { id: string; name: string }[];
  isLoading?: boolean;
  onSelectionChange: (selected: string[]) => void;
  externalSelected?: string[];
}

export function CategoryFilter({
  title,
  items,
  isLoading,
  onSelectionChange,
  externalSelected,
}: CategoryFilterProps) {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    if (externalSelected) {
      setSelected(externalSelected);
    }
  }, [externalSelected]);

  const toggle = (name: string) => {
    const next = selected.includes(name)
      ? selected.filter((s) => s !== name)
      : [...selected, name];
    setSelected(next);
    onSelectionChange(next);
  };

  return (
    <>
      <FilterCategoryTitle>{title}</FilterCategoryTitle>
      {isLoading
        ? Array.from({ length: 5 }).map((_, i) => (
            <SkeletonBlock
              key={i}
              $width="100%"
              $height="40px"
              $borderRadius="0"
              style={{ marginBottom: 4 }}
            />
          ))
        : items.map((item) => (
            <Filter
              key={item.id}
              isSelected={selected.includes(item.name)}
              onClick={() => toggle(item.name)}
            >
              {item.name}
            </Filter>
          ))}
    </>
  );
}
