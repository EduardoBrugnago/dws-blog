import api from "../api";
import { Category } from "./types";

export async function getCategories(): Promise<Category[]> {
  const response = await api.get<Category[]>("/categories/");
  return response.data;
}

export async function getCategoryById(id: number | string): Promise<Category> {
  const response = await api.get<Category>(`/categories/${id}`);
  return response.data;
}
