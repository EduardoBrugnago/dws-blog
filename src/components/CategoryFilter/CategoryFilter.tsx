import { useState } from "react";
import { Filter } from "../Button/Button";
import { SkeletonBlock } from "../PostCard/skeleton-styles";
import { FilterCategoryTitle } from "./styles";

interface CategoryFilterProps {
  title: string;
  items: { id: string; name: string }[];
  isLoading?: boolean;
  onSelectionChange: (selected: string[]) => void;
}

export function CategoryFilter({
  title,
  items,
  isLoading,
  onSelectionChange,
}: CategoryFilterProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (name: string) => {
    setSelected((prev) => {
      const next = prev.includes(name)
        ? prev.filter((s) => s !== name)
        : [...prev, name];
      onSelectionChange(next);
      return next;
    });
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
