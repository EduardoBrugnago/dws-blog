import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PostCard } from "../PostCard/PostCard";
import { fetchPosts } from "../../store/postsSlice";
import type { RootState, AppDispatch } from "../../store/store";
import {
  LatestArticlesContainer,
  LatestArticlesTitle,
  LatestArticlesGrid,
} from "./styles";

interface LatestArticlesProps {
  excludePostId?: string;
}

export function LatestArticles({ excludePostId }: LatestArticlesProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { items: posts, status } = useSelector((s: RootState) => s.posts);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const latestPosts = useMemo(() => {
    return [...posts]
      .filter((p) => p.id !== excludePostId)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 3);
  }, [posts, excludePostId]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (latestPosts.length === 0) {
    return null;
  }

  return (
    <LatestArticlesContainer>
      <LatestArticlesTitle>Latest articles</LatestArticlesTitle>
      <LatestArticlesGrid>
        {latestPosts.map((post) => (
          <PostCard key={post.id} postData={post} />
        ))}
      </LatestArticlesGrid>
    </LatestArticlesContainer>
  );
}
