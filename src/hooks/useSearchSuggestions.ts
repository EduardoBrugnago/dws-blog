import { useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState, AppDispatch } from "../store/store";
import { fetchCategories } from "../store/categoriesSlice";
import { fetchAuthors } from "../store/authorsSlice";

export function useSearchSuggestions(query: string) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { items: categories, status: catStatus } = useSelector(
    (s: RootState) => s.categories
  );
  const { items: authors, status: authStatus } = useSelector(
    (s: RootState) => s.authors
  );

  useEffect(() => {
    if (catStatus === "idle") dispatch(fetchCategories());
    if (authStatus === "idle") dispatch(fetchAuthors());
  }, [catStatus, authStatus, dispatch]);

  const trimmed = query.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    if (!trimmed) return [];
    const seen = new Set<string>();
    return categories.filter((c) => {
      const lower = c.name.toLowerCase();
      if (seen.has(lower)) return false;
      seen.add(lower);
      return lower.includes(trimmed);
    });
  }, [categories, trimmed]);

  const filteredAuthors = useMemo(() => {
    if (!trimmed) return [];
    return authors.filter((a) => a.name.toLowerCase().includes(trimmed));
  }, [authors, trimmed]);

  const selectSuggestion = useCallback(
    (type: "category" | "author", name: string) => {
      const param =
        type === "category"
          ? `category=${encodeURIComponent(name)}`
          : `author=${encodeURIComponent(name)}`;
      navigate(`/?${param}`);
    },
    [navigate]
  );

  return {
    filteredCategories,
    filteredAuthors,
    selectSuggestion,
    hasResults: filteredCategories.length > 0 || filteredAuthors.length > 0,
  };
}
