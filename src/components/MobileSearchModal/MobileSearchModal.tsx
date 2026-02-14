import { useState, useEffect, useRef } from "react";
import { useSearchSuggestions } from "../../hooks/useSearchSuggestions";
import { SuggestionList } from "../SuggestionList/SuggestionList";
import {
  ModalOverlay,
  ModalTopBar,
  IconButton,
  ModalInput,
  SuggestionsList,
} from "./styles";

interface MobileSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSearchModal({ isOpen, onClose }: MobileSearchModalProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { filteredCategories, filteredAuthors, selectSuggestion } =
    useSearchSuggestions(query);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  function handleSelect(type: "category" | "author", name: string) {
    selectSuggestion(type, name);
    onClose();
  }

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalTopBar $isFocused={isFocused}>
        <IconButton onClick={onClose} aria-label="Back">
          <span className="material-symbols-outlined">arrow_back</span>
        </IconButton>
        <ModalInput
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Pesquisar..."
        />
        <IconButton onClick={onClose} aria-label="Close">
          <span className="material-symbols-outlined">close</span>
        </IconButton>
      </ModalTopBar>
      <SuggestionsList>
        <SuggestionList
          categories={filteredCategories}
          authors={filteredAuthors}
          onSelectCategory={(name) => handleSelect("category", name)}
          onSelectAuthor={(name) => handleSelect("author", name)}
        />
      </SuggestionsList>
    </ModalOverlay>
  );
}
