import { useState, type InputHTMLAttributes } from "react";
import { Container, Input, SearchButton } from "./styles";

interface SearchBarProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onSubmit" | "value" | "onChange"
  > {
  value: string;
  onValueChange: (value: string) => void;
  onSubmit?: (value: string) => void;
  onMobileSearchClick?: () => void;
}

export function SearchBar({
  value,
  onValueChange,
  onSubmit,
  onMobileSearchClick,
  placeholder = "Search",
  ...props
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleSubmit() {
    onSubmit?.(value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  function handleButtonClick() {
    if (
      onMobileSearchClick &&
      window.matchMedia("(max-width: 767px)").matches
    ) {
      onMobileSearchClick();
    } else {
      handleSubmit();
    }
  }

  return (
    <Container $isFocused={isFocused}>
      <Input
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        {...props}
      />
      <SearchButton type="button" onClick={handleButtonClick} aria-label="Search">
        <span className="material-symbols-outlined">search</span>
      </SearchButton>
    </Container>
  );
}
