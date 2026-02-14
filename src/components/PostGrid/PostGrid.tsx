import type { Post } from "../../api/posts/types";
import { PostCard } from "../PostCard/PostCard";
import { PostCardSkeleton } from "../PostCard/PostCardSkeleton";
import { Grid, NoContent } from "./styles";

interface PostGridProps {
  posts: Post[];
  isLoading: boolean;
}

export function PostGrid({ posts, isLoading }: PostGridProps) {
  if (isLoading) {
    return (
      <Grid>
        {Array.from({ length: 6 }).map((_, i) => (
          <PostCardSkeleton key={i} />
        ))}
      </Grid>
    );
  }

  if (posts.length === 0) {
    return (
      <NoContent>
        <p>No posts found.</p>
      </NoContent>
    );
  }

  return (
    <Grid>
      {posts.map((post) => (
        <PostCard key={post.id} postData={post} />
      ))}
    </Grid>
  );
}
