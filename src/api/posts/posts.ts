import api from "../api";
import { Post } from "./types";

export async function getPosts(): Promise<Post[]> {
  const response = await api.get<Post[]>("/posts/");
  return response.data;
}

export async function getPostById(id: number | string): Promise<Post> {
  const response = await api.get<Post>(`/posts/${id}`);
  return response.data;
}
