import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (postsStatus === "idle") dispatch(fetchPosts());
    if (catStatus === "idle") dispatch(fetchCategories());
    if (authStatus === "idle") dispatch(fetchAuthors());
  }, [postsStatus, catStatus, authStatus, dispatch]);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      appliedFilters.categories.length === 0 ||
      post.categories.some((c) =>
        appliedFilters.categories.some(
          (fc) => fc.toLowerCase() === c.name.toLowerCase()
        )
      );

    const matchesAuthor =
      appliedFilters.authors.length === 0 ||
      appliedFilters.authors.some(
        (fa) => fa.toLowerCase() === post.author.name.toLowerCase()
      );

    return matchesCategory && matchesAuthor;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return sortNewest ? dateB - dateA : dateA - dateB;
  });

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
          sortNewest={sortNewest}
          setSortNewest={setSortNewest}
        />
        <PostGrid posts={sortedPosts} isLoading={isLoading} />
      </PageContent>
    </PageContainer>
  );
}
