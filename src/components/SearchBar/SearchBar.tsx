import { useState, type InputHTMLAttributes } from "react";
import { Container, Input, SearchButton } from "./styles";

interface SearchBarProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onSubmit"> {
  onSubmit?: (value: string) => void;
}

export function SearchBar({
  onSubmit,
  placeholder = "Search",
  ...props
}: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  function handleSubmit() {
    onSubmit?.(value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <Container $isFocused={isFocused}>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        {...props}
      />
      <SearchButton type="button" onClick={handleSubmit} aria-label="Search">
        <span className="material-symbols-outlined">search</span>
      </SearchButton>
    </Container>
  );
}
