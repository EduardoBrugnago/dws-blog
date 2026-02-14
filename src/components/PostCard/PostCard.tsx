import { useNavigate } from "react-router-dom";
import type { Post } from "../../api/posts/types";
import {
  Card,
  Thumbnail,
  Content,
  Info,
  Dot,
  Title,
  Description,
  Categories,
  CategoryTag,
  Body,
} from "./styles";

interface PostCardProps {
  postData: Post;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

export function PostCard({ postData }: PostCardProps) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/post/${postData.id}`)}>
      <Thumbnail src={postData.thumbnail_url} alt={postData.title} />
      <Body>
        <Info>
          {formatDate(postData.createdAt)}
          <Dot />
          {postData.author.name}
        </Info>

        <Content>
          <Title>{postData.title}</Title>
          <Description>{postData.content}</Description>
        </Content>

        <Categories>
          {postData.categories.map((category) => (
            <CategoryTag key={category.id}>{category.name}</CategoryTag>
          ))}
        </Categories>
      </Body>
    </Card>
  );
}
