import { useEffect, useMemo, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Secondary } from "../../components/Button/Button";
import { LatestArticles } from "../../components/LatestArticles/LatestArticles";
import { fetchPostById } from "../../store/postsSlice";
import type { RootState, AppDispatch } from "../../store/store";
import {
  PageWrapper,
  BackButtonArea,
  PostContainer,
  PostTitle,
  AuthorSection,
  AuthorImage,
  AuthorInfo,
  PostImage,
  PostContent,
  Divider,
} from "./styles";

export default function PostPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();


  const { items: posts, currentPost, currentPostStatus } = useSelector(
    (s: RootState) => s.posts
  );

  const post = useMemo(() => {
    return posts.find((p) => p.id === id) ?? currentPost;
  }, [posts, currentPost, id]);


  useEffect(() => {

    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, behavior: "smooth" });
    return () => {
      window.history.scrollRestoration = "auto";
    };

  }, [id]);

  useEffect(() => {
    if (!post && id) {
      dispatch(fetchPostById(id));
    }
  }, [post, id, dispatch]);

  if (currentPostStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  }

  return (
    <PageWrapper>
      <BackButtonArea>
        <Secondary
          iconLeft={<span className="material-symbols-outlined">arrow_back</span>}
          onClick={() => navigate(-1)}
        >
          Back
        </Secondary>
      </BackButtonArea>

      <PostContainer>
        <PostTitle>{post.title}</PostTitle>
        <AuthorSection>
          <AuthorImage src={post.author.profilePicture} alt={post.author.name} />
          <AuthorInfo>
            <p>written by {post.author.name}</p>
            <p>{formatDate(post.createdAt)}</p>
          </AuthorInfo>
        </AuthorSection>
        <PostImage src={post.thumbnail_url} alt={post.title} />
        <PostContent>{post.content}</PostContent>

        <Divider />
        <LatestArticles excludePostId={id} />
      </PostContainer>
    </PageWrapper>
  );
}
