import api from "../api";
import { Author } from "./types";

export async function getAuthors(): Promise<Author[]> {
  const response = await api.get<Author[]>("/authors/");
  return response.data;
}

export async function getAuthorById(id: number | string): Promise<Author> {
  const response = await api.get<Author>(`/authors/${id}`);
  return response.data;
}
