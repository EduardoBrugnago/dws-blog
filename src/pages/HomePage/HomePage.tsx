import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DropdownSelect from "../../components/DropdownSelect/DropdownSelect";
import { Primary, Secondary, Filter } from "../../components/Button/Button";
import { PostCard } from "../../components/PostCard/PostCard";
import { fetchPosts } from "../../store/postsSlice";
import type { RootState, AppDispatch } from "../../store/store";
import { PageContainer, Grid, FiltersContainer, FiltersHeader, FiltersIcon, FiltersSection, FilterCategory, FiltersTitle, PageTitle, PageHeader, SortContainer, SortTitle, PageContent, NoContent } from "./styles";
import { PrimaryButton } from "../../components/Button/styles";

const categoryOptions = [
  { value: "tech", label: "Tecnologia" },
  { value: "design", label: "Design" },
  { value: "business", label: "Negócios" },
  { value: "marketing", label: "Marketing" },
  { value: "science", label: "Ciência" },
];

export default function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const { items: posts, status } = useSelector((state: RootState) => state.posts);

  const [category, setCategory] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    console.log(status)
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);


  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>DWS Blog</PageTitle>
        <SortContainer>
          <SortTitle>Sort by:</SortTitle>
        </SortContainer>
      </PageHeader>

      <PageContent>
        <FiltersContainer>
          <FiltersHeader>
            <FiltersIcon className="material-symbols-outlined">tune</FiltersIcon>
            <FiltersTitle>Filters</FiltersTitle>
          </FiltersHeader>
          <FiltersSection>
            <FilterCategory>Category</FilterCategory>
            {categoryOptions.map((option) => (
              <Filter key={option.value} isSelected={category.includes(option.value)}>
                {option.label}
              </Filter>
            ))}
            <FilterCategory>Author</FilterCategory>
            {categoryOptions.map((option) => (
              <Filter key={option.value} isSelected={category.includes(option.value)}>
                {option.label}
              </Filter>
            ))}
          </FiltersSection>
          <PrimaryButton>Apply Filters</PrimaryButton>
        </FiltersContainer>

        {
          posts?.length === 0 ? (
            <NoContent>
              <p>No posts found.</p>
            </NoContent>
          ) : (
            <Grid>
              {posts.map((post) => (
                <PostCard key={post.id} postData={post} />
              ))}
            </Grid>
          )}
      </PageContent>

    </PageContainer>
  );
}
