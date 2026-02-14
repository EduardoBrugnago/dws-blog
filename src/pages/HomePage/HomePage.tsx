import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FilterSidebar } from "../../components/FilterSidebar/FilterSidebar";
import { PostGrid } from "../../components/PostGrid/PostGrid";
import { fetchPosts } from "../../store/postsSlice";
import { fetchCategories } from "../../store/categoriesSlice";
import { fetchAuthors } from "../../store/authorsSlice";
import type { RootState, AppDispatch } from "../../store/store";
import {
  PageContainer,
  PageHeader,
  PageTitle,
  SortContainer,
  SortTitle,
  SortButton,
  PageContent,
} from "./styles";

interface AppliedFilters {
  categories: string[];
  authors: string[];
}

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();

  const { items: posts, status: postsStatus } = useSelector((s: RootState) => s.posts);
  const { items: categories, status: catStatus } = useSelector((s: RootState) => s.categories);
  const { items: authors, status: authStatus } = useSelector((s: RootState) => s.authors);

  const isLoading = postsStatus === "loading" || catStatus === "loading" || authStatus === "loading";
  const filtersLoading = catStatus === "loading" || authStatus === "loading";

  const [appliedFilters, setAppliedFilters] = useState<AppliedFilters>({ categories: [], authors: [] });
  const [sortNewest, setSortNewest] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (postsStatus === "idle") dispatch(fetchPosts());
  }, [postsStatus, catStatus, authStatus, dispatch]);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const authorParam = searchParams.get("author");

    if (categoryParam || authorParam) {
      setAppliedFilters({
        categories: categoryParam ? [categoryParam] : [],
        authors: authorParam ? [authorParam] : [],
      });
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const filteredPosts = useMemo(() => {
    const cats = appliedFilters.categories.map((c) => c.toLowerCase());
    const auths = appliedFilters.authors.map((a) => a.toLowerCase());

    return posts.filter((post) => {
      const matchesCategory =
        cats.length === 0 ||
        post.categories.some((c) => cats.includes(c.name.toLowerCase()));

      const matchesAuthor =
        auths.length === 0 ||
        auths.includes(post.author.name.toLowerCase());

      return matchesCategory && matchesAuthor;
    });
  }, [posts, appliedFilters]);

  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortNewest ? dateB - dateA : dateA - dateB;
    });
  }, [filteredPosts, sortNewest]);

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>DWS Blog</PageTitle>
        <SortContainer>
          <SortTitle>Sort by:</SortTitle>
          <SortButton onClick={() => setSortNewest((prev) => !prev)}>
            <span className="material-symbols-outlined">swap_vert</span>
            {sortNewest ? "Newest first" : "Oldest first"}
          </SortButton>
        </SortContainer>
      </PageHeader>

      <PageContent>
        <FilterSidebar
          categories={categories}
          authors={authors}
          isLoading={filtersLoading}
          onApply={setAppliedFilters}
          appliedFilters={appliedFilters}
          sortNewest={sortNewest}
          setSortNewest={setSortNewest}
        />
        <PostGrid posts={sortedPosts} isLoading={isLoading} />
      </PageContent>
    </PageContainer>
  );
}
