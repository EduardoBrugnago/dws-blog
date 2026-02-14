import { useCallback, useEffect, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import {
  DropdownWrapper,
  DropdownButton,
  Menu,
  FilterChip,
} from "./styles";

interface DropdownSelectProps {
  options: { value: string; label: string }[];
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
}

export default function DropdownSelect({
  options,
  value,
  onChange,
  placeholder = "Filtrar",
}: DropdownSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);
  const wrapperRef = useClickOutside<HTMLDivElement>(close);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, close]);

  function toggleOption(optionValue: string) {
    console.log("Toggling option:", optionValue);
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  }

  const label =
    value.length === 0
      ? placeholder
      : options
        .filter((o) => value.includes(o.value))
        .map((o) => o.label)
        .join(", ");

  return (
    <DropdownWrapper ref={wrapperRef}>
      <DropdownButton
        $isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        {value.length > 0 ? (
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 16 }}
            onClick={(e) => {
              e.stopPropagation();
              onChange([]);
              close();
            }}
          >
            close
          </span>
        ) : (
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>
            {isOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
          </span>
        )}
      </DropdownButton>

      {isOpen && (
        <Menu role="listbox" aria-multiselectable="true">
          {options.map((option) => {
            const selected = value.includes(option.value);
            return (
              <FilterChip
                key={option.value}
                $isSelected={selected}
                role="option"
                aria-selected={selected}
                onClick={() => toggleOption(option.value)}
              >
                {option.label}
              </FilterChip>
            );
          })}
        </Menu>
      )}
    </DropdownWrapper>
  );
}
